#' Latch an Error or a Warning
#' 
#' Latch an error or a warning to an object
#' to indicate an issue associated with it.
#' These can later be checked with [is.e()]
#' and [is.w()], and can also be [enforce()].
#' 
#' @param obj Object to latch the error or 
#' warning onto.
#' @param error,warning Error or warning, the
#' output of [e()] or [w()].
#' 
#' @section Functions:
#' - `latche` and `latchw`: latch an error or a warning.
#' - `unlatch`: unlatch any error or warning.
#' 
#' @examples 
#' x <- 1
#' problematic <- latch.e(x, e("Not right"))
#' 
#' is.e(problematic)
#' 
#' do_sth_with_x <- function(x){
#'  enforce(x)
#'  x + 1
#' }
#' 
#' if(interactive()){
#'  do_sth_with_x(x)
#'  do_sth_with_x(problematic)
#' }
#' 
#' unlatch(problematic)
#' 
#' @name latch
#' @export
latch.e <- function(obj, error){
  missing_obj <- e("Missing `obj`")
  missing_error <- e("Missing `error`")
  
  if(missing(obj)) 
    missing_obj$stop()

  if(missing(error))
    missing_error$stop()

  if(!is.e(error))
    stop("`error` must be an `Error`")

  attr(obj, "e") <- error
  withe(obj)
}

#' @rdname latch
#' @export
latch.w <- function(obj, warning){
  missing_obj <- e("Missing `obj`")
  missing_warning <- e("Missing `warning`")
  
  if(missing(obj)) 
    missing_obj$stop()

  if(missing(warning))
    missing_warning$stop()

  if(!is.w(warning))
    stop("`warning` must be an `Warning`")

  attr(obj, "w") <- warning
  withw(obj)
}

#' @rdname latch
#' @export
unlatch <- function(obj){
  attr(obj, "e") <- NULL
  attr(obj, "w") <- NULL
  attr(obj, "class") <- NULL
  return(obj)
}

#' Construct Latched Object
#' 
#' Constructor for latched objects (error, and warning).
#' 
#' @param obj Object to construct.
#' @param type Type of object to construct.
#' 
#' @noRd 
#' @keywords internal
construct_err <- function(obj, type = c("error", "warning")){
  type <- match.arg(type)
  structure(obj, class = c("err", type, class(obj)))
}

#' @noRd 
#' @keywords internal
withe <- function(obj){
  construct_err(obj, "error")
}

#' @noRd 
#' @keywords internal
withw <- function(obj){
  construct_err(obj, "warning")
}

#' @export 
print.err <- function(x, ...){
  x <- unlatch(x)
  print(x, ...)
}

#' Retrieve Attribute
#' 
#' Retrieve attribute from object.
#' 
#' @param obj Object to retrieve attributes from.
#' 
#' @noRd 
#' @keywords internal
get_attr_e <- function(obj){
  attr(obj, "e")
}

#' @noRd 
#' @keywords internal
get_attr_w <- function(obj){
  attr(obj, "w")
}