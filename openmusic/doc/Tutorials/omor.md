OpenMusic Reference  
---  
[Prev](omgreaterorequal)| | [Next](omand)  
  
* * *

# omor

![](figures/functions/predicates/omor.png)

  
  
omor  
  
(predicates module) \-- performs boolean logical **or**  

## Syntax

`` **omor**` self &rest rest `

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
[_Boolean_](glossary#BOOLEAN) logical `or` on any number of values. It
returns t if any of the inputs have a value of t.

* * *

[Prev](omgreaterorequal)| [Home](index)| [Next](omand)  
---|---|---  
om>=| [Up](funcref.main)| omand

