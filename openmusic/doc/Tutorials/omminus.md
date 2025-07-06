OpenMusic Reference  
---  
[Prev](omplus)| | [Next](omequal)  
  
* * *

# om-

![](figures/functions/arithmetic/omminus.png)

  
  
om-  
  
(arithmetic module) \-- returns the difference of two numbers or lists  

## Syntax

`` **om-**` self num `

## Inputs

name| data type(s)| comments  
---|---|---  
` _self_`|  a number or tree|  
` _num_`|  a number or tree|  
  
## Output

output| data type(s)| comments  
---|---|---  
first| a number or tree| returns the difference of the two products  
  
## Description

This function subtracts one number or trees from another. The two arguments do
not have to be of the same type; when subtracting a single number from a tree,
the single number is subtracted from each of the elements of the tree. For
example, subtracting 2 from (3 5) will yield (1 3). When subtracting one tree
from another, elements with the same ordinal position are subtracted from each
other. For example, subtracting (2 3) from (3 1) will yield (1 -2). If the two
trees are not of the same length, the extra elements of the longer list are
truncated. For example, subtracting (1 2 3) from (2 3 1 1 4) will yield (1 1
-2). These rules apply within nestings as well. For example, taking (1 2) from
(1 (3 1)) will yield (0 (1 -1)), since the element 2 in the first list is
paired with element (3 1) in the second.

* * *

[Prev](omplus)| [Home](index)| [Next](omequal)  
---|---|---  
om+| [Up](funcref.main)| om=

