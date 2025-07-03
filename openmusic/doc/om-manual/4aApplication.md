Navigation : [Previous](4_MusicalAp "page précédente\(A Musical
Application\)") | [Next](4bApplication "Next\(Creating
an Instance\)")


# The Chord Object - & Musical Objects in General -

Covered Topics

  * **Class** , **factory box** and **instance** concepts

  * Adding a chord factory box in the patch editor

  * Boxes properties and morphology : inputs, arguments, default values and outputs

  * Viewing and listening to the content of a chord

Keywords

Class[1], Object[2], FactoryBox[3], Instance[4], Offset[5]

## Main Links to the User Manual

Voir aussi

  * [Boxes Graphic Features and Components](GraphicFeatures)
  * [Boxes](Boxes)
  * [Basic Tools](BasicObjects)
  * [Notes, Chords and Chord-Seqs](Note-Chord-Chord-seq)

References :

  1. Class

A category of objects sharing common properties - characteristics and
behaviour. A class specifies the internal structure and behaviour of an
object. In OM, it is represented in a patch by a factory box that can produce
an instance of a class.

See also : Object, Instance

  2. Object

A thing provided with properties - characteristics and behaviour. An object is
defined by a class and shares the same characteristics with other objects
belonging to the same class.

An exemplar of a class.

For instance, the class of Note defines all possible notes by listing the
characteristics and behaviors they can have. The object A4 is a particular
note : it is an instance of the Class note, with particular versions of its
characteristics. A note has a pitch. An A4 is a 440 Hz note.

See also : Class, Instance, Object Oriented Programming.

  3. Factory Box

A box used for creating an instance, or exemplar, of a given class within a
visual program.

  4. Instance

An actual object created at runtime, out of a given class. In OM, more
specifically, an object created when evaluating a factory box. An instance can
be saved as a global variable.

⤷ `SHIFT` click on an outlet - especially the first outlet representing the
self, the whole object - of a factory box to materialize an instance.

  5. Offset

Temporal position of an object.

In a chord, each note can have a specific offset.

Plan :

  * [OpenMusic Documentation](OM-Documentation)
  * [OM 6.6 User Manual](OM-User-Manual)
  * [OpenMusic QuickStart](QuickStart-Chapters)
    * [Summary](Intro_1)
    * [Starting a Session](1_StartSession)
    * [Programming a Simple Patch](2_progpatch)
    * [Manipulating the Patch](3ManipPatch)
    * [A Musical Application](4_MusicalAp)
      * Chord & Musical Objects
      * [Creating an Instance](4bApplication)
      * [Formalizing a Process](4cApplication)
      * [Materializing Results](4dApplication)
    * [Manipulating and Visualizing Objects](5_CompletEdition)
    * [Saving and Quitting OM](6_Quit)

Navigation : [Previous](4_MusicalAp "page précédente\(A Musical
Application\)") | [Next](4bApplication "Next\(Creating
an Instance\)")

