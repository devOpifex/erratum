<div align="center">

# erratum

<!-- badges: start -->
[![Travis build status](https://travis-ci.com/devOpifex/erratum.svg?branch=master)](https://travis-ci.com/devOpifex/erratum)
[![Coveralls test coverage](https://coveralls.io/repos/github/devOpifex/erratum/badge.svg)](https://coveralls.io/github/devOpifex/erratum)
<!-- badges: end -->

[Docs](https://erratum.opifex.org) | [Quick start](https://erratum.opifex.org/guide/get-started.html) | [Install](https://erratum.opifex.org/guide/installation.html)

</div>

Erratum handles errors and warnings in a manner inspired by Go's standard error library.

## Example

```r
library(erratum)

err <- e("Input must be a numeric")
err$rule <- is.numeric

safe_log <- function(x){
  err$check(x)

  log(x)
}

safe_log("two")
```
