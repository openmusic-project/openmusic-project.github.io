
Navigation : [Previous](CheckBox "page précédente\(Check Box\)") |
[Next](Button "Next\(Button\)")

# Selection : List Boxes

List selection boxes allow to select one or several items among a list, return
and use it/them in downstream computations.

There exist two list selection boxes :

  * **single-item-list**

  * ** multi-item-list **

## Features

Inputs and Outputs

![](../res/lists-boxes.png)

|

List selection boxes have one input and one output :

  * the "items" input is a **list of atoms or strings** to be displayed in the list

  * the output returns the selected item(s).

  
  
---|---  
  
![](../res/evaluno.png)

|

To set the content of a box :

  * click or `SHIFT` click on the box's input,

  * enter a list of items in the argument's data box.

When evaluated, the box returns the selected item.  
  
---|---  
  
Default Item

By default, the first item is selected and reset when the box is initialized.

Lock the Box to Preserve Its Items

If the box is not locked, the selected item as well as the list of items will
be reinitialized when the box is evaluated.

## Boxes

Single-Item-List

The  **single-item-list** allows to select only one item at a time.

To select an item,

  1. press `b` to lock the box,

  2. click on an item.

![](../res/singleitem.png)

Multi-Item-List

This box allows to select one or more items, which are returned as a list.

The  **multi-item-list** is edited and used as as  single-item-list .

  * To select consecutive items or all the items of the box, `SHIFT` click on the items or click and drag them.

  * To select independent items, `Cmd` click on them.

![](../res/multiitem.png)

## A Musical Application : an Extended Example

Building a Triad with an Item-List-Box, a Button-Box, and a Check Box

  * [Using the Interface Boxes : Example](InterfaceExample)

References :

Contents :

  * [OpenMusic Documentation](OM-Documentation)
  * [OM User Manual](OM-User-Manual)
    * [Introduction](00-Contents)
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
      * [Interface Boxes](InterfaceBoxes)
        * [General Features](GeneralFeatures)
        * [Text Boxes](TextBoxes)
        * [Check Box](CheckBox)
        * List Boxes
        * [Button](Button)
        * [Slider Box](Slider)
        * [Pop-Up Menu Box](MenuBoxes)
        * [Examples of Use](InterfaceExample)
      * [Files](Files)
    * [Basic Tools](BasicObjects)
    * [Score Objects](ScoreObjects)
    * [Maquettes](Maquettes)
    * [Sheet](Sheet)
    * [MIDI](MIDI)
    * [Audio](Audio)
    * [SDIF](SDIF)
    * [Lisp Programming](Lisp)
    * [Reactive mode](Reactive)
    * [Errors and Problems](errors)
  * [OpenMusic QuickStart](QuickStart-Chapters)

Navigation : [Previous](CheckBox "page précédente\(Check Box\)") |
[Next](Button "Next\(Button\)")

