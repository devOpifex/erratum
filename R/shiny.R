#' Observe Event with Error Handling
#' 
#' Observe event with erratum error handling.
#' 
#' @inheritParams shiny::observeEvent
#' @param e Error handler.
#' @param w Warning handler.
#' 
#' @export
e.observe.event <- function( # nolint
  eventExpr, # nolint
  handlerExpr, # nolint
  e = NULL,
  w = NULL,
  event.env = parent.frame(), # nolint
  event.quoted = FALSE, # nolint
  handler.env = parent.frame(), # nolint
  handler.quoted = FALSE, # nolint
  ...,
  label = NULL,
  suspended = FALSE,
  priority = 0,
  domain = shiny::getDefaultReactiveDomain(),
  autoDestroy = TRUE, # nolint
  ignoreNULL = TRUE, # nolint
  ignoreInit = FALSE, # nolint
  once = FALSE
) {
  event.env.forced <- force(event.env) # nolint
  handler.env.forced <- force(handler.env) # nolint

  shiny::observeEvent(
    substitute(eventExpr),
    {
      substitute({
        bash(
          handlerExpr,
          e = e,
          w = w
        ) |> 
          resolve()
      })
    },
    event.quoted = TRUE,
    handler.quoted = TRUE,
    event.env = event.env.forced,
    handler.env = handler.env.forced,
    ...,
    label = label,
    suspended = suspended,
    priority = priority,
    domain = domain,
    autoDestroy = autoDestroy,
    ignoreNULL = ignoreNULL,
    ignoreInit = ignoreInit,
    once = once
  )
}

#' Observe with Error Handling
#'
#' Observe with erratum error handling.
#'
#' @inheritParams shiny::observe
#' @param e Error handler.
#' @param w Warning handler.
#'
#' @export
e.observe <- function( # nolint
  x,
  e = NULL,
  w = NULL,
  env = parent.frame(),
  ...,
  label = NULL,
  suspended = FALSE,
  priority = 0,
  domain = shiny::getDefaultReactiveDomain(),
  autoDestroy = TRUE, # nolint
  ..stacktraceon = TRUE # nolint
) {
  env_ <- force(env)
  shiny::observe(
    {
      substitute({
        bash(
          x,
          e = e,
          w = w
        ) |> 
          resolve()
      })
    },
    env = env_,
    quoted = TRUE,
    ...,
    label = label,
    suspended = suspended,
    priority = priority,
    domain = domain,
    autoDestroy = autoDestroy,
    ..stacktraceon = ..stacktraceon
  )
}
