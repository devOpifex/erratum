#' Templates
#' 
#' Define error and warning templates.
#' 
#' @param pat Pattern to use, must include `%s`,
#' forwarded to [sprintf()].
#' 
#' @examples
#' msg <- "Something's wrong" 
#' 
#' # default
#' e(msg)
#' 
#' # template
#' template.e("Whoops: %s - sorry!")
#' e(msg)
#' 
#' # reset
#' template.e()
#' 
#' @name template
#' @export
template.e <- function(pat = "%s"){
  check_tmpl(pat)
  options("ERR_TEMPLATE_ERROR" = pat)
  invisible()
}

#' @rdname template
#' @export
template.w <- function(pat = "%s"){
  check_tmpl(pat)
  options("ERR_TEMPLATE_WARNING" = pat)
  invisible()
}

#' Fetch Default Templates
#' 
#' @param type What type of template to fetch. 
#' 
#' @keywords internal 
tmpl <- function(type = c("error", "warning")){
  type <- match.arg(type)
  opt <- sprintf("ERR_TEMPLATE_%s", toupper(type))
  getOption(opt, default_tmpl)
}

# default template
# simply paste string
default_tmpl <- "%s"

#' Check Template
#' 
#' Check that the template is correct.
#' 
#' @param pat Pattern to check.
#' 
#' @keywords internal
check_tmpl <- function(pat){
  correct <- grepl("\\%s", pat)
  
  if(!correct)
    stop("Missing `%s` in pattern", call. = FALSE)

  invisible()
}

#' Raisers
#' 
#' Set `raise` method globally, every subsequent `raise`
#' method will make use of this function.
#' 
#' @param fn Function to run when the `raise` method 
#' is called. By default the error uses `stop()` and warning
#' uses `warning()`. The function must accept a single argument:
#' the error message (character vector).
#' 
#' @name raise
#' @export 
raise.e <- function(fn = NULL){
  options("ERR_RAISER_ERROR" = fn)
  invisible()
}

#' @rdname raise
#' @export 
raise.w <- function(fn = NULL){
  options("ERR_RAISER_WARNING" = fn)
  invisible()
}

# Default raise method for Error
stopper <- function(message){
  stop(message, call. = FALSE)
}

# Default raise method for Warning
warner <- function(message){
  warning(message, call. = FALSE)
}
