OpenMusic Reference  
---  
[Prev](accumulator)| | [Next](finaldo)  
  
* * *

# loopdo (eachTime)

![](figures/functions/control/loopdo.png)

  
  
loopdo (eachTime)  
  
(control module) \-- activated at each repetition of  omloop  except the last  

## Syntax

   **loopdo**  patch &rest oppatch  

![Note](figures/images/note.gif)|

Though it is called  loopdo  in its LISP code, this function appears as
 eachTime  when used inside  omloop . The reason eludes me.  
  
---|---  
  
## Inputs

name| data type(s)| comments  
---|---|---  
  _patch_ |  any|  
  _oppatch_ |  any| repeatable; allows multiple iterators to be triggered  
  
## Output

None.

## Description

![Note](figures/images/note.gif)|

 loopdo  is part of a group of functions for performing iterative
[loops](glossary#LOOP). They can only be used within an
[omloop](omloop) patch window. Since they only function within the
context of the entire repeating loop, they (or any function connected to them)
cannot be evaluated directly within the patch window. You must evaluate the
entire loop. See the entry on  omloop  for more information.  
  
---|---  
  
 loopdo  is part of the  omloop  patch window. It is vital to the correct
operation of the loop and cannot be deleted.  loopdo  will evaluate whatever
is connected to it on each repetition of the loop except the last. It is
usually connected to the first output of a collector to trigger in order that
some sort of calculation be made on each repetition of the loop.

* * *

[Prev](accumulator)| [Home](index)| [Next](finaldo)  
---|---|---  
accumulator| [Up](funcref.omloop)| finaldo (finally)

