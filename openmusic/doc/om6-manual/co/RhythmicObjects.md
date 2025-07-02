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
</span>[<span>Presentation</span>](Score-Objects-Intro.md)<span class="stkSep">
\> </span><span class="stkSel_yes"><span>Rhythmic
Objects</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Note-Chord-Chord-seq.md "page précédente(Harmonic Objects)")<span class="hidden">
| </span>[<span>page
suivante</span>](Polyphonic.md "page suivante(Polyphonic Objects)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Rhythmic Objects</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>The Voice Object</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

A voice is a melodico-rythmic line.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Inputs and Outputs</span>

</div>

<div class="txt">

|                                                                                 |                                              |
| ------------------------------------------------------------------------------- | -------------------------------------------- |
| <span class="iconButton_tim">![voice1\_icon.png](../res/voice1_icon.png)</span> | The voice object has six inputs and outputs. |

1.  "self" : a voice , measure or list of measures , or a chord-seq .

2.  "tree" : a <span id="i2" class="defRef_ul"><span>rhythm
    tree</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc3051)</sup>.

3.  "chords" : a chord, broadly speaking – chord, list of chords, a list
    or sub lists of midicents.

4.  "tempo" : speed of a quarter note.

5.  "legato" : an overlapping percentage between two chords, calculated
    from the second chord's duration.

6.  "ties" : sub lists – one sub list per chord – indicating notes to be
    tied to notes of the same value, in a next chord.

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
<p>The combination of inputs programming and score edition allows a complete musical edition of the object.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/voiceex.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/voiceex_1.png" width="300" height="175" alt="voiceex_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Programming Rhythm Trees Basics</span>

</div>

<div class="linkUL">

  - [<span>Rhythm Trees</span>](RT.md)

</div>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Ties</span>

</div>

<div class="txt">

Ties are a specific parameter of rhythmic objects. To specified that a
pitch must be tied to the next one, enter this pitch in a sub list in
the "ties" input.

</div>

<div class="caption">

<div class="caption_co">

![ties.png](../res/ties.png)

</div>

</div>

<div class="txt">

The rank of tied elements must match the rank of the corresponding
chords or notes in the "midic" input. Otherwise, OM won't recognize the
elements to be tied.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Detailed Information About Voices Edition</span>

</div>

<div class="linkUL">

  - [<span>Rhythmic Objects : Voice Editor</span>](Editor-Rhythm.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Measure and Group</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

|                                                                                                                                                                     |                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| <span class="iconButton_tim">![group3\_icon.png](../res/group3_icon.png)</span> <span class="iconButton_tim">![measure3\_icon.png](../res/measure3_icon.png)</span> | Groups and measures are complementary modules of the Score class. |

They have two inputs and outputs :

  - <span> "self" </span>
  - <span> "<span id="i3" class="defRef_ul"><span>rhythm
    tree</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc3051)</sup>".
    </span>

They can also be isolated as distinct rhythmic elements within voice
editors.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About Measures and Groups within Voices :</span>

</div>

<div class="linkUL">

  - [<span>Rhythmic Objects : Voice Editor</span>](Editor-Rhythm.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Uses</span>

</div>

<div class="txt">

Groups and measures are used for :

  - <span>programming elementary rhythmic structures, which can be saved
    as instances or global variables for a subsequent use</span>
  - <span>storing rhythmic structures once they have been extracted from
    a rhythm tree.</span>

</div>

<div class="caption">

<div class="caption_co">

![Switching the chords and rhythms of two measures using measure
instance boxes.](../res/measureinstance.png)

</div>

<div class="caption_ti">

Switching the chords and rhythms of two measures using measure instance
boxes.

</div>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Getting Measures</span>

</div>

<div class="txt">

|                                                                                 |                                                                         |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| <span class="iconButton_tim">![getmes\_icon.png](../res/getmes_icon.png)</span> | The **get-measures** function returns a list of measures from a voice . |

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
          - [<span>Presentation</span>](Score-Objects-Intro.md)
              - [<span>Harmonic Objects</span>](Note-Chord-Chord-seq.md)
              - <span id="i4" class="outLeftSel_yes"><span>Rhythmic
                Objects</span></span>
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
précédente</span>](Note-Chord-Chord-seq.md "page précédente(Harmonic Objects)")<span class="hidden">
| </span>[<span>page
suivante</span>](Polyphonic.md "page suivante(Polyphonic Objects)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
