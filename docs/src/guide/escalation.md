# Escalation

Error escalation is one of the more interesting features of the erratum. It's the concept of escalating an issue up until it should be dealt with.

## Basics

Take the example below for instance. There a function which we called `random.stuff` that might produce an error (in this case 1 chance out of two). This function is called by another, which is in turn called by another which uses the result to either stop code execution (with `resolve`) or compute something.

```r
random.stuff <- function(){
  s <- sample(1:10, 1)

  if(s <= 5)
    return(e("That's a problem!"))

  return(s)
}

foo <- function(){
  results <- random.stuff()

  # return the error if results is one
  skip(results)

  return(results)
}

bar <- function(){
  value <- foo()

  # resolve the error if needed
  resolve(value)

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

This is in fact very useful when you want to deal with errors somewhat differently, like in a shiny application where you might want to display a notification on error rather than crash or display an ugly error, or in Plumber where you would want to return the error message with status 400-you-messed-up or 500-we-messed-up.

This is, of course, doable without erratum but is rather painful when the error or warning is raised in a deeply nested function.

## Shiny

Shiny applications tend to be user input heavy and these may fail.

The application below takes as input the name of a column from the `cars` dataset, this is checked in a function nested in the call stack and makes it such that escalating the error can be tricky. Moreover we don't want use `stop` as this simply shows the error in the respective output from which is function is called.

Instead we escalate the error and display a notification if the input is incorrect.

```r
library(shiny)
library(erratum)

getCol <- function(var){
  if(!var %in% c("speed", "dist"))
    var <- e("Wrong column name")

  var
}

getData <- function(var){
  col <- getCol(var)
  skip(col)

  cars[[col]]
}

ui <- fluidPage(
  textInput(
    "varInput", 
    "Enter a column name from the `cars` dataset"
  ),
  verbatimTextOutput("varOutput")
)

server <- function(input, output){
  output$varOutput <- renderPrint({
    data <- getData(input$varInput)

    if(is.e(data)){
      showNotification(data$message, type = "error")
      return(data$message)
    }

    data
  })
}

shinyApp(ui, server)
```

One could of course place `showNotification` in the `getCol` function but then this function becomes less portable; it cannot really be used outside of the shiny application and the error cannot be treated differently elsewhere in the application.

```r
getCol <- function(var){
  if(!var %in% c("speed", "dist"))
    showNotification("Wrong column name")

  var
}
```

## Plumber

In plumber, very similar to what was done in shiny, although at the instead of showing a notification the error can be escalated and handled properly by setting the response status code correctly.

```r
#* Get Uppercase string
#* @param msg The message to turn uppercase
#* @get /upper
function(req, res, msg="") {
  uppercase <- parseMessage(msg)

  if(is.e(uppercase)){
    res$status <- 400L
    return(uppercase$message)
  }

  list(msg = uppercase)
}

parseMessage <- function(msg){
  msg <- checkMessage(msg)
  skip(msg)

  toupper(msg)
}

checkMessage <- function(msg){
  if(msg == "")
    return(e("Empty string"))
  
  msg
}
```

```r
pr("test.R") %>% 
  pr_run(port = 8000) 
```
