<div align="center">

# erratum

<!-- badges: start -->
[![Travis build status](https://travis-ci.com/devOpifex/erratum.svg?branch=master)](https://travis-ci.com/devOpifex/erratum)
[![Coveralls test coverage](https://coveralls.io/repos/github/devOpifex/erratum/badge.svg)](https://coveralls.io/github/devOpifex/erratum)
<!-- badges: end -->

[Website](https://erratum.opifex.org)

</div>

Sometimes one might want a more refined handling of errors in R. For
instance, in shiny applications or Plumber APIs where using `stop`
crashes the service. Instead one might want to handle the error with
more subtlety: erratum aims to enable this.

This inspired by Go’s standard library; it makes it easier to
standardise and handle error messages as well as warnings. Doing so
forces the developer to deal with potential errors.

## Example

```r
library(erratum)

err <- e("Input must be a numeric")

safe_log <- function(x){
  if(!is.numeric(x))
    err$stop()

  log(x)
}

safe_log("two")
```
