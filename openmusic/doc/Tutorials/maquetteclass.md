OpenMusic Reference  
---  
[Prev](groupclass)| | [Next](measure)  
  
* * *

# Maquette

![](figures/classes/maquette.png)

  
  
Maquette  
  
(Zn module) \--  

## Syntax

`` **Maquette**` time objs `

## Slots

name| data type(s)| comments  
---|---|---  
` _time_`|  a non-negative integer or list thereof|  
` _objs_`|  a patch, or a maquette, or any playable OM music object, or a list
composed of any of these.|  
  
## Notes

The Maquette, when used in a patch, appears with two inputs. The second of
these accepts any playable OM object, or a maquette, or a patch containing
either of those, or a list containing any of the previously mentioned.

The first of the inputs takes either a single value or a list of values, which
are interpreted as onsets from the beginning of the sequence, in milliseconds,
at which to place the object or objects given at the second input. Evaluating
the Maquette resets its contents (removing whatever was previously inside it)
and places the objects at the second input following the list of onsets at the
first input.

For more information on the Maquette concept, see the chapter [**on
Maquettes**](concepts.maquettes) and [tutorial 32](tut.gen.32), on
Maquettes.

* * *

[Prev](groupclass)| [Home](index)| [Next](measure)  
---|---|---  
Group| [Up](classref.main)| Measure

