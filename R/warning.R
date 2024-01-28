#' Error
#' 
#' @export 
Warning <- R6::R6Class( # nolint
  "Warning",
  inherit = Issue,
  #' @details Initialise
  #' 
  #' @param obj A character string or an object of 
  #' class `error`, or `warning`.
  #' @param raiser Template to raise the issue.
  public = list(
    initialize = function(
      obj, 
      raiser = getOption("ERR_RAISER_WARNING", warner)
    ){
      super$initialize(obj, type = "warning")
      super$raiser <- raiser
    },
    #' @details Warn
    #' 
    #' Analogous to [warning()]
    warn = function(){
      super$raise()
    }
  )
)
