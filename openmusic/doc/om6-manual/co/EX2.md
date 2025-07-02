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
</span>[<span>TempBoxes
Programming</span>](TempProgramming.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Temporal
Relations</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Examplestempbox.md "page précédente(Programming with the Tempin)")<span class="hidden">
| </span>[<span>page
suivante</span>](Maquettes%20in%20Patches.md "page suivante(Maquettes in Patches)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Example 2 : Defining Temporal Relations Between TemporalBoxes</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>Applying the Values of a TemporalBox to Other TemporalBoxes</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The values of the Self Input Box can be used for defining **temporal
relations** with other TemporalBoxes, via connections between functional
inputs and outputs.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Building a Sequence of TemporalBoxes</span>

</div>

<div class="txt">

The chord of TemporalBox \#1 is a reservoir for isolated notes that will
occur successively in the maquette.

1.  We have programmed the TemporalBoxes so that the initial chord
    provides one random note to each of TemporalBoxes \#2; 3; and 4.

2.  The **offset** of each TemporalBox is determined by the **offset
    and** ****duration**** of the **preceding box** , so that boxes
    follow each other.

</div>

<div class="caption">

<div class="caption_co">

![maqsendout.png](../res/maqsendout.png)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Inside TemporalBox \#1</span>

</div>

<div class="txt">

The internal program of the first TemporalBox determines some
characteristics of the other TemporalBox.

</div>

<div class="caption">

<div class="caption_co">

![Inside TemporalBox \#1 : using the "pattern-chord"'s
data.](../res/chordsendout.png)

</div>

<div class="caption_ti">

Inside TemporalBox \#1 : using the "pattern-chord"'s data.

</div>

</div>

<div class="txt">

  - <span>The initial chord lasts 3 seconds. It is connected to the
    Tempout of TemporalBox \#1, and represents its musical value.
    </span>
  - <span> Permut-random performs a random permutation of the chord's
    pitches. The **three first pitches** of this permutation are
    returned by nth-first to the **first output** of TemporalBox
    \#1.</span>
  - <span> On the other hand, the **offset** of the TemporalBox returned
    by the Self Input Box, is added with the chord's **duration** .
    </span>
  - <span>The result is returned to the **second output** of the
    TemporalBox.</span>

</div>

</div>

</div>

</div>

<div class="part">

## <span>TemporalBoxes Interaction</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The random pitches – output \#1 – are returned to all the other
TemporalBoxes. The ending time of the box – output \#2 – is returned to
the next TemporalBox.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Inside TemporalBox \#2</span>

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
<li><p>The three random pitches are returned by the first input of TemporalBox #2 to the first function.</p>
<p>First picks the first note and returns it to the note box. This note is also given a duration.</p></li>
<li><p>The note is connected to the Tempout and becomes the musical value of the TemporalBox.</p></li>
<li><p>The temporal position of TemporalBox #1, is returned to the "offset" input of slots, which defines the offset of TemporalBox #2.</p></li>
<li><p>The offset of TemporalBox #2 is added to the duration of the note, and the result is returned to the output of TemporalBox #2.</p></li>
<li><p>The value of the output ending of the box – is returned to the next TemporalBox, which contains the same program.</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/maqsendout2.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/maqsendout2_1.png" width="258" height="300" alt="maqsendout2_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>About Last TemporalBox</span>

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
<img src="../res/maqsendout1.png" width="209" height="300" alt="maqsendout1.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Note that the last TemporalBox has nor output, neither om+ function, but a sequence function. The box has nothing to return to another box. The sequence function allows to evaluate slots before evaluating the TemporalBox, so that its offset is correct.</p>
</div></td>
</tr>
</tbody>
</table>

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
              - [<span>TempBoxes Programming</span>](TempProgramming.md)
                  - [<span>The Self Input Box –
                    Tempin</span>](SelfInputBox.md)
                  - [<span>Programming with the
                    Tempin</span>](Examplestempbox.md)
                  - <span id="i2" class="outLeftSel_yes"><span>Temporal
                    Relations</span></span>
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
précédente</span>](Examplestempbox.md "page précédente(Programming with the Tempin)")<span class="hidden">
| </span>[<span>page
suivante</span>](Maquettes%20in%20Patches.md "page suivante(Maquettes in Patches)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
