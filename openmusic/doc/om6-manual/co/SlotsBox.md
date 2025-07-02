<div id="tplf" class="tplPage">

<div id="tplh">

<span class="hidden">Navigation générale : </span>

  - [<span>Guide</span>](OM-Documentation.md)
  - [<span>Plan</span>](OM-Documentation_1.md)
  - [<span>Glossaire</span>](OM-Documentation_2.md)

</div>

<div id="tplt">

![empty.gif](../tplRes/page/empty.gif)![logoom1.png](../res/logoom1.png)<span class="tplTi">OpenMusic
Documentation</span><span class="sw_outStack_navRoot"><span class="hidden">Hiérarchie
de section : </span>[<span>OM 6.6 User
Manual</span>](OM-User-Manual.md)<span class="stkSep"> \>
</span>[<span>Visual Programming
II</span>](AdvancedVisualProgramming.md)<span class="stkSep"> \>
</span>[<span>Instances</span>](Instances.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Slots</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](GlobalVariables.md "page précédente(Global Variables)")<span class="hidden">
| </span>[<span>page
suivante</span>](Store.md "page suivante(The Store Object)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Reading and Modifying Instances : Slots</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

The slots box can read or modify the slots values – "fields" or
parameters – of an instance or global variable.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About Instance Boxes and Global Variables</span>

</div>

<div class="linkUL">

  - [<span>Instance Boxes</span>](InstanceBoxes.md)
  - [<span>Global Variables</span>](GlobalVariables.md)

</div>

</div>

</div>

<div class="part">

## <span>Properties</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Creating a Slots Box</span>

</div>

<div class="txt">

**** To create a slots box :

1.  `Cmd` click in a patch editor and type a class name, as for any
    other box

2.  keep `SHIFT` pressed when validating.

You can also

1.  create a factory box

2.  select it and press `Alt`

3.  drag the box with `SHIFT` key pressed.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Morphology</span>

</div>

<div class="txtRes">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><div class="caption">
<div class="caption_co">
<img src="../res/morhposlot.png" width="207" height="162" alt="morhposlot.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The structure and morphology of a slots box is similar to those of its corresponding factory box. The slots box also has a "self", and a number of parametric slots.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txtRes">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><div class="dk_txtRes_txt txt">
<p>For instance, the slots box created out of a chord instance has the same inputs and outputs : self , lmidic for midicents, lvel for velocities, loffset for notes offsets , ldur for durations, lchan for midi channels. It also has the same icon.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/slots2.png" width="211" height="88" alt="slots2.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Behaviour</span>

</div>

<div class="txt">

When the slots box is evaluated :

  - <span>The outputs of slots return the values of an instance's
    corresponding slots. </span>
  - <span>The inputs of slots can take values which are assigned tothe
    corresponding slots of the object.</span>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Using the Slots Box to Modify an Instance</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Using "slots" allows to read and modify the parameters of an object
without creating new instances out of new factory boxes :

</div>

</div>

<div class="bloc warning">

<div class="bloc_ti warning_ti">

<span>Constraint</span>

</div>

<div class="txt">

The **"self"** **input** of slots must be connected to the **"self"
output** of an object, in order to set the object whose slots are to be
read and/or modified.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Reading Values</span>

</div>

<div class="caption">

<div class="caption_co">

![slots33.png](../res/slots33.png)

</div>

</div>

<div class="txt">

To read the value(s) of an instance's slot :

1.  connect the instance to the "self" input of slots,

2.  evaluate the corresponding output of slots.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Modifying the Values of an Object</span>

</div>

<div class="txt">

To modify the value(s) of an instance's slot :

1.  connect the instance to the "self" input of slots,

2.  enter new values in the relevant input of slots,

3.  evaluate slots

</div>

<div class="caption">

<div class="caption_co">

![slots34.png](../res/slots34.png)

</div>

</div>

<div class="txt">

Note that the reference of the object hasn't changed, despite the fact
the object's content has changed.

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Applying Slots to Factory Boxes</span>

</div>

<div class="txtRes">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><div class="dk_txtRes_txt txt">
<p>The same procedures can apply to factory boxes.</p>
<ol>
<li><p>Before evaluating, you may need to lock the factory box before evaluating slots : otherwise, it will be reset to its default values.</p></li>
<li><p>After evaluating, you may need to select the factory box and press <code class="keyboard_tl">m</code> to refresh the miniview.</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/slots32.png" width="300" height="266" alt="slots32.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Modifying an Object in an Abstraction</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

With a slots box, an instance can be passed through the inputs of an
abstraction and mainpulated without resorting to a new factory boxes,
which would generate copies of the instance. This is sometimes necessary
:

  - for optimization purposes

  - to ensure keeping the original instance one operates upon.

</div>

<div class="txtRes">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><div class="caption">
<div class="caption_co">
<img src="../res/instanceconnect.png" width="97" height="292" alt="instanceconnect.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>To read or modify the parametric values of an instance from <strong>inside an abstraction</strong> :</p>
<table>
<tbody>
<tr class="odd">
<td><p>1.</p></td>
<td><p>add an input and an output to the abstraction</p></td>
</tr>
<tr class="even">
<td><p>2.</p></td>
<td><p>connect the self output of the instance to the sub patch input</p></td>
</tr>
<tr class="odd">
<td><p>3.</p></td>
<td><p>connect the sub patch output to the self intput of an equivalent instance.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>1 - Using Instance Values in a Sub-Patch to Create a New
Object</span>

</div>

<div class="caption">

<div class="caption_co">

![use-slots.png](../res/use-slots.png)

</div>

</div>

<div class="txt">

1.  In the sub patch editor, add a chord box and create a corresponding
    slots box.
    
    Add the items required to modify the values of the chord, and
    connect them to the .
    
    Connect these items to slots, and to the factory box.
    
    Connect the remaining inputs of the factory box to the corresponding
    outputs of slots box.

2.  Connect the **input** of the sub patch to the **"self" input of
    slots**
    
    Connect the **output** of the sub patch to the "self" output of the
    factory box.
    
    Evaluate the factory box outside the patch.

The input instance values are read and used for generating a new object.

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>2 - Modifying an Instance in a Sub-Patch</span>

</div>

<div class="caption">

<div class="caption_co">

![modif-slots.png](../res/modif-slots.png)

</div>

</div>

<div class="txt">

The input values of the instance are read and modified by the second
slots box. Chord \#2 is also modified, since chord \#1 has been
modified.

</div>

</div>

<div class="bloc tip">

<div class="txt">

When the initial instance coming from a factory box is modified, you may
need to refresh the box minivie in order to visualize the changes.

</div>

</div>

</div>

</div>

</div>

</div>

</div>

<span class="hidden">Références : </span>

</div>

<div id="tplo" class="tplo_out_yes">

<div class="tplOTp">

<div class="tplOBm">

<div id="mnuFrm">

<span class="hidden">Plan :</span>

<div id="mnuFrmUp" onmouseout="menuScrollTiTask.fSpeed=0;" onmouseover="if(menuScrollTiTask.fSpeed&gt;=0) {menuScrollTiTask.fSpeed=-2; scTiLib.addTaskNow(menuScrollTiTask);}" onclick="menuScrollTiTask.fSpeed-=2;" style="display: none;">

<span id="mnuFrmUpLeft">[](#)</span><span id="mnuFrmUpCenter"></span><span id="mnuFrmUpRight"></span>

</div>

<div id="mnuScroll">

  - [<span>OpenMusic Documentation</span>](OM-Documentation.md)
  - [<span>OM 6.6 User Manual</span>](OM-User-Manual.md)
      - [<span>Introduction</span>](00-Sommaire.md)
      - [<span>System Configuration and
        Installation</span>](Installation.md)
      - [<span>Going Through an OM Session</span>](Goingthrough.md)
      - [<span>The OM Environment</span>](Environment.md)
      - [<span>Visual Programming I</span>](BasicVisualProgramming.md)
      - [<span>Visual Programming
        II</span>](AdvancedVisualProgramming.md)
          - [<span>Abstraction</span>](Abstraction.md)
          - [<span>Evaluation Modes</span>](EvalModes.md)
          - [<span>Higher-Order Functions</span>](HighOrder.md)
          - [<span>Control Structures</span>](Control.md)
          - [<span>Iterations: OMLoop</span>](OMLoop.md)
          - [<span>Instances</span>](Instances.md)
              - [<span>Instance Boxes</span>](InstanceBoxes.md)
              - [<span>Global Variables</span>](GlobalVariables.md)
              - <span id="i3" class="outLeftSel_yes"><span>Slots</span></span>
              - [<span>The Store Object</span>](Store.md)
          - [<span>Interface Boxes</span>](InterfaceBoxes.md)
          - [<span>Files</span>](Files.md)
      - [<span>Basic Tools</span>](BasicObjects.md)
      - [<span>Score Objects</span>](ScoreObjects.md)
      - [<span>Maquettes</span>](Maquettes.md)
      - [<span>Sheet</span>](Sheet.md)
      - [<span>MIDI</span>](MIDI.md)
      - [<span>Audio</span>](Audio.md)
      - [<span>SDIF</span>](SDIF.md)
      - [<span>Lisp Programming</span>](Lisp.md)
      - [<span>Errors and Problems</span>](errors.md)
  - [<span>OpenMusic QuickStart</span>](QuickStart-Chapters.md)

</div>

<div id="mnuFrmDown" onmouseout="menuScrollTiTask.fSpeed=0;" onmouseover="if(menuScrollTiTask.fSpeed&lt;=0) {menuScrollTiTask.fSpeed=2; scTiLib.addTaskNow(menuScrollTiTask);}" onclick="menuScrollTiTask.fSpeed+=2;" style="display: none;">

<span id="mnuFrmDownLeft">[](#)</span><span id="mnuFrmDownCenter"></span><span id="mnuFrmDownRight"></span>

</div>

</div>

</div>

</div>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](GlobalVariables.md "page précédente(Global Variables)")<span class="hidden">
| </span>[<span>page
suivante</span>](Store.md "page suivante(The Store Object)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
