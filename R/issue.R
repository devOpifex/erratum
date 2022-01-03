#' Core Class
#' 
#' Core class to create and handle issues.
#' 
#' @field rule Rules to perform checks, must be functions that
#' accept a single argument and return a boolean.
#' @field message The message (warning or error).
#' @field call Expression or function (as string) that led
#' to the issue.
#' @field raiser Function to run when the `raise` method 
#' is called. By default the error uses `stop()` and warning
#' uses `warning()`. The function must accept a single argument:
#' the error message (character vector).
#' 
#' @importFrom rlang expr eval_bare
#' 
#' @export
Issue <- R6::R6Class(
  "Issue",
  public = list(
#' @details Initialise
#' 
#' @param obj A character string or an object of 
#' class `error`, or `warning`.
#' @param type Type of message.
    initialize = function(obj, type = c("error", "warning")){
      private$msg <- get_msg(obj)
      private$.call <- get_call(obj)
      private$type <- match.arg(type)
    },
#' @details Print
#' 
#' Print message of error or warning.
    print = function(){
      pattern <- tmpl(private$type)
      msg <- sprintf(pattern, private$msg)
      cat(msg, "\n")
    },
#' @details Return
#' Returns self from parent function.
#' 
#' @param n the number of generations to go back, passed to
#' [parent.frame()].
    return = function(n = 1){
      assign("return.issue", self, envir = parent.frame(n))
      call <- expr(return(return.issue)) 
      eval_bare(call, env = parent.frame(n))
    },
#' @details Add a rule
#' @param fn Function defining rule, must accept a single argument
#' and return a boolean.
    addRule = function(fn){
      self$rule <- fn
      invisible(self)
    },
#' @details Add a predicate
#' @param obj Object to check by rules
    check = function(obj){

      if(length(private$.rules) == 0)
        e("No `rule` is set")$return()

      # run checks
      bools <- sapply(private$.rules, function(fn, object){
        bash(fn(object))
      }, object = obj)

      # skip if any failed
      do.call(skip, as.list(bools))

      if(!is.logical(bools))
        return(e("Rules must return a logical/boolean value"))

      # no error to raise
      if(all(bools))
        return(invisible())

      self$raise()
    },
#' @details Raise error or warning
#' @param fn A function to use to raise the issue.
    raise = function(fn = NULL){
      if(!is.null(fn))
        fn(self$message)
      else
        private$.raiser(self$message)
    }
  ),
  active = list(
    rule = function(fn){
      if(missing(fn))
        e("Missing rule")$raise()

      if(!is.function(fn))
        e("Must pass a function")$raise()

      private$.rules <- append(private$.rules, fn)
    },
    message = function(msg){
      if(!missing(msg))
        e("This field is read-only")$raise()

      private$msg
    },
    call = function(call){
      if(!missing(call))
        e("This field is read-only")$raise()

      private$.call
    },
    raiser = function(fn){
      if(missing(fn))
        e("Missing function")$raise()

      if(!is.function(fn))
        e("Must pass a function")$raise()

      private$.raiser <- fn
    }
  ),
  private = list(
    msg = "",
    type = "error",
    .call = NA,
    .rules = list(),
    .raiser = NULL
  )
)

#' Handlers
#' 
#' Handle errors and warnings.
#' 
#' @param obj A character string or an object of 
#' class `error`, or `warning`.
#' 
#' @examples 
#' err <- e("Something went wrong")
#' 
#' foo <- function(x){
#'  if(is.character(x))
#'    return(err)
#' 
#'  log(x)
#' }
#' 
#' foo("a")
#' 
#' @name ew
#' @export 
e <- function(obj){
  if(is.character(obj))
    obj <- simpleError(
      obj, as.character(sys.call(sys.parent(1)))[1L]
    )
  Error$new(obj)
}

#' @rdname ew
#' @export 
w <- function(obj){
  if(is.character(obj))
    obj <- simpleWarning(
      obj, as.character(sys.call(sys.parent(1)))[1L]
    )
  Warning$new(obj)
}
