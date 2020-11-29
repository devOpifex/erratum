
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

err <- err("Something went wrong")

foo <- function(x){
  err
}

bar <- function(x){
  if(is.character(x))
    return(err)

  log(x)
}

baz <- function(x){
  tryCatch(log(x), error = function(e) err(e))
}

foo()
bar("a")
baz("b")
```
