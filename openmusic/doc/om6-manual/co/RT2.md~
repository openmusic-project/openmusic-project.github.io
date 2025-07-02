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
</span>[<span>Rhythm Trees</span>](RT.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Notation : in
Practice</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](RT1.md "page précédente(Rhythm Trees Structure)")<span class="hidden">
| </span>[<span>page
suivante</span>](ScorePlayer.md "page suivante(Score Players)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Notation : in Practice</span>

<div class="headCo_co">

<div class="secOutFra">

<div class="secOutTi">

[<span>Sommaire </span>](#)

</div>

<div class="secOutUi">

1.  [Proportions](#eeN6)
2.  [Rests, Beams and Ties](#eeNd7)
3.  [Dotted Values](#eeN173)
4.  [Functions of the Rhythm Trees Package](#eeN1cf)

</div>

</div>

<div>

<div class="part">

## <span>Proportions</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Elementary Proportions Lists</span>

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
<img src="../res/props1.png" width="299" height="138" alt="props1.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Rhythm trees can also be expressed with simple proportion lists, which ignore the duration and time signature levels. At a basic level, OM always interprets proportions according to two criteria :</p>
<ul>
<li><span> <span class="iconButton_tim"><img src="../res/ronde_icon.png" class="sfile_icon-png_icon-gif_icon" width="21" height="13" alt="ronde_icon.png" /></span> = 1</span></li>
<li><span>Time signature = 4/4.</span></li>
</ul>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

This way of writing rhythm trees can lead to very interesting processes
in the manipulation of temporality. A given rhythmic structure can be
modified or read according to various beats patterns, by associating
given proportions to more or less sophisticated functions or programs.

</div>

<div class="caption">

<div class="caption_co">

![props3.png](../res/props3.png)

</div>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Integers, Ratios and Floats</span>

</div>

<div class="txt">

Proportions can be expressed with integers, floats or ratios.
Nevertheless :

  - <span>A same group cannot take both floats and ratios. </span>
  - <span>Values between 0 and 1 are not accepted by rhythm trees.
    </span>

In both cases, OM renders an approximation of the rhythm tree.

</div>

<div class="caption">

<div class="caption_co">

![nozero.png](../res/nozero.png)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>The MakeTree function</span>

</div>

<div class="txt">

The **mktree** function allows to associate a list of proportions to a
list of time signatures.

  - <span>If a list contains a single time signature, the rhythmic
    pattern is extended as much as required by the duration of the
    tree.</span>
  - <span> If a list contains several time signatures, each time
    signature is valid for one measure only, so that the rhythm may
    remain incomplete. </span>

</div>

<div class="caption">

<div class="caption_co">

![props2.png](../res/props2.png)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Rests, Beams and Ties</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Rests</span>

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
<p>Silences are expressed by negative values.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/silence1.png" width="200" height="151" alt="silence1.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Beams</span>

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
<img src="../res/beam1.png" width="198" height="144" alt="beam1.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Values within a group are beamed automatically.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Ties</span>

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
<p>Add <strong>.0</strong> to create a tie with the previous note.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/tie1.png" width="199" height="159" alt="tie1.png" />
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

## <span>Dotted Values</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Automatic Notation</span>

</div>

<div class="txt">

Dotted values are "naturally" expressed by relevant proportions, in the
case of "binary" time signatures – n/ 4, n/ 2, n/1 –, or elementary
ternary time signatures – 3/8, 3/16.

</div>

<div class="caption">

<div class="caption_co">

![dot1.png](../res/dot1.png)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Constraints</span>

</div>

<div class="txt">

In other cases – 6/8 and its paradigm –, OM's behaviour doesn't always
apply the conventions of traditional notation. Proportions can be
expressed with different but equivalent rhythmic notations, depending on
the values used in rhythm trees.

  - <span>The quarter note being the default beat value, ternary
    notation is adapted to the use of the quarter note and its
    multiples. In other words, OM privileges the use of tuplets, rather
    than that of dotted values.</span>
  - <span>To get dotted values in a ternary time signature, use
    multiples of 3 to express proportions. </span>

</div>

<div class="caption">

<div class="caption_co">

![props.png](../res/props.png)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Functions of the Rhythm Trees Package</span>

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
<td><div class="caption">
<div class="caption_co">
<img src="../res/treefunctions.png" width="281" height="134" alt="treefunctions.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>A set of functions dedicated to rhythm tree is available in the <code class="menuPath_tl">Functions / Score / Trees</code> menu. For thorough information about these functions, refer the online documentation.</p>
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
          - [<span>Presentation</span>](Score-Objects-Intro.md)
          - [<span>Rhythm Trees</span>](RT.md)
              - [<span>Rhythm Trees Structure</span>](RT1.md)
              - <span id="i4" class="outLeftSel_yes"><span>Notation : in
                Practice</span></span>
          - [<span>Score Players</span>](ScorePlayer.md)
          - [<span>Score Editors</span>](ScoreEditors.md)
          - [<span>Quantification</span>](Quantification.md)
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
précédente</span>](RT1.md "page précédente(Rhythm Trees Structure)")<span class="hidden">
| </span>[<span>page
suivante</span>](ScorePlayer.md "page suivante(Score Players)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
