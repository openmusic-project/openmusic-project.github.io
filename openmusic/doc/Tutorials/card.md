OpenMusic Reference  
---  
[Prev](canons)| | [Next](concat)  
  
* * *

# card

![](figures/functions/zn/card.png)

  
  
card  
  
(Zn module) \-- returns the number of best-normal-ordered pitch sets of
[_cardinality_](glossary#CARDINALITY)  _k_  for an  _n_  -tone
subdivision of the octave  

## Syntax

   **card**  n k  

## Inputs

name| data type(s)| comments  
---|---|---  
  _n_ |  an integer| must be more than 2; defaults to 12  
  _k_ |  an positive integer| defaults to 6  
  
## Output

output| data type(s)| comments  
---|---|---  
first| an integer|  
  
## Description

For a given division of the octave into equal parts (12 is the default), there
are a limited number of distinct pitch sets that can be created with a given
number of [_pitch classes_](glossary#PITCH-CLASS).  card  returns this
number. Sets that have the same internal structure but start on different
tones (a G major chord and an F major chord, for example) are not considered
to be different. Input  _n_  defines the number of equal subdivisions of the
octave- traditionally 12.  _k_  defines the target cardinality.

![Note](figures/images/note.gif)|

 card  uses the Forte Prime for its calculation. A single best normal order is
thus chosen between a given normal order and its inversion.  card  will thus
return a lower number than would the same calculation using the Solomon Prime.  
  
---|---  
  
* * *

[Prev](canons)| [Home](index)| [Next](concat)  
---|---|---  
canons| [Up](funcref.main)| concat

