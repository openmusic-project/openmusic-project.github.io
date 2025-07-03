
Navigation : [Previous](LispInOM "page précédente\(Lisp Code in
OM\)") | [Next](LowLevel "Next\(Lisp Tools\)")


Writing a function or procedure in Lisp can be more convenient that the
creation of a visual program. ** Lisp Function boxes ** are abstractions
defined in Lisp textually. Like visual abstractions

  * they can be internal to a patch ![](../res/lispfunction_icon_1.png) - red

  * or defined globally in the environment and workspace  ![](../res/lispfunctionblue_icon.png)-blue.

## Creating Lisp Functions

Internal Lisp Function (Red)

![](../res/addinternallisp.png)

|

To create a new Lisp function in a patch you can either

  * use the contextual menu `Internal / Lisp Function` in the patch editor

  * or `Cmd` click and type "lisp".

A new box will appear, with one output. It doesn't have a default input. This
box behaves externally as a red patch box -- internal abstraction --.  
  
---|---  
  
Internal Abstractions

  * [Internal Abstractions](RedAbstraction)

Global Lisp Function (Blue)

![](../res/addlispfunction.png)

To create a  **global Lisp Function** like a patch or a maquette, use the
`File / New Function` menu item in the workspace or folder windows.

The new Lisp function created here can be used in several locations, just like
a blue patch. All its representations will refer to this same master function.

The box created will (externally) behave as a blue patch box.

Global Abstraction

  * [Standard Abstraction](BlueAbstraction)

Lisp Functions Conversion

Red and blue Lisp functions can also be converted with the standard patch
conversion procedures.

![](../res/internaliza.png)

To globalize a red lisp function, drag it to the workspace. The function will
be converted automatically.

To rename the function, rename it from the workspace.

![](../res/internalize.png)

To internalize a blue lisp function, select it and press `a`. It can then be
copied and renamed freely in the patch.

|

![](../res/renameinternalfunction.png)  
  
---|---  
  
Converting Internal/Global Abstractions

  * [Conversions](AbsConversion)

## Editing Lisp Functions

Lisp Function Editor

![](../res/editfunction.png)

Double click a Lisp Function box to edit its contents. The window that opens
is similar to a Lisp editor.

The Lisp Editor

  * [Writing/Evaluating Lisp Code : The Lisp Editor](LispEditor)

Writing Lisp Functions

The function must be written as a **lambda expression** with a given number of
arguments. The editor provides a default basic edition pattern showing the
components of such lambda expression.

|

![](../res/lambdapattern.png)  
  
---|---  
  
What is a Lambda Expression ?

  * [Introduction to Lisp](LispIntro)

Arguments and Inputs

![](../res/lambda1.png)

When the Lisp editor of the box is closed, the number of inputs is updated
according to the number of arguments of the function, if arguments have been
added or deleted.

Unique Output

Lisp functions can have only one output, which corresponds to the value
returned by the Lambda expression.

References :

Plan :

  * [OpenMusic Documentation](OM-Documentation)
  * [OM 6.6 User Manual](OM-User-Manual)
    * [Introduction](00-Sommaire)
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
      * [Introduction to Lisp](LispIntro)
      * [The Lisp Editor](LispEditor)
      * [The Listener](LispListener)
      * [Lisp Code in OM](LispInOM)
      * Lisp Function Boxes
      * [Lisp Tools](LowLevel)
      * [Writing an OM Library](LispUserLib)
      * [Writing Code for OM](LispForOM)
    * [Errors and Problems](errors)
  * [OpenMusic QuickStart](QuickStart-Chapters)

Navigation : [Previous](LispInOM "page précédente\(Lisp Code in
OM\)") | [Next](LowLevel "Next\(Lisp Tools\)")

