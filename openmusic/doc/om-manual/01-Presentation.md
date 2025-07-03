# OpenMusic Presentation

Sommaire

  1. Visual Programs
  2. List Processing
  3. A Functional Language
  4. Objects and Classes

OpenMusic - OM - is a computer-aided composition environment. It is a musical
extension of Common Lisp, a programming language, and CLOS, a subset of Common
Lisp dealing with object-oriented programming. Graphic tools and protocols
give OM a full visual programming dimension.

The use of a visual interface opens new prospects in the domain of
compositional processes formalization, which can influence compositional
thought. Graphic representation makes it possible to master the multiple
levels of compositional complexity. Last, integrating musical representations
within the interface creates a tight relationship between programming, musical
structures and symbols, and preserves the musical dimension of composition
throughout formalization.

## Visual Programs

Programming in OM is mainly done in patches, graphic representations of Lisp
functions. Patches are composed of boxes that represent objects or functions,
and connections between these boxes.The functions used in OM can be genuine
Lisp functions, or specific OM functions that were generally defined in a
musical purpose.

## List Processing

"Lisp" is an abbreviation for "LISt Processing". Indeed, Lisp is entirely
based on the expression of data and functions by the means of list structures.
A list is a set of zero, one, or more elements, delimited by two parenthesis.
This means, for instance, an empty list : ( ), a list with one element :
(FLOWER), a list with several elements : (1 pretty FLOWER), a list of lists :
e.g. (7 (2 8.4) (5 1 0) 0.3). Therefore, musical data will also be expressed
in OM algorithms and processes express via list structures.

## A Functional Language

Common Lisp is a functional programming language, where programming is based
upon the use of  **functions** to transform and produce ** data **. Any
element of a functional program can be considered a function. Functions
receive parameters called **arguments** , and return data.

Musical processes are formalized and designed as graphic programs in OM, then
interpreted as functional expressions.

Programs can have several layers : one can use a program as a single function
inside a higher-level program. This is known as functional abstraction, a
major and very frequent process used in programming.

## Objects and Classes

The various types of objects used in OM, such as musical objects - chords,
notes and so on - are represented by **classes** , an important concept
deriving from object-oriented programming. Classes refer to categories of
objects used as patterns that produce items, according to a set of attributes.
An object defined from a  **class** is an  **instance** of this class.

Some functions, called ** generic functions **, consist of a set of
**methods** .  **Methods** define specialized behaviours depending on the type
(or class) of the ** arguments ** a generic function receives.

References :

Plan :

  * [OpenMusic Documentation](OM-Documentation)
  * [OM 6.6 User Manual](OM-User-Manual)
    * [Introduction](00-Sommaire)
      * OpenMusic Presentation
      * [Additional Information](02-SupportAndPubs)
      * [Elementary F.A.Q.](03-FAQ)
    * [System Configuration and Installation](Installation)
    * [Going Through an OM Session](Goingthrough)
    * [The OM Environment](Environment)
    * [Visual Programming I](BasicVisualProgramming)
    * [Visual Programming II](AdvancedVisualProgramming)
    * [Basic Tools](BasicObjects)
    * [Score Objects](ScoreObjects)
    * [Maquettes](Maquettes)
    * [Sheet](Sheet)
    * [MIDI](MIDI)
    * [Audio](Audio)
    * [SDIF](SDIF)
    * [Lisp Programming](Lisp)
    * [Errors and Problems](errors)
  * [OpenMusic QuickStart](QuickStart-Chapters)

Navigation : [page precedente](00-Sommaire "page
précédente\(Introduction\)") | [page suivante](02-SupportAndPubs "page
suivante\(Additional Information\)")

