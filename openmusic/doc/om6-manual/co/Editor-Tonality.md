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
</span>[<span>Score
Editors</span>](ScoreEditors.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Tonal Display</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Editor-PageMode.md "page précédente(Page Mode)")<span class="hidden">
| </span>[<span>page
suivante</span>](Editor-Microintervals.md "page suivante(Microintervals Notation)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Tonal Display</span>

<div class="headCo_co">

<div class="secOutFra">

<div class="secOutTi">

[<span>Sommaire </span>](#)

</div>

<div class="secOutUi">

1.  [Tonality](#oeN2a)
2.  [Editor Scale](#oeNff)
3.  [Cadences, Degrees and Figuring](#oeN1a6)
4.  [Modulation](#oeN206)

</div>

</div>

<div>

<div class="infobloc">

<div class="txt">

Tonal display options concern all musical objects with possible tonal
harmonic or melodic progressions : chord-seqs, multi-seqs, voices and
polys .

</div>

</div>

<div class="part">

## <span>Tonality</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Editor Preferences</span>

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
<p>The <code class="label_tl">Editor preferences</code> tab provides a number of options and tools, which relate to tonality expression and analysis.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/tonaldisplay1.png" width="135" height="153" alt="tonaldisplay1.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Tonality Dialogue Window</span>

</div>

<div class="txt">

To choose a tonality

1.  select the editor and press `t`.

2.  A tonality dialogue window pops up.

3.  Select the `Minor` or `Major` mode in the pop up menu, and a key
    signature via the `<` and `>` buttons.

4.  The tonality is indicated on the upper left corner of the editor, as
    well as a conventional key signature.

To restore the original "atonal" configuration, press `SHIFT` + `t` .

</div>

<div class="caption">

<div class="caption_co">

![settonality.png](../res/settonality.png)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Enharmony</span>

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
<p>OM automatically assigns the expected accidentals, depending on the chosen tonality. Accidentals can though be modified enharmonically.</p>
<p>To modify an accidental :</p>
<ol>
<li><p>select the note tool,</p></li>
<li><p><code class="keyboard_tl">Ctrl</code> click on a note and select an item.</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/adjustaccidental.png" width="179" height="131" alt="adjustaccidental.png" />
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

## <span>Editor Scale</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The default accidental notation system in score editors uses sharps.
This system can be modified, to a certain extent.

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
<img src="../res/editsemitone.png" width="247" height="184" alt="editsemitone.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The <code class="label_tl">Editor Scale</code> dialogue window offers a limited number of enharmonic accidentals, based on the standard twelve semitones notation.</p>
<p>This especially makes sense when using a tonal or modal semitones scale pattern.</p>
<p>To specify a scale</p>
<ol>
<li><p>select an editor and press <code class="keyboard_tl">s</code>.</p></li>
<li><p>The <code class="label_tl">Editor Scale</code> dialogue window opens.</p></li>
<li><p>Choose <code class="textButton_tl">Edit</code>.</p></li>
</ol>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

To assign an enharmonic accidental to a note, `Ctrl` / right click on it
and select a menu item.

</div>

<div class="caption">

<div class="caption_co">

![tonaledit.png](../res/tonaledit.png)

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
<p>Modifications of the default scale are displayed by the dialogue window.</p>
<p>Click on <code class="textButton_tl">Default</code> to reset the default scale.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/wrongeditor.png" width="239" height="185" alt="wrongeditor.png" />
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

## <span>Cadences, Degrees and Figuring</span>

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
<img src="../res/tonalitydata.png" width="215" height="147" alt="tonalitydata.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>An elementary tonal analysis tool is implemented in musical editors. It is based on the options provided in the <code class="label_tl">Editor preferences</code> :</p>
<ul>
<li><span> <code class="textButton_tl">Degrees</code> </span></li>
<li><span> <code class="textButton_tl">Cadences</code> </span></li>
<li><span> <code class="textButton_tl">Figuring</code> </span></li>
</ul>
<p>The analysis takes place as chords are being edited, provided OM can recognize a listed chord and chord progression.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Modulation</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Specifying Modulations</span>

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
<p>Modulations can be specified textually in the score editor.</p>
<ol>
<li><p>Select a section in a score and press <code class="keyboard_tl">t</code>.</p></li>
<li><p>Choose a tonality.</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/changetone.png" width="255" height="241" alt="changetone.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Boundaries</span>

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
<img src="../res/newtonality.png" width="298" height="230" alt="newtonality.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>OM displays the modulation but it doesn't automatically adapt the key signature or accidentals to the new tonality.</p>
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
          - [<span>Score Players</span>](ScorePlayer.md)
          - [<span>Score Editors</span>](ScoreEditors.md)
              - [<span>Overview</span>](Editor-Overview.md)
              - [<span>Preferences</span>](Editors-Prefs.md)
              - [<span>Score Display</span>](Editor-Display.md)
              - [<span>Basic Editing</span>](Editor-Basics.md)
              - [<span>Harmonic Objects</span>](Harmonic-Obj-Editor.md)
              - [<span>Rhythmic Objects</span>](Editor-Rhythm.md)
              - [<span>Polyphonic Objects</span>](Poly-Multi-Editor.md)
              - [<span>Page Mode</span>](Editor-PageMode.md)
              - <span id="i4" class="outLeftSel_yes"><span>Tonal
                Display</span></span>
              - [<span>Microintervals
                Notation</span>](Editor-Microintervals.md)
              - [<span>Play Controls</span>](Editor-Play.md)
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
précédente</span>](Editor-PageMode.md "page précédente(Page Mode)")<span class="hidden">
| </span>[<span>page
suivante</span>](Editor-Microintervals.md "page suivante(Microintervals Notation)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
