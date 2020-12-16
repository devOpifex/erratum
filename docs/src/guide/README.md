# Introduction

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

Erratum takes inspiration from Go's standard test package to provide some utilities to handle errors differently, partly tackling the aforementioned issues.

## Handling errors

Some thoughts on handling errors and what erratum enables.

1. There are many cases where __escalating errors and warnings__ is imperative (e.g.: [titan](https://titan.opifex.org)), though it's of course possible in base R it is rather unwieldy.
2. One reason for escalation is to __resolve errors__ differently than the go-to `stop`. The problem with the latter is that it breaks code execution and, in places like shiny, and plumber, crashes the application, which is hardly what one wants.
3. Too often __issues are not considered properly__; one simply calls `stop` or `warning` without thinking about their implication or meaning.

To be clear, there is nothing you can do with erratum that you cannot do in base R but I hope that erratum makes it easier (in places).

Erratum forces the developer to consider errors and warnings more rigorously and deal with them explicitly rather than let them happen. It also provides much convenience in escalating, and manipulating errors. 

