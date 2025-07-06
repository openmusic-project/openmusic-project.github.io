OpenMusic Reference  
---  
[Prev](loopdo)| | [Next](funcref.main)  
  
* * *

# finaldo (finally)

![](figures/functions/control/finaldo.png)

  
  
finaldo (finally)  
  
(control module) \-- activated on the final repetition of `omloop`  

## Syntax

`` **finaldo**` patch &rest oppatch `

![Note](figures/images/note.gif)|

Though it is called `finaldo` in its LISP code, this function appears as
`finally` when used inside `omloop`. The reason eludes me.  
  
---|---  
  
## Inputs

name| data type(s)| comments  
---|---|---  
` _patch_`|  any|  
` _oppatch_`|  any| repeatable; allows multiple iterators to be triggered  
  
## Output

`finaldo` is actually the output of the entire loop. The input of `finaldo` is
passed to the output of the `omloop` that contains it, after the last
repetition of the loop.

## Description

![Note](figures/images/note.gif)|

`finaldo` is part of a group of functions for performing iterative
[loops](glossary#LOOP). They can only be used within an
[omloop](omloop) patch window. Since they only function within the
context of the entire repeating loop, they (or any function connected to them)
cannot be evaluated directly within the patch window. You must evaluate the
entire loop. See the entry on `omloop` for more information.  
  
---|---  
  
`finaldo` is part of the `omloop` patch window. It is vital to the correct
operation of the loop and cannot be deleted. `finaldo` will evaluate whatever
is connected to it on the last iteration of the loop, and pass that
information to the output(s) of the `omloop` that contains it. Adding inputs
to `finaldo` creates additional outputs of the `omloop` box. It is usually
connected to the second output of a collector to trigger to return the final
internal state of the loop, although additional functions are often placed
between it and the collector output to post-process the data in some way.

* * *

[Prev](loopdo)| [Home](index)| [Next](funcref.main)  
---|---|---  
loopdo (eachTime)| [Up](funcref.omloop)| OM Function Reference

