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
</span><span class="stkSel_yes"><span>Instance
Boxes</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Instances.md "page précédente(Instances)")<span class="hidden">
| </span>[<span>page
suivante</span>](GlobalVariables.md "page suivante(Global Variables)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Instance Boxes</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

An instance can be materialized out of any output of a factory box,
provided this output can return an instance or a list. Creating an
instance box is especially significant when done from the "self" outlet
of a factory box, which returns the **object itself** .

There are two types of instance boxes :

  - <span> **class instances**, which are created from objects,</span>
  - <span> **list instances**, which are created from lists. </span>

</div>

</div>

<div class="part">

## <span>Procedure</span>

<div class="part_co">

<div class="infobloc">

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
<img src="../res/createlistbox2.png" width="161" height="202" alt="The first ouput of the chord-seq factory box is a chord-seq instance. The second output is a list of pitches." />
</div>
<div class="caption_ti">
The first ouput of the chord-seq factory box is a chord-seq instance. The second output is a list of pitches.
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>To create an instance box, <code class="keyboard_tl">SHIFT</code> + <code class="keyboard_tl">Cmd</code> click on an output.</p>
<p>The corresponding object will appear in the patch editor.</p>
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
<p>The resulting box represents a specific object that cannot be reinitialized, but can be used and evaluated again in a patch.</p>
<p>This is why this box shows only one "self" outlet.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/instanceself.png" width="147" height="93" alt="instanceself.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Renaming Instance Boxes</span>

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
<img src="../res/edtiinstname.png" width="82" height="69" alt="edtiinstname.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Instances in OM have a <strong>name</strong> , which can be edited on the instance box.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Modifying the Instance</span>

</div>

<div class="txt">

The parametric values of an instance box can't be accessed directly in
patches. However, they can be accessed and modified with the slots box.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About the Slots Box</span>

</div>

<div class="linkUL">

  - [<span>Reading and Modifying Instances : Slots</span>](SlotsBox.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Instance Editors</span>

</div>

<div class="txt">

The content of an instance box can be modified like that a factory box.

Double-click on the instance to open its editor.

</div>

<div class="caption">

<div class="caption_co">

![An instance has the same editor as the factory box it is derived from,
and which offers the same edition
possibilities.](../res/instanceeditor.png)

</div>

<div class="caption_ti">

An instance has the same editor as the factory box it is derived from,
and which offers the same edition possibilities.

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About Factory Boxes Editors</span>

</div>

<div class="linkUL">

  - [<span>Editors</span>](3-Editors.md)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Some OM Objects Editors</span>

</div>

<div class="linkUL">

  - [<span>BPFs and BPCs Editors</span>](BPFEditors.md)
  - [<span>Score Editors</span>](ScoreEditors.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>List Instances</span>

<div class="part_co">

<div class="infobloc">

<div class="txtRes">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><div class="dk_txtRes_txt txt">
<p><strong>List instances</strong> are instance boxes containing lists of values instead of a single instance. An instance derived from a list returns its content when evaluated.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/listinstance.png" width="111" height="119" alt="A list can be used for creating an instance box." />
</div>
<div class="caption_ti">
A list can be used for creating an instance box.
</div>
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
<td><div class="caption">
<div class="caption_co">
<img src="../res/uselistinstance.png" width="166" height="178" alt="uselistinstance.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Just like any list, it can be connected to other boxes to create new objects.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Lists Editor</span>

</div>

<div class="txt">

List instances have a basic editor allowing to get a preview and modify
their contents.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>More about Instance and List Instance Editors</span>

</div>

<div class="linkUL">

  - [<span>Editors</span>](3-Editors.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Storing/Reusing Instances</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Instances are a means to save an object within a patch, where it can
then be used as a source of data.

Instances can also be used in other patches :

  - they can be copied

  - they can saved as <span id="i3" class="defRef_ul"><span>global
    variables</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc1805)</sup>,
    which is sometimes more convenient and/or coherent.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About Global Variables</span>

</div>

<div class="linkUL">

  - [<span>Global Variables</span>](GlobalVariables.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Instance Files</span>

</div>

<div class="txt">

Instances can also be exported and imported as **.omi** files, to and
from any location of your hard drive. The import/export procedure must
be done via Factory Boxes.

</div>

<div class="caption">

<div class="caption_co">

![An instance must be integrated as the content of a factory box, before
it is exported.](../res/exportinstance_2.png)

</div>

<div class="caption_ti">

An instance must be integrated as the content of a factory box, before
it is exported.

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Importing / Exporting Instances to/from Factory Boxes</span>

</div>

<div class="linkUL">

  - [<span>Importing/Exporting Factory Box
    Values</span>](4-ImportExport.md)

</div>

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Dropping Instance Files in the Patch</span>

</div>

<div class="txt">

You can drag and drop an **instance file** in a patch editor to create a
new instance box directly.

</div>

<div class="caption">

<div class="caption_co">

![draginst.png](../res/draginst.png)

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

<span class="hidden">Références : </span>

1.  
    
    <div id="kFootBsktc1805">
    
    <div class="footBskt_itti">
    
    Global variable
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    An instance of OM object that has been saved in order to be used in
    other programs. Global variables are visible from the `Library`
    window and stored as .omi files in the `Globals` folder of the
    workspace.
    
    </div>
    
    </div>
    
    </div>
    
    </div>

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
              - <span id="i4" class="outLeftSel_yes"><span>Instance
                Boxes</span></span>
              - [<span>Global Variables</span>](GlobalVariables.md)
              - [<span>Slots</span>](SlotsBox.md)
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
précédente</span>](Instances.md "page précédente(Instances)")<span class="hidden">
| </span>[<span>page
suivante</span>](GlobalVariables.md "page suivante(Global Variables)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
