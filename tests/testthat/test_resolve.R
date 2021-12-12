test_that("Resolve", {
  err <- e("Problem")
  warn <- w("Caution")

  testthat::expect_error(resolve(err))
  testthat::expect_warning(resolve(warn))
  resolve("Nothing to do")

  safe_log <- function(x){
    rez <- bash(log(x), e = e("Argh!"))
    defer_resolve(rez)
    return(rez)
  }
  
  testthat::expect_error(safe_log("a"))
})