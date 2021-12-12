test_that("Bash", {
  err <- e("Problem")
  error <- bash(log("a"), e = err)
  testthat::expect_s3_class(error, "Error")

  error <- bash(log("a"))
  testthat::expect_s3_class(error, "Error")

  error <- bash(log("a"), e = function(err) e(err))
  testthat::expect_s3_class(error, "Error")

   error <- bash(log("a"), e = function(err) NULL)
  testthat::expect_null(error)

  warn <- w("Caution")
  warning <- bash(matrix(1:3, nrow = 2), w = warn)

  testthat::expect_s3_class(warning, "Warning")

  warn <- bash(matrix(1:3, nrow = 2))
  testthat::expect_s3_class(warn, "Warning")

  warn <- bash(matrix(1:3, nrow = 2), w = function(warn) w(warn))
  testthat::expect_s3_class(warn, "Warning")

  warn <- bash(matrix(1:3, nrow = 2), w = function(warn) NULL)
  testthat::expect_null(warn)
})