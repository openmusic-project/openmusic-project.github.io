
# TemporalBoxes Interaction : Examples (1)

Here is a series of basic examples showing how the graphic and musical
parameters of objects can interact within a maquette. They may give a hint of
the principles at stake in the musical exploitation of the maquette's specific
dimensions.

## Determining Pitch From "Posy"

The  **vertical position** of a TemporalBox can be converted into a  **pitch**
.

Program

![](../res/posy%3Dpitch1.png)

|

The patch shows :

  * a temporalbox instance,
  * an internal maquette, 
  * the addbox2maquette function, 
  * an internal patch that executes the conversion. 

  
  
---|---  
  
  1. A Self Input box is connected to om-scale. 

  2. The "posy" of self is scaled from a value between 0 and 100 to a value between 4000 and 8000 midicents. 

  3. The resulting value is expressed by a note, and assigned as a musical value to the TemporalBox via the Tempout.

|

![Inside the conversion patch.](../res/posy%3Dpith.png)

Inside the conversion patch.  
  
---|---  
  
## TemporalBox Evaluation

Once addbox2maquette is evaluated, the box appears in the maquette. It doesn't
have a musical value at first, but its has a "posy" and an offset. The pitch
changes with the vertical position of the TemporalBox, when the maquette or
the object is evaluated.

![](../res/posy%3Dpitch2.png)

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
        * [Build Mode](Build)
        * [Functional Mode](Maquettes%20in%20Patches1)
        * [Reference Mode](Maquettes%20in%20Patches2)
          * [Adding TemporalBoxes](addprocedure)
          * [Examples](addexamples)
          * [Accessing Boxes](REF3)
          * [Removing Boxes](REF4)
          * Interaction (1)
          * [Interation (2)](Intercation2)
    * [Sheet](Sheet)
    * [MIDI](MIDI)
    * [Audio](Audio)
    * [SDIF](SDIF)
    * [Lisp Programming](Lisp)
    * [Errors and Problems](errors)
  * [OpenMusic QuickStart](QuickStart-Chapters)

Navigation : [page precedente](REF4 "page précédente\(Removing Boxes\)")
| [page suivante](Intercation2 "page suivante\(Interation \(2\)\)")

