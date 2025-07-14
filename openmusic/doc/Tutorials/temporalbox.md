OpenMusic Reference  
---  
[Prev](x1840)| Chapter 10. Maquettes| [Next](x2212)  
  
* * *

# The [**Temporalbox**](temporalbox) object

When a patch is dropped into a [**Maquette**](glossary#MAQUETTE), it is
enclosed in a [**Temporalbox**](temporalbox), which has two unique
elements: the  _self_  box and the  _tempout_  output. The temporal box
returns information about the geometry and positioning of the box within the
frame. You can use these values to affect the behavior of the patch. The
output _tempout_ must be connected to a playable music object, as this is
the object that will be played within the
[**Maquette**](glossary#MAQUETTE) when the play pointer crosses the left
edge of the box. Additional inputs and outputs may be added with the usual
buttons as with any patch. These are represented in the
[**Maquette**](glossary#MAQUETTE) frame as tick marks on the upper and
lower edges of the box, and may be used to create connections between
[**Maquette**](glossary#MAQUETTE) boxes in order to pass data between
them.

## The  _self_  outputs

The  _self_  object represents the box itself. The 10 outlets return the
following information about the box in the context of the
[**Maquette**](glossary#MAQUETTE) frame:

  *   _self_  \- The [**Temporalbox**](temporalbox) object itself. Can be used with [ addbox2maquette ](addbox2maquette) and related functions.

  *   _offset_  \- The distance of the left edge of the box from the zero point of the x axis, in milliseconds.

  *   _extend_  \- The duration of the object (or of the musical object connected to  _tempout_  , if a patch) as played, not as represented graphically, in milliseconds. Changing the scale of the view will not affect this value. If you have changed the size of the box, this real duration of the object is nonetheless represented graphically; the extension of the box beyond the real duration will not be colored like the front portion of the box. 

  *  _colorframe_  \- A value representing the color assigned to the box.

  *   _value_  \- The object connected to the box's  _tempout_ 

  *   _posy_  \- The height of the top edge of the box as measured against the y axis.

  *   _stretch-factor_  \- The ratio of the distance spanned by the box graphically against the time axis to the real duration of the object. A value of 1 means the object is drawn at 'actual length'. Values smaller than 1 represent a compression, larger values an expansion. 

  *  _sizey_  \- The length of the left edge of the box as measured against the y axis.

  *   _free-store_  \- An open slot where you may store values using the get-set-slot mechanism. See the chapter on [Classes](concepts.classes) for more information on the get-set-slot mechanism.

  *   _Reference_  \- The OM internal reference for the [**Temporalbox**](temporalbox) object. The  _self_  object can't be put in reference mode, so you must take this value here if you need it. See the Chapter on [Patches](concepts.patches) for more info on reference mode.

* * *

[Prev](x1840)| [Home](index)| [Next](x2212)  
---|---|---  
The structure of a [**Maquette**](glossary#MAQUETTE)|
[Up](concepts.maquettes)| [ **Maquette**](glossary#MAQUETTE)s in patches

