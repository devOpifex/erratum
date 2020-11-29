test_that("Jab", {
  err <- e("Problem")
  error <- jab(log("a"), e = err)

  testthat::expect_s3_class(error, "Error")

  warn <- w("Caution")
  warning <- jab(matrix(1:3, nrow = 2), w = warn)

  testthat::expect_s3_class(warning, "Warning")
})