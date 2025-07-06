OpenMusic Reference  
---  
[Prev](r7001)| | [Next](omloop)  
  
* * *

# Chapter 2. `omloop` and Components Reference

 **Table of Contents**

[omloop](omloop) \-- a multipurpose function for writing program
[loops](glossary#LOOP)

[forloop](forloop) \-- sets the number of repetitions in `omloop`

[whileloop](whileloop) \-- Allows repetition in `omloop` to continue as
long as a condition is met

[listloop](listloop) \-- Enumerates the elements of a list within
`omloop`

[onlistloop](onlistloop) \-- Enumerates consecutive groups of the
elements of a list within `omloop`

[counter (count)](counter) \-- registers the number of times `_what?_`
has a non-nil value

[sum](sum) \-- returns the sum of its collected elements

[minim (min)](minim) \-- returns the minimum value present among its
collected elements

[maxi (max)](maxi) \-- returns the maximum value present among its
collected elements

[listing](listing) \-- returns the results of `omloop` in a list

[accumulator](accumulator) \-- a general-purpose collector for the
`omloop` function

[loopdo (eachTime)](loopdo) \-- activated at each repetition of `omloop`
except the last

[finaldo (finally)](finaldo) \-- activated on the final repetition of
`omloop`

The `omloop` Module

This section of the Reference is dedicated to the special function `omloop`.
You will find a detailed description of `omloop` itself followed by reference
pages dedicated to each of its component functions: (in this order)

 **Iterators**

  * [` forloop`](forloop)

  * [`whileloop`](whileloop)

  * [`listloop`](listloop)

  * [`onlistloop`](onlistloop)

**Collectors**

  * [` counter (count)`](counter)

  * [`sum`](sum)

  * [`minim (min)`](minim)

  * [`maxi (max)`](maxi)

  * [`listing (collect)`](listing)

  * [`accumulator (accum)`](accumulator)

 **Outputs**

  * [` loopdo (eachTime)`](loopdo)

  * [`finaldo (finally)`](finaldo)

Below is the reference for `omloop`.

* * *

[Prev](r7001)| [Home](index)| [Next](omloop)  
---|---|---  
the exact name of the function| [Up](funcref)| omloop

