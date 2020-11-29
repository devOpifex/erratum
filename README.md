
<!-- README.md is generated from README.Rmd. Please edit that file -->

<!-- badges: start -->

<!-- badges: end -->

# err

Error handling for R

## Installation

``` r
# install.packages("remotes")
remotes::install_github("devOpifex/err")
```

## Example

``` r
library(err)

err <- error("Something went wrong")

foo <- function(x){
  if(is.character(x))
    return(err)

  log(x)
}

bar <- function(x){
  tryCatch(
    log(x), 
    error = function(e) error(e),
    warning = function(w) warn(w)
  )
}

baz <- function(x){
  warn("Careful something's off")
}

foo("a")
#> ✖ Something went wrong
bar("a")
#> ✖ non-numeric argument to mathematical function
baz()
#> ! Careful something's off
```
