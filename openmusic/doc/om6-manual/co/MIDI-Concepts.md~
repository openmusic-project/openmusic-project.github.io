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
</span><span class="stkSel_yes"><span>Important MIDI
Concepts</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Intro.md "page précédente(Introduction)")<span class="hidden">
| </span>[<span>page
suivante</span>](MIDI-Playback.md "page suivante(Rendering and Playback)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Important MIDI Concepts</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

MIDI communication is based on **messages** called **events**. When a
sequence of notes is played, it is internally converted into a sequence
of **MIDI events**.

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>MIDI Files</span>

</div>

<div class="txt">

MIDI messages are collected and stored as **Standard MIDI Files**. A
MIDI file therefore basically consists in a sequence of time-tagged
events.

</div>

</div>

<div class="part">

## <span>Attributes of MIDI Events</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Event Type</span>

</div>

<div class="txt">

All events have a **type**, which identifies the nature of the MIDI
message. There are about 40 different types of events, defining for
instance the starting or ending a note, volume, the key pressure,
effects, and so on (see below).

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Date</span>

</div>

<div class="txt">

MIDI events are sent at a given date. In OM, dates are expressed in
milliseconds.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Port</span>

</div>

<div class="txt">

MIDI events are sent to a given port and played by any device connected
to it. By default, this port is port \#0.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>MIDI Ports in OM</span>

</div>

<div class="linkUL">

  - [<span>Managing MIDI Ports</span>](MIDI-Ports.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Reference Number or Track</span>

</div>

<div class="txt">

The reference number can be used to determine a device reference ID, but
it's generally used in Midi files to determine the different song tracks
(usually one track is used for each instrument).

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Tracks and MIDI File Formats</span>

</div>

<div class="txt">

There exist three different formats for MIDI files :

  - **A Format "0"** contains a single track and represents a single
    "song performance". One track contains the messages of the 16
    channels.

  - **A Format "1"** may contain any number of tracks : the sequencer
    track structure is preserved. The file also a single song
    performance. These trasck are played simultaneously.

  - **A Format "2"** may have any number of tracks, each representing a
    separate song performance. Track are played sequentially. This
    format is rather seldom.

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Track \#0 : Tempo</span>

</div>

<div class="txt">

Track \#0 is often dedicated to tempo, as well metric information, such
as time signatures. These information apply to the whole set of tracks
and data.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Channels</span>

</div>

<div class="txt">

MIDI provides 16 different channels. All MIDI events are adressed to one
single channel (1 - 16). However some particular events don't affect
only one channel; in this case channel number is ignored.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Fields</span>

</div>

<div class="txt">

The actual message value is defined by a number of "fields" depending on
its type.

For instance, the "KeyOn" event has a pitch and velocity fields. The
main event types and corresponfing fields are detailed below.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Some Important Types of MIDI Events</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Notes : KeyOn / KeyOff</span>

</div>

<div class="txt">

KeyOn and KeyOff events are the main type of MIDI events. They
correspond to note activation and release on a virtual keyboard.

The attributes (or "fields") of these event are a pitch in MIDI (that
is, 60=middle C, 61=C\#, 62=D, etc.) and a velocity value (0-127).

The time span between a KeyOn event and a KeyOff of the same pitch
defines the duration of the note.

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Alternative Use</span>

</div>

<div class="txt">

Sometimes KeyOff events are not used in MIDI files and replaced by KeyOn
events with velocity = 0

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>"Note" Events</span>

</div>

<div class="txt">

For convenience and in addtition to KeyOn and KeyOff, MidiShare adds a
new type of event called "Note" which has a pitch, velocity and duration
fields.

Note events are internally converted to a KeyOn and a keyOff value at
playing or storing the MIDI events sequence.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Control Changes</span>

</div>

<div class="txt">

The Control Change events (or CtrlChange) set control values for the
different MIDI channels.

The first field of a Control Change event is a control number which
selects a specific controller to set (ex. Volume, Pan, etc.)

The second field of the event is the value to set to the controller (0 –
127).

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Standard MIDI Controllers</span>

</div>

<div class="txt">

The General MIDI standard defines a set of controllers corresponding to
the control numbers of Control Change events.

Controllers can also be selected in OM using the predefined selection
tools.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>General MIDI Selection Tools</span>

</div>

<div class="linkUL">

  - [<span>MIDI Selection Tools</span>](MIDI-Utils.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Program Change Events</span>

</div>

<div class="txt">

Program Cgange events (or ProgChange) set a specific instrumental timbre
(or "program") to a given channel.

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Standard MIDI Programs</span>

</div>

<div class="txt">

The General MIDI standard list of 128 timbres and sound can be used to
choose the desired sound.

Programs can also be selected in OM using the predefined selection
tools.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>General MIDI Selection Tools</span>

</div>

<div class="linkUL">

  - [<span>MIDI Selection Tools</span>](MIDI-Utils.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Pitch Bend</span>

</div>

<div class="txt">

Pitch Bend (or frequency deviations / detuning) can be controlled for a
given MIDI channel with specific MIDI events of type PitchBen or
PitchWheel.

PitchBend are 7 bit precision (0 to 127) while PitchWheel are 14 bits (0
to 8192). Depending on the MIDI devices, this value range may correspond
to bending of +/- 1 or 2 tones/.

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Channel Control</span>

</div>

<div class="txt">

Remember that Pitch Bend modification apply to a whome channel and not
to specific notes in this channel.

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Bending and Microintervals</span>

</div>

<div class="txt">

PitchBend settings allow to detune midichannels to play OM musiocal
objects with microintervals. Detuned notes are dispatched in the
specific channels for which PitchBen dmust be preliminarily set.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Playing MicroIntervals</span>

</div>

<div class="linkUL">

  - [<span>Playing Microintervals with MIDI</span>](Microintervals.md)

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
      - [<span>Maquettes</span>](Maquettes.md)
      - [<span>Sheet</span>](Sheet.md)
      - [<span>MIDI</span>](MIDI.md)
          - [<span>Introduction</span>](Intro.md)
          - <span id="i2" class="outLeftSel_yes"><span>Important MIDI
            Concepts</span></span>
          - [<span>Rendering and Playback</span>](MIDI-Playback.md)
          - [<span>MIDI Objects</span>](MIDI-Objects.md)
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
précédente</span>](Intro.md "page précédente(Introduction)")<span class="hidden">
| </span>[<span>page
suivante</span>](MIDI-Playback.md "page suivante(Rendering and Playback)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
