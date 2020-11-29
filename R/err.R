#' Error & Warnings
#' 
#' Create new errors and warnings.
#' 
#' @param error Message string, object of class `error`,
#' or `warning`.
#' @param ... Ignored.
#' @param type Type of the message `error` or `warning`. 
#'
#' @export
err <- function(error, ..., type = c("error", "warning")) UseMethod("err")

#' @export 
err.character <- function(error, ..., type = c("error", "warning")){
  stopifnot(!missing(error))
  construct_error(error, type)
}

#' @method err error
#' @export 
err.error <- function(error, ...){
  stopifnot(!missing(error))
  construct_error(error$message, "error")
}

#' @method err warning
#' @export 
err.warning <- function(error, ...){
  stopifnot(!missing(error))
  construct_error(error$message, "warning")
}

construct_error <- function(error, type = c("error", "warning")){
  type <- match.arg(type)

  obj <- list(message = error, type = type)
  structure(obj, class = c("err", "simpleError", class(obj)))
}

#' @export 
print.err <- function(x, ...){
  fn <- type2func(x$type)
  fn(x$message)
}

type2func <- function(type = c("error", warning)){
  switch(
    type,
    error = cli::cli_alert_danger,
    warning = cli::cli_alert_warning
  )
}