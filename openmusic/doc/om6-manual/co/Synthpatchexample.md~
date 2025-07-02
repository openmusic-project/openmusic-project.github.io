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
</span>[<span>The Synthesis
Patch</span>](Synthpatchprog.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Synthesis Patch
Example</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Synthesispatch.md "page précédente(Maquette Value)")<span class="hidden">
| </span>[<span>page
suivante</span>](Seteval.md "page suivante(Set-Eval Function)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Example : Building a Chord-Seq With a Synthesis Patch</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="caption">

<div class="caption_co">

![synthpatch.png](../res/synthpatch.png)

</div>

</div>

<div class="txt">

This maquette contains several BPFs. The coordinates and temporal
position of each BPF is interpreted to produce a corresponding melodic
sequence. The sequences are then merged into one chord-seq. The whole
process is programmed in a synthesis patch.

</div>

</div>

<div class="part">

## <span>Programming the Synthesis Patch</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>General Program</span>

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
<img src="../res/synthpatch2.png" width="151" height="252" alt="synthpatch2.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The synthesis patch has been added in the workspace, dropped in the patch editor and assine to the maquette.</p>
<p>The synthesis patch has :</p>
<ul>
<li><span>a <strong>Maquette Self Input box</strong> , which represents the maquette in which the patch is integrated,</span></li>
<li><span>an <strong>OMLoop</strong> , which returns values for the chord-seq box,</span></li>
<li><span>a <strong>chord-seq box</strong>, connected to the synthesis patch's Tempout. </span></li>
</ul>
<p>The maquette's output returns the chord-seq produced by the synthesis patch.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>OMLoop</span>

</div>

<div class="txt">

The value of the Maquette Self Input is returned to OMLoop's input.

At each step of the loop, listloop returns the value of a TemporalBox to
slots. Each of these TemporalBoxes has a **value** , a vertical position
– **posy** – and a temporal position – **offset** .

  - <span>The value, or coordinates of each BPF are returned to car,
    which selects the y-points of the BPF. The y-points are returned to
    the "midic" input of the chord-seq.</span>
  - <span> The y-points of the curve are added to the "posy" of the
    TemporalBox, as for a transposition.</span>
  - <span>The offset of the box is returned to om+ and list, which
    return a list of the type (n (n+200)) to the chord-seq box. There
    will be a 200 ms interval between each of the chord-seq's
    items.</span>

<!-- end list -->

1.  At each step of the loop, acum builds a sequence out of the
    chord-seq and a "blank" chord-seq.

2.  Finally returns the whole sequence to a global chord-seq, which is
    connected to the Tempout of the synthesis patch.

</div>

<div class="caption">

<div class="caption_co">

![Inside the OMLoop : building the melodic sequence from the
TemporalBoxes parameters.](../res/synthpatch3.png)

</div>

<div class="caption_ti">

Inside the OMLoop : building the melodic sequence from the TemporalBoxes
parameters.

</div>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>About Acum and Merger</span>

</div>

<div class="txt">

Acum has three inputs :

  - <span>something to collect,</span>
  - <span> an initial value, </span>
  - <span>a function on "lambda" mode, which determins the behaviour of
    the acumulator. </span>

Here, merger builds a sequence out of the two chords-seqs. This sequence
includes the temporal value of the chord-seqs.

|                                                                               |                                                                                                                                                                                                |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="iconButton_tim">![mrger\_icon.png](../res/mrger_icon.png)</span> | Merger merges two sequences into one, including their temporal value. As it cannot merge something with "nil", we have assigned a "pseudo" empty chord-seq to the initial value input of acum. |

</div>

</div>

</div>

</div>

<div class="part">

## <span>Resulting Chord-Seq</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Once the maquette is evaluated, the result of the synthesis can possibly
be visualized with a chord-seq box connected to the maquette's output.
When the maquette, or a selected TemporalBox is played, it renders the
interpretation of its values by the synthesis patch.

</div>

<div class="caption">

<div class="caption_co">

![syntpatch2.png](../res/syntpatch2.png)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Using the Maquette or Not</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Here, as in most cases, the same program can be designed without a
maquette, if one is interested in a single abstraction level.

  - <span>The maquette empathizes the temporal structure at stake in a
    process. It gives a global, and somehow intuitive view of this
    temporal dimension, which can be manipulated with the advantages of
    its specific graphic interface. </span>
  - <span>The maquette provides a temporal representation of a process
    at a different abstraction level. </span>
  - <span>Last, this temporal structure can be reinterpreted in a
    program. </span>

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
              - [<span>Evaluation</span>](MaquetteEvaluation.md)
              - [<span>The Synthesis Patch</span>](Synthpatchprog.md)
                  - [<span>Maquette Value</span>](Synthesispatch.md)
                  - <span id="i3" class="outLeftSel_yes"><span>Synthesis
                    Patch Example</span></span>
                  - [<span>Set-Eval Function</span>](Seteval.md)
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
précédente</span>](Synthesispatch.md "page précédente(Maquette Value)")<span class="hidden">
| </span>[<span>page
suivante</span>](Seteval.md "page suivante(Set-Eval Function)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
