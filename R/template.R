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
#' tmpl.e("Whoops: %s - sorry!")
#' e(msg)
#' 
#' 
#' @name template
#' @export
tmpl.e <- function(pat){
  stopifnot(!missing(pat))
  check_tmpl(pat)
  options("ERR_TEMPLATE_ERROR" = pat)
  invisible()
}

#' @rdname template
#' @export
tmpl.w <- function(pat){
  stopifnot(!missing(pat))
  check_tmpl(pat)
  options("ERR_TEMPLATE_WARNING" = pat)
  invisible()
}

tmpl <- function(type = c("error", "warning")){
  type <- match.arg(type)
  opt <- sprintf("ERR_TEMPLATE_%s", toupper(type))
  getOption(opt, default_tmpl(type))
}

default_tmpl <- function(type){
  sprintf("%s %%s\n", toupper(type))
}

check_tmpl <- function(pat){
  correct <- grepl("\\%s", pat)
  
  if(!correct)
    stop("Missing %s in pattern", call. = FALSE)

  invisible()
}