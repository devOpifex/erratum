test_that("Skip", {
  foo <- function(){
    e("Problem")
  }

  bar <- function(){
    x <- foo()
    y <- 1
    skip(y, x)
    return(1)
  }

  baz <- function(){
    x <- bar()
    y <- w("Caution")
    skip(y, w = TRUE)
  }

  nothing <- function(){
    x <- 1L
    skip(x)
    x
  }

  testthat::expect_equal(nothing(), 1L)
  testthat::expect_s3_class(bar(), "Error")
  testthat::expect_s3_class(baz(), "Warning")
})