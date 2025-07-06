OpenMusic Reference  
---  
[Prev](concepts.data-types)| | [Next](x1205)  
  
* * *

# Chapter 7. Rhythm Trees

 **Table of Contents**

[The structure](x1205)

[Some Examples](x1252)

Rhythm trees are a special type of [_nested_](glossary#NESTING) list used
to represent rhythmic structures, primarily for use in the
[**Voice**](voice) object. They are an alternative to traditional music
notation. The rhythm tree is inspired by the structure of
[_LISP_](glossary#LISP) itself, a series of nested lists. The advantage
of a rhythm tree is that it represents the totality of the hierarchical
relationship of traditional rhythmic notation (measures divided in to groups
divided into beats divided into notes) in a numeric form, unlike the simple
lists of durations and onsets of the [**Chord-seq**](chord-seq) object,
for instance. The disadvantage of the rhythmic tree is that the symbolic form,
while very convenient for computers, is somewhat less convenient for human
beings. They can contain ridiculous numbers of parentheses that will test the
eyesight of even the most assiduous user. Making sense of rhythm trees
requires a complete understanding of their structure. Users are therefore
advised to complete the tutorial on rhythm trees and then come back to this
section for the most complete picture possible.

* * *

[Prev](concepts.data-types)| [Home](index)| [Next](x1205)  
---|---|---  
Data Types| [Up](concepts)| The structure

