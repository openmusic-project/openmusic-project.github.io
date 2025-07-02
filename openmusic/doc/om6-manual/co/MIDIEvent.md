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
\> </span><span class="stkSel_yes"><span>MIDI
Events</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](MIDIFile.md "page précédente(MIDI File)")<span class="hidden">
| </span>[<span>page
suivante</span>](MIDIContainer.md "page suivante(MIDI Containers)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>MIDI Events</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

All OM score and MIDI objects can be traduced (with more or less
precision or data loss) into a list of time-tagged MIDI events.

The **MIDIEvent** box represents this basic MIDI element as an object in
OM visual programs.

</div>

</div>

<div class="part">

## <span>The MIDIEvent Box</span>

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
<p>The <strong>MidiEvent</strong> box represents a single MIDI event in OpenMusic.</p>
<p>The slots of the MidiEvent class are type, date, track, port, channel, and fields.</p>
<p>In-popup menus and MIDI selection tools can help setting the MidiEvent box inputs.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/midievent.png" width="98" height="72" alt="midievent.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Attributes of MIDI Events</span>

</div>

<div class="linkUL">

  - [<span>Important MIDI Concepts</span>](MIDI-Concepts.md)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Selection Tools for Setting MIDI Event Inputs</span>

</div>

<div class="linkUL">

  - [<span>MIDI Selection Tools</span>](MIDI-Utils.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>A "Musical" Object</span>

</div>

<div class="txt">

As other musical objects, MIDIEvent can be "played", that is, sent to a
MIDI output port. It can also be used and send MIDI messages at a given
time in a maquette.

</div>

<div class="caption">

<div class="caption_co">

![midievents.png](../res/midievents.png)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Playing Objects</span>

</div>

<div class="linkUL">

  - [<span>Playback and Players</span>](1-Play.md)

</div>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Delay</span>

</div>

<div class="txt">

If a date is set for a **MidiEvent**, it will be sent at the
corresponding time (in miliseconds) after playing starts.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Extracting / Processing MIDI Events</span>

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
<p>Any types of MIDI or musical object (chord-seq, voice, note, eventmidi-seq, midifile, midicontrol, midi-mix-console,...) can be converted into a list of MidiEvents using the method <strong>get-midievents</strong>. It's a very useful function, allowing all kinds of conversions and "MIDI processing" of the objects.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/getmidievents.png" width="98" height="67" alt="getmidievents.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

This function has an optional input where a lambda function can be
connected to test and filter the MidiEvents.

Some predefined functions in the `MIDI / Filters` menu can be used for
this purpose :

</div>

<div class="caption">

<div class="caption_co">

![tests.png](../res/tests.png)

</div>

</div>

<div class="txt">

**test-date** : tests if the MidiEvents occurs beween a min date and a
max date.

**test-type** : tests the MidiEvent type.

**test-track** : tests the MidiEvent track.

**test-port** : tests the MidiEvent port.

**test-channel** : tests the MidiEvent channel.

**MidiEvent-filter** : test various of the MidiEvent slots (type, track,
port, channel).

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Test on a MIDI Event</span>

</div>

<div class="caption">

<div class="caption_co">

![test-ex.png](../res/test-ex.png)

</div>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Filter MIDI Events from a Container Object</span>

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
<p>In this example, we filter all MidiEvents from a MidiFile with the same test as in the previous example. <strong>Get-midievents</strong> outputs a list containing all MidiEvents which channel = 1.</p>
<p>The resulting list can be saved as a new MidiFile, or stored in a EventMidi-seq object.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/getmidievents-ex1.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/getmidievents-ex1_1.png" width="300" height="147" alt="getmidievents-ex1_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About EventMidi-seqs</span>

</div>

<div class="linkUL">

  - [<span>MIDI Containers</span>](MIDIContainer.md)

</div>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Tests as Lambda Boxes</span>

</div>

<div class="txt">

The test function is a parameter of **get-midievent**; it must be a
lambda function and have only one free input (for the MidiEvents to be
tested).

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>More About Lambda Boxes</span>

</div>

<div class="linkUL">

  - [<span>Lambda Mode</span>](LambdaMode.md)
  - [<span>Lambda Mode Examples: Test Functions</span>](LambdaTest.md)

</div>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Designing Filter Functions</span>

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
<p>For more complex filtering functions, a patch (also set as a lambda box, with a single free input) can also be plugged to the <strong>get-midievents</strong> test input :</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/getme-ex2.png" width="173" height="214" alt="getme-ex2.png" />
</div>
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
<p>This is an example of what could be inside the patch test-func :</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/getme-patch-ex.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/getme-patch-ex_1.png" width="300" height="227" alt="getme-patch-ex_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>textual Events</span>

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
<p>Some MIDI events types are called "textual" (e.g. SeqName, InstrumentName, Lyrics, Copyright, ...). It means that their contents (or "fields") are a encoded textual data. To translate these fields into text (strings), use the <strong>me-textinfo</strong> method (can be applyed to MidiEvents or MidiEvents lists).</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/me-textinfo.png" width="71" height="60" alt="me-textinfo.png" />
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
              - [<span>MIDI File</span>](MIDIFile.md)
              - <span id="i2" class="outLeftSel_yes"><span>MIDI
                Events</span></span>
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
précédente</span>](MIDIFile.md "page précédente(MIDI File)")<span class="hidden">
| </span>[<span>page
suivante</span>](MIDIContainer.md "page suivante(MIDI Containers)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
