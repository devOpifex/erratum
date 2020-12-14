
<!-- README.md is generated from README.Rmd. Please edit that file -->

<!-- badges: start -->

[![Travis build
status](https://travis-ci.com/devOpifex/erratum.svg?branch=master)](https://travis-ci.com/devOpifex/erratum)
[![Coveralls test
coverage](https://coveralls.io/repos/github/devOpifex/erratum/badge.svg)](https://coveralls.io/github/devOpifex/erratum)
<!-- badges: end -->

# erratum

Sometimes one might want a more refined handling of errors in R. For
instance, in shiny applications or Plumber applications where using
`stop` crashes the service. Instead one might want to handle the error
with more subtlety: erratum aims to enable this.

Error handling for R, inspired by Go’s standard library; it makes it
easier to standardise and handle error messages as well as warnings.
Doing so forces the developer to deal with potential errors.

## Installation

``` r
# install.packages("remotes")
remotes::install_github("devOpifex/erratum")
```

## Examples

Errors and warning can either be created from strings or warning and
error objects.

``` r
library(erratum)

err <- e("Something went wrong")

foo <- function(...){
  tryCatch(
    ..., 
    error = function(e) err, 
    warning = function(war) w(war) 
  )
}

foo(log("a"))
#> Something went wrong
foo(matrix(1:3, nrow = 2))
#> data length [3] is not a sub-multiple or multiple of the number of rows [2]
```

### Templates

Templates that are used to print errors and warnings can be customised.
Make sure it includes `%s`: the warning or error message.

``` r
template.e("Whoops: %s - sorry!")

e("Sumin' went wrong")
#> Whoops: Sumin' went wrong - sorry!
```

Note that it supports [crayon](https://github.com/r-lib/crayon).

``` r
template.e(crayon::red("%s"))

e("Sumin' went wrong")
#> Sumin' went wrong
```

These can be reset by simply reruning the respective template function.

``` r
template.e()
```

### Retrieve Message

You can also retrieve the message of the error or warning.

``` r
warn <- w("Careful")

(string <- warn$message())
#> [1] "Careful"

class(string)
#> [1] "character"
```

### Check

One can check whether the object returned is an error or a warning.

``` r
x <- tryCatch(print(error), error = function(err) e(err))

is.e(x)
#> [1] TRUE
```

### Jab

The function `jab` is analogous to `tryCatch` but will use `err`
internally. It also allows passing `e` and `w` along to easily reuse
error messages.

``` r
safe_log <- function(x){
 result <- jab(log(x))
 
 if(is.e(result))
   stop(result$message())

 return(result)
} 

safe_log("a")
#> Error in safe_log("a"): non-numeric argument to mathematical function
```

### Enforce

Instead of checking the results of `tryCatch` with an `if` statement,
one might want to use `enforce` which will check whether the result is
an error or a warning and deal with it accordingly (`stop` or
`warning`).

``` r
err <- e("Log only accepts numeric(s)")

safe_log <- function(x){
 result <- jab(log(x), e = err)
 enforce(result)

 return(result)
} 

safe_log("a")
#> Error: Log only accepts numeric(s)
```

The `enforce` function accepts multiple objects, note that these are
evaluated in order.

``` r
x <- "just a string"
www <- w("Caution")
err <- e("Broken!")

enforce(x, www, err)
#> Warning: Caution
#> Error: Broken!
enforce(x)
```

You can also use `defer_enforce` to defer the enforce when the function
exits.

``` r
safe_log <- function(x){
 result <- jab(log(x), e = e("Gah!"))
 defer_enforce(result)

 print("Doing something here")

 return(result)
} 

safe_log(10)
#> [1] "Doing something here"
#> [1] 2.302585
safe_log("a")
#> [1] "Doing something here"
#> Error: Gah!
```

### Latch

Errors and warnings can also be latched onto objects so they can be
dealt with later, functions such as `is.e` or `enforce` will also work
on those objects.

You can use `unlatch` to resolve these.

``` r
x <- 1
problematic <- latch.e(x, e("Not right"))
#> Error in latch.e(x, e("Not right")): could not find function "latch.e"

is.e(problematic)
#> Error in is.e(problematic): object 'problematic' not found

do_sth_with_x <- function(x){
 enforce(x)
 x + 1
}

do_sth_with_x(x)
#> [1] 2
do_sth_with_x(problematic)
#> Error in lapply(list(...), is.err): object 'problematic' not found

unlatch(problematic)
#> Error in unlatch(problematic): object 'problematic' not found
```
