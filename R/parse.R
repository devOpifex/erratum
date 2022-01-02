#' Extract Message
#' 
#' Extract message from error and warnings.
#' 
#' @param obj Message string, object of class `error`,
#' or `warning`.
#'
#' @noRd 
#' @keywords internal
get_msg <- function(obj) UseMethod("get_msg")

get_msg.character <- function(obj){
  return(obj)
}

get_msg.condition <- function(obj){
  return(obj$message)
}


#' Extract Call
#' 
#' Extract call from error and warnings.
#' 
#' @param obj Message string, object of class `error`,
#' or `warning`.
#'
#' @noRd 
#' @keywords internal
get_call <- function(obj) UseMethod("get_call")

get_call.condition <- function(obj){
  if(is.null(obj$call))
    return(NA_character_)

  obj$call
}

get_call.character <- function(obj){
  NA_character_
}
