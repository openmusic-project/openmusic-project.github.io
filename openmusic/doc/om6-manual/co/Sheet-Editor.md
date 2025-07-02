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
</span><span class="stkSel_yes"><span>Sheet Editor</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Sheet.md "page précédente(Sheet)")<span class="hidden">
| </span>[<span>page
suivante</span>](Sheet-Box.md "page suivante(Sheet Box)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Sheet Editor</span>

<div class="headCo_co">

<div class="secOutFra">

<div class="secOutTi">

[<span>Sommaire </span>](#)

</div>

<div class="secOutUi">

1.  [Creating Sheet Contents](#vfN6f)
2.  [Display](#vfN1e5)
3.  [Time Positions and Display](#vfN2f1)
4.  [Editing Objects](#vfN355)
5.  [Playback](#vfN3ca)

</div>

</div>

<div>

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
<p>A new OMSheet editor is initially a blank page : there is nothing inside.</p>
<p>A first step is therefore to add tracks and objects in this page. This can be done beforehand at building the Sheet object in the patch, or directly in the editor.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/empty-sheet.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/empty-sheet_1.png" width="300" height="216" alt="empty-sheet_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Building the Sheet Structure in a Patch</span>

</div>

<div class="linkUL">

  - [<span>Building Sheets in Visual Programs</span>](Sheet-Box.md)

</div>

</div>

<div class="txt">

The `Show Sheet Patches` box allows to display ofr hide the patches,
that is, the "algorithmic" part of the sheet. We will not consider it in
this section and focus on the "score" part only.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About The "Algorithmic" Part</span>

</div>

<div class="linkUL">

  - [<span>Sheet Patches</span>](Sheet-Patch.md)

</div>

</div>

</div>

<div class="part">

## <span>Creating Sheet Contents</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Adding/Removing Tracks</span>

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
<p>New tracks can be added in the sheet using the <code class="menuPath_tl">File / New Track</code> menu or corresponding <code class="keyboard_tl">CMD</code> + <code class="keyboard_tl">N</code> keyboard shortcut.</p>
<p>Select a track and use the delete key ( <code class="keyboard_tl">&lt;=</code> ) to remove it.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/sheet-empty-tracks.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/sheet-empty-tracks_1.png" width="300" height="211" alt="sheet-empty-tracks_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Adding/Removing Objects</span>

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
<p><code class="keyboard_tl">CMD</code> + Click somewhere in a sheet track to create a new object at this position.</p>
<p>You can also use the <code class="menuPath_tl">File / New Object</code> menu or corresponding <code class="keyboard_tl">CMD</code> + <code class="keyboard_tl">SHIFT</code> + <code class="keyboard_tl">N</code> keyboard shortcut to create a new object at the end of the selected track (if any).</p>
<p>Select an object and use the delete key ( <code class="keyboard_tl">&lt;=</code> ) to remove it.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/sheet-new-objects.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/sheet-new-objects_1.png" width="300" height="217" alt="sheet-new-objects_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>New Sheet Objects</span>

</div>

<div class="txt">

Note that new sheet objects are "empty". Their value is NIL.

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Objects ID</span>

</div>

<div class="txt">

Note that every object is automatically affected a unique ID number,
visible if the box `IDs` is checked on.

These IDs are mainly used to identify the objects in the "programmatic"
part of the Sheet creation.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Programming Sheets</span>

</div>

<div class="linkUL">

  - [<span>Sheet Patches</span>](Sheet-Patch.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Setting Contents in Sheet Objects</span>

</div>

<div class="txt">

Here again, there exist several ways of setting the actual contents of a
sheet object.

1.  [<span>At creating the sheet object in a patch</span>](Sheet-Box.md)

2.  [<span>Using the sheet internal patches</span>](Sheet-Patch.md)

3.  By dragging and dropping an existing object (from a patch or from
    the sheet itself) on a sheet object box (see below).

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Dragging Objects in The Sheet</span>

</div>

<div class="caption">

<div class="caption_co">

[![drag-into-sheet\_1.png](../res/drag-into-sheet_1.png)](../res/drag-into-sheet.png "Cliquez pour agrandir")

</div>

</div>

<div class="txt">

It is also possibe to drag the value from one object in the sheet to
another one :

</div>

<div class="caption">

<div class="caption_co">

[![drag-inside-sheet\_1.png](../res/drag-inside-sheet_1.png)](../res/drag-inside-sheet.png "Cliquez pour agrandir")

</div>

</div>

<div class="txt">

The contents of an existing object can be replaced with a value of
another type.

</div>

<div class="caption">

<div class="caption_co">

[![drag-change-type\_1.png](../res/drag-change-type_1.png)](../res/drag-change-type.png "Cliquez pour agrandir")

</div>

</div>

</div>

<div class="bloc tip">

<div class="bloc_ti tip_ti">

<span>Deleting Objects Contents</span>

</div>

<div class="txt">

Select an object and use the `SHIFT` + delete key ( `<=` ) to remove its
contents (reset the value to NIL).

Use `i` to reset the box initial size.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Display</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Several options allow to modify the general display of the sheet tracks.
These options do not modify its actual ("musial") contents.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Move / Switch / Resize Tracks</span>

</div>

<div class="txt">

Use :

  - <span>Up and Down arrow keys to change the size of selected
    track(s)</span>
  - <span>`SHIFT` + Up and Down arrow keys to change the position or
    spacing of selected track(s)</span>
  - <span>`ALT` + Up and Down arrow keys switch up/down the selected
    track(s)</span>

</div>

<div class="caption">

<div class="caption_co">

[![change-tracks\_1.png](../res/change-tracks_1.png)](../res/change-tracks.png "Cliquez pour agrandir")

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Sow / Hide tracks</span>

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
<p>The <code class="textCheckBox_tl">Tracks</code> box allow to choose to display or not the tracks in the background.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/notracks.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/notracks_1.png" width="300" height="187" alt="Hiding tracks in the OMSheet editor." /></a>
</div>
<div class="caption_ti">
Hiding tracks in the OMSheet editor.
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Object Info</span>

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
<p>The <code class="textCheckBox_tl">IDs</code> and <code class="textCheckBox_tl">Onsets</code> boxes allow to choose to display or hide the onset (ms) and the object ID on the individual objects.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/IDs-and-Onsets.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/IDs-and-Onsets_1.png" width="300" height="193" alt="IDs-and-Onsets_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Score Attributes</span>

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
<p>Score objects appearance can be modified in the Sheet editor :</p>
<ul>
<li><p>Select the object and use the Up and Down arrow keys to move the score vertically.</p></li>
<li><p>Right / <code class="keyboard_tl">CTRL</code> click on the object to open the contextual menu and change the score font size and staff.</p></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/staff-and-size.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/staff-and-size_1.png" width="300" height="202" alt="staff-and-size_1.png" /></a>
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

## <span>Time Positions and Display</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

All the objects and internal events in the sheet are precisely
positioned in the time axis according to non-linear notation or other
graphical constraints.

The `Grid` box and value field allow to display and set a regular
temporal grid on the score : you can see that this regular temporal grid
rarely draws a regular pattern, and changes depending on the objects in
the score and their relative positions.

</div>

<div class="caption">

<div class="caption_co">

![The spacing of the grid units (here, of 1000ms = 1s) is optimized
depending on the graphical constraints of the objects in the
score.](../res/grid_1.png)

</div>

<div class="caption_ti">

The spacing of the grid units (here, of 1000ms = 1s) is optimized
depending on the graphical constraints of the objects in the score.

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Moving Objects</span>

</div>

<div class="txt">

Uset the `<=` and `=>` arrow keys to move the objects in the time axis
(and add `SHIFT` key to move them faster).

</div>

</div>

<div class="bloc tip">

<div class="bloc_ti tip_ti">

<span>Aligning to the Grid</span>

</div>

<div class="txt">

By pressing `a`, the object aligns its onset time to the current grid
unit.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Editing Objects</span>

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
<p>Double click on a Sheet object to edit its contents with the corresponding editor.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/internal-editor.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/internal-editor_1.png" width="300" height="155" alt="internal-editor_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Some Sheet Objects Editors...</span>

</div>

<div class="linkUL">

  - [<span>Score Editors</span>](ScoreEditors.md)
  - [<span>BPFs and BPCs Editors</span>](BPFEditors.md)
  - [<span>The Sound Editor</span>](SoundEditor.md)
  - [<span>The Maquette Editor</span>](Editor.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Playback</span>

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
<p>Use the standard score playback controls to play the sheet or some parts of it.</p>
<p>If an interval or a set of specific objects are selected at launching the player, only these parts of the score are played.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/play_3.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/play_4.png" width="300" height="209" alt="play_4.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Score Playback Controls</span>

</div>

<div class="linkUL">

  - [<span>Play Controls</span>](Editor-Play.md)

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
          - <span id="i5" class="outLeftSel_yes"><span>Sheet
            Editor</span></span>
          - [<span>Sheet Box</span>](Sheet-Box.md)
          - [<span>Sheet Patches</span>](Sheet-Patch.md)
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
précédente</span>](Sheet.md "page précédente(Sheet)")<span class="hidden">
| </span>[<span>page
suivante</span>](Sheet-Box.md "page suivante(Sheet Box)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
