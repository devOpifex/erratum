test_that("latch", {

  testthat::expect_error(latche())
  testthat::expect_error(latchw())

  x <- 1

  testthat::expect_error(latche(x))
  testthat::expect_error(latchw(x))
  testthat::expect_error(latche(x, "error"))
  testthat::expect_error(latchw(x, "warning"))

  le <- latche(x, e("Probematic"))
  lw <- latchw(x, w("Suspicious"))

  testthat::expect_snapshot_output(le)
  testthat::expect_snapshot_output(lw)
  testthat::expect_true(is.e(le))
  testthat::expect_true(is.w(lw))
  testthat::expect_error(enforce(le))
  testthat::expect_warning(enforce(lw))

  unlatch(le)
  unlatch(lw)
})