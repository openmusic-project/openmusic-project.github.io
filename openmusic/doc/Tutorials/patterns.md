OpenMusic Reference  
---  
[Prev](orbites)| | [Next](permut-random)  
  
* * *

# patterns

![](figures/functions/zn/patterns.png)

  
  
patterns  
  
(Zn module) \-- Returns two rhythmic patterns of period  _n_  that, when used
to construct a canon of  _l_  voices, produce a Regular Complementary Canon of
Maximal Category.  

## Syntax

   **patterns**  n l  

## Inputs

name| data type(s)| comments  
---|---|---  
  _n_ |  a positive integer| one of the list of "good primes" produced by
[ canon-n ](canon-n)  
  _l_ |  a positive integer| the number of voices associated with the RCMC of
the period, as determined by [ infocanons ](infocanons)  
  
## Output

output| data type(s)| comments  
---|---|---  
first| a list of integers | R, the ground rhythm of the canon  
second| a list of integers | S, the pattern of voice entries in the canon  
  
## Description

This module returns the ground and outer rhythms for a Regular Complementary
Canon of Maximal Category. You must enter the period of the canon and the
number of voices. The two inputs return the ground rhythm (the rhythm of
attacks in the voices) and the rhythm of the entries (intervals between the
entries of the voices), both quantities in 'pulses', the length of which you
establish later with the [ canons ](canons) module.

* * *

[Prev](orbites)| [Home](index)| [Next](permut-random)  
---|---|---  
orbites| [Up](funcref.main)| permut-random

