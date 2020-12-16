---
home: true
heroImage: ''
tagline: Error handling in R
actionText: Quick Start →
actionLink: /guide/get-started
features:
- title: Shiny
  details: Elegantly handle errors to avoid crashing your applications
- title: Plumber
  details: Easily handle warnings or errors to keep the service up
- title: Rmarkdown
  details: Handle errors when it matters without breaking your entire document.
footer: By Opifex
---

Dealing with errors and warnings in R is often limited to either letting them happen:

```r
foo <- function(x){
  print(x)
}

foo()
```

```
Error in print(x) : argument "x" is missing, with no default
```

Or simply using `stop()` and `warning()`.

```r
foo <- function(x){
  stopifnot(!missing(x))
  print(x)
}

foo()
```

```
Error in foo() : !missing(x) is not TRUE
```

You certainly do not want to let errors just happen and often calling `stop` to break code execution is not ideal: it crashes shiny applications and plumber services.

Erratum takes inspiration from Go's standard test package to provide some utilities to handle errors differently.
