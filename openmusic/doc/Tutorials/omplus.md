OpenMusic Reference  
---  
[Prev](omeucdivide)| | [Next](omminus)  
  
* * *

# om+

![](figures/functions/arithmetic/omplus.png)

  
  
om+  
  
(arithmetic module) \-- returns the sum of two numbers or lists  

## Syntax

   **om+**  self num  

## Inputs

name| data type(s)| comments  
---|---|---  
  _self_ |  a number or tree|  
  _num_ |  a number or tree|  
  
## Output

output| data type(s)| comments  
---|---|---  
first| a number or tree| returns the sum of the two inputs  
  
## Description

This function adds two numbers or trees. The two arguments do not have to be
of the same type; when adding a single number and a tree, the single number is
added to each of the elements of the tree. For example, adding 2 and (3 5)
will yield (5 7). When adding two trees, elements with the same ordinal
position are added. For example, adding (1 2 3) and (2 3 1) will yield (3 5 4)
If the two trees are not of the same length, the extra elements of the longer
list are truncated. For example, adding (1 2 3) and (2 3 1 1 4) will yield (3
5 4). These rules apply within nestings as well. For example, adding (1 2) and
(1 (3 1)) will yield (2 (5 3)), since the element 2 in the first list is
paired with element (3 1) in the second.

* * *

[Prev](omeucdivide)| [Home](index)| [Next](omminus)  
---|---|---  
om//| [Up](funcref.main)| om-

