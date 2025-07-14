OpenMusic Reference  
---  
[Prev](canon-n)| | [Next](card)  
  
* * *

# canons

![](figures/functions/zn/canons.png)

  
  
canons  
  
(Zn module) \-- Constructs a Regular Complementary Canon of Maximal Category
from two rhythmic structures R and S representing the ground rhythm and the
rhythm of entries of the voices  

## Syntax

   **canons**  r s times &optional &key:poly? :beats :mindiv :sign  

## Inputs

name| data type(s)| comments  
---|---|---  
  _r_ |  a list of integers| the intervals between attacks of the ground rhythmic pattern  
  _s_ |  a list of integers| the intervals between entries of the voices  
  _:poly?_ |  t or nil| keyword input; whether to produce a **Poly** object. If not t, [ canons ](canons) produces a **Multi-seq**.  
  _:beats_ |  a positive integer| keyword input; the length of the pulses, in milliseconds, when creating a **Multi-seq** object. **Should not be used if _:poly?_  is set to t. Defaults to 250.**  
  _:mindiv_ |  a positive power of 2 (an integer)| keyword input; sets the length of the pulse for **Poly** objects. 8 is the eighth note. 16 is the sixteenth, etc. Defaults to 8  
  _:sign_ |  a list of 2 integers| keyword input; the time signature for the **Poly** object in the form (a b)  
  
## Output

output| data type(s)| comments  
---|---|---  
first| a **Chord-seq** or **Poly** object| the canon  
  
## Description

This module constructs a Regular Complementary Canon of Maximal Category from
two lists of integers representing the ground rhythm and the intervals between
the entries of the voices, both determined with the
[ patterns ](patterns) function, and entered at the first and second
inputs.

The third input determines how many times the canon will repeat in each voice;
it must be enough times that the first voice is still sounding when the last
voice enters in order to produce a RCMC canon. In addition, four keyword
inputs give you additional control over the type of result.

[ canons ](canons) will produce a **Multi-seq** object by default. The
patterns  _r_  and  _s_  are translated into durations by multiplying them by
250 milliseconds. You can change this value by using the  _:beats_  keyword
input.

[ canons ](canons) can also produce **Poly** objects. To do this, use the
 _:poly?_  input and set it to the truth value t. If you do this, be sure not
to use the  _:beats_  input at the same time; The length of the pulse for a
**Poly** object is controlled by the  _:mindiv_  keyword input, which sets the
type of note to use as the pulse. 8 produces eighth notes and is the default,
but you can use any other type (2 for half notes, 4 for quarters, etc.)

Lastly, you can set the time signature of the **Poly** with the  _:sign_ 
keyword input, in the form (a b).

* * *

[Prev](canon-n)| [Home](index)| [Next](card)  
---|---|---  
canon-n| [Up](funcref.main)| card

