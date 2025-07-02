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
I</span>](BasicVisualProgramming.md)<span class="stkSep"> \>
</span>[<span>Boxes</span>](Boxes.md)<span class="stkSep"> \>
</span>[<span>Objects – Factory
Boxes</span>](FactoryBoxes.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Editors</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](1-Play.md "page précédente(Playback and Players)")<span class="hidden">
| </span>[<span>page
suivante</span>](4-ImportExport.md "page suivante(Import/Export)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Editors</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

Factory boxes have an **internal editor** . As a complement to the
algorithmic creation of objects, it is a means to build, or modify them
manually once objects have been initialized. Some elementary classes
have a default editor, but most objects used in OM have specifically
dedicated editors, such as score editors, sound file editors, BPF
editors, etc. All editors open with a double click on a factory box.

</div>

</div>

<div class="part">

## <span>Basic Editors</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Default Instance Editor</span>

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
<p>When a class has only a default – basic – editor, it opens with a double click.</p>
<p>This editor has a number of <span id="i3" class="defRef_ul"><span>slots</span></span><sup><a href="#kFootBsktc2074"><span>[</span>1<span>]</span></a></sup>, which represent the object's parameters. Each slot is represented by a grey box and can be edited directly.</p>
<p>To edit the value of a component :</p>
<ol>
<li><p>double click on the numeric frame</p></li>
<li><p>enter a new value and validate.</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/defedit-edit.png" width="269" height="165" alt="The default editor of an OSC-event." />
</div>
<div class="caption_ti">
The default editor of an OSC-event.
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

If the value of a slot is iself an instance of a class (e.g. a note,
etc.), the internal editor of this class opens at double-clicking it in
the parent editor.

Lists (e.g., "bundle" in the previous example) also open in a specific
internal list editor.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>List Editor</span>

</div>

<div class="txt">

List in OM editors have a specific editor where each item is presented
in a separate cell (and can in turn be edited).

A **list editor** displays components values, indexes and navigation
arrows.

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
<a href="../res/listeditor-2.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/listeditor-2_1.png" width="300" height="95" alt="A List editor" /></a>
</div>
<div class="caption_ti">
A List editor
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<ul>
<li><p>Items are displayed next to a bidimensional index in the list, that is, the editor allows to represent lists of list on a single plane.</p></li>
<li><p>The navigation arrows at the top allow to shift the display position in the list (the editor window shows up to 10 elements only).</p></li>
</ul>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Note</span>

</div>

<div class="txt">

It is not possible to modify the number of elements in a List using the
list editor.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Specific Editors</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Some factory boxes have a specific editor, which also opens with a
double click.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Example of OM object editors</span>

</div>

<div class="linkUL">

  - [<span>BPFs and BPCs Editors</span>](BPFEditors.md)
  - [<span>Score Editors</span>](ScoreEditors.md)

</div>

</div>

<div class="txt">

To open the default editor of such factory box, press `Cmd` and double
click on the box.

</div>

<div class="caption">

<div class="caption_co">

![The default and specific score editors of the "note"
class](../res/noteeditors.png)

</div>

<div class="caption_ti">

The default and specific score editors of the "note" class

</div>

</div>

<div class="txt">

Note that both editors can't be open at the same time. Close the editor
manually so as to open the other editor.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Preserving Manual Modifications</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Once modifications have been done in an editor, the corresponding box is
**locked automatically** . Indeed, a new evaluation of an unlocked box
would compute a new object and replace the current value, hence
canceling all previous modifications. Of course, the box can still be
unlocked if necessary.

To lock or unlock a box, select it and press `b`.

</div>

<div class="caption">

<div class="caption_co">

![addlock.png](../res/addlock.png)

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
    
    <div id="kFootBsktc2074">
    
    <div class="footBskt_itti">
    
    Slot
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    In object oriented programming, a slot represents and attribute of a
    class. For instance, the class "note" in OM has 4 slots : pitch,
    duration, velocity, and MIDI channel.
    
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
          - [<span>Patch Introduction</span>](ProgrammingIntro.md)
          - [<span>Adding Boxes Into a Patch</span>](AddingBoxes.md)
          - [<span>Elementary Manipulations</span>](ElementaryManips.md)
          - [<span>Boxes</span>](Boxes.md)
              - [<span>Boxes Features</span>](GraphicFeatures.md)
              - [<span>Data Boxes</span>](DataBox.md)
              - [<span>Function Boxes</span>](FunctionBoxes.md)
              - [<span>Objects – Factory Boxes</span>](FactoryBoxes.md)
                  - [<span>Visualization</span>](1-Visualization.md)
                  - [<span>Instantiating
                    Objects</span>](2-Instanciation.md)
                  - [<span>Playback and Players</span>](1-Play.md)
                  - <span id="i4" class="outLeftSel_yes"><span>Editors</span></span>
                  - [<span>Import/Export</span>](4-ImportExport.md)
              - [<span>Abstraction Boxes</span>](AbsBoxesIntro.md)
              - [<span>Other Boxes</span>](OtherBoxes.md)
          - [<span>Box Inputs</span>](BoxInputs.md)
          - [<span>Connections</span>](Connections.md)
          - [<span>Evaluation</span>](Evaluation.md)
          - [<span>Documentation and Info</span>](DocAndInfo.md)
          - [<span>Comments</span>](Comments.md)
          - [<span>Pictures</span>](Pictures.md)
          - [<span>Saving / Reloading a Patch</span>](SavingPatch.md)
          - [<span>Dead Boxes</span>](DeadBox.md)
      - [<span>Visual Programming
        II</span>](AdvancedVisualProgramming.md)
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
précédente</span>](1-Play.md "page précédente(Playback and Players)")<span class="hidden">
| </span>[<span>page
suivante</span>](4-ImportExport.md "page suivante(Import/Export)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
