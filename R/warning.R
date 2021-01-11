#' Error
#' 
#' @export 
Warning <- R6::R6Class(
  "Warning",
  inherit = Issue,
#' @details Initialise
#' 
#' @param obj A character string or an object of 
#' class `error`, or `warning`.
#' @param type Type of message.
  public = list(
    initialize = function(obj){
      super$initialize(obj, type = "warning")
      super$raiser <- getOption("ERR_RAISER_WARNING", warner)
    },
#' @details Warn
#' 
#' Analogous to [warning()]
    warn = function(){
      super$raise()
    }
  )
)
