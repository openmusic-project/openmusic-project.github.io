OpenMusic Reference  
---  
[Prev](om-e)| | [Next](om-max)  
  
* * *

# om-log

![](figures/functions/arithmetic/om-log.png)

  
  
om-log  
  
(arithmetic module) \-- returns the natural logarithm of a number  

## Syntax

`` **om-e**` self &optional base `

## Inputs

name| data type(s)| comments  
---|---|---  
` _self_`|  a number or tree|  
` _base_`|  a number| optional; the base for which to calculate the logarithm  
  
## Output

output| data type(s)| comments  
---|---|---  
first| a number; a tree| returns the natural logarithm of the number or tree
at `_self_`  
  
## Description

Returns the natural logarithm of `_self_`. The natural logarithm is the power
to which _e_ must be raised to yield a number (see below). Bases other than
_e_ may be used by putting them into the optional second input.

If `_self_` is a tree, then a tree of identical dimensions is returned,
containing the logarithm of every element of the tree.

![Note](figures/images/note.gif)|

 _e_ is a mathematical constant, like � (pi). It is the natural logarithm, the
unique function which is its own derivative (the derivative of _e x_ is _e
x_.) If you don't know what this is, don't worry about it- you probably won't
need to use it.  
  
---|---  
  
* * *

[Prev](om-e)| [Home](index)| [Next](om-max)  
---|---|---  
om-e| [Up](funcref.main)| om-max

