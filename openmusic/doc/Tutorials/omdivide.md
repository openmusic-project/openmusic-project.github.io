OpenMusic Reference  
---  
[Prev](ommultiply)| | [Next](omeucdivide)  
  
* * *

# om/

![](figures/functions/arithmetic/omdivide.png)

  
  
om/  
  
(arithmetic module) \-- returns the quotient of two numbers or lists  

## Syntax

   **om/**  self num  

## Inputs

name| data type(s)| comments  
---|---|---  
  _self_ |  a number or tree|  
  _num_ |  a number or tree|  
  
## Output

output| data type(s)| comments  
---|---|---  
first| a number or tree| returns the quotient of the two inputs  
  
## Description

This function divides one number or tree by another. The two arguments do not
have to be of the same type; when dividing a tree by a single number, each of
the elements of the tree is divided by the single number. For example,
dividing (3 1.5) by 3 will yield (1 .5). When dividing one tree by another,
elements with the same ordinal position are divided by each other. For
example, dividing (10 5) by (10 2) will yield (1 2.5). If the two trees are
not of the same length, the extra elements of the longer list are truncated.
For example, dividing (12 2 3) by (2 2 6 1 4) will yield (6 1 .5). These rules
apply within nestings as well. For example, dividing (8 6) by (4 (2 3)) will
yield (2 (3 2)), since the element 6 in the first list is paired with element
(2 3) in the second.

![Note](figures/images/note.gif)|

The name of the  om/  function uses the slash to represent division, as is
traditional in programming languages.  
  
---|---  
  
* * *

[Prev](ommultiply)| [Home](index)| [Next](omeucdivide)  
---|---|---  
om*| [Up](funcref.main)| om//

