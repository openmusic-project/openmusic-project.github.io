OpenMusic Reference  
---  
[Prev](arithm-ser)| | [Next](band-filter)  
  
* * *

# atom

![](figures/functions/lisp/atom.png)

  
  
atom  
  
(lisp module) \-- returns t if  _data-object_  is a single element (not a
list)  

## Syntax

   **atom**  data-object  

## Inputs

name| data type(s)| comments  
---|---|---  
  _data-object_ |  any|  
  
## Output

output| data type(s)| comments  
---|---|---  
first| t or nil|  
  
## Description

This predicate returns t if and only if its input is a single element (an
atom), not a list. Otherwise, returns nil. The one exception is the empty list
(), which is both an atom and a list and will return t

* * *

[Prev](arithm-ser)| [Home](index)| [Next](band-filter)  
---|---|---  
arithm-ser| [Up](funcref.main)| band-filter

