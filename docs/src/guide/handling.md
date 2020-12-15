# Handling

The basics themselves only bring so much to error handling in R; they, however, enable a lot more.

## Check

One can check whether the object returned is an error or a warning with `is.e` and `is.w` respectively.

```r
x <- e("This is an error")

is.e(x)
```

```
[1] TRUE
```

## Jab

The function `jab` is analogous to `tryCatch` but will use `err`
internally. It also allows passing `e` and `w` along to easily reuse
error messages.

```r
safe_log <- function(x){
 result <- jab(log(x))
 
 if(is.e(result))
   result$stop()

 return(result)
} 

safe_log("a")
```

```
Error in safe_log("a"): non-numeric argument to mathematical function
```

## Enforce

Instead of checking the results of `tryCatch` with an `if` statement, one might want to use `enforce` which will check whether the result is an error or a warning and deal with it accordingly (`stop` or `warning`).

```r
err <- e("Log only accepts numeric(s)")

safe_log <- function(x){
 result <- jab(log(x), e = err)
 enforce(result)

 return(result)
} 

safe_log("a")
```

```
Error: Log only accepts numeric(s)
```

The `enforce` function accepts multiple objects, note that these are
evaluated in order.

```r
x <- "just a string"
www <- w("Caution")
err <- e("Broken!")

enforce(x, www, err)
```

```
Warning: Caution
Error: Broken!
```

One can, of course, `enforce` objects that are not errors or warnings: nothing happens.

```r
enforce(x)
```

## Defer Enforce

You can also use `defer_enforce` to defer the enforce when the function
exits.

```r
safe_log <- function(x){
 result <- jab(log(x), e = e("Gah!"))
 defer_enforce(result)

 print("Doing something here")

 return(result)
} 

safe_log(10)
```

```
[1] "Doing something here"
#> [1] 2.302585
```

```r
safe_log("a")
```

```
[1] "Doing something here"
Error: Gah!
```

## Latch

Errors and warnings can also be latched onto objects so they can be
dealt with later, functions such as `is.e` or `enforce` will also work on those objects.

```r
x <- 1
problematic <- latch.e(x, e("Not right"))

is.e(problematic)
```

```
[1] TRUE
```

This allows escalating the error or warning so it can be dealt with later, e.g.: the problematic object created above with `latch.e` can be passed to another function where it raises an error.

```r
do_sth_with_x <- function(x){
 enforce(x)
 x + 1
}

do_sth_with_x(x)
```

```
[1] 2
```

```r
do_sth_with_x(problematic)
```

```
Error: Not right
```

You can use `unlatch` to resolve these.

```r
unlatch(problematic)
```

```r
[1] 1
```

## Skip

The `skip` function is similar to enforce but instead of calling `stop` or `warning` it `return`s the error or warning object from the parent function. This is useful to escalate the error to the parent function.

```r
# foo always returns an error
foo <- function(){
  e("Problem!")
}

# bar calls foo
bar <- function(){
  x <- foo()
  skip(x)
  print("This should not print")
  return(1)
}

# baz calls bar
baz <- function(){
  y <- bar()
  enforce(y)
  print("This should not print either")
}

baz()
```

```
Error: Problem!
```

In the above the print message in `bar` is never printed, neither is the one in `baz`: `skip` returned the error message which was then checked with `enforce` and the error is actually raised. 

::: tip
You can also set the `w` argument of the `skip` function to `TRUE` to skip warnings, e.g.: `skip(x, w = TRUE)`
:::

You can call `skip` as many times as you want to escalate the error back as much as necessary.

