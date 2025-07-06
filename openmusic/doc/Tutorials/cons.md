OpenMusic Reference  
---  
[Prev](conditional)| | [Next](cos)  
  
* * *

# cons

![](figures/functions/lisp/cons.png)

  
  
cons  
  
(LISP function) \-- returns a list  

## Syntax

`` **cons**` x list-or-thing `

## Inputs

name| data type(s)| comments  
---|---|---  
` _x_`|  any|  
` _list-or-thing_`|  any|  
  
## Output

output| data type(s)| comments  
---|---|---  
first| a list or tree|  
  
## Description

This function allocates a new cons cell whose [_car_](glossary#CAR) is
`_x_` and whose cdr is `_list-or-thing_`. If you're just looking to create a
list, use [`list`](list).

![Note](figures/images/note.gif)|  **LISP functions**  
---|---  
 |

The basic LISP functions are too numerous to document comprehensively in this
manual. As an aid to the neophyte, the most commonly used have been included
in this documentation, but they represent a small fraction of the total
functionality of the [_MCL_](glossary#MCL) environment. Numerous on-line
resources exist, for instance the [online version of _Common Lisp the
Language, 2nd Edition_.](http://www-2.cs.cmu.edu/afs/cs.cmu.edu/project/ai-
repository/ai/cltl/clm/)  
  
* * *

[Prev](conditional)| [Home](index)| [Next](cos)  
---|---|---  
conditional| [Up](funcref.main)| cos

