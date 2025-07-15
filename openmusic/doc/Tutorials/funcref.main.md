OpenMusic Reference  
---  
[Prev](finaldo)| | [Next](plus1)  
  
* * *

# OM Function Reference

 **Table of Contents**

[1+](plus1) \-- adds 1 to a number

[1-](minus1) \-- subtracts 1 from a number


[addbox2maquette](addbox2maquette) \-- places a
[**Temporalbox**](temporalbox) inside a **Maquette**

[aftertouch](aftertouch) \-- sends a MIDI aftertouch message

[align-chords](align-chords) \-- combines chords falling within a certain
threshold duration into a single element

[append](append) \-- appends one list to another

[apply](apply) \-- returns the result of the evaluation of  _function_ 

[approx-m](approx-m) \-- rounds off midics to fit whole-number divisions
of the octave

[arithm-ser](arithm-ser) \-- generates an arithmetic series

[atom](atomlisp) \-- returns t if  _data-object_  is a single element
(not a list)

[band-filter](band-filter) \-- Filters elements of a tree based on their
numerical (arithmetic) value

[bpf-sample](bpf-sample) \-- samples a [**BPF**](editors.bpf#BPF)'s
values at defined intervals

[butlast](butlast) \-- returns a list without its last  _n_  elements

[callnext-method](callnext-method) \-- calls the next method in the
function definition

[canon-n](canon-n) \-- Returns all the integers in a certain interval
corresponding to the "good periods" of a Regular Complementary Canon of
Maximal Category

[canons](canons) \-- Constructs a Regular Complementary Canon of Maximal
Category from two rhythmic structures R and S representing the ground rhythm
and the rhythm of entries of the voices

[card](card) \-- returns the number of best-normal-ordered pitch sets of
[_cardinality_](glossary#CARDINALITY)  _k_  for an  _n_  -tone
subdivision of the octave

[concat](concat) \-- appends one OM music class to another

[conditional](conditional) \-- evaluates a series of patches, returning
the first non-nil value

[cons](cons) \-- returns a list

[cos](cos) \-- returns the cosine of  _radians_ 

[create-list](create-list) \-- Returns a list of  _count_  instances of
 _elem_ 

[ctrlchg](ctrlchg) \-- sends a MIDI Control Mode Change message

[decompo](decompo) \-- Factorizes a given integer in into a product of
five primes (p1 p2 n1 n2 n3) corresponding to a the attributes of a Regular
Compementary Canon of Maximal Category

[denominator](denominator) \-- returns the denominator of the canonical
reduced form of  _rational_ .

[dx->x](dx-x) \-- constructs a list of numbers from  _start_  with
intervals given by  _list_ .

[equal](equal) \-- returns t if the inputs are equivalent expressions

[expand-lst](expand-lst) \-- returns a list expanded from a special
syntax

[f->mc](f-mc) \-- converts frequencies in Hertz (Hz) to approximate
midicent pitches

[factorize](factorize) \-- returns the prime decomposition of a number

[famille](famille) \-- returns a set complex of
[_cardinality_](glossary#CARDINALITY)  _k_ 

[fibo-ser](fibo-ser) \-- generates a fibonacci series

[finale-export](finale-export) \-- Puts a [**Voice**](voice) or
[**Poly**](poly) object on the clipboard so that Finale can import it.

[finale-import](finale-import) \-- Takes a Finale clipping and puts it
into a [**Voice**](voice) or [**Poly**](poly) object.

[first](first) \-- returns the first element of a list, using one-based
addressing

[first-n](first-n) \-- returns the first _n_ elements of a list

[flat](flatlisp) \-- removes imbrication (nesting) from lists

[floor](floor) \-- rounds a number down to the nearest integer

[funcall](funcall) \-- returns the result of the evaluation of
 _function_ 

[geometric-ser](geometric-ser) \-- generates a geometric series

[get-chords](get-chords) \-- extracts a list of **Chord** objects from an
OM score class object

[get-maquette](get-maquette) \-- returns the **Maquette** to which a
given **Temporalbox** object belongs.

[get-slot](get-slot) \-- returns the value of a slot of an object-
instance

[group-list](group-list) \-- returns a list divided into segments


[included?](included) \-- returns true if all the elements of  _lst1_ 
are also elements of  _lst2_ . Otherwise, returns nil

[infocanons](infocanons) \-- Returns the number of voices and the number
of attacks in the ground rhythm of a Regular Complementary Canon of Maximal
Category of a given period.

[interlock](interlock) \-- inserts elements of a list between those of
another

[interpolation](interpolation) \-- interpolates between two numbers or
lists

[last-elem](last-elem) \-- returns the last element of a list

[last-n](last-n) \-- returns the last _n_ elements of a list

[length](length) \-- returns the number of elements in  _sequence_ 

[linear-fun](linear-fun) \-- returns a function object for the linear
function connecting the points represented by the input pairs

[list](list) \-- returns a list of  _argument_  s

[list-explode](list-explode) \-- Divides  _list_  into  _nlists_ 
sublists of consecutive elements.

[list-filter](list-filter) \-- Filters elements from a list using the
[predicate](glossary#PREDICATE)  _test_ .

[list-max](list-max) \-- returns the greatest value in a tree

[list-min](list-min) \-- returns the smallest value in a tree

[list-modulo](list-modulo) \-- Breaks a list down into sublists of
elements at regular intervals

[mat-trans](mat-trans) \-- returns a matrix with the rows and columns
exchanged

[mapcan](mapcan) \-- returns the results of several evaluations of
 _function_  as a single entity

[mapcar](mapcar) \-- returns the results of several evaluations of
 _function_  as a list

[maquette2obj](maquette2obj) \-- Makes a transcription of a
[**Maquette**](glossary#MAQUETTE) object suitable for use in a
[**Poly**](poly) or [**Multi-seq**](multi-seq).

[mask](mask) \-- Uses one **Voice** as a rhythmic mask for another

[mc->f](mc-f) \-- converts midicent pitches to frequencies in Hertz (Hz)

[merger](merger) \-- Superimposes one **Voice** or **Measure** object on
another

[mf-info](mf-info) \-- creates a tree describing a MIDI file

[midi-o](midi-o) \-- sends midi data

[mktree](mktree) \-- Constructs a rhythm tree from a list of **rational**
s (fractions)

[nth](nth) \-- returns the _n th_ of a list

[nthcdr](nthcdr) \-- returns  _list_  without its first _n_ elements

[nth-random](nth-random) \-- returns a randomly chosen element of a list

[numerator](numerator) \-- returns the numerator of the canonical reduced
form of  _rational_ .

[om^](ompower) \-- raises a number to a given power

[om*](ommultiply) \-- returns the product of two numbers or lists

[om/](omdivide) \-- returns the quotient of two numbers or lists

[om//](omeucdivide) \-- performs euclidian division (division with
remainder)on two numbers or lists

[om+](omplus) \-- returns the sum of two numbers or lists

[om-](omminus) \-- returns the difference of two numbers or lists

[om=](omequal) \-- returns t if  _self_  and  _num_  are equal

[om/=](omnotequal) \-- returns t if  _self_  and  _num_  are not equal.

[om<](omlessthan) \-- returns t if  _self_  is less than  _num_ 

[om>](omgreaterthan) \-- returns t if  _self_  is more than  _num_ 

[om<=](omlessorequal) \-- returns t if  _self_  is less than or equal to
 _num_ 

[om>=](omgreaterorequal) \-- returns t if  _self_  is more than or equal
to  _num_ 

[omor](omor) \-- performs boolean logical **or**

[omand](omand) \-- performs boolean logical **and**

[om-abs](om-abs) \-- returns the absolute value

[om-e](om-e) \-- returns e to a given power

[om-log](om-log) \-- returns the natural logarithm of a number

[om-max](om-max) \-- returns the larger of two values

[om-mean](om-mean) \-- returns the arithmetic mean of numbers in a list

[om-min](om-min) \-- returns the smaller of two values

[om-random](om-random) \-- generates a psuedo-random number

[om-round](om-round) \-- Rounds a number or numbers

[om-scale](om-scale) \-- scales a list based on new maximum and minimum
values

[om-scale/sum](om-scalesum) \-- scales a list based on a new sum

[omif](omif) \-- returns  _action_  or  _else_  according to  _test_ 

[omquantify](omquantify) \-- performs a rhythmic transcription,
converting a list of durations into a rhythm tree

[orbites](orbites) \-- returns a list of set classes of
[_cardinality_](glossary#CARDINALITY)  _k_  for an  _n_  -tone octave.

[patterns](patterns) \-- Returns two rhythmic patterns of period  _n_ 
that, when used to construct a canon of  _l_  voices, produce a Regular
Complementary Canon of Maximal Category.

[permut-random](permut-random) \-- returns the list with a random order
of elements

[permutations](permutations) \-- returns a exhaustive list of all the
permutations of a list

[pgmout](pgmout) \-- sends a MIDI program (patch) change message

[pitchbend](pitchbend) \-- sends a MIDI pitch wheel controller message

[pitchwheeel](pitchwheel) \-- sends a MIDI pitch wheel controller message

[play](play) \-- causes playback of OM music objects

[polykeypres](polykeypres) \-- sends a MIDI key pressure message

[posn-match](posn-match) \-- Constructs a new list from a list of
elements and a list of ordinal references

[posn-order](posn-order) \-- returns an index of ordinals positions for a
given sort function performed on a list

[prime?](prime) \-- returns t if  _n_  is a prime number.

[prime-ser](prime-ser) \-- generates a list of prime numbers

[range-filter](range-filter) \-- Filters elements of a tree based on
their ordinal position

[reduce-tree](reduce-tree) \-- applies a commutative binary function
throughout a tree

[remove](remove) \-- returns a list with certain items removed

[remove-dup](remove-dup) \-- returns list without repetitions

[removetemporalbox](removetemporalbox) \-- removes
[**Temporalbox**](temporalbox)es from **Maquette** s

[repeat-n](repeat-n) \-- evaluates  _self_   _num_  times

[rest](rest) \-- returns the [_cdr_](glossary#CDR) of  _list_ 

[reverse](reverse) \-- returns  _sequence_  backwards

[rotate](rotate) \-- returns a list with its elements rotated

[samplefun](samplefun) \-- samples a function's output at defined
intervals

[save-as-etf](save-as-etf) \-- Saves a [**Voice**](voice) or
[**Poly**](poly) object as an [_ETF_](glossary#ETF) (Enigma
Transportable File).

[save-as-midi](save-as-midi) \-- creates a MIDI file from an OM music
class object

[second](second) \-- returns the second element of a list, using one-
based addressing

[select](select) \-- extracts part of an OM score class object

[sequence](sequence) \-- evaluates a series of patches

[sin](sin) \-- returns the sine of  _radians_ 

[sort.](sort) \-- returns a sorted list according to a test

[sqr](sqr) \-- returns the square of  _n_ 

[sqrt](sqrt) \-- returns the principal square root of  _number_ 

[subs-posn](subs-posn) \-- replaces select elements of a list

[sysex](sysex) \-- sends a MIDI sysex (system exclusive) message

[table-filter](table-filter) \-- Filters sublists from a tree using the
[predicate](glossary#PREDICATE)  _test_ .

[tan](tan) \-- returns the tangent of  _radians_ 

[temporalboxes](temporalboxes) \-- extracts a list of
[**Temporalbox**](temporalbox)es from a **Maquette**

[third](third) \-- returns the third element of a list, using one-based
addressing

[volume](volume) \-- sends a MIDI volume message

[x-append](x-append) \-- combines two or more lists into a single one

[x-diff](x-diff) \-- returns a list wth all the elements present in
 _l1?_  and  _list_  but not in  _l2?_ .

[x->dx](x-dx) \-- returns a list of the intervals between values of a
list

[x-intersect](x-intersect) \-- returns the common elements of several
lists

[x-union](x-union) \-- merges two sets

[x-xor](x-xor) \-- performs a  XOR  (exclusive  OR  on two or more lists

* * *

[Prev](finaldo)| [Home](index)| [Next](plus1)  
---|---|---  
finaldo (finally)| [Up](funcref)| 1+

