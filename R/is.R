#' Check
#' 
#' Check whether an object is an error or a warning.
#' 
#' @param e,w Object to check.
#' 
#' @examples 
#' err <- e("Whoops!")
#' 
#' is.e(err)
#' is.w(err)
#' 
#' @name checks
#' @export 
is.e <- function(e){
  inherits(e, "Error")
}

#' @rdname checks
#' @export 
is.w <- function(w){
  inherits(e, "Warning")
}
