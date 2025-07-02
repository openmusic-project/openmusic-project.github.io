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
</span>[<span>Score
Objects</span>](ScoreObjects.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Quantification</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Editor-Play.md "page précédente(Play Controls)")<span class="hidden">
| </span>[<span>page
suivante</span>](ImportExport.md "page suivante(Export / Import)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Quantification</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

Quantification is the name of the process allowing to convert absolute
durations (for instance, in milliseconds) into a structured rhythmic
sequence of measures with metrics and pulse subdivisions.

In other word and with OpenMusic objects, this is basically what happens
when converting a **chord-seq**, or a MIDI file oject into a **voice**.

</div>

<div class="caption">

<div class="caption_co">

![quant-def.png](../res/quant-def.png)

</div>

</div>

<div class="txt">

Quantification is not an easy task : it implies preliminary information
and adapted approximations in order to be performed correctly. When
importing MIDI files into a voice, for instance, the tempo and metrics
information can be used to better deduce the rhythm corresponding to the
raw sequence of onsets encoded in the MIDI file.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Quantification Parameters</span>

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
<p>In order to guide the quantification processes, some general parameters can be set in th OM Preferences (<code class="textTab_tl">Quantification</code> tab): allowed/forbidden rhythmic subdivisions, tempo, time signatures, etc.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/quant-prefs.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/quant-prefs_1.png" width="300" height="198" alt="quant-prefs_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

Even though, some notes in the original sequence may be lost during
quantification. In this case, the following message will appear :

<span class="kbd cmd_tl">Warning: with the given constraints, n notes
are lost while quantizing</span>

In this case, the quantification parameters should probably be changed
in order to better match the rhythmic constraints with the initial
durations of the sequence.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Quantification Box</span>

</div>

<div class="txt">

When specific or precise quantification processes need to be performed,
you will generally need to use the **OMQUANTIFY** box in order to
convert a duration list (typically coming from **chord-seq**s or similar
data) into a rhythmic tree suitable to a **voice** object
initialization.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About Rhytmic Trees</span>

</div>

<div class="linkUL">

  - [<span>Rhythm Trees</span>](RT.md)

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
<p>The main input of <strong>OMQUANTIFY</strong> is a list of durations.</p>
<p>The orther parameters are similar to the quantification preferences parameters, but they will apply only to this particular quantification process.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/omquantify-1.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/omquantify-1_1.png" width="300" height="288" alt="omquantify-1_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Duration from a Chord-Seq</span>

</div>

<div class="txt">

The **X-\>DX** function can be used to compute a list of durations
starting from the list of onsets of a chord-seq object.

</div>

</div>

<div class="bloc complement">

<div class="txtRes">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><div class="dk_txtRes_txt txt">
<p>Nothe that OMQUANTIFY only processes durations to compute a rhythm tree.</p>
<p>Use the pitch information from the initial chord-seq in order to set the voice's chords slot.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/omquantify-2.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/omquantify-2_1.png" width="300" height="278" alt="omquantify-2_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

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
          - [<span>Presentation</span>](Score-Objects-Intro.md)
          - [<span>Rhythm Trees</span>](RT.md)
          - [<span>Score Players</span>](ScorePlayer.md)
          - [<span>Score Editors</span>](ScoreEditors.md)
          - <span id="i0" class="outLeftSel_yes"><span>Quantification</span></span>
          - [<span>Export / Import</span>](ImportExport.md)
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
précédente</span>](Editor-Play.md "page précédente(Play Controls)")<span class="hidden">
| </span>[<span>page
suivante</span>](ImportExport.md "page suivante(Export / Import)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
