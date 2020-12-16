#' Core Class
#' 
#' Core class to create and handle issues.
#' 
#' @field rule Rules to perform checks, must be functions that
#' accept a single argument and return a boolean.
#' @field message The message (warning or error).
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
      private$msg <- extract(obj)
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
      call <- rlang::expr(return(return.issue)) 
      rlang::eval_bare(call, env = parent.frame(n))
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
        return(e("No `rule` is set"))

      # run checks
      bools <- sapply(private$.rules, function(fn, object){
        jab(fn(object))
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
    raise = function(){
      if(private$type == "error")
        stop(self$message, call. = FALSE)
      else
        warning(self$message, call. = FALSE)
    }
  ),
  active = list(
    rule = function(fn){
      if(missing(fn))
        return(e("This field is read-only"))

      if(!is.function(fn))
        return(invisible())

      private$.rules <- append(private$.rules, fn)
    },
    message = function(msg){
      if(!missing(msg))
        return(e("This field is read-only"))

      private$msg
    }
  ),
  private = list(
    msg = "",
    type = "error",
    .rules = list()
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
  Error$new(obj, "error")
}

#' @rdname ew
#' @export 
w <- function(obj){
  Warning$new(obj, "warning")
}
