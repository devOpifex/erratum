#' Enforce Errors and Warnings
#' 
#' @param ... Objects to check, if any of them is an `Error` 
#' then [stop()] is called, if any are `Warning`s then [warning()]
#' is called.
#' 
#' @details Objects passed are evalutated in order.
#'
#' @export 
enforce <- function(...) {
  # there may be no need to check
  has <- lapply(list(...), is.err)
  has <- unlist(has)

  if(!any(has))
    return(invisible())

  # check objects
  lapply(list(...), check)
  invisible()
}

#' Check
#' 
#' Checks individual objects.
#' 
#' @param obj Object to check.
#' 
#' @details Runs [warning()] or [stop()] where necessary.
#' 
#' @noRd 
#' @keywords internal
check <- function(obj){
  if(is.e(obj))
    stop(obj$message(), call. = FALSE)
  
  if(is.w(obj))
    warning(obj$message(), call. = FALSE)
  
  invisible()
}
