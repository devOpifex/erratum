# Introduction

A brief introduction to the core issues that pushed to the creation of erratum.

## Examples

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

You certainly do not want to let errors just happen and often calling `stop` to break code execution is not ideal, but what else can you do? 

There is an error alright. But maybe it should not be dealt with there and then. 

Erratum takes inspiration from Go's standard test package to provide some utilities to handle errors differently, partly tackling the aforementioned issues.

In Go errors are objects, in erratum they are too. The advantage is that one does not have to call `stop` or deal with it at that very moment. The error can be escalated and dealt with where appropriate and more elegantly; you can decorate them with more information, ignore them, but you are forced to think about how to deal with it at least (and not just call `stop`).

Erratum let's you have errors as values, not exceptions that have to be dealt with immediately, you can store them, put them in a list, send them to the your aunt, do what you want with them:
they're just values. 

## Handling errors

Some thoughts on handling errors and what erratum enables.

1. There are many cases where __escalating errors and warnings__ is imperative (e.g.: [titan](https://titan.opifex.org)), though it's of course possible in base R it is rather unwieldy.
2. One reason for escalation is to __resolve errors differently__ than the go-to `stop`. The problem with the latter is that it breaks code execution and, in places like shiny, and plumber, can cause unwanted user-facing embarassement.
3. Because we use `stop` we __force others__ to use control structures such as `tryCatch` that make for poor programs. Return the error and let the user deal with it how they feel rather than force them to wrap, every call to your function with a `try*`.
4. Too often __issues are not considered properly__; one simply calls `stop` or `warning` without thinking about their implication or meaning. 

To be clear, there is nothing you can do with erratum that you cannot do in base R but I hope that erratum makes it easier (in places).

Erratum forces the developer to consider errors and warnings more rigorously and deal with them explicitly rather than let them happen. It also provides much convenience in escalating, and manipulating errors. 

