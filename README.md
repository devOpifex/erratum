
<!-- README.md is generated from README.Rmd. Please edit that file -->

<!-- badges: start -->

<!-- badges: end -->

# err

Error handling for R, inspired by Go’s standard library; it makes it
easier to standardise and handle error messages, doing so also forces
the developer to think about errors rather than let them happen.

## Installation

``` r
# install.packages("remotes")
remotes::install_github("devOpifex/err")
```

## Examples

Errors and warning can either be created from strings or warning and
error objects.

``` r
library(err)

err <- e("Something went wrong")

foo <- function(...){
  tryCatch(
    ..., 
    error = function(err) e(err), 
    warning = function(war) w(war) 
  )
}

foo(log("a"))
#> ERROR non-numeric argument to mathematical function
foo(matrix(1:3, nrow = 2))
#> WARNING data length [3] is not a sub-multiple or multiple of the number of rows [2]
```

Templates that are used to print errors and warnings can be customised.

``` r
tmpl.e("Whoops: %s - sorry!")

e("Sumin' went wrong")
#> Whoops: Sumin' went wrong - sorry!
```

You can also retrieve the message of the error or warning.

``` r
err <- e("Argh")
war <- w("Careful")

err$error()
#> [1] "Argh"
war$warning()
#> [1] "Careful"
```

One can check whether the object returned is an error or a warning.

``` r
x <- tryCatch(print(error), error = function(err) e(err))

is.e(x)
#> [1] TRUE
```
