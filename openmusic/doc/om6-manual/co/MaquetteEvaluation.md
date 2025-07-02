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
</span>[<span>Maquettes</span>](Maquettes.md)<span class="stkSep"> \>
</span>[<span>Maquette
Programming</span>](Programming%20Maquette.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Evaluation</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](InputsOutputs.md "page précédente(Functional Components)")<span class="hidden">
| </span>[<span>page
suivante</span>](Synthpatchprog.md "page suivante(The Synthesis Patch)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Evaluation of the Maquette</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>Evaluation Procedures</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Global Evaluation of the Maquette</span>

</div>

<div class="txt">

To evaluate a whole maquette, select `Eval` in the palette. OM evaluates
**all the boxes** located at the end of the programming chain, which
will eventually lead to the evaluation of all the TemporalBoxes of the
maquette.

The global evaluation of the maquette returns a **maquetteobj** . The
listener displays a message of the type " =\> \#".

Note that this command applies to the whole maquette even if a specific
TemporalBox is selected.

</div>

<div class="caption">

<div class="caption_co">

![evalmaq1.png](../res/evalmaq1.png)

</div>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Associated Files</span>

</div>

<div class="txt">

In some cases, OM asks to choose a file when the box is evaluated, event
if it was already attributed a file. This is the case when a TemporalBox
refers to a sound file, for instance.

**Boxes can be locked** to avoid the systematic opening of the dialogue
window.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Evaluating TemporalBoxes</span>

</div>

<div class="txt">

Choose a TemporalBox and press `v`. The selected box and **all other
connected boxes** are be evaluated.

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Controlling TemporalBoxes Evaluation</span>

</div>

<div class="txt">

TemporalBoxes can be set on "[<span>lock</span>](LockMode.md)" or
"[<span>evaluate-once</span>](EvOnceMode.md)" mode, so as their content
is protected, or to limit the number of internal evaluations.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Default Calculation of a Maquette's Value</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The value of a maquette is the musical object, or container, yielded
when the maquette is evaluated. Very basically, this musical object is
actually what is played by the player, just as with a sequencer.

</div>

<div class="caption">

<div class="caption_co">

![play1.png](../res/play1.png)

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
<p>The default type of this object is a <strong>maquetteobj</strong> : a musical sequence, a whole that combines TemporalBoxes, with a given musical value and temporal position.</p>
<p>This is especially visible when a local maquette is evaluated from a patch : the Listener displays a "maquetteobj" reference. It can be compared with the object connected to a Tempout.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/evalmaq3.png" width="202" height="237" alt="evalmaq3.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Synthesis Patches</span>

</div>

<div class="txt">

Maquettes can represent many other types of objects : sounds, chords,
melodic sequences... The way a maquette is calculated can also be
modified, so that the values of its TemporalBoxes is interpreted
differently. To do so, a **synthesis patch** can be integrated in the
maquette, like an " **output evaluation tool** ".

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About Synthesis Patches</span>

</div>

<div class="linkUL">

  - [<span>Calculating the Value of a
    Maquette</span>](Synthesispatch.md)

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
          - [<span>Creating a Maquette</span>](Maquette.md)
          - [<span>TemporalBoxes</span>](TemporalBoxes.md)
          - [<span>The Maquette Editor</span>](Editor.md)
          - [<span>Maquette
            Programming</span>](Programming%20Maquette.md)
              - [<span>Functional Components</span>](InputsOutputs.md)
              - <span id="i2" class="outLeftSel_yes"><span>Evaluation</span></span>
              - [<span>The Synthesis Patch</span>](Synthpatchprog.md)
              - [<span>TempBoxes Programming</span>](TempProgramming.md)
          - [<span>Maquettes in
            Patches</span>](Maquettes%20in%20Patches.md)
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
précédente</span>](InputsOutputs.md "page précédente(Functional Components)")<span class="hidden">
| </span>[<span>page
suivante</span>](Synthpatchprog.md "page suivante(The Synthesis Patch)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
