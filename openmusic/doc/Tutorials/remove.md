OpenMusic Reference  
---  
[Prev](reduce-tree)| | [Next](remove-dup)  
  
* * *

# remove

![](figures/functions/lisp/remove.png)

  
  
remove  
  
(LISP function) \-- returns a list with certain items removed  

## Syntax

`` **remove**` item sequence &optional &key :count :start :end :from-end :test
:test-not :key `

## Inputs

name| data type(s)| comments  
---|---|---  
` _item_`|  any|  
` _sequence_`|  a tree|  
  
## Output

output| data type(s)| comments  
---|---|---  
first| a list or tree|  
  
## Description

Returns a new sequence with occurences of `_item_` removed. `remove` only
processes the first level of the list; sublists are not processed unless they
themselves are equivalent to `_item_`. The original sequence is not modified.
The destructive counterpart of `remove` is `delete`.

The functions [`list-filter`](list-filter) and [`table-filter`](table-
filter) provide more flexible ways of removing elements from lists.

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

[Prev](reduce-tree)| [Home](index)| [Next](remove-dup)  
---|---|---  
reduce-tree| [Up](funcref.main)| remove-dup

