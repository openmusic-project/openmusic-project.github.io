OpenMusic Reference  
---  
[Prev](list-of-chords-in)| | [Next](list-of-int-between)  
  
* * *

# list-of-members-of

![](figures/functions/backtrack/list-of-members-of.png)

  
  
list-of-members-of  
  
(backtrack module) \-- Defines a list of Screamer variables according to
domains  

## Syntax

`` **list-of-members-of**` n dom `

## Inputs

name| data type(s)| comments  
---|---|---  
` _n_`|  a positive integer| the length of the list  
` _dom_`|  a list| the domain for the variables  
  
## Output

output| data type(s)| comments  
---|---|---  
first| a list| outputs a list of `_n_` variables in `_dom_`  
  
## Description

Defines a list of Screamer variables, each being a member of the set `_dom_`.
The values depend on the backtracking caused by the constraints.

* * *

[Prev](list-of-chords-in)| [Home](index)| [Next](list-of-int-
between)  
---|---|---  
list-of-chords-in| [Up](funcref.main)| list-of-integers-between

