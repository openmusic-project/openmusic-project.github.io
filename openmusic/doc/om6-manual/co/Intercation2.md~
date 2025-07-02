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
</span><span class="stkSel_yes"><span>Interation
(2)</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](REF5.md "page précédente(Interaction (1))")<span class="hidden">
| </span>[<span>page suivante</span>](Sheet.md "page suivante(Sheet)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>TemporalBoxes Interaction : Examples (2)</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>Determining Colour and Pitch From "Posy" and "Offset"</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The " **posy** " of TemporalBoxes in the maquette can be applied to both
**pitches** and **colour** of the boxes. The graphic appearance of the
maquette may be more or less musically significant.

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
<img src="../res/rainbows.png" width="232" height="233" alt="rainbows.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The position of the boxes is determined by a BPF. The same BPF is used for determining their pitch and colour. OMLoop iterates this operation to apply it to the a series of boxes located in a maquette.</p>
<ol>
<li><p>Boxes are added in the maquette when evaluating Addbox2maquette. Sequence and removealltemporalboxes "clean" the maquette at each evaluation, before new boxes are added.</p></li>
<li><p>OMLoop is returned the value of the points in the BPF. Coordinates allow to modify the TemporalBoxes colour on one hand, and their musical value on the other hand.</p></li>
</ol>
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

The "colour program" used in the [<span>preceding
example</span>](addexamples.md) is integrated in an internal patch.

1.  y-points are returned by listloop to om-scale successively : the
    pitch of a note object is defined.

2.  X and y-points are returned to the "make-colour" patch, to the
    "offset" and to the "posy" inputs of the temporalbox instance : the
    colour, offset and "posy" are defined.

3.  At each step of the loop, collect stores the value of a TemporalBox.

4.  At the end of the loop, a list of values is returned to
    addbox2maquette by finally.

</div>

<div class="caption">

<div class="caption_co">

![interaction.png](../res/interaction.png)

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
<p>Inside the "make-colour" patch, x-points and y-points are converted into red and green values.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/malecolour.png" width="279" height="196" alt="malecolour.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Resulting Maquette</span>

</div>

<div class="txt">

The result is visible after evaluating sequence. The corresponding
musical sequence can be visualized with a small program.

</div>

<div class="caption">

<div class="caption_co">

![cpp2.png](../res/cpp2.png)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Musical Sequence</span>

<div class="part_co">

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
<img src="../res/getresult.png" width="300" height="281" alt="getresult.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Temporalboxes is connected to the output of the maquette. OMLoop returns the series of pitches produced by the TemporalBoxes to a chord-seq.</p>
<ol>
<li><p>Listloop returns the successive values of each TemporalBoxes to a corresponding slots box. This value is a note.</p></li>
<li><p>The "value" of slots is returned to car so that we get a list of notes. Otherwise, we would get a list of lists, which cannot produce a chord-seq, by convention.</p></li>
<li><p>Collect stores the successive notes values</p></li>
<li><p>Finally returns the resulting list of values.</p></li>
</ol>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Resulting Sequence</span>

</div>

<div class="txt">

The evaluation of the chord-seq box in the patch yields the following
sequence :

</div>

<div class="caption">

<div class="caption_co">

![result1.png](../res/result1.png)

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
                  - [<span>Interaction (1)</span>](REF5.md)
                  - <span id="i2" class="outLeftSel_yes"><span>Interation
                    (2)</span></span>
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
précédente</span>](REF5.md "page précédente(Interaction (1))")<span class="hidden">
| </span>[<span>page suivante</span>](Sheet.md "page suivante(Sheet)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
