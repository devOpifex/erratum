#' Skip
#' 
#' Skip the rest of the function; calls [return()] in the 
#' parent function if any object is an error or (optionally)
#' a warning.
#' 
#' @param ... Objects to check, if any of them is an `Error` 
#' then it calls [return()] in the parent function, this can 
#' optionally be applied if any object is a `Warning` with the
#' `w` argument.
#' @param w Whether to also skip is there are `Warning`.
#' 
#' @export 
skip <- function(..., w = FALSE){

  # there may be no need to check
  has <- lapply(list(...), is.err)
  has <- unlist(has)

  if(!any(has))
    return(invisible())

  # check objects
  for(obj in list(...)){
    if(is.e(obj)){
      obj$return(2)
    }

    if(is.w(obj) && w){
      obj$return(2)
    }
  }
}