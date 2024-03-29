test_that("Rules", {
  error <- simpleError("Problem!")
  err <- e(error)

  testthat::expect_error(err$rule)
  testthat::expect_s3_class(err$check(), "Error")

  err$rule <- is.numeric
  
  testthat::expect_invisible(err$check(1))
  testthat::expect_error(err$check("a"))

  err$rule <- function(x){
    stop("don't do this")
  }

  testthat::expect_s3_class(err$check(1), "Error")

  err <- e("Problem again!")

  testthat::expect_s3_class(
    err$addRule(function(x){
      "don't do that either"
    }), 
    "Error"
  )

  testthat::expect_s3_class(err$check(1), "Error")
  testthat::expect_error(err$rule <- "Aaah")
})