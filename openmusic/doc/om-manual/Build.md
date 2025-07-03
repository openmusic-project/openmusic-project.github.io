Navigation : [Previous](Maquettes%20in%20Patches "page
précédente\(Maquettes in Patches\)") | [page
suivante](Maquettes%20in%20Patches1 "Next\(Functional Mode\)")


# Build Mode

## Build Mode

Use

![](../res/buildmode_icon.png)

|

The "build" mode is the default mode of the maquette when it is dropped in a
patch. It then shows dark blue inputs and outputs.  
  
---|---  
  
Procedure

To set a maquette back on build mode :

  1. `Ctrl` / right click on the maquette box

  2. select `Maquette Object Inputs`. 

|

![](../res/changemode1.png)  
  
---|---  
  
Inputs and Outputs

![](../res/functionalinputs.png)

|

The two default inputs of the maquette box always take :

  * an onsets list
  * an objects list.

The "build" mode was oringinally the only way to add one or more TemporalBoxes
in a maquette. It is a convenient way to add a succession of objects in a
maquette. Other parameters, such as the vertical position of boxes, cannot be
specified.  
  
---|---  
  
The default output of the maquette box returns the value built by the maquette
:

  * a maquetteobj type of object, which gathers all the values produced by the objects contains, 
  * something else, if the maquette is related to a synthesis patch. 

|

![](../res/evalmaqobj.png)  
  
---|---  
  
Inputs Lists

Objects and onsets of each lists match each other. Maquettes accept the
following types of objects :  **musical objects** ,  **patches** and
**maquettes** on  **" reference" mode** .

Standard Inputs and Outputs

Possible standard inputs - ![](../res/input_icon.png) and outputs -
![](../res/output_icon.png) - are hidden outside the maquette.

## Example : Adding a List of Items in a Maquette

We want to add a series of items in a maquette located in a patch.

![](../res/build.png)

Each input of list is connected to an object. List returns a list of objects
references, such as :

OM ==> (#<chord-seq 2320ACBB> #<sound 231854C7> #<chord 231EE75F> #<ompatchabs
231ED3B7> #<ommaqabs 2320E8CB>).

  * The second input of the maquette takes this list of items. 
  * The first input of the maquette takes a list of offsets, which determine the temporal position of the corresponding items.

The items appear in the maquette after the evaluation.

Note that the maquette must be evaluated from the outside to display the items
in the right order.

![The maquette, once evaluated.](../res/maqbuild.png)

The maquette, once evaluated.

Evaluation and Content

Once the maquette is built, its content can either

  * remain the same, if no object is connected to it, 

  * be replaced by new objects, if objects are connected to it. 

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
      * [Creating a Maquette](Maquette)
      * [TemporalBoxes](TemporalBoxes)
      * [The Maquette Editor](Editor)
      * [Maquette Programming](Programming%20Maquette)
      * [Maquettes in Patches](Maquettes%20in%20Patches)
        * Build Mode
        * [Functional Mode](Maquettes%20in%20Patches1)
        * [Reference Mode](Maquettes%20in%20Patches2)
    * [Sheet](Sheet)
    * [MIDI](MIDI)
    * [Audio](Audio)
    * [SDIF](SDIF)
    * [Lisp Programming](Lisp)
    * [Errors and Problems](errors)
  * [OpenMusic QuickStart](QuickStart-Chapters)

Navigation : [Previous](Maquettes%20in%20Patches "page
précédente\(Maquettes in Patches\)") | [page
suivante](Maquettes%20in%20Patches1 "Next\(Functional Mode\)")

