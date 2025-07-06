OpenMusic Reference  
---  
[Prev](second)| | [Next](sequence)  
  
* * *

# select

![](figures/functions/score/select.png)

  
  
select  
  
(score module) \-- extracts part of an OM score class object  

## Syntax

`` **select**` self start end `

## Inputs

name| data type(s)| comments  
---|---|---  
` _self_`|  an OM score class object|  **Voice** , **Poly** , **Chord-seq** or
**Multi-seq**  
` _start_`|  an integer |  
` _end_`|  an integer |  
  
## Output

output| data type(s)| comments  
---|---|---  
first| an OM music class object| same as `_self_`  
  
## Description

This function takes a **Voice** , **Poly** , **Chord-seq** or **Multi-seq**
object and extracts a section of that object between `_start_` and `_end_`.
The object returned will always be of the same type as the input.

If `_self_` is a **Voice** or **Poly** , then `_start_` and `_end_` are
measure numbers. Measure numbers start at zero and are inclusive.

If `_self_` is a **Chord-seq** or **Multi-seq** , then `_start_` and `_end_`
are absolute positions from the beginning of the sequence, in milliseconds.

The `concat` function is the opposite of [`select`](concat).

* * *

[Prev](second)| [Home](index)| [Next](sequence)  
---|---|---  
second| [Up](funcref.main)| sequence

