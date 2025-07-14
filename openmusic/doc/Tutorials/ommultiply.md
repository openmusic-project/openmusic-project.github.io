OpenMusic Reference  
---  
[Prev](ompower)| | [Next](omdivide)  
  
* * *

# om*

![](figures/functions/arithmetic/ommultiply.png)

  
  
om*  
  
(arithmetic module) \-- returns the product of two numbers or lists  

## Syntax

   **om***  self num  

## Inputs

name| data type(s)| comments  
---|---|---  
  _self_ |  a number or tree|  
  _num_ |  a number or tree|  
  
## Output

output| data type(s)| comments  
---|---|---  
first| a number or tree| returns the product of the two inputs  
  
## Description

This function multiplies one number or tree by another. The two arguments do
not have to be of the same type; when multiplying a single number by a tree,
the single number is multiplyed by each of the elements of the tree. For
example, multiplying 2 by (3 5) will yield (1 3). When multiplying one tree by
another, elements with the same ordinal position are multiplyed by each other.
For example, multiplying (2 3) by (3 1) will yield (1 -2). If the two trees
are not of the same length, the extra elements of the longer list are
truncated. For example, multiplying (1 2 3) by (2 3 1 1 4) will yield (1 1
-2). These rules apply within nestings as well. For example, multiplying (1 2)
by (1 (3 1)) will yield (0 (1 -1)), since the element 2 in the first list is
paired with element (3 1) in the second.

![Note](figures/images/note.gif)|

The name of the  om*  function uses the asterisk to represent multiplication,
as is traditional in programming languages.  
  
---|---  
  
* * *

[Prev](ompower)| [Home](index)| [Next](omdivide)  
---|---|---  
om^| [Up](funcref.main)| om/

