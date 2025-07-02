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
\> </span><span class="stkSel_yes"><span>Harmonic
Objects</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Score-Objects-Intro.md "page précédente(Presentation)")<span class="hidden">
| </span>[<span>page
suivante</span>](RhythmicObjects.md "page suivante(Rhythmic Objects)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Notes, Chords and Chord-Seqs</span>

<div class="headCo_co">

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
<img src="../res/notes.png" width="281" height="65" alt="notes.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>There are three harmonic objects : notes, chords, chord-seqs. Chord-seqs are successions of chords.</p>
<ul>
<li><span>A note is a unique pitch.</span></li>
<li><span>A chord is a list of notes.</span></li>
<li><span>A chord-seq is a list of chords.</span></li>
</ul>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="caption">

<div class="caption_co">

![A note, a chord and a chord-seq.](../res/examplesimple.png)

</div>

<div class="caption_ti">

A note, a chord and a chord-seq.

</div>

</div>

</div>

<div class="part">

## <span>General Features</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Parameters</span>

</div>

<div class="txt">

Harmonic objects have a number of common parameters. Chords and
chord-seqs have specific parameters.

| Objects               | Parameter | Input Name    | Value        |
| --------------------- | --------- | ------------- | ------------ |
| All                   | Pitch     | "midic"       | Midicents    |
| All                   | Dynamics  | "vel"         | 1 -\> 127    |
| All                   | Duration  | "dur"         | Milliseconds |
| All                   | Timbre    | "midichannel" | 1 -\> 16     |
| Chords and chord-seqs | Offset    | "offset"      | Milliseconds |
| Chord-seqs            | Onset     | "onset"       | Milliseconds |
| Chord-seqs            | Legato    | "legato"      | Milliseconds |

</div>

<div class="txt">

The inputs order varies depending on their significance to the object.

</div>

<div class="caption">

<div class="caption_co">

![chord-seqinputs.png](../res/chord-seqinputs.png)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Input Values</span>

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
<img src="../res/datastrcutre.png" width="242" height="187" alt="datastrcutre.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<ul>
<li><p><strong>Note</strong> inputs accept <strong>atoms</strong> only, that is, a simple value without parenthesis. A single pitch, and its corresponding parametric values as well, must be expressed by an atom.</p></li>
<li><p><strong>Chord</strong> inputs accept <strong>atoms and lists</strong> . A chord consisting of a <strong>single note</strong> is expressed by an atom. A chord consisting of a <strong>set of notes</strong> must be expressed by a list.</p></li>
<li><p><strong>Chord-seq</strong> inputs accept <strong>elementary lists and lists with sub lists</strong> . A chord-seq consisting of a <strong>succession of notes</strong> is expressed in an elementary list. A chord-seq consisting of a <strong>succession of chords</strong> is expressed by a list with sub lists. The elements of one sub list belong to the same chord.</p>
<p>The " <strong>legato</strong> " input accepts <strong>atoms</strong> only : a single legato value is applied to all the elements of the chord-seq.</p></li>
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
<td><div class="caption">
<div class="caption_co">
<img src="../res/chordseq.png" width="232" height="156" alt="chordseq.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>As chord-seqs rather expect sub lists, lists are converted into sub lists when outputs are evaluated.</p>
<p>Here, the three first values of the output list stand for distinct chords. They are converted into sub lists.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Note</span>

</div>

<div class="txt">

The default data structure format can be checked by hovering the mouse
over the inputs of a box.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Chord and Chord-Seq Specific Features</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Offsets and Onsets</span>

</div>

<div class="txt">

Chords and chord-seq have specific parameters : "offsets" and "onsets",
which can become easily confusing.

  - <span>The **onset** represents the position of the **first note of a
    chord** .</span>
  - <span>The **offset** represents the **delay between this first note
    and the following note(s** ). A chord can "unfold" in time, with an
    arpeggio for instance.</span>

Offsets are visible when opening the editor of a chord or chord-seq.

</div>

<div class="caption">

<div class="caption_co">

![Each chord of the chord-seq has one onset, and one offset per
note.](../res/offsetsonsets.png)

</div>

<div class="caption_ti">

Each chord of the chord-seq has one onset, and one offset per note.

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Legato</span>

</div>

<div class="txt">

A chord-seq has a supplemental input : the " **legato** " input. All
chords have the same legato percentage. Hence, the "legato" input only
accepts atoms. It is displayed in the score editor via the `duration`
menu item of the editor control.

This value doesn't apply to notes or chords added subsequently via the
score editor.

</div>

<div class="caption">

<div class="caption_co">

![legato.png](../res/legato.png)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Displaying Parametric Values :</span>

</div>

<div class="linkUL">

  - [<span>Harmonic Objects : Note, Chord and Chord-Seq
    Editors</span>](Harmonic-Obj-Editor.md)

</div>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Chords and chord-seqs : Matching List Structures</span>

</div>

<div class="txt">

The list structures of each slot of a chord or chord-seq don't have to
be strictly similar. Objects manipulate the lists assigned to each of
their parameters to produce compatible lists.

If lists don't have the same number of elements, shorter lists are
completed to fit the longest list(s) :

  - <span>by repeating the last element</span>
  - <span>by applying the same time difference to all elements, in the
    case of **onsets** . </span>

If a list has too many elements, the last elements are suppressed.

In any case, pitches is the reference list.

</div>

<div class="caption">

<div class="caption_co">

![The object returns compatible and coherent
pattern.](../res/matchparameters.png)

</div>

<div class="caption_ti">

The object returns compatible and coherent pattern.

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
              - <span id="i2" class="outLeftSel_yes"><span>Harmonic
                Objects</span></span>
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
précédente</span>](Score-Objects-Intro.md "page précédente(Presentation)")<span class="hidden">
| </span>[<span>page
suivante</span>](RhythmicObjects.md "page suivante(Rhythmic Objects)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
