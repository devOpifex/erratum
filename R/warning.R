#' Error
#' 
#' @export 
Warning <- R6::R6Class(
  "Warning",
  inherit = Issue,
  public = list(
#' @details Display the warning message
    warning = function(){
      super$getMessage()
    }
  )
)
