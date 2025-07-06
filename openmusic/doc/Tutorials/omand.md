OpenMusic Reference  
---  
[Prev](omor)| | [Next](om-abs)  
  
* * *

# omand

![](figures/functions/predicates/omand.png)

  
  
omand  
  
(predicates module) \-- performs boolean logical **and**  

## Syntax

`` **omand**` self &rest rest `

## Inputs

name| data type(s)| comments  
---|---|---  
` _self_`|  any|  
` _rest_`|  any| repeatable; additional values to compare  
  
## Output

output| data type(s)| comments  
---|---|---  
first| t or nil|  
  
## Description

This [_predicate_](glossary#PREDICATE) function performs the
[_Boolean_](glossary#BOOLEAN) logical `and` on any number of values. It
returns t only if all the inputs have a value of t.

* * *

[Prev](omor)| [Home](index)| [Next](om-abs)  
---|---|---  
omor| [Up](funcref.main)| om-abs

