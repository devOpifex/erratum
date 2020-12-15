# About

This package was created for three core reasons.

1. I've recently encounter a few cases where __escalating errors and warnings__ was imperative (e.g.: [titan](https://titan.opifex.org)), though it's of course possible in base R I found rather unwieldy and wanted to create a better tool for myself.
2. The reason I wanted to escalate errors is because I needed to __resolve errors__ differently than the go-to `stop`. The problem with the latter is that it breaks code execution and, in places like shiny, and plumber crashes the application, which is hardly what one wants.
3. Too often __issues are not thought through properly__; too often one simply calls `stop` or `warning` without thinking about their implication or meaning.

To be clear, there is nothing you can do with erratum that you cannot do in base R but I hope that erratum makes it easier (in places).

Erratum forces the developer to consider errors and warnings more rigorously and deal with them explicitly rather than let them happen. It also provides much convenience in escalating, and manipulating errors. 
