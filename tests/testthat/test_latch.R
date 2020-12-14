test_that("latch", {

  testthat::expect_error(latch.e())
  testthat::expect_error(latch.w())

  x <- 1

  testthat::expect_error(latch.e(x))
  testthat::expect_error(latch.w(x))
  testthat::expect_error(latch.e(x, "error"))
  testthat::expect_error(latch.w(x, "warning"))

  le <- latch.e(x, e("Probematic"))
  lw <- latch.w(x, w("Suspicious"))

  testthat::expect_snapshot_output(le)
  testthat::expect_snapshot_output(lw)
  testthat::expect_true(is.e(le))
  testthat::expect_true(is.w(lw))
  testthat::expect_error(enforce(le))
  testthat::expect_warning(enforce(lw))

  unlatch(le)
  unlatch(lw)
})