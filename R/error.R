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
#' @param type Type of message.
  public = list(
    initialize = function(obj){
      super$initialize(obj, type = "error")
      super$raiser <- stopper
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

stopper <- function(message){
  stop(message, call. = FALSE)
}
