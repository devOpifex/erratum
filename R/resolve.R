#' Resolve Errors and Warnings
#' 
#' @param ... Objects to check, if any of them is an `Error` 
#' then [stop()] is called, if any are `Warning`s then [warning()]
#' is called.
#' 
#' @details Objects passed are evalutated in order.
#' 
#' @return Invisiby returns `NULL`
#' 
#' @name resolves
#' @export 
resolve <- function(...) {
  # there may be no need to check
  has <- lapply(list(...), is.problem)
  has <- unlist(has)

  if(!any(has))
    return(invisible())

  # check objects
  lapply(list(...), chk)
  invisible()
}

#' @rdname resolves
#' @export 
defer_resolve <- function(...){
  do.call(
    on.exit, list(substitute(resolve(...)), add = TRUE),
    envir = parent.frame() 
  )
}

#' Check
#' 
#' Checks individual objects.
#' 
#' @param obj Object to check.
#' 
#' @details Runs [warning()] or [stop()] where necessary.
#' 
#' @name chk
#' @export 
chk <- function(obj) UseMethod("chk")

#' @export 
#' @rdname chk
#' @method chk default
chk.default <- function(obj){
  if(is.e(obj))
    obj$fatal()
  
  if(is.w(obj))
    obj$warn()
  
  invisible()
}

#' @export 
#' @rdname chk
#' @method chk err
chk.err <- function(obj){
  if(is.e(obj))
    get_attr_e(obj)$fatal()
  
  if(is.w(obj))
    get_attr_w(obj)$warn()
  
  invisible()
}
