OpenMusic Reference  
---  
[Prev](align-chords)| | [Next](apply)  
  
* * *

# append

![](figures/functions/lisp/append.png)

  
  
append  
  
(LISP function) \-- appends one list to another  

## Syntax

   **append**  &restlists  

## Inputs

name| data type(s)| comments  
---|---|---  
  _lists_ |  lists or trees| repeatable  
  
## Output

output| data type(s)| comments  
---|---|---  
first| a list or tree|  
  
## Description

This function appends one list to another. The level of
[nesting](glossary#NESTING) is not changed in the two lists. Though you
may add as many inputs as you like, they must all be lists. A more flexible
function is [ x-append ](x-append), which permits both atoms and lists.

***

 ![Note](figures/images/note.gif) 
 
| **LISP functions**|
|--|
| The basic LISP functions are too numerous to document comprehensively in this manual. As an aid to the neophyte, the most commonly used have been included in this documentation, but they represent a small fraction of the total functionality of the [_MCL_](glossary#MCL) environment. Numerous on-line resources exist, for instance the [online version of _Common Lisp the Language, 2nd Edition_.](https://www.cs.cmu.edu/Groups/AI/html/cltl/clm/clm.html)|


***

[Prev](align-chords)| [Home](index)| [Next](apply)  
---|---|---  
align-chords| [Up](funcref.main)| apply

