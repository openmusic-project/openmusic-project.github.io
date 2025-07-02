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
Containers</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](MIDIEvent.md "page précédente(MIDI Events)")<span class="hidden">
| </span>[<span>page suivante</span>](Audio.md "page suivante(Audio)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>MIDI Containers</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

The MIDI containers are objects constituted of a set of simultaneous or
sequencial MIDI events representing intermediate-level musical objects.

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>General Properties of MIDI Containers</span>

</div>

<div class="txt">

All these objects can be played and processed as musical object.

The list of MIDIEvents can be extracted (and possibly filtered) using
**get-MidiEvents**.

</div>

</div>

<div class="part">

## <span>MIDI Events Sequences : EventMidi-seq</span>

<div class="part_co">

<div class="infobloc">

<div class="caption">

<div class="caption_co">

![eventmidi-seq.png](../res/eventmidi-seq.png)

</div>

</div>

<div class="txt">

The **EventMidi-seq** object represents a sequence of MIDI events. Its
slots are lists of the corresponding MidiEvent slots (types, dates,
tracks, ports, channels, fields).

It can store all types of MidiEvents (notes, controllers, etc..) and in
this way can be compared to a buffered version of the MidiFile object.
The main difference is that EventMidi-seq is a not written on hard disk
as a file, so it can be manipulated more easily.

**EventMidi-seq** will be usefull for temporary storage of filtered or
processed MIDI data.

</div>

<div class="txt">

An **EventMidi-seq** can be constructed by setting its input slots or
from a list of **MidiEvents**, hence from the result of
**get-MidiEvents** applyed to an object.

An equivalent "shortcut" procedure, except if MIDIEvents are to be
filtered, is to connect the objects directly to the first () slot of the
**EventMIDI-seq**.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About MIDI Event Objects and Extracting/Filtering</span>

</div>

<div class="linkUL">

  - [<span>MIDI Events</span>](MIDIEvent.md)

</div>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Using EventMIDI-seqs</span>

</div>

<div class="txt">

In this example, MidiEvents are extracted from a MidiFile, and then
filtered to separateand process channels. The resulting sequences are
put in a new EventMidi-seq with a midi-mix-console object to add the
initial settings events to the sequence.

</div>

<div class="caption">

<div class="caption_co">

[![sequences-ex\_1.png](../res/sequences-ex_1.png)](../res/sequences-ex.png "Cliquez pour agrandir")

</div>

</div>

<div class="txt">

**Note :** Using the function c**reate-midiseq**, a list of MIDI events
or an object is simply converted into EventMidi-seq, but the second
(optional) input allows to set a name to the newly created sequence.
This name will appear in the EventMidi-seq's miniview.

</div>

</div>

<div class="bloc note">

<div class="txtRes">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><div class="dk_txtRes_txt txt">
<p>Events are normally automatically time-sorted in each <strong>EventMidi-seq</strong> conversion. However, manually created sequences can be sorted using the <strong>temporal-sort</strong> method.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/temporalsort.png" width="82" height="62" alt="temporalsort.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Using EventMIDI-seqs for Score Object Processing</span>

</div>

<div class="txt">

All OpenMusic score objects can be converted into MIDI sequences.
Notes,a s well as tempo, measure markers for voice and poly objects, are
converted in MIDI events. This conversion may allow special treatments
(such as filters with **get-midievents** method, etc.) and operations on
MidiEvents.

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
<p>The function <strong>separate-channels</strong> processes all Events of the EventMidi-seq and put each channel on a diferent track.</p>
<p>In the following example, we separate notes of different channels in a chord-seq into diferent multi-seq tracks via MidiEvents processing.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/separatechannels.png" width="112" height="65" alt="separatechannels.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="caption">

<div class="caption_co">

![separatechannels-ex.png](../res/separatechannels-ex.png)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>MIDI Controllers : MIDIControl / MIDI-Mix-Console</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

MIDI Controllers send messages changing the state of one or several MIDI
Channels. There exist two main MIDI Controller containers in OM.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About MIDI Control Messages</span>

</div>

<div class="linkUL">

  - [<span>Important MIDI Concepts</span>](MIDI-Concepts.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>MIDIControl</span>

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
<p><strong>MidiControl</strong> is a special case of Midi Sequence representing a single MIDI <strong>continuous controller</strong> evolution. Such controller can be PitchBend, or any kind of Control Change. It contains a single event type, a single channel, port and track, and a list of dates and values.</p>
<p>MidiControl is actually a sub-class of <strong>BPF</strong> controlling a given MIDI parameter.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/midicontrol.png" width="88" height="71" alt="midicontrol.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

A List of controllers is proposed as an input menu for the first input
(controller type) of the **MidiControl** box.

Channel, port an track can be numbers or lists : In this case the same
continuous controller (dates/values) applies to all the
channels/ports/tracks of the lists.

Dates/values can be edited with the BPF editor.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>BPFs and BPF Editor</span>

</div>

<div class="linkUL">

  - [<span>2D Objects : BPF / BPC</span>](BPF-BPC.md)
  - [<span>BPFs and BPCs Editors</span>](BPFEditors.md)

</div>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Using a MIDIControl in a Maquette</span>

</div>

<div class="txt">

The following example shows a Channel Volume controller in a maquette.

</div>

<div class="caption">

<div class="caption_co">

![maqcontrol.png](../res/maqcontrol.png)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About the Maquette</span>

</div>

<div class="linkUL">

  - [<span>Maquettes</span>](Maquettes.md)

</div>

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Continuous Controllers values</span>

</div>

<div class="txt">

Most of the controllers are classical MIDI ControlChange controllers for
which values must be given in 0 – 127 range (7 bits).

(For On/Off switch controllers, value \< 64 means "off", and value \>=
64 means "on".)

Some of them (controllers 0 to 31) have a corresponding "Fine"
controller (32 to 63) for which values must be set in 0 – 16384 range
(14 bits).

The PitchBend controller is value range is –64 to 63, and –8182 to 8191
for "fine" pitchbend (also called pitchwheel).

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Extracting Controllers</span>

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
<p>A <strong>MidiControl</strong> object can be extracted from Midifile or EventMidi-seq using the <strong>get-continuous-ctrl</strong> method.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/getcontrol.png" width="213" height="282" alt="Channel volume controller extracted from a MidiFile" />
</div>
<div class="caption_ti">
Channel volume controller extracted from a MidiFile
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Resampling a MIDI Controller</span>

</div>

<div class="txt">

The **MidiControl** dates-values BPF can be resampled using
**OM-SAMPLE** method. This function create a new control BPF with a
regular given sample rate.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Resampling and Other Operations of BPF Objects</span>

</div>

<div class="linkUL">

  - [<span>BPF and BPC Tools</span>](Tools.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>MIDI-Mix-Console</span>

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
<p>MIDI-Mix-Console represents a set of simultaneous MIDI Events set at once to a given port.</p>
<p>It can be set manually thanks to a multi-channel mixing console interface and used as MIDI setup storage for playback or creation of MIDI objects.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/controller-Box.png" width="141" height="94" alt="controller-Box.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="caption">

<div class="caption_co">

[![controller\_1.png](../res/controller_1.png)](../res/controller.png "Cliquez pour agrandir")

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>More About the MIDI-Mix-Console</span>

</div>

<div class="linkUL">

  - [<span>MIDI Player Controls</span>](MIDI-Controls.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Tempo and Metrics</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>The Tempo-Map Box</span>

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
<p><strong>Tempo-Map</strong> allows the separation of tempo and metric information for works on quantification and analysis.</p>
<p>It contains a list of tempo changes (date , tempo), and a list of measure markers (date, MIDI time signature).</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/tempomap.png" width="90" height="71" alt="tempomap.png" />
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
<p><strong>Tempo-Map</strong> can be extracted from any type of musical or MIDI containers (provided it contains tempo or metric information : MidiFile, EventMidi-seq, Voice, Poly, Measure) using <strong>get-tempomap</strong> method.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/gettempomap.png" width="80" height="65" alt="gettempomap.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

It can be processed like other MIDI objects (conversions,
get-midievents,...)

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Improving Quantification</span>

</div>

<div class="txt">

With **Tempo-Map**, Chord-seq to Voice conversion can be improved via
the **cseq+tempo-\>voice** method. The tempo and measure informations
will be used to quantify chords.

</div>

</div>

<div class="bloc example">

<div class="txtRes">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><div class="dk_txtRes_txt txt">
<p>In this example, notes and tempo map are extracted from a MIDIFile (could be from a voice, for example). Notes are processed as chord-seq and then re-written in a voice using the initial tempo and metric informations.</p>
<p>However, tempo information is used with some limits :</p>
<ul>
<li><p>A MIDI file cannot contain different tempo maps for each track : if a poly with different tempo is saved, all tracks are set to tempo 60.</p></li>
<li><p>Voice and poly conversions do not (yet ?) accept tempo changes. If a MidiFile with variable tempo is conevrted to a voice, only the first tempo will be taken in account.</p></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/cs%20tempo.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/cs%20tempo_1.png" width="236" height="300" alt="cs%20tempo_1.png" /></a>
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
              - [<span>MIDI Events</span>](MIDIEvent.md)
              - <span id="i3" class="outLeftSel_yes"><span>MIDI
                Containers</span></span>
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
précédente</span>](MIDIEvent.md "page précédente(MIDI Events)")<span class="hidden">
| </span>[<span>page suivante</span>](Audio.md "page suivante(Audio)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
