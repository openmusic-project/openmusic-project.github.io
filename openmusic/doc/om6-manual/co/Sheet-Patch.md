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
</span>[<span>Sheet</span>](Sheet.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Sheet Patches</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Sheet-Box.md "page précédente(Sheet Box)")<span class="hidden">
| </span>[<span>page suivante</span>](MIDI.md "page suivante(MIDI)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Sheet Patches</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

In addition to their musical contents, OMSheets embed some programmatic
aspects materialized as a list of internal patches.

To make these patches visible, use the `Show Sheet Patches` box in the
sheet editor.

</div>

<div class="caption">

<div class="caption_co">

[![show-sheet-patches\_1.png](../res/show-sheet-patches_1.png)](../res/show-sheet-patches.png "Cliquez pour agrandir")

</div>

</div>

</div>

<div class="part">

## <span>Basic Operations on the Sheet Patches</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

A number of buttons are visible around the patch editor part of the
window.

</div>

</div>

<div class="bloc tip">

<div class="bloc_ti tip_ti">

<span>Tooltips</span>

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
<p>Used <code class="keyboard_tl">CMD</code> to show the "tooltip" help of the different buttons</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/tooltip.png" width="104" height="50" alt="tooltip.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Creating/Removing Sheet Patches</span>

</div>

<div class="txt">

Sheet patches can be attached to a given sheet object at initialisation,
or using the `+` / `-` buttons in the editor. There can be any number of
patches attached to a sheet.

</div>

<div class="txt">

The
<span class="iconButton_tim">![change\_icon.png](../res/change_icon.png)</span>
arrow buttons at the top allow to navigate between the different patches
attached to a sheet.

The
<span class="iconButton_tim">![move\_icon.png](../res/move_icon.png)</span>
arrow buttons at the bottom allow to change the order of the patches
attached to a sheet by moving the current one up or down in the list.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Adding Patches using the OMSheet Box</span>

</div>

<div class="linkUL">

  - [<span>Building Sheets in Visual Programs</span>](Sheet-Box.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Sheet Access</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The sheet patches are like standard patches, except that they can
contain a special kind of box called **SHEET-ACCESS** (one is created by
defalut when adding a new patch with the `+` button in the sheet-patch
window).

This box is meant to represent and allow to read or modify the contents
of the objects in the sheet containing the patch.

</div>

<div class="caption">

<div class="caption_co">

![sheet-access-box.png](../res/sheet-access-box.png)

</div>

</div>

<div class="txt">

The SHEET-ACCESS box has 4 inputs/outputs

  - The usual input corresponds to the sheet containing the patch.

  - The input allows to target a specific object in the sheet using its
    ID number. When the **sheet-access** box is evaluated, the
    corresponding rectangle is highlighted in it :

</div>

<div class="caption">

<div class="caption_co">

![access-select.png](../res/access-select.png)

</div>

</div>

<div class="txt">

  - and allow to read and/or modify repectively the corresponding object
    in the sheet (a SHEET-TRACK-OBJ instance including the value and
    temporal location) or its contents (the value only, that is, the
    musical object it contains).

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Sheet Accesses</span>

</div>

<div class="txt">

The Sheet patches can contain as many sheet access boxes as needed.

Note that the contents of the sheet access itself may change depending
on the evaluation performed on it, so the order of evaluations may
matter at the time of programming advanced relations between the
objects.

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Example of Sheet programming Using Sheet-Access (1)</span>

</div>

<div class="txt">

In this example, the Chord-seq (ID=1) is determined from the data coming
from object ID=0 (a BPF)

</div>

<div class="caption">

<div class="caption_co">

[![sheet-ex-1\_1.png](../res/sheet-ex-1_1.png)](../res/sheet-ex-1.png "Cliquez pour agrandir")

</div>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Example of Sheet programming Using Sheet-Access (2)</span>

</div>

<div class="txt">

In this exemple, the object on track 2 (object ID=1) is determined using
a **sheet-track-obj** in order to set its onset at the position of
measure 1 in object 0 (this first voice).

The contents of object 1 is the reverse rhythm of voice 0.

</div>

<div class="caption">

<div class="caption_co">

[![sheet-ex-2\_1.png](../res/sheet-ex-2_1.png)](../res/sheet-ex-2.png "Cliquez pour agrandir")

</div>

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
      - [<span>Basic Tools</span>](BasicObjects.md)
      - [<span>Score Objects</span>](ScoreObjects.md)
      - [<span>Maquettes</span>](Maquettes.md)
      - [<span>Sheet</span>](Sheet.md)
          - [<span>Sheet Editor</span>](Sheet-Editor.md)
          - [<span>Sheet Box</span>](Sheet-Box.md)
          - <span id="i2" class="outLeftSel_yes"><span>Sheet
            Patches</span></span>
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
précédente</span>](Sheet-Box.md "page précédente(Sheet Box)")<span class="hidden">
| </span>[<span>page suivante</span>](MIDI.md "page suivante(MIDI)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
