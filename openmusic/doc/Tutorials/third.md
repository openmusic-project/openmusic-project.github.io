OpenMusic Reference  
---  
[Prev](temporalboxes)| | [Next](volume)  
  
* * *

# third

![](figures/functions/lisp/third.png)

  
  
third  
  
(LISP function) \-- returns the third element of a list, using one-based
addressing  

## Syntax

`` **third**` list `

## Inputs

name| data type(s)| comments  
---|---|---  
` _list_`|  a list or tree|  
  
## Output

output| data type(s)| comments  
---|---|---  
first| any|  
  
## Description

This function returns the [caddr](glossary#CADDR) of `_list_` , the third
element of the list. In this case, 'third' refers to human numbering, where
addresses start with one, and not zero.

![Note](figures/images/note.gif)|  **LISP functions**  
---|---  
 |

The basic LISP functions are too numerous to document comprehensively in this
manual. As an aid to the neophyte, the most commonly used have been included
in this documentation, but they represent a small fraction of the total
functionality of the [MCL](glossary#MCL) environment. Numerous on-line
resources exist, for instance the [online version of _Common Lisp the
Language, 2nd Edition_.](http://www-2.cs.cmu.edu/afs/cs.cmu.edu/project/ai-
repository/ai/cltl/clm/)  
  
* * *

[Prev](temporalboxes)| [Home](index)| [Next](volume)  
---|---|---  
temporalboxes| [Up](funcref.main)| volume

