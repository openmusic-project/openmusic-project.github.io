OpenMusic Reference  
---  
[Prev](rest)| | [Next](rotate)  
  
* * *

# reverse

![](figures/functions/lisp/reverse.png)

  
  
reverse  
  
(LISP function) \-- returns  _sequence_  backwards  

## Syntax

   **reverse**  sequence  

## Inputs

name| data type(s)| comments  
---|---|---  
 _sequence_ |  a list or tree|  
  
## Output

output| data type(s)| comments  
---|---|---  
first| a tree|  
  
## Description

This function returns a new list with the elements of  _sequence_  reversed.
The original  _sequence_  is not modified.  reverse  does not reverse elements
in sublists.

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

[Prev](rest)| [Home](index)| [Next](rotate)  
---|---|---  
rest| [Up](funcref.main)| rotate

