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
</span>[<span>MIDI</span>](MIDI.md)<span class="stkSep"> \>
</span>[<span>MIDI Objects</span>](MIDI-Objects.md)<span class="stkSep">
\> </span><span class="stkSel_yes"><span>MIDI File</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](MIDI-Objects.md "page précédente(MIDI Objects)")<span class="hidden">
| </span>[<span>page
suivante</span>](MIDIEvent.md "page suivante(MIDI Events)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>MIDI File</span>

<div class="headCo_co">

<div class="secOutFra">

<div class="secOutTi">

[<span>Sommaire </span>](#)

</div>

<div class="secOutUi">

1.  [Instantiation](#dgN22)
2.  [Editor](#dgNbe)
3.  [Extract Data](#dgN10c)
4.  [Save as MIDI File](#dgN26f)

</div>

</div>

<div>

<div class="infobloc">

<div class="txt">

The **MIDIFile** box represents a MIDI file existing somewhere on your
computer.

</div>

<div class="caption">

<div class="caption_co">

![midifile.png](../res/midifile.png)

</div>

</div>

</div>

<div class="part">

## <span>Instantiation</span>

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
<p>The MIDIFile box is initalized with a <strong>pathname</strong> when the box is evaluated.</p>
<p>If no pathname is connected, a dialog with open and allow you to select a file on the disk.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/midfile-init.png" width="119" height="197" alt="midfile-init.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About Pathnames in OM</span>

</div>

<div class="linkUL">

  - [<span>Creating and Using Pathnames</span>](Pathnames.md)

</div>

</div>

</div>

<div class="bloc tip">

<div class="bloc_ti tip_ti">

<span>Seeing the File Name</span>

</div>

<div class="txt">

Type `n` to display the file name of a selected **MIDIFile** box.

</div>

</div>

<div class="bloc tip">

<div class="bloc_ti tip_ti">

<span>Lock the Box</span>

</div>

<div class="txt">

Do not forget to loack the box (type `b`) if you don't want the file to
be initialized again at each subsequent evaluations.

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Drag and Drop the File</span>

</div>

<div class="txt">

a MIDIFile box is also automatically created in your OM patches when you
drag a valid MIDI file from your computer file system in it.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Editor</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Double click teh MIDIFile box to open the MIDI editor.

</div>

<div class="caption">

<div class="caption_co">

[![MIDIEditor\_1.png](../res/MIDIEditor_1.png)](../res/MIDIEditor.png "Cliquez pour agrandir")

</div>

</div>

<div class="txt">

Standard play controls are available with the floating palette, and time
/ pitch values can be read acording to the mouse position.

Each channel is displayed with a different colour. MIDI tracks can be
merged or splitted into separate editor tracks, depending on the
`Separate MIDI tracks` box.

</div>

</div>

<div class="bloc warning">

<div class="bloc_ti warning_ti">

<span>No Data Editon</span>

</div>

<div class="txt">

The MIDI file editor does not allow to edit or modify the copntents of
the MIDI file, but just to display and listen to it.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Extract Data</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Data can be extracted from MIDI files by several different ways.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Conversions to OM objects</span>

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
<p>By connecting a MIDI file to an OM score object, the data is interpreted in order to match and fill the object contents depending on its own properties.</p>
<p>For instance, in a multi-seq the different tracks will be dispatched among the different voices, while in a chord-seq all tracks will be merged into a single voice.</p>
<p>For voice and poly objects, a quantification process will be applied to try to find an appropriate rhytmic structure corresponding to the MIDI notes absolute onsets.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/midifile-mseq.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/midifile-mseq_1.png" width="217" height="300" alt="midifile-mseq_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About OM Score Objects and Quantification</span>

</div>

<div class="linkUL">

  - [<span>Score Objects Presentation</span>](Score-Objects-Intro.md)
  - [<span>Quantification</span>](Quantification.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Using the MIDI Toolbox</span>

</div>

<div class="txt">

Several functions in the `MIDI / Inspect/Extract` menu allow to extract
data from a MIDI file.

The more general way of processing MIDI events is the **get-midievents**
method (see MidiEvents section). However, some special methods allow to
get more specific infrmation :

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Extracting and Processing MIDI Events</span>

</div>

<div class="linkUL">

  - [<span>MIDI Events</span>](MIDIEvent.md)

</div>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Extracting MIDI Notes</span>

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
<p>The <strong>get-midi-notes</strong> method returns a matrix of raw data corresponding to the MIDI notes.</p>
<p>Each list of the matrix is a track containing notes. A note is a list (pitch offset duration velocity channel).</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/getmidinotes.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/getmidinotes_1.png" width="300" height="176" alt="getmidinotes_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Extracting Lyrics and Textual Info</span>

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
<p>Textual Info is sometimes stored and encoded in MIDI files.</p>
<p>The <strong>get-mf-lyrics</strong> function extracts all the lyrics of a song converted to strings.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/getlyrics.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/getlyrics_1.png" width="300" height="233" alt="getlyrics_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="linkSet">

<div class="linkSet_ti">

<span>Extracting Data to Other MIDI Containers</span>

</div>

<div class="linkUL">

  - [<span>MIDI Containers</span>](MIDIContainer.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Save as MIDI File</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

All Musical and MIDI objects (including maquettes) can be stored in MIDI
File, using the **save-as-midi** method connected to the **MidiFile**
box input.

</div>

<div class="caption">

<div class="caption_co">

![Saving a MULTI-SEQ + MIDI-MIX-CONSOLE values into a MIDI
File](../res/save-as-midi.png)

</div>

<div class="caption_ti">

Saving a MULTI-SEQ + MIDI-MIX-CONSOLE values into a MIDI File

</div>

</div>

<div class="txt">

In case of simple objects, this is equivalent to exporting the object as
a MIDI file and loading the file in a MIDIFile box.

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
      - [<span>Sheet</span>](Sheet.md)
      - [<span>MIDI</span>](MIDI.md)
          - [<span>Introduction</span>](Intro.md)
          - [<span>Important MIDI Concepts</span>](MIDI-Concepts.md)
          - [<span>Rendering and Playback</span>](MIDI-Playback.md)
          - [<span>MIDI Objects</span>](MIDI-Objects.md)
              - <span id="i4" class="outLeftSel_yes"><span>MIDI
                File</span></span>
              - [<span>MIDI Events</span>](MIDIEvent.md)
              - [<span>MIDI Containers</span>](MIDIContainer.md)
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
précédente</span>](MIDI-Objects.md "page précédente(MIDI Objects)")<span class="hidden">
| </span>[<span>page
suivante</span>](MIDIEvent.md "page suivante(MIDI Events)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
