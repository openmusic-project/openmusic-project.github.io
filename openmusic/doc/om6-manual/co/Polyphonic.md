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
\> </span><span class="stkSel_yes"><span>Polyphonic
Objects</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](RhythmicObjects.md "page précédente(Rhythmic Objects)")<span class="hidden">
| </span>[<span>page
suivante</span>](RT.md "page suivante(Rhythm Trees)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Polyphonic Objects</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>The Multi-Seq Object</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

|                                                                                     |                                                                   |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| <span class="iconButton_tim">![multiseq\_icon.png](../res/multiseq_icon.png)</span> | The multi-seq object allows to "superimpose" several chord-seqs . |

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Inputs and Outputs</span>

</div>

<div class="txt">

Multi-seqs have two inputs and outputs.

  - <span>The first input – self – takes chord-seqs or midifiles .The
    second input takes a list of chord-seqs .</span>
  - <span>The first output returns the self of the multi-seq . The
    second output returns a list of chord-seqs .</span>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Applications</span>

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
<p>To convert a midifile into a multi-seq  :</p>
<ul>
<li><span>connect a midifile object's "self" output to the "self" input of a multi-seq ,</span></li>
<li><span>evaluate the multi-seq .</span></li>
</ul>
<p>The midifile is expressed as a standard musical score, which can be accessed and modified via its editor.</p>
<p>You will have to select a midi file when the object is evaluated. Lock the box in order not to have to choose a file again.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/convertmidimulti.png" width="244" height="165" alt="convertmidimulti.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Modifying Score Objects</span>

</div>

<div class="linkUL">

  - [<span>Polyphonic Objects : Poly and Multi-seq
    Editors</span>](Poly-Multi-Editor.md)

</div>

</div>

<div class="txt">

To convert a midifile and a chord-seq into a multi-seq :

1.  convert the midifile into a multi-seq ,

2.  connect the second output of the multi-seq , and the "self" output
    or the chord-seq to list .

3.  If the midifile has more than one voice, use flat to get a single
    level list of chord-seqs.

4.  Connect list or flat to the second input of the multi-seq.

</div>

<div class="caption">

<div class="caption_co">

![midichordseqmulti.png](../res/midichordseqmulti.png)

</div>

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Multi-Seq to Midifile</span>

</div>

<div class="txt">

You can possibly convert the resulting multi-seq into a midifile with a
simple connection and evaluation.

</div>

</div>

</div>

</div>

<div class="part">

## <span>The Poly Object</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

|                                                                                  |                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------- |
| <span class="iconButton_tim">![poly\_icon\_1.png](../res/poly_icon_1.png)</span> | The poly object allows to "superimpose" several voices . |

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Inputs and Outputs</span>

</div>

<div class="txt">

The poly object has two inputs and outputs :

  - <span>The first input – self – takes polys or midi files . The
    second input take a list of voices .</span>
  - <span>The first output returns the self of the poly . The second
    output returns a list of voices .</span>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Applications</span>

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
<p>To create a poly out of a series of voices  :</p>
<ul>
<li><span>create a list of voices with a list function, or any other type of relevant function, </span></li>
<li><span>connect the list function to the second input of the poly and evaluate the box.</span></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/polybasic.png" width="221" height="253" alt="polybasic.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About Polys and Multi-Seq Editors</span>

</div>

<div class="linkUL">

  - [<span>Polyphonic Objects : Poly and Multi-seq
    Editors</span>](Poly-Multi-Editor.md)

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
          - [<span>Presentation</span>](Score-Objects-Intro.md)
              - [<span>Harmonic Objects</span>](Note-Chord-Chord-seq.md)
              - [<span>Rhythmic Objects</span>](RhythmicObjects.md)
              - <span id="i2" class="outLeftSel_yes"><span>Polyphonic
                Objects</span></span>
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
précédente</span>](RhythmicObjects.md "page précédente(Rhythmic Objects)")<span class="hidden">
| </span>[<span>page
suivante</span>](RT.md "page suivante(Rhythm Trees)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
