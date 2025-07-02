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
</span><span class="stkSel_yes"><span>Presentation</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](ScoreObjects.md "page précédente(Score Objects)")<span class="hidden">
| </span>[<span>page
suivante</span>](Note-Chord-Chord-seq.md "page suivante(Harmonic Objects)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Score Objects Presentation</span>

<div class="headCo_co">

<div class="secOutFra">

<div class="secOutTi">

[<span>Sommaire </span>](#)

</div>

<div class="secOutUi">

1.  [Types : "Harmonic", "Rhythmic" and "Polyphonic" Objects.](#zdN51)
2.  [Time Representation](#zdNe6)
3.  [Pitches](#zdN1d7)
4.  [General Score Modules](#zdN314)

</div>

</div>

<div>

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
<img src="../res/classscoremenu.png" width="257" height="226" alt="classscoremenu.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Score classes enclose the musical objects that compose a score : notes , chords , chord-seqs , voices , polys . Out of convenience, we have gathered these objects in three categories : "harmonic", "rhythmic" and "polyphonic" objects.</p>
<p>They can be accessed via the <code class="menuPath_tl">Classes / Score</code> menu.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="caption">

<div class="caption_co">

![schema.png](../res/schema.png)

</div>

</div>

</div>

<div class="part">

## <span>Types : "Harmonic", "Rhythmic" and "Polyphonic" Objects.</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

1.  **Harmonic objects** include notes , chords and chord-seqs .

2.  **Rhythmic objects** include voices (internally made of measures
    and  groups).

3.  **Polyphonic objects** include polys and multi-seqs . These are
    "superimpositions" of objects :
    
      - <span> voices on one hand, </span>
      - <span> chord-seqs on the other hand.</span>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Time Representation</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

These objects can be classified into two temporal categories :

  - <span> **Pulsed, or rhythmic representations** are based on a
    traditional **rhythmic expression** of events in time, via
    <span id="i4" class="defRef_ul"><span>rhythm
    trees</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc3051)</sup>.
    Voices and polys are pulsed representations.</span>
  - <span> **Linear representations** are based on the **absolute
    duration** of events – in milliseconds. Chord-seqs and multi-seqs
    are linear representations.</span>
  - <span> Notes and chords are atomic objects and correspond to both
    temporal categories.</span>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Expressing Rhythms</span>

</div>

<div class="linkUL">

  - [<span>Rhythm Trees</span>](RT.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Pitches</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Pitches in OM are usually represented in midicents.

A midicent is a cent of one MIDI unit, that is, of a half-tone.

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>MIDI pitch units</span>

</div>

<div class="txt">

In MIDI, the middle C is represented by the value 60, then 61=C\#, 62=D,
63=D\#, etc.

In midicent, therefore, C=6000, C\#=6100, ...

Midicents allow to represent microintervals, which standard MIDI values
can't do : 6050 = C+1/4 tone, 6020=C+ 1/10th tone, etc.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>How to Play MicroIntervals</span>

</div>

<div class="linkUL">

  - [<span>Playing Microintervals with MIDI</span>](Microintervals.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Manipulating Pitches in OM : Basic Tools</span>

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
<img src="../res/conversionmenu.png" width="300" height="239" alt="conversionmenu.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>A set of functions and conversion modules allows to manipulate midicents and pitches in general. They can be accessed via the <code class="menuPath_tl">Functions / Score /</code>menu.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

<table>
<tbody>
<tr class="odd">
<td><p><span class="iconButton_tim"><img src="../res/ftomc_icon.png" class="sfile_icon-png_icon-gif_icon" width="32" height="56" alt="ftomc_icon.png" /></span></p></td>
<td><p>The <strong>frequency-to-midicents</strong> function converts frequencies (or lists of frequencies) to midicents.</p></td>
</tr>
<tr class="even">
<td><p><span class="iconButton_tim"><img src="../res/mctof_icon.png" class="sfile_icon-png_icon-gif_icon" width="32" height="56" alt="mctof_icon.png" /></span></p></td>
<td><p>The <strong>midicents-to-frequencies</strong> function converts midicents to frequencies.</p>
<p>Its input takes atoms or lists.</p></td>
</tr>
<tr class="odd">
<td><p><span class="iconButton_tim"><img src="../res/ntomc_icon.png" class="sfile_icon-png_icon-gif_icon" width="34" height="56" alt="ntomc_icon.png" /></span></p></td>
<td><p>The <strong>name-to-midicents</strong> function converts a note name (like "C3") or a list of note names, to midicent value(s).</p></td>
</tr>
<tr class="even">
<td><p><span class="iconButton_tim"><img src="../res/mcton_icon.png" class="sfile_icon-png_icon-gif_icon" width="34" height="56" alt="mcton_icon.png" /></span></p></td>
<td><p>The <strong>midicents-to-name</strong> function converts a midicents value (or a list of values) to note name(s).</p></td>
</tr>
<tr class="odd">
<td><p><span class="iconButton_tim"><img src="../res/approx_icon.png" class="sfile_icon-png_icon-gif_icon" width="49" height="56" alt="approx_icon.png" /></span></p></td>
<td><p>The <strong>approximate-midicents</strong> function approximates a midicents value to the closest tempered division of the octave (for isntance 4 = quarter tones).</p></td>
</tr>
</tbody>
</table>

</div>

</div>

</div>

</div>

<div class="part">

## <span>General Score Modules</span>

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
<td><div class="dk_txtRes_txt txt">
<p>A set of score objects manipulation modules are avalable in the Functions<code class="menuPath_tl"> / Score</code> menu</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/scfunctions.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/scfunctions_1.png" width="285" height="300" alt="scfunctions_1.png" /></a>
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

</div>

</div>

<span class="hidden">Références : </span>

1.  
    
    <div id="kFootBsktc3051">
    
    <div class="footBskt_itti">
    
    Rhythm Tree
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    A rhythm tree expresses a rhythmic structure as a list.
    
    This list is made of :
    
      - a duration, or number of measures,
    
      - a list of measures.
    
    Each measure is made of
    
      - a time signature
    
      - a list or proportions, or rhythmic values.
    
    For instance : (1 (((4 4) (1 1 2))) is a rhythm of one measure,
    signature 4/4, with two quarter and one half note (proportions = 1/4
    1/4 2/4 = 1/4 1/4 1/2).
    
    The term of "tree" refers to a recusrive structure: each item in the
    proportions list can in turn be expressed as a duration with a list
    of subdivisions.
    
    For instance the second beat in our measure could be subdivided as
    follows : ((4 4) (1 (1 (2 3)) 2)).
    
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
      - [<span>Visual Programming
        II</span>](AdvancedVisualProgramming.md)
      - [<span>Basic Tools</span>](BasicObjects.md)
      - [<span>Score Objects</span>](ScoreObjects.md)
          - <span id="i5" class="outLeftSel_yes"><span>Presentation</span></span>
              - [<span>Harmonic Objects</span>](Note-Chord-Chord-seq.md)
              - [<span>Rhythmic Objects</span>](RhythmicObjects.md)
              - [<span>Polyphonic Objects</span>](Polyphonic.md)
          - [<span>Rhythm Trees</span>](RT.md)
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
précédente</span>](ScoreObjects.md "page précédente(Score Objects)")<span class="hidden">
| </span>[<span>page
suivante</span>](Note-Chord-Chord-seq.md "page suivante(Harmonic Objects)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
