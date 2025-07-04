
Navigation : [Previous](Intro "page précédente\(Introduction\)") |
[Next](MIDI-Playback "Next\(Rendering and Playback\)")

# MIDI Basic Concepts

MIDI communication is based on **messages** called **events**. When a sequence
of notes is played, it is internally converted into a sequence of **MIDI
events**.

MIDI Files

MIDI messages are collected and stored as **Standard MIDI Files**. A MIDI file
therefore basically consists in a sequence of time-tagged events.

## Attributes of MIDI Events

Event Type

All events have a **type** , which identifies the nature of the MIDI message.
There are about 40 different types of events, defining for instance the
starting or ending a note, volume, the key pressure, effects, and so on (see
below).

Date

MIDI events are sent at a given date. In OM, dates are expressed in
milliseconds.

Port

MIDI events are sent to a given port and played by any device connected to it.
By default, this port is port #0.

MIDI Ports in OM

  * [Managing MIDI Ports](MIDI-Ports)

Reference Number or Track

The reference number can be used to determine a device reference ID, but it's
generally used in Midi files to determine the different song tracks (usually
one track is used for each instrument).

Tracks and MIDI File Formats

There exist three different formats for MIDI files :

  * **A Format "0"** contains a single track and represents a single "song performance". One track contains the messages of the 16 channels. 

  * **A Format "1"** may contain any number of tracks : the sequencer track structure is preserved. The file also a single song performance. These trasck are played simultaneously.

  * **A Format "2"** may have any number of tracks, each representing a separate song performance. Track are played sequentially. This format is rather seldom.

Track #0 : Tempo

Track #0 is often dedicated to tempo, as well metric information, such as time
signatures. These information apply to the whole set of tracks and data.

Channels

MIDI provides 16 different channels. All MIDI events are adressed to one
single channel (1 - 16). However some particular events don't affect only one
channel; in this case channel number is ignored.

Fields

The actual message value is defined by a number of "fields" depending on its
type.

For instance, the "KeyOn" event has a pitch and velocity fields. The main
event types and corresponfing fields are detailed below.

## Some Important Types of MIDI Events

Notes : KeyOn / KeyOff

KeyOn and KeyOff events are the main type of MIDI events. They correspond to
note activation and release on a virtual keyboard.

The attributes (or "fields") of these event are a pitch in MIDI (that is,
60=middle C, 61=C#, 62=D, etc.) and a velocity value (0-127).

The time span between a KeyOn event and a KeyOff of the same pitch defines the
duration of the note.

Alternative Use

Sometimes KeyOff events are not used in MIDI files and replaced by KeyOn
events with velocity = 0

"Note" Events

For convenience and in addtition to KeyOn and KeyOff, MidiShare adds a new
type of event called "Note" which has a pitch, velocity and duration fields.

Note events are internally converted to a KeyOn and a keyOff value at playing
or storing the MIDI events sequence.

Control Changes

The Control Change events (or CtrlChange) set control values for the different
MIDI channels.

The first field of a Control Change event is a control number which selects a
specific controller to set (ex. Volume, Pan, etc.)

The second field of the event is the value to set to the controller (0 - 127).

Standard MIDI Controllers

The General MIDI standard defines a set of controllers corresponding to the
control numbers of Control Change events.

Controllers can also be selected in OM using the predefined selection tools.

General MIDI Selection Tools

  * [MIDI Selection Tools](MIDI-Utils)

Program Change Events

Program Cgange events (or ProgChange) set a specific instrumental timbre (or
"program") to a given channel.

Standard MIDI Programs

The General MIDI standard list of 128 timbres and sound can be used to choose
the desired sound.

Programs can also be selected in OM using the predefined selection tools.

General MIDI Selection Tools

  * [MIDI Selection Tools](MIDI-Utils)

Pitch Bend

Pitch Bend (or frequency deviations / detuning) can be controlled for a given
MIDI channel with specific MIDI events of type PitchBen or PitchWheel.

PitchBend are 7 bit precision (0 to 127) while PitchWheel are 14 bits (0 to
8192). Depending on the MIDI devices, this value range may correspond to
bending of +/- 1 or 2 tones/.

Channel Control

Remember that Pitch Bend modification apply to a whome channel and not to
specific notes in this channel.

Bending and Microintervals

PitchBend settings allow to detune midichannels to play OM musiocal objects
with microintervals. Detuned notes are dispatched in the specific channels for
which PitchBen dmust be preliminarily set.

Playing MicroIntervals

  * [Playing Microintervals with MIDI](Microintervals)

References :

Contents :

  * [OpenMusic Documentation](OM-Documentation)
  * [OM User Manual](OM-User-Manual)
    * [Introduction](00-Contents)
    * [System Configuration and Installation](Installation)
    * [Going Through an OM Session](Goingthrough)
    * [The OM Environment](Environment)
    * [Visual Programming I](BasicVisualProgramming)
    * [Visual Programming II](AdvancedVisualProgramming)
    * [Basic Tools](BasicObjects)
    * [Score Objects](ScoreObjects)
    * [Maquettes](Maquettes)
    * [Sheet](Sheet)
    * [MIDI](MIDI)
      * [Introduction](Intro)
      * Important MIDI Concepts
      * [Rendering and Playback](MIDI-Playback)
      * [MIDI Objects](MIDI-Objects)
    * [Audio](Audio)
    * [SDIF](SDIF)
    * [Lisp Programming](Lisp)
    * [Errors and Problems](errors)
  * [OpenMusic QuickStart](QuickStart-Chapters)

Navigation : [Previous](Intro "page précédente\(Introduction\)") |
[Next](MIDI-Playback "Next\(Rendering and Playback\)")

