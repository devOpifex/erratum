#' Core Class
#' 
#' Core class to create and handle issues.
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
#' @details Message
#' 
#' Retrieve the message
    message = function(){
      private$msg
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
#' 
#' Returns self from parent function.
    return = function(){
      assign("return.issue", self, envir = parent.frame())
      call <- rlang::expr(return(return.issue)) 
      rlang::eval_bare(call, env = parent.frame())
    }
  ),
  private = list(
    msg = "",
    type = "error"
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
