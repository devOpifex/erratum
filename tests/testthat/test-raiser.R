test_that("Raisers", {
  error <- e("Problem")

  foo <- function(msg){
    cat(msg)
  }

  # read only
  testthat::expect_error(error$raiser)

  error$raiser <- foo

  testthat::expect_snapshot_output(error$raise())

  raise.e(foo)
  raise.w(foo)

  testthat::expect_snapshot_output(error$raise())

  warn <- w("Warning")
  testthat::expect_snapshot_output(warn$raise())

  raise.e()
  raise.w()
})