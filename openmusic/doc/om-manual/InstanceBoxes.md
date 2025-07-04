
Navigation : [Previous](Instances "page précédente\(Instances\)")
| [Next](GlobalVariables "Next\(Global Variables\)")

# Instance Boxes

An instance can be materialized out of any output of a factory box, provided
this output can return an instance or a list. Creating an instance box is
especially significant when done from the "self" outlet of a factory box,
which returns the **object itself** .

There are two types of instance boxes :

  * **class instances** , which are created from objects,
  * **list instances** , which are created from lists. 

## Procedure

![The first ouput of the chord-seq factory box is a chord-seq instance. The
second output is a list of pitches.](../res/createlistbox2.png)

The first ouput of the chord-seq factory box is a chord-seq instance. The
second output is a list of pitches.

|

To create an instance box, `SHIFT` \+ `Cmd` click on an output.

The corresponding object will appear in the patch editor.  
  
---|---  
  
The resulting box represents a specific object that cannot be reinitialized,
but can be used and evaluated again in a patch.

This is why this box shows only one "self" outlet.

|

![](../res/instanceself.png)  
  
---|---  
  
Renaming Instance Boxes

![](../res/edtiinstname.png)

|

Instances in OM have a **name** , which can be edited on the instance box.  
  
---|---  
  
Modifying the Instance

The parametric values of an instance box can't be accessed directly in
patches. However, they can be accessed and modified with the slots box.

About the Slots Box

  * [Reading and Modifying Instances : Slots](SlotsBox)

Instance Editors

The content of an instance box can be modified like that a factory box.

Double-click on the  instance to open its editor.

![An instance has the same editor as the factory box it is derived from, and
which offers the same edition possibilities.](../res/instanceeditor.png)

An instance has the same editor as the factory box it is derived from, and
which offers the same edition possibilities.

About Factory Boxes Editors

  * [Editors](3-Editors)

Some OM Objects Editors

  * [BPFs and BPCs Editors](BPFEditors)
  * [Score Editors](ScoreEditors)

## List Instances

**List instances** are instance boxes containing lists of values instead of a
single instance. An instance derived from a list returns its content when
evaluated.

|

![A list can be used for creating an instance box.](../res/listinstance.png)

A list can be used for creating an instance box.  
  
---|---  
  
![](../res/uselistinstance.png)

|

Just like any list, it can be connected to other boxes to create new objects.  
  
---|---  
  
Lists Editor

List instances have a basic editor allowing to get a preview and modify their
contents.

More about Instance and List Instance Editors

  * [Editors](3-Editors)

## Storing/Reusing Instances

Instances are a means to save an object within a patch, where it can then be
used as a source of data.

Instances can also be used in other patches :

  * they can be copied 

  * they can saved as global variables[1], which is sometimes more convenient and/or coherent. 

About Global Variables

  * [Global Variables](GlobalVariables)

Instance Files

Instances can also be exported and imported as **.omi** files, to and from any
location of your hard drive. The import/export procedure must be done via
Factory Boxes.

![An instance must be integrated as the content of a factory box, before it is
exported.](../res/exportinstance_2.png)

An instance must be integrated as the content of a factory box, before it is
exported.

Importing / Exporting Instances to/from Factory Boxes

  * [Importing/Exporting Factory Box Values](4-ImportExport)

Dropping Instance Files in the Patch

You can drag and drop an **instance file** in a patch editor to create a new
instance box directly.

![](../res/draginst.png)

References :

  1. Global variable

An instance of OM object that has been saved in order to be used in other
programs. Global variables are visible from the `Library` window and stored as
.omi files in the `Globals` folder of the workspace.

Plan :

  * [OpenMusic Documentation](OM-Documentation)
  * [OM User Manual](OM-User-Manual)
    * [Introduction](00-Sommaire)
    * [System Configuration and Installation](Installation)
    * [Going Through an OM Session](Goingthrough)
    * [The OM Environment](Environment)
    * [Visual Programming I](BasicVisualProgramming)
    * [Visual Programming II](AdvancedVisualProgramming)
      * [Abstraction](Abstraction)
      * [Evaluation Modes](EvalModes)
      * [Higher-Order Functions](HighOrder)
      * [Control Structures](Control)
      * [Iterations: OMLoop](OMLoop)
      * [Instances](Instances)
        * Instance Boxes
        * [Global Variables](GlobalVariables)
        * [Slots](SlotsBox)
        * [The Store Object](Store)
      * [Interface Boxes](InterfaceBoxes)
      * [Files](Files)
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

Navigation : [Previous](Instances "page précédente\(Instances\)")
| [Next](GlobalVariables "Next\(Global Variables\)")

