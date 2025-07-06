OpenMusic Reference  
---  
[Prev](omminus)| | [Next](omnotequal)  
  
* * *

# om=

![](figures/functions/predicates/omequal.png)

  
  
om=  
  
(predicates module) \-- returns t if `_self_` and `_num_` are equal  

## Syntax

`` **om=**` self num `

## Inputs

name| data type(s)| comments  
---|---|---  
` _self_`|  a number|  
` _num_`|  a number|  
  
## Output

output| data type(s)| comments  
---|---|---  
first| t or nil|  
  
## Description

This [_predicate_](glossary#PREDICATE) function returns t if and only if
the two inputs have the same value. `om=` works only with numbers of the same
type. (i.e. there are problems comparing rationals and floats) If you need to
compare other types of data, use the LISP function [`equal`](equal).

* * *

[Prev](omminus)| [Home](index)| [Next](omnotequal)  
---|---|---  
om-| [Up](funcref.main)| om/=

