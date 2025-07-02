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
</span>[<span>Maquettes in
Patches</span>](Maquettes%20in%20Patches.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Functional
Mode</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Build.md "page précédente(Build Mode)")<span class="hidden">
| </span>[<span>page
suivante</span>](Maquettes%20in%20Patches2.md "page suivante(Reference Mode)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Functional Mode</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>Use</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

A maquette on "functional" mode can be compared to a function. This is
especially significant when a maquette is to receive or to return
values, from the inside of a patch or another maquette.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Procedure</span>

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
<p>When a maquette is added in a patch, it is by default on "build" mode, as show its dark blue inputs and outputs.</p>
<p>To set a maquette box on "functional" mode, <code class="keyboard_tl">Ctrl</code> / right click on the maquette box and select <code class="menuPath_tl">Functional Inputs</code>.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/changemode.png" width="300" height="192" alt="changemode.png" />
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
<img src="../res/addfuncin.png" width="160" height="74" alt="addfuncin.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The maquette then shows only one "build" output. "Build" inputs disappear.</p>
<p>When inputs and outputs are added from the maquette editor, they appear on the outside of the maquette as standard inputs and outputs. The "value" output remains visible in first position.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Functionalities</span>

</div>

<div class="txt">

<table>
<tbody>
<tr class="odd">
<td><p><span class="iconButton_tim"><img src="../res/funcitonalinout_icon.png" class="sfile_icon-png_icon-gif_icon" width="52" height="66" alt="funcitonalinout_icon.png" /></span></p></td>
<td><p>Functional inputs allow</p>
<ul>
<li><span> to pass values from the patch to the maquette</span></li>
<li><span> possibly to get outcoming values back. </span></li>
</ul></td>
</tr>
</tbody>
</table>

The content of the maquette is not built from the patch, but used as a
preexistent full-fledged function.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Example : Defining a Sequence from the Outside and Inside of the Maquette</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

In this example,a maquette is used inside a patch for building a
sequence with three TemporalBoxes.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Organizing the Maquette</span>

</div>

<div class="txt">

On one hand, a number of notes and an initial offset are defined **from
the outside of the maquette** .

On the other hand

  - <span>pitches are determined by the **vertical position of each
    box** </span>
  - <span>the successive offsets of the second and third box are
    calculated from **inside the maquette** .</span>

</div>

<div class="caption">

<div class="caption_co">

![functionalmaquette1.png](../res/functionalmaquette1.png)

</div>

</div>

<div class="txt">

  - <span>The **first functional input** of the maquette is assigned a
    **number of notes** and connected to the first input of a
    TemporalBox.</span>
  - <span>The **second functional input** is assigned an offset –
    starting point in milliseconds – and connected to the second input
    of the TemporalBox.</span>
  - <span>The output of the maquette can possibly send data **from the
    TemporalBox** to the **outside** of the maquette.</span>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Programming TemporalBox \#1</span>

</div>

<div class="txt">

Values are returned to the functional inputs of the maquette to define a
chord-seq in the TemporalBox.

  - <span>The "posy" is scaled from 5000 to 8000 by om-scale.</span>
  - <span>The resulting pitch is repeated five times by repeat-n and
    returned to the chord-seq.</span>
  - <span>The chord-seq box is connected to the Tempout : it is now the
    musical value of the TemporalBox.</span>
  - <span>The offset of the TemporalBox is added to the onset of the
    chord-seq's last note, and returned to the functional output. This
    determines the position of the next box in the maquette.</span>

</div>

<div class="caption">

<div class="caption_co">

![insidetemp11.png](../res/insidetemp11.png)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Defining TemporalBoxes \#2 and 3 and Evaluating the
Maquette</span>

</div>

<div class="txt">

TemporalBox \#1 is duplicated to create two new TemporalBoxes, which are
connected to each other and to the maquette inputs.

</div>

<div class="caption">

<div class="caption_co">

![Completing the sequence](../res/functionalmaquette2_scr.png)

</div>

<div class="caption_ti">

Completing the sequence

</div>

</div>

<div class="txt">

1.  The same number of notes is returned by the first input of the
    maquette to all TemporalBoxes.

2.  The ending offset value  of a TemporalBox is connected to the second
    input of the next TemporalBox. Boxes follow each other in a temporal
    sequence.

3.  Pitches match the vertical position of the boxes.

4.  The ending offset calculated in TemporalBox \#3 is returned to the
    **functional output** of the maquette. It can possibly be used for
    subsequent computations in the patch editor, or in another maquette.

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
          - [<span>Maquettes in
            Patches</span>](Maquettes%20in%20Patches.md)
              - [<span>Build Mode</span>](Build.md)
              - <span id="i2" class="outLeftSel_yes"><span>Functional
                Mode</span></span>
              - [<span>Reference
                Mode</span>](Maquettes%20in%20Patches2.md)
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
précédente</span>](Build.md "page précédente(Build Mode)")<span class="hidden">
| </span>[<span>page
suivante</span>](Maquettes%20in%20Patches2.md "page suivante(Reference Mode)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
