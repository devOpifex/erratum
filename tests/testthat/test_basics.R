test_that("Basics", {
  error <- e("Problem")
  warning <- w("Caution")

  # print
  error
  warning

  testthat::expect_s3_class(error, "Error")
  testthat::expect_s3_class(warning, "Warning")
  testthat::expect_equal(error$message, "Problem")
  testthat::expect_equal(warning$message, "Caution")

  # it's called from test_that... from a function
  # hence it is not NA
  testthat::expect_false(is.na(warning$call))
  testthat::expect_false(is.na(error$call))

  error <- tryCatch(
    log("a"),
    error = function(e) e(e)
  )

  warn <- tryCatch(
    matrix(1:3, nrow = 2),
    warning = function(warn) w(warn)
  )

  testthat::expect_s3_class(error, "Error")
  testthat::expect_s3_class(warn, "Warning")

  testthat::expect_error(error$stop())
  testthat::expect_warning(warn$warn())
})
