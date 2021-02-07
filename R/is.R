#' Check
#' 
#' Check whether an object is an error or a warning.
#' 
#' @param obj Object to check.
#' 
#' @section Functions:
#' 
#' - `is.e`: Whether the object is an error.
#' - `is.w`: Whether the object is a warning.
#' - `is.problem`: Whether the object is an error or a warning.
#' 
#' @return A boolean value.
#' 
#' @examples 
#' err <- e("Whoops!")
#' 
#' is.e(err)
#' is.w(err)
#' 
#' @name checks
#' @export 
is.e <- function(obj) UseMethod("is.e")

#' @rdname checks
#' @export
is.e.default <- function(obj){
  inherits(obj, "Error")
}

#' @method is.e err
#' @rdname checks
#' @export
is.e.err <- function(obj){
  is.e(get_attr_e(obj))
}

#' @rdname checks
#' @export 
is.w <- function(obj) UseMethod("is.w")

#' @rdname checks
#' @export 
is.w.default <- function(obj){
  inherits(obj, "Warning")
}

#' @method is.w err
#' @rdname checks
#' @export
is.w.err <- function(obj){
  is.w(get_attr_w(obj))
}

#' @rdname checks
#' @export
is.problem <- function(obj){
  is.e(obj) || is.w(obj)
}