OpenMusic Reference  
---  
[Prev](save-as-midi)| | [Next](select)  
  
* * *

# second

![](figures/functions/lisp/second.png)

  
  
second  
  
(LISP function) \-- returns the second element of a list, using one-based
addressing  

## Syntax

   **second**  ` list  `

## Inputs

name| data type(s)| comments  
---|---|---  
_list_ |  a list or tree|  
  
## Output

output| data type(s)| comments  
---|---|---  
first| any|  
  
## Description

This function returns the [_cadr_](glossary#CADR) of  _list_  , the
second element of the list. In this case, 'second' refers to human numbering,
where addresses start with one, and not zero.

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

[Prev](save-as-midi)| [Home](index)| [Next](select)  
---|---|---  
save-as-midi| [Up](funcref.main)| select

