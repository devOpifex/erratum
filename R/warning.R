#' Error
#' 
#' @export 
Warning <- R6::R6Class(
  "Warning",
  inherit = Issue,
  public = list(
#' @details Warn
#' 
#' Analogous to [warning()]
    warn = function(){
      super$raise()
    }
  )
)
