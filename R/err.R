#' Error & Warnings
#' 
#' Create new errors and warnings.
#' 
#' @param error,warning Message string, object of class `error`,
#' or `warning`.
#'
#' @name err
#' @export
error <- function(error) UseMethod("error")

#' @rdname err
#' @export 
error.character <- function(error){
  stopifnot(!missing(error))
  construct_error(error, "error")
}

#' @rdname err
#' @method error error
#' @export 
error.error <- function(error){
  stopifnot(!missing(error))
  construct_error(error$message, "error")
}

#' @rdname err
#' @export
warn <- function(warning) UseMethod("warn")

#' @rdname err
#' @export 
warn.character <- function(warning){
  stopifnot(!missing(warning))
  construct_error(warning, "warning")
}

#' @rdname err
#' @method warn warning
#' @export 
warn.warning <- function(warning){
  stopifnot(!missing(error))
  construct_error(error$message, "warning")
}

construct_error <- function(error, type = c("error", "warning")){
  type <- match.arg(type)
  cl <- type2class(type)
  obj <- list(message = error, type = type)
  structure(obj, class = c("err", cl, class(obj)))
}

type2class <- function(type = c("error", "warning")){
  type <- match.arg(type)
  sprintf("simple%s", tools::toTitleCase(type))
}

#' @export 
print.err <- function(x, ...){
  fn <- type2func(x$type)
  fn(x$message)
}

#' @export 
print.warn <- print.err

type2func <- function(type = c("error", warning)){
  switch(
    type,
    error = cli::cli_alert_danger,
    warning = cli::cli_alert_warning
  )
}