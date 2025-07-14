OpenMusic Reference  
---  
[Prev](omdivide)| | [Next](omplus)  
  
* * *

# om//

![](figures/functions/arithmetic/omeucdivide.png)

  
  
om//  
  
(arithmetic module) \-- performs euclidian division (division with
remainder)on two numbers or lists  

## Syntax

   **om//**  self divisor  

## Inputs

name| data type(s)| comments  
---|---|---  
  _self_ |  a number or tree|  
  _divisor_ |  a number or tree|  
  
## Output

output| data type(s)| comments  
---|---|---  
first| a number or tree| returns the integer quotient of the two inputs  
second| a number or tree| returns the remainder of the division of the two
inputs  
  
## Description

This function performs euclidian division on two numbers or trees. It has two
outputs; the first returns the whole number quotient or quotients of the
operation; the second returns the remainder or remainders of the division,
which may or may not be whole numbers.

The arguments need not be of the same type- a list may be divided by a number
or another list. When the arguments are not of the same type,  om//  pairs
them up in the same manner as [ om/ ](omdivide)

When the divisor is 1, the first output is equivalent to the
[ floor ](floor) function.

* * *

[Prev](omdivide)| [Home](index)| [Next](omplus)  
---|---|---  
om/| [Up](funcref.main)| om+

