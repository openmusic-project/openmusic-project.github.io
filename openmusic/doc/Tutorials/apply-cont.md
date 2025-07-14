OpenMusic Reference  
---  
[Prev](apply)| | [Next](approx-m)  
  
* * *

# apply-cont

![](figures/functions/backtrack/apply-cont.png)

  
  
apply-cont  
  
(backtrack module) \-- applies the given constraint (patch in lambda mode) to
the variables  

## Syntax

   **apply-cont**  fun var  

## Inputs

name| data type(s)| comments  
---|---|---  
  _fun_ |  an anonymous function (patch in lambda mode) or list thereof|
functions should be predicates, i.e. functions which output either t or nil.  
 _var_ |  a Screamer variable| a value defined with a Screamer primitive. The
data type of the inputs for the predicates must match that of the Screamer
variable.  
  
## Output

output| data type(s)| comments  
---|---|---  
first| either passes the variables at  _var_  or causes backtracking |  
  
## Description

If the predicate is true when applied to the Screamer variable (or if all the
predicates are true in the case of a list of lambda functions), the variable
is passed. Otherwise, causes backtracking.

* * *

[Prev](apply)| [Home](index)| [Next](approx-m)  
---|---|---  
apply| [Up](funcref.main)| approx-m

