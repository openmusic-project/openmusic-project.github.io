OpenMusic Reference  
---  
[Prev](concepts.globals)| | [Next](concepts.rhythm-trees)  
  
* * *

# Chapter 6. Data Types

Data type is an important concept in OM. OM function and class inputs will
only accept certain data-types. For example, attempting to give a
[**Note**](note) object a list of midics at the `_midic_` input will
generate an error. This is because the `_midic_` input is _typed_ to accept
only numbers, and list is not a type of number. Some inputs can accept more
than one data type, in which they case they select one of a set of internal
tools called [_methods_](glossary#METHOD) to deal with that particular
data type.

The idea of data type is related to and overlaps somewhat with the concept of
[Classes](concepts.classes). A class defines a data structure, which is
itself an organization of data types used as a model for producing objects.
The class [**Note**](note), for example, contains information about the
note's pitch, volume, and midi channel. The ensemble of these elements is the
class definition. When a class is used as input for a function or another
class, the class is a data type. Indeed, some OM functions will only accept
one kind of OM music object class as their data type.

For more on data types, see [_the glossary entry_](glossary#DATA-TYPE)
and the table in the [Introduction to the Function
Reference.](funcref.intro)

* * *

[Prev](concepts.globals)| [Home](index)| [Next](concepts.rhythm-
trees)  
---|---|---  
Globals| [Up](concepts)| Rhythm Trees

