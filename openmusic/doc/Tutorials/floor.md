OpenMusic Reference  
---  
[Prev](flatlisp)| | [Next](funcall)  
  
* * *

# floor

![](figures/functions/lisp/floor.png)

  
  
floor  
  
(lisp module) \-- rounds a number down to the nearest integer  

## Syntax

   **floor**  number &optional divisor  

## Inputs

name| data type(s)| comments  
---|---|---  
  _number_ |  a number|  
  _divisor_ |  a number| optional; defaults to nil  
  
## Output

output| data type(s)| comments  
---|---|---  
first| an integer|  
  
## Description

The  floor  function rounds a number down to the next lowest integer. The
operation is equivalent to dividing the number by one and discarding the
remainder. 2.3 would be rounded down to 2; 5/3 would be rounded down to 1;
-2.3 would be rounded **down** to -3. The optional second input specifies a
divisor. If it is present **and** not nil, the first input is divided by the
second and  floor  is applied to the result.

 floor  will not work on a list; to do this, use the  om//  function with the
divisor set to 1.

* * *

[Prev](flatlisp)| [Home](index)| [Next](funcall)  
---|---|---  
flat| [Up](funcref.main)| funcall

