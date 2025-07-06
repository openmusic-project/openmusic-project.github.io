OpenMusic Reference  
---  
[Prev](included)| | [Next](interlock)  
  
* * *

# infocanons

![](figures/functions/zn/infocanons.png)

  
  
infocanons  
  
(Zn module) \-- Returns the number of voices and the number of attacks in the
ground rhythm of a Regular Complementary Canon of Maximal Category of a given
period.  

## Syntax

`` **infocanons**` period `

## Inputs

name| data type(s)| comments  
---|---|---  
` _period_`|  a positive integer| one of the list of "good primes" produced by
[`canon-n`](canon-n)  
  
## Output

output| data type(s)| comments  
---|---|---  
first| a list of 2 integers |  
  
## Description

This module returns two pieces of information: The first is the number of
voices of the canon having the specified period and the second one is the
number of attacks in a single period of the ground rhythm.

* * *

[Prev](included)| [Home](index)| [Next](interlock)  
---|---|---  
included?| [Up](funcref.main)| interlock

