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
</span><span class="stkSel_yes"><span>The Store
Object</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](SlotsBox.md "page précédente(Slots)")<span class="hidden">
| </span>[<span>page
suivante</span>](InterfaceBoxes.md "page suivante(Interface Boxes)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>The Store Object</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

The **store** object is a **general-purpose object** , which is designed
to store any type of data. For instance, one may want to be able to
design one or more programs and use the **same object** everywhere
without defining its type from the beginning.

The icon of a store object
<span class="iconButton_tim">![store\_icon.png](../res/store_icon.png)</span>
represents a memory space.

1.  A store object can be manipulated in a patch just like any other
    type of object, via factory, instance or [<span> slot
    boxes</span>](SlotsBox.md) .

2.  When a <span id="i3" class="defRef_ul"><span>global
    variable</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc1805)</sup>
    is created in the [<span> Globals package</span>](Packages.md) , it
    is a store object, by default. Consequently, any type of object can
    be stored into it.

</div>

</div>

<div class="part">

## <span>The Store Factory Box</span>

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
<p>The store factory box allows to create any type of variable from any type of object in a patch.</p>
<p>It has two inputs and outputs :</p>
<ul>
<li><span> "self" : the store box itself</span></li>
<li><span> "value" : any data, including instances of other classes.</span></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/storebox.png" width="125" height="86" alt="storebox.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

To add a store factory box :

  - select `Classes / OMKernel / Data / Store`

  - type "store" directly in the patch editor.

</div>

<div class="caption">

<div class="caption_co">

![addstore.png](../res/addstore.png)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>The Store Default Global Variable</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

By default, a global variable created in the Globals package is an
instance of the class Store .

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Reminder : Creating a Global Variable</span>

</div>

<div class="caption">

<div class="caption_co">

![new-global\_2.png](../res/new-global_2.png)

</div>

</div>

<div class="txt">

To create a global variable from the Store class :

  - 1.  open the Globals package window
    
    2.  double click on the upper part of the suitcase icon or `Ctrl` /
        right click and choose `Open`.

<!-- end list -->

  - Select `File / New Variable`.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Creating and Manipulating a Global Variable</span>

</div>

<div class="linkUL">

  - [<span>Global Variables</span>](GlobalVariables.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Setting the Value of a Store Object</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>With a Store Factory Box</span>

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
<ol>
<li><p>Connect the output of an object to the "value" input of a store factory box.</p></li>
<li><p>Evaluate the store box.</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/storefrompatch.png" width="133" height="200" alt="storefrompatch.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Using a Slots Box and a Store Intance – or Global Variable</span>

</div>

<div class="txt">

|     |                                                                                         |                                                                                       |
| --- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 1\. | <span class="iconButton_tim">![strobox\_icon.png](../res/strobox_icon.png)</span>       | Add a store instance or global variable                                               |
| 2\. | <span class="iconButton_tim">![slotsstore\_icon.png](../res/slotsstore_icon.png)</span> | Add a store slots box : `Cmd` click, type "store" and press `SHIFT` while validating. |

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
<table>
<tbody>
<tr class="odd">
<td><p>3.</p></td>
<td></td>
<td><p>Connect the "self" output of the store instance to the "self" input of the store slots box .</p></td>
</tr>
<tr class="even">
<td><p>4.</p></td>
<td></td>
<td><p>Connect any type of box to the "value" input of the store slots box.</p></td>
</tr>
<tr class="odd">
<td><p>5.</p></td>
<td></td>
<td><p>Evaluate slots.</p></td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/editorvar.png" width="173" height="145" alt="The value of the variable is now a chord." />
</div>
<div class="caption_ti">
The value of the variable is now a chord.
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Editing a Store Global Variable With the Store Editor</span>

</div>

<div class="txt">

A global variable can be edited, from the Globals window, or from a
patch editor. Double click on the icon of a store object
<span class="iconButton_tim">![store\_icon.png](../res/store_icon.png)</span>
to open its editor.

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
<ul>
<li><p>If the value of the store object hasn't been set as described above, the editor displays the following icon : <span class="iconButton_tim"><img src="../res/iconnil_icon.png" class="sfile_icon-png_icon-gif_icon" width="30" height="35" alt="iconnil_icon.png" /></span>.</p>
<p>This means the value of this variable is "nil". To modify this value, the user must resort to the procedures described above.</p></li>
</ul>
<ul>
<li><p>If the value of the store object has already been set, it can be modified via the object's editor :</p>
<ol>
<li><p>double click on the value icon to edit it</p></li>
<li><p>validate by closing the editor if the object represents <strong>instances</strong>, or click on the editor if it represents <strong>alphanumerical values</strong>.</p></li>
</ol></li>
</ul>
<p>Note that the editor of this value is the same as that of the corresponding class.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/retourglobal.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/retourglobal_1.png" width="247" height="300" alt="retourglobal_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

If the store object is a global variable, the corresponding variable in
the Globals package and all of its representations will be affected by
possible modifications.

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Renaming Variables</span>

</div>

<div class="txt">

Global variables can only be renamed from the Globals package of the
Library window, and only from this location.

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
              - [<span>Instance Boxes</span>](InstanceBoxes.md)
              - [<span>Global Variables</span>](GlobalVariables.md)
              - [<span>Slots</span>](SlotsBox.md)
              - <span id="i4" class="outLeftSel_yes"><span>The Store
                Object</span></span>
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
précédente</span>](SlotsBox.md "page précédente(Slots)")<span class="hidden">
| </span>[<span>page
suivante</span>](InterfaceBoxes.md "page suivante(Interface Boxes)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
