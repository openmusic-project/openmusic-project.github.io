OpenMusic Reference  
---  
[Prev](omquantify)| | [Next](patterns)  
  
* * *

# orbites

![](figures/functions/zn/orbites.png)

  
  
orbites  
  
(Zn module) \-- returns a list of set classes of
[_cardinality_](glossary#CARDINALITY)  _k_  for an  _n_  -tone octave.  

## Syntax

   **orbites**  n k howmany  

## Inputs

name| data type(s)| comments  
---|---|---  
  _n_ |  an integer| must be more than 2; defaults to 12  
  _k_ |  a positive integer| defaults to 6  
  _howmany_ |  a positive integer| allows you to limit the number of answers returned  
  
## Output

output| data type(s)| comments  
---|---|---  
first| a tree representing a list of set classes|  
  
## Description

 orbites  is so named because its output can be plugged into an
[**N-cercle**](n-cercle) factory and displayed as a series of points on
the 'orbit' of a circle. An "orbit" is a set class represented graphically on
a circle.

The first input,  _n_  , sets the number of equal subdivisions of the octave
for the calculation. If you're working in traditional 12-tone space, the
default setting of 12 is what you want. If you're not, set it here, and be
sure to pass the same value to [ card ](card) and **N-cercle** if you're
using them.

The second input,  _k_  , sets [_cardinality_](glossary#CARDINALITY) of
the resulting sets.

The third input,  _howmany_  , sets the number of sets returned. If you want
all the possible sets for a given cardinality, use the  card  function to find
this number and pass its output to this input. Be sure to set the  _n_  input
of both functions to the same value if you're not using the default 12-tone
space.

The output is a list of lists of length  _k_ . These can be plugged right into
the last input of an **N-cercle** object for visualization.

![Note](figures/images/note.gif)|

While  orbites  outputs unique set classes, they are not necessarily in their
prime form.  
  
---|---  
  
* * *

[Prev](omquantify)| [Home](index)| [Next](patterns)  
---|---|---  
omquantify| [Up](funcref.main)| patterns

