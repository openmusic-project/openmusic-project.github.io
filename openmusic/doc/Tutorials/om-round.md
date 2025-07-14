OpenMusic Reference  
---  
[Prev](om-random)| | [Next](om-scale)  
  
* * *

# om-round

![](figures/functions/arithmetic/om-round.png)

  
  
om-round  
  
(arithmetic module) \-- Rounds a number or numbers  

## Syntax

   **om-round**  self &optional decimals &optional divisor  

## Inputs

name| data type(s)| comments  
---|---|---  
  _self_ |  a number or tree|  
  _decimals_ |  a non-negative integer| optional; defaults to 0  
  _divisor_ |  a number| optional; defaults to 1  
  
## Output

output| data type(s)| comments  
---|---|---  
first| a number; a tree| returns the number or numbers rounded to  _decimal_ decimal places  
  
## Description

Rounds a number or tree to the number of decimal places specified at
 _decimal_ . If  _decimal_  is omitted,  _self_  is rounded to the nearest
integer. If  _self_  is a tree, then a tree of identical dimensions is
returned, containing all the elements of the tree, rounded.

The second optional input,  _divisor_  is used to specify a number by which to
divide  _self_  (or all elements of  _self_  ) before rounding.

* * *

[Prev](om-random)| [Home](index)| [Next](om-scale)  
---|---|---  
om-random| [Up](funcref.main)| om-scale

