OpenMusic Reference  
---  
[Prev](decompo)| | [Next](dx-x)  
  
* * *

# denominator

![](figures/functions/lisp/denominator.png)

  
  
denominator  
  
(lisp module) \-- returns the denominator of the canonical reduced form of
 _rational_ .  

## Syntax

   **denominator**  rational  

## Inputs

name| data type(s)| comments  
---|---|---  
  _rational_ |  a rational|  
  
## Output

output| data type(s)| comments  
---|---|---  
first| an integer|  
  
## Description

Returns the bottom half of a fraction expressed as _a/b_. The fraction is
automatically converted to the canonical reduced form, that is, both the
denominator and denominator are divided by their highest common divisor, if
one exists. _2/4_ , for example, would be converted to _1/2_ before the
numerator is dropped.  denominator  of an integer returns 1.

* * *

[Prev](decompo)| [Home](index)| [Next](dx-x)  
---|---|---  
decompo| [Up](funcref.main)| dx->x

