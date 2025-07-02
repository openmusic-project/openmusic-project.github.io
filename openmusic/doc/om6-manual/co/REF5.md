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
</span>[<span>Reference
Mode</span>](Maquettes%20in%20Patches2.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Interaction
(1)</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](REF4.md "page précédente(Removing Boxes)")<span class="hidden">
| </span>[<span>page
suivante</span>](Intercation2.md "page suivante(Interation (2))")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>TemporalBoxes Interaction : Examples (1)</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

Here is a series of basic examples showing how the graphic and musical
parameters of objects can interact within a maquette. They may give a
hint of the principles at stake in the musical exploitation of the
maquette's specific dimensions.

</div>

</div>

<div class="part">

## <span>Determining Pitch From "Posy"</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The **vertical position** of a TemporalBox can be converted into a
**pitch** .

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Program</span>

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
<img src="../res/posy%3Dpitch1.png" width="191" height="237" alt="posy%3Dpitch1.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The patch shows :</p>
<ul>
<li><span>a temporalbox instance,</span></li>
<li><span> an internal maquette, </span></li>
<li><span>the addbox2maquette function, </span></li>
<li><span>an internal patch that executes the conversion. </span></li>
</ul>
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
<ol>
<li><p>A Self Input box is connected to om-scale.</p></li>
<li><p>The "posy" of self is scaled from a value between 0 and 100 to a value between 4000 and 8000 midicents.</p></li>
<li><p>The resulting value is expressed by a note, and assigned as a musical value to the TemporalBox via the Tempout.</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/posy%3Dpith.png" width="205" height="256" alt="Inside the conversion patch." />
</div>
<div class="caption_ti">
Inside the conversion patch.
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

## <span>TemporalBox Evaluation</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Once addbox2maquette is evaluated, the box appears in the maquette. It
doesn't have a musical value at first, but its has a "posy" and an
offset. The pitch changes with the vertical position of the TemporalBox,
when the maquette or the object is evaluated.

</div>

<div class="caption">

<div class="caption_co">

![posy%3Dpitch2.png](../res/posy%3Dpitch2.png)

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
          - [<span>Maquettes in
            Patches</span>](Maquettes%20in%20Patches.md)
              - [<span>Build Mode</span>](Build.md)
              - [<span>Functional
                Mode</span>](Maquettes%20in%20Patches1.md)
              - [<span>Reference
                Mode</span>](Maquettes%20in%20Patches2.md)
                  - [<span>Adding TemporalBoxes</span>](addprocedure.md)
                  - [<span>Examples</span>](addexamples.md)
                  - [<span>Accessing Boxes</span>](REF3.md)
                  - [<span>Removing Boxes</span>](REF4.md)
                  - <span id="i2" class="outLeftSel_yes"><span>Interaction
                    (1)</span></span>
                  - [<span>Interation (2)</span>](Intercation2.md)
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
précédente</span>](REF4.md "page précédente(Removing Boxes)")<span class="hidden">
| </span>[<span>page
suivante</span>](Intercation2.md "page suivante(Interation (2))")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
