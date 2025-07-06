OpenMusic Reference  
---  
[Prev](x1458)| Chapter 9. Classes, Instances, and Factories|
[Next](x1576)  
  
* * *

# Inheritance

Inheritance is a characteristic of classes in object-oriented programming
languages. Take the example of two imaginary classes, **publication** and
**book**. A publication would have slots like `_number of pages_` and
`_editor_`. All books have a number of pages and apublished. But a book might
also have a single `_author_`. Rather than redefining the number of pages and
the the editor of the **book** anew, the class **book** could _inherit_ from
the class **publication**. **book** would include all of the slots of
**publication** with an extra slot, `_author_`. Other kinds of publications (
**pamphlet** , **magazine** ) would also inherit from **publication** but have
their own additional slots with information specific to them. Organizing
classes into heirarchies of inheritance makes prorgams more logical and easier
to write.

Inheritance can be put to work for you! OM music factory icons have the
capacity to accept data directly from other classes via their `_self_` inputs.
As an example, a [**Note**](note)'s `_self_` output can be plugged
directly into the `_self_` input of [**Chord**](chord). A
[**Chord**](chord) is generated containing that note, because
[**Chord**](chord) knows what to do with [**Note**](note)s.
Similarly, a list of [**Note**](note) objects is also acceptable at the
`_self_` input of [**Chord**](chord).

You can find out what kinds of classes a given factory can accept at `_self_`
from by using the online help in the patch window (accessed by selecting the
object and hitting **d**.)

![Note](figures/images/note.gif)|

Though passing a [**Note**](note) to a [**Chord**](chord) is sort of
like an example of inheritance, this is not really the case.
[**Note**](note) _does_ inherit, but from a class called **simple-score-
element** (see below). When you pass `_self_` between factory objects, the
factory is actually calling an internal method which translates the object..
[**Chord**](chord) has methods for dealing with [**Chord**](chord)
(obviously) but also for dealing with [**Note**](note) and a list of
[**Note**](note)s at its `_self_` input.  
  
---|---  
  
* * *

[Prev](x1458)| [Home](index)| [Next](x1576)  
---|---|---  
Factories and Instances| [Up](concepts.classes)| Variables

