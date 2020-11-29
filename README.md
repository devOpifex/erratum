
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
#> Whoops: non-numeric argument to mathematical function - sorry!
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
warn <- w("Careful")

(string <- warn$message())
#> [1] "Careful"

class(string)
#> [1] "character"
```

One can check whether the object returned is an error or a warning.

``` r
x <- tryCatch(print(error), error = function(err) e(err))

is.e(x)
#> [1] TRUE
```

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
```
