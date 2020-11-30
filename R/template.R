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

tmpl <- function(type = c("error", "warning")){
  type <- match.arg(type)
  opt <- sprintf("ERR_TEMPLATE_%s", toupper(type))
  getOption(opt, default_tmpl)
}

default_tmpl <- "%s"

check_tmpl <- function(pat){
  correct <- grepl("\\%s", pat)
  
  if(!correct)
    stop("Missing %s in pattern", call. = FALSE)

  invisible()
}