# Escalation

Error escalation is one of the more interesting features of the erratum. It's the concept of escalating an issue up until it should be dealt with.

Take the example below for instance. There a function which we called `random.stuff` that might produce an error (in this case 1 chance out of two). This function is called by another, which is in turn called by another which uses the result to either stop code execution (with `enforce`) or compute something. 

```r
random.stuff <- function(){
  s <- sample(1:10, 1)

  if(s <= 5)
    return(e("That's a problem!"))

  return(s)
}

foo <- function(){
  results <- random.stuff()

  if(is.e(results))
    results$return()

  return(results)
}

bar <- function(){
  value <- foo()

  enforce(value)

  log(value)
}

bar()
```

```
2.197225
```

```r
bar()
```

```
Error: That's a problem!
```

This is in fact very useful when you want to deal with errors somewhat differently, like in a shiny application where you might want to display a notification on error rather than crash or in Plumber where you would want to return the error message with status = you-messed-up.

This is, of course, doable without erratum but is rather painful (try it) when the error or warning is raised in a deeply nested function.
