test_that("Enforce", {
  err <- e("Problem")
  warn <- w("Caution")

  testthat::expect_error(enforce(err))
  testthat::expect_warning(enforce(warn))
  enforce("Nothing to do")

  safe_log <- function(x){
    rez <- jab(log(x), e = e("Argh!"))
    defer_enforce(rez)
    return(rez)
  }
  
  testthat::expect_error(safe_log("a"))
})