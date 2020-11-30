test_that("latch", {
  x <- 1

  le <- latche(x, e("Probematic"))
  lw <- latchw(x, w("Suspicious"))

  testthat::expect_true(is.e(le))
  testthat::expect_true(is.w(lw))
  testthat::expect_error(enforce(le))
  testthat::expect_warning(enforce(lw))

  unlatch(le)
  unlatch(lw)
})