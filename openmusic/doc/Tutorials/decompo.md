OpenMusic Reference  
---  
[Prev](ctrlchg)| | [Next](denominator)  
  
* * *

# decompo

![](figures/functions/zn/decompo.png)

  
  
decompo  
  
(Zn module) \-- Factorizes a given integer in into a product of five primes
(p1 p2 n1 n2 n3) corresponding to a the attributes of a Regular Compementary
Canon of Maximal Category  

## Syntax

   **decompo**  n  

## Inputs

name| data type(s)| comments  
---|---|---  
  _n_ |  a positive integer| one of the list of "good primes" produced by [ canon-n ](canon-n)  
  
## Output

output| data type(s)| comments  
---|---|---  
first| a list of integers |  
  
## Description

The module breaks down  _n_  into five numbers (p1 p2 n1 n2 n3) where:

  * The product of all five is the period of a Regular Complementary Canon of Maximal Category.

  * p1 and p2 are different primes.

  * The number of voice in the canon is equal to the product n1n2.

  * The product p1n1 and the prooduct p2n2 have no common denominators.

  * The number of attacks in a single period of the ground rhythm is equal to the product p1p2n3.

  * n3 is an integer greater than 1.

* * *

[Prev](ctrlchg)| [Home](index)| [Next](denominator)  
---|---|---  
ctrlchg| [Up](funcref.main)| denominator

