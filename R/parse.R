#' Extract Message
#' 
#' Extract message from error and warnings.
#' 
#' @param obj Message string, object of class `error`,
#' or `warning`.
#'
#' @noRd 
#' @keywords internal
extract <- function(obj) UseMethod("extract")

extract.character <- function(obj){
  return(obj)
}

extract.error <- function(obj){
  return(obj$message)
}

extract.warning <- function(obj){
  return(obj$message)
}