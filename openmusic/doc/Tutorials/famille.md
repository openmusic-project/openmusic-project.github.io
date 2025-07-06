OpenMusic Reference  
---  
[Prev](factorize)| | [Next](fibo-ser)  
  
* * *

# famille

![](figures/functions/zn/famille.png)

  
  
famille  
  
(Zn module) \-- returns a set complex of
[_cardinality_](glossary#CARDINALITY) `_k_`  

## Syntax

`` **famille**` n familly k howmany `

## Inputs

name| data type(s)| comments  
---|---|---  
` _n_`|  an integer| must be more than 2; defaults to 12  
` _familly_`|  menu| the type of pitch set (set complex) to return. 6 options:
**tac** , **tai** , **tic** , **ttl** , **tp** , **tid**.  
` _k_`|  a positive integer| defaults to 6; must be no larger than `_n_` /2  
` _howmany_`|  a positive integer| allows you to limit the number of answers
returned (the size of the set complex). Setting this value higher than the
maximum number of possible sets may cause the function to return nil  
  
## Output

output| data type(s)| comments  
---|---|---  
first| a set complex: a tree representing a list of set classes|  
  
## Description

IN-DEPTH DESCRIPTION

`famille` produces pitch sets with certain properties, depending on your
choice at the `_familly_` menu input. The calculation will be made in 12-tone
space by default. To use other subdivisions of the octave as a base, set a new
value at the `_n_` input. The sets will all have
[_cardinality_](glossary#CARDINALITY) `_k_`. (` _k_` elements). `_k_`
must be less than or equal to half of `_n_`.

The `_howmany_` input allows you to limit the size of the set complex, i.e.
the number of sets returned. **Setting this higher than the maximum size of
the complex may cause` famille` to return nil.**

The `_familly_` menu input allows you to choose what kind of sets will be
returned, i.e. what the unifying characteristic of the set complex will be.
There are six families of pitch set available (some of the names are funny
because they are acronyms for French terms):

  * ` _tac_` \- auto-complementary - set whose [_complement_](glossary#COMPLEMENT) has the same intervallic structure.

  * ` _tai_` \- auto-inverse - set whose inversion has the same intervallic structure.

  * ` _tic_` \- inverse-complementary - set where some transposition of its inversion is identical to its complement.

  * ` _ttl_` \- limited transposition - set where one or more transpositions of the set yield the same [_pitch classes_](glossary#PITCH-CLASS).

  * ` _tp_` \- partitioning - a set which partitions the octave into non-overlapping segments. The octave may thus be completely covered by one or more transpositions of the set, _with no transpositions sharing any tones_.

  * ` _tid_` \- idempotent - a set which is idempotent produces the same pitch classes when transposed to start on any of its members. In other words, all common-tone transpositions of the set are identical.

## Examples

For examples, see the Zn tutorials.

* * *

[Prev](factorize)| [Home](index)| [Next](fibo-ser)  
---|---|---  
factorize| [Up](funcref.main)| fibo-ser

