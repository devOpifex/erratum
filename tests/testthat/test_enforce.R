test_that("Enforce", {
  err <- e("Problem")
  warn <- w("Caution")

  testthat::expect_error(enforce(warn, err))
  testthat::expect_warning(enforce(warn))
  enforce("Nothing to do")
})