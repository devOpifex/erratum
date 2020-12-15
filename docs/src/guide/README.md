# Introduction

Sometimes one might want a more refined handling of errors in R. For
instance, in shiny applications or plumber APIs where using
`stop` crashes the service. Instead one might want to handle the error with more subtlety: erratum aims to enable this.

This inspired by Go's standard library; it makes it easier to standardise and handle error messages as well as warnings. Doing so forces the developer to deal with potential errors.
