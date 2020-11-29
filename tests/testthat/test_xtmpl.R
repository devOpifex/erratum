test_that("Template", {
  expect_error(template.e("whoops"))

  template.e("whoops %s")
  template.w("careful %s")
})
