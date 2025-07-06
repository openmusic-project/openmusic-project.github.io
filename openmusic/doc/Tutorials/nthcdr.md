OpenMusic Reference  
---  
[Prev](nth)| | [Next](nth-random)  
  
* * *

# nthcdr

![](figures/functions/lisp/nthcdr.png)

  
  
nthcdr  
  
(LISP function) \-- returns `_list_` without its first _n_ elements  

## Syntax

`` **nthcdr**` n list `

## Inputs

name| data type(s)| comments  
---|---|---  
` _n_`|  a non-negative integer|  
` _list_`|  a list or tree|  
  
## Output

output| data type(s)| comments  
---|---|---  
first| a tree|  
  
## Description

This function performs the operation [_`cdr`_](glossary#CDR) `_n_` times
on `_list_` and returns the result. The effect is that the first `_n_`
elements are removed.

![Note](figures/images/note.gif)| **LISP functions**  
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

[Prev](nth)| [Home](index)| [Next](nth-random)  
---|---|---  
nth| [Up](funcref.main)| nth-random

