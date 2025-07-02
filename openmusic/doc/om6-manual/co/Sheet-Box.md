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
</span><span class="stkSel_yes"><span>Sheet Box</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Sheet-Editor.md "page précédente(Sheet Editor)")<span class="hidden">
| </span>[<span>page
suivante</span>](Sheet-Patch.md "page suivante(Sheet Patches)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Building Sheets in Visual Programs</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

As other musical objects, a sheet can be simply created in an OM patch.
This can be done at several levels of precision and complexity.

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Remainder : objects allowed in the OMSheet</span>

</div>

<div class="txt">

You can insert in a sheet most of the standard OM musical objects :

  - <span>CHORD-SEQ</span>
  - <span>VOICE</span>
  - <span>SOUND</span>
  - <span>BPF / MIDICONTROL</span>
  - <span>MAQUETTE</span>

</div>

</div>

<div class="part">

## <span>Connecting Objects</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Objects are to be connected to the input of the OMSheet in order to be
included in it.

expects to receive a list, each element corresponding to one new sheet
track.

</div>

<div class="caption">

<div class="caption_co">

[![make-sheet\_1.png](../res/make-sheet_1.png)](../res/make-sheet.png "Cliquez pour agrandir")

</div>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Empty Tracks</span>

</div>

<div class="txt">

In the example above, note that the NIL element in the input list
produced an empty track in the OMSheet object created.

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Polyphonic Objects</span>

</div>

<div class="txt">

If you try to create a track from a polyphonic object (**multi-seq** or
**poly**), the sheet will automatically split it at initialization and
create a new track with each voice of the object.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Compound Tracks</span>

</div>

<div class="txt">

Several musical objects can coexist (generally, sequencially) on a same
track. To create several objects on a same track, just connect a list of
objects instead of a single object to the first-level input list :

</div>

<div class="caption">

<div class="caption_co">

[![make-sheet-2\_1.png](../res/make-sheet-2_1.png)](../res/make-sheet-2.png "Cliquez pour agrandir")

</div>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Objects Onsets</span>

</div>

<div class="txt">

In compound tracks, objects are automatically positioned one after the
other (an object starts right at the end of the previous one in the
list). See next section for more advanced control on the position of the
objects.

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Maquettes</span>

</div>

<div class="txt">

Maquettes can be embedded in OMSheets as other musical objects. Just use
the maquette box in the "reference" evaluation mode and connect it as
any other object box.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>"Reference" Evaluation Mode</span>

</div>

<div class="linkUL">

  - [<span>Reference Mode</span>](RefMode.md)

</div>

</div>

<div class="caption">

<div class="caption_co">

[![sheet-maq\_1.png](../res/sheet-maq_1.png)](../res/sheet-maq.png "Cliquez pour agrandir")

</div>

</div>

<div class="txt">

Note that the size of the maquette boxes may be distorted due to the
non-linear graphical representation of the score in the editor.

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Maquette Result</span>

</div>

<div class="txt">

If the maquette has a "synthesis function", the result will appear along
with the boxes in the maquette representation.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Maquette Computation</span>

</div>

<div class="linkUL">

  - [<span>An Alternate Evaluation Tool : the Synthesis
    Patch</span>](Synthpatchprog.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Controlling the Structure</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

For a more accurate control of the sheet structure (and in particular of
the temporal structure), the internal components of the sheet can be
created and assembled directly in the OM patch. The classes
**SHEET-TRACK** and **SHEET-TRACK-OBJ** can be used for this purpose.

Build the tracks and connect them instead of simple objects :

  - **SHEET-TRACK** is just initialized with a list of
    **SHEET-TRACK-OBJs**.

  - **SHEET-TRACK-OBJ** is initialized with an object, a start time (or
    "onset") and an ID number (optional).

</div>

<div class="caption">

<div class="caption_co">

[![sheet-track-objs\_1.png](../res/sheet-track-objs_1.png)](../res/sheet-track-objs.png "Cliquez pour agrandir")

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Sheet Patches</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The other input of the OMSheet box () allows you to programmatically set
the patches used internally in the sheet.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Programming Inside the Sheet</span>

</div>

<div class="linkUL">

  - [<span>Sheet Patches</span>](Sheet-Patch.md)

</div>

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
<p>Just connect a list of patch boxes in "reference" mode.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/sheet-patch-box.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/sheet-patch-box_1.png" width="300" height="241" alt="sheet-patch-box_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Patches in "Reference" Mode ?</span>

</div>

<div class="linkUL">

  - [<span>Reference Mode</span>](RefMode.md)

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
          - <span id="i3" class="outLeftSel_yes"><span>Sheet
            Box</span></span>
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
précédente</span>](Sheet-Editor.md "page précédente(Sheet Editor)")<span class="hidden">
| </span>[<span>page
suivante</span>](Sheet-Patch.md "page suivante(Sheet Patches)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
