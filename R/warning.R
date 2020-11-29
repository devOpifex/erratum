#' Error
#' 
#' @export 
Warning <- R6::R6Class(
  "Warning",
  inherit = Issue,
  public = list(
#' @details Stop
#' 
#' Analogous to [stop()]
    warn = function(){
      stop(self$message(), call. = FALSE)
    }
  )
)
