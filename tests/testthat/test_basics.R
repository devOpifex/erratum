test_that("Basics", {
  error <- e("Problem")
  warning <- w("Caution")

  testthat::expect_s3_class(error, "Error")
  testthat::expect_s3_class(warning, "Warning")

  es <- error$message()
  ws <- warning$message()

  testthat::expect_equal(es, "Problem")
  testthat::expect_equal(ws, "Caution")
})