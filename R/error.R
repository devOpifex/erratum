#' Error
#' 
#' @export 
Error <- R6::R6Class(
  "Error",
  inherit = Issue,
  public = list(
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
