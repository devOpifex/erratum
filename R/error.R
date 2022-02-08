#' Error
#' 
#' @export 
Error <- R6::R6Class(
  "Error",
  inherit = Issue,
#' @details Initialise
#' 
#' @param obj A character string or an object of 
#' class `error`, or `warning`.
#' @param raiser Template to raise the issue.
  public = list(
    initialize = function(
      obj, 
      raiser = getOption("ERR_RAISER_ERROR", stopper)
    ){
      super$initialize(obj, type = "error")
      super$raiser <- raiser
    },
#' @details Stop
#' 
#' Analogous to [stop()]
    stop = function(){
      super$raise()
    },
#' @details Fatal
#' 
#' Analogous to [stop()]
    fatal = function(){
      super$raise()
    }
  )
)
