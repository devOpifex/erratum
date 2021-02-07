test_that("Is tests", {
  error <- e("Problem")
  warning <- w("Caution")

  testthat::expect_true(is.e(error))
  testthat::expect_true(is.w(warning))
  testthat::expect_true(is.problem(error))
  testthat::expect_true(is.problem(warning))

  testthat::expect_false(is.e("hello"))
  testthat::expect_false(is.w("world"))
  testthat::expect_false(is.problem("world"))
})