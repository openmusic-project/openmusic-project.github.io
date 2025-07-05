Navigation : [Previous](1-Play "page précédente\(Playback and
Players\)") | [Next](4-ImportExport "page
suivante\(Import/Export\)")


# Editors

Factory boxes have an ** internal editor **. As a complement to the
algorithmic creation of objects, it is a means to build, or modify them
manually once objects have been initialized. Some elementary classes have a
default editor, but most objects used in OM have specifically dedicated
editors, such as score editors, sound file editors, BPF editors, etc. All
editors open with a double click on a factory box.

## Basic Editors

Default Instance Editor

When a class has only a default - basic - editor, it opens with a double
click.

This editor has a number of slots[1], which represent the object's parameters.
Each slot is represented by a grey box and can be edited directly.

To edit the value of a component :

  1. double click on the numeric frame

  2. enter a new value and validate.

|

![The default editor of an OSC-event.](../res/defedit-edit.png)

The default editor of an OSC-event.  
  
---|---  
  
If the value of a slot is iself an instance of a class (e.g. a note, etc.),
the internal editor of this class opens at double-clicking it in the parent
editor.

Lists (e.g., "bundle" in the previous example) also open in a specific
internal list editor.

List Editor

List in OM editors have a specific editor where each item is presented in a
separate cell (and can in turn be edited).

A  **list editor** displays components values, indexes and navigation arrows.

[![A List editor](../res/listeditor-2_1.png)](../res/listeditor-2.png "Cliquez
pour agrandir")

A List editor

|

  * Items are displayed next to a bidimensional index in the list, that is, the editor allows to represent lists of list on a single plane.

  * The navigation arrows at the top allow to shift the display position in the list (the editor window shows up to 10 elements only).

  
  
---|---  
  
Note

It is not possible to modify the number of elements in a List using the list
editor.

## Specific Editors

Some factory boxes have a specific editor, which also opens with a double
click.

Example of OM object editors

  * [BPFs and BPCs Editors](BPFEditors)
  * [Score Editors](ScoreEditors)

To open the default editor of such factory box, press `Cmd` and double click
on the box.

![The default and specific score editors of the "note"
class](../res/noteeditors.png)

The default and specific score editors of the "note" class

Note that both editors can't be open at the same time. Close the editor
manually so as to open the other editor.

## Preserving Manual Modifications

Once modifications have been done in an editor, the corresponding box is
**locked automatically** . Indeed, a new evaluation of an unlocked box would
compute a new object and replace the current value, hence canceling all
previous modifications. Of course, the box can still be unlocked if necessary.

To lock or unlock a box, select it and press `b`.

![](../res/addlock.png)

References :

  1. Slot

In object oriented programming, a slot represents and attribute of a class.
For instance, the class "note" in OM has 4 slots : pitch, duration, velocity,
and MIDI channel.

Contents :

  * [OpenMusic Documentation](OM-Documentation)
  * [OM User Manual](OM-User-Manual)
    * [Introduction](00-Contents)
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
        * [Objects - Factory Boxes](FactoryBoxes)
          * [Visualization](1-Visualization)
          * [Instantiating Objects](2-Instanciation)
          * [Playback and Players](1-Play)
          * Editors
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
    * [Reactive mode](Reactive)
    * [Lisp Programming](Lisp)
    * [Errors and Problems](errors)
  * [OpenMusic QuickStart](QuickStart-Chapters)

Navigation : [Previous](1-Play "page précédente\(Playback and
Players\)") | [Next](4-ImportExport "page
suivante\(Import/Export\)")

