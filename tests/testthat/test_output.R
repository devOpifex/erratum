test_that("Print", {
  local_edition(3)

  err <- e("Whoops!")
  war <- w("Caution")

  expect_snapshot_output(err)
  expect_snapshot_output(war)
})