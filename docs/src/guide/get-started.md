# Get Started

## Basics

The two core functions of the package are `e` and `w`, the former creates and error and the latter a warning.

```r
e("erratum!")
```

```r
erratum!
```

Note that this printed the error message (with `cat`) and thus does not actually stops code execution. However, `e` can stop code execution with the `stop` or `fatal` method (different names, identical execution, `fatal` is more expressive). 

::: tip
The `raise` method works for both errors and warnings.
:::

Perhaps even better is the method named `raise` which will simply raise the error (`stop`) if is one or raise the warning: one method for all issues.

```r
err <- e("erratum!")

# err$raise()
# err$stop()

err$fatal()
```

```
Error: erratum!
```

Similar for warnings, use `w` to create a warning object and use the `warn` method to throw an actual `warning`.

```r
www <- w("attention!")
www$warn()
```

```
Warning message:
attention! 
```

If you want to retrieve the message as a string to process it differently you can use the `message` field.

```r
(string <- www$message)

class(string)
```

```
[1] "attention!"
[1] "character"
```

## Standardisation

Erratum treats errors and warning as objects. This, amongst other things, allows for easy standardisation of messages.

```r
library(erratum)

err <- e("Input must be a numeric")

add_ <- function(x){
  if(!is.numeric(x))
    err$stop()

  x + 1
}

log_ <- function(x){
  if(!is.numeric(x))
    err$stop()

  log(x)
}

add_("one")
log_("two")
```

```
Error: Input must be a numeric
Error: Input must be a numeric
```

::: tip
Using [rules and checks](/guide/handling.html#rules-and-checks) is more convenient.
:::

## Templating

You can create a template that will be used to print errors and warnings. Make sure it includes `%s`: the warning or error message.

```r
template.e("Whoops: %s - sorry!")

e("Sumin' went wrong")
```

```
Whoops: Sumin' went wrong - sorry!
```

Note that it supports [crayon](https://github.com/r-lib/crayon).

```r
template.e(crayon::red("%s"))

e("Sumin' went wrong")
```

These can be reset by simply re-running the respective template function.

```r
template.e()
```