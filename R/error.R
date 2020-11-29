#' Error
#' 
#' @export 
Error <- R6::R6Class(
  "Error",
  inherit = Issue,
  public = list(
#' @details Display the error message
    error = function(){
      super$getMessage()
    }
  )
)
