OpenMusic Reference  
---  
[Prev](repeat-n)| | [Next](reverse)  
  
* * *

# rest

![](figures/functions/lisp/rest.png)

  
  
rest  
  
(LISP function) \-- returns the [_cdr_](glossary#CDR) of  _list_   

## Syntax

   **rest**  list  

## Inputs

name| data type(s)| comments  
---|---|---  
_list_ |  a list or tree|  
  
## Output

output| data type(s)| comments  
---|---|---  
first| a tree|  
  
## Description

This function returns the [_cdr_](glossary#CDR) of  _list_  , the list
minus its first element. It can be used with  setf  to set the cdr of a list.
**The list function  rest  must not be confused with the OM class **Rest**.**

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

[Prev](repeat-n)| [Home](index)| [Next](reverse)  
---|---|---  
repeat-n| [Up](funcref.main)| reverse

