test_that("Template", {
  expect_error(template.e("whoops"))

  template.e("whoops %s")
  template.w("careful %s")

  err <- e("Argh")
  war <- w("Careful")

  testthat::expect_snapshot_output(err)
  testthat::expect_snapshot_output(war)

  template.e()
  template.w()
})
