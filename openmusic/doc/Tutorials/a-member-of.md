OpenMusic Reference  
---  
[Prev](minus1)| | [Next](a-chord-in)  
  
* * *

# a-member-of

![](figures/functions/backtrack/a-member-of.png)

  
  
a-member-of  
  
(backtrack module) \-- Defines a Screamer variable from a list of values  

## Syntax

   **a-member-of**  list  

## Inputs

name| data type(s)| comments  
---|---|---  
  _list_ |  a list| the list of possible values for the Screamer variable  
  
## Output

output| data type(s)| comments  
---|---|---  
first| a value of  _list_ |  
  
## Description

Defines a Screamer variable from among the variables in the input list.
Without constraints,  a-member-of  enumerates all the values of the list. The
value will depend on the backtracking caused by the constraints.

* * *

[Prev](minus1)| [Home](index)| [Next](a-chord-in)  
---|---|---  
1-| [Up](funcref.main)| a-chord-in

