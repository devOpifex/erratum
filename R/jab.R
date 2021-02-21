#' Take a Jab
#' 
#' Equivalent to [tryCatch()].
#' 
#' @param expr Expression to run, passed to [tryCatch()].
#' @param e,w An object of class `Error` or `Warning` as 
#' returned by [e()] or [w()].
#' 
#' @examples 
#' safe_log <- function(x){
#'  result <- jab(log(x))
#'  
#'  if(is.e(result))
#'    stop(result$stop())
#' 
#'  return(result)
#' } 
#' 
#' if(interactive())
#'  safe_log("a")
#' 
#' @export 
jab <- function(expr, e = NULL, w = NULL){
  tryCatch(
    expr,
    error = callback_e(e),
    warning = callback_w(w)
  )
}

#' Create Callbacks for jab
#' 
#' Creates callback for [jab()].
#' 
#' @name callbacks
#' 
#' @noRd 
#' @keywords internal
callback_e <- function(e = NULL){
  return(
    function(err){
      if(is.null(e))
        return(e(err))

      if(is.function(e))
        return(e(err))
      
      return(e)
    }
  )
}

#' @rdname callbacks
#' @noRd 
#' @keywords internal
callback_w <- function(w = NULL){
  return(
    function(war){
      if(is.null(w))
        return(w(war))

      if(is.function(w))
        return(w(war))
      
      return(w)
    }
  )
}