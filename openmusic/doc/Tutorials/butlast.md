OpenMusic Reference  
---  
[Prev](bpf-sample)| | [Next](callnext-method)  
  
* * *

# butlast

![](figures/functions/lisp/butlast.png)

  
  
butlast  
  
(lisp module) \-- returns a list without its last  _n_  elements  

## Syntax

   **butlast**  list &optional num  

## Inputs

name| data type(s)| comments  
---|---|---  
  _list_ |  a list|  
  _num_ |  a non-negative integer| optional; defaults to 1  
  
## Output

output| data type(s)| comments  
---|---|---  
first| a list| returns the list truncated by  _num_  elements  
  
## Description

This function copies all of  _list_  except the last  _n_  elements, and
returns the new list.

 _n_  defaults to 1 and must be a non-negative integer. If  _list_  is shorter
than  _n_  the empty list is returned. This function is non-destructive,
meaning that  _list_  will not be modified.

* * *

[Prev](bpf-sample)| [Home](index)| [Next](callnext-method)  
---|---|---  
bpf-sample| [Up](funcref.main)| callnext-method

