Navigation : [Previous](FunctionBoxes "page précédente\(Function
Boxes\)") | [Next](1-Visualization "page
suivante\(Visualization\)")


# Objects - Factory Boxes

In OM, objects are created and used in patches via " **factory** " boxes. A
factory box refers to a class[1] and allows to create instances[2] -
exemplars, in other words -, of this class.

  * Factories can be connected to the other components of a visual program. 
  * Their inner editor is a graphical user interface that allows to visualize, edit and manipulate the objects produced by factories. For instance, one can edit a musical sequence in a traditional score editor.

This dual aspect of formalized computation, associated with direct manual
interaction on the musical material, is a fundamental feature of OM, which
makes the factory box a major patch component.

Factory boxes are accessed via the `Classes` menu or can be added in a patch
from the [Library window](Library).

How To Add a Box into a Patch Editor

  * [Adding Boxes Into a Patch](AddingBoxes)

References :

  1. Class

A category of objects sharing common properties - characteristics and
behaviour. A class specifies the internal structure and behaviour of an
object. In OM, it is represented in a patch by a factory box that can produce
an instance of a class.

See also : Object, Instance

  2. Instance

An actual object created at runtime, out of a given class. In OM, more
specifically, an object created when evaluating a factory box. An instance can
be saved as a global variable.

⤷ `SHIFT` click on an outlet - especially the first outlet representing the
self, the whole object - of a factory box to materialize an instance.

Plan :

  * [OpenMusic Documentation](OM-Documentation)
  * [OM User Manual](OM-User-Manual)
    * [Introduction](00-Sommaire)
    * [System Configuration and Installation](Installation)
    * [Going Through an OM Session](Goingthrough)
    * [The OM Environment](Environment)
    * [Visual Programming I](BasicVisualProgramming)
      * [Patch Introduction](ProgrammingIntro)
      * [Adding Boxes Into a Patch](AddingBoxes)
      * [Elementary Manipulations](ElementaryManips)
      * [Boxes](Boxes)
        * [Boxes Features](GraphicFeatures)
        * [Data Boxes](DataBox)
        * [Function Boxes](FunctionBoxes)
        * Objects - Factory Boxes
          * [Visualization](1-Visualization)
          * [Instantiating Objects](2-Instanciation)
          * [Playback and Players](1-Play)
          * [Editors](3-Editors)
          * [Import/Export](4-ImportExport)
        * [Abstraction Boxes](AbsBoxesIntro)
        * [Other Boxes](OtherBoxes)
      * [Box Inputs](BoxInputs)
      * [Connections](Connections)
      * [Evaluation](Evaluation)
      * [Documentation and Info](DocAndInfo)
      * [Comments](Comments)
      * [Pictures](Pictures)
      * [Saving / Reloading a Patch](SavingPatch)
      * [Dead Boxes](DeadBox)
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

Navigation : [Previous](FunctionBoxes "page précédente\(Function
Boxes\)") | [Next](1-Visualization "page
suivante\(Visualization\)")

