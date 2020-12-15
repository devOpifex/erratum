test_that("Skip", {
  foo <- function(){
    e("Problem")
  }

  bar <- function(){
    x <- foo()
    skip(x)
    return(1)
  }

  baz <- function(){
    x <- bar()
    y <- w("Caution")
    skip(y, w = TRUE)
  }

  testthat::expect_s3_class(bar(), "Error")
  testthat::expect_s3_class(baz(), "Warning")
})