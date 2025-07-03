
The MIDI containers are objects constituted of a set of simultaneous or
sequencial MIDI events representing intermediate-level musical objects.

General Properties of MIDI Containers

All these objects can be played and processed as musical object.

The list of MIDIEvents can be extracted (and possibly filtered) using **get-
MidiEvents**.

## MIDI Events Sequences : EventMidi-seq

![](../res/eventmidi-seq.png)

The **EventMidi-seq** object represents a sequence of MIDI events. Its slots
are lists of the corresponding MidiEvent slots (types, dates, tracks, ports,
channels, fields).

It can store all types of MidiEvents (notes, controllers, etc..) and in this
way can be compared to a buffered version of the MidiFile object. The main
difference is that EventMidi-seq is a not written on hard disk as a file, so
it can be manipulated more easily.

 **EventMidi-seq** will be usefull for temporary storage of filtered or
processed MIDI data.

An **EventMidi-seq** can be constructed by setting its input slots or from a
list of **MidiEvents** , hence from the result of **get-MidiEvents** applyed
to an object.

An equivalent "shortcut" procedure, except if MIDIEvents are to be filtered,
is to connect the objects directly to the first (<self>) slot of the
**EventMIDI-seq**.

About MIDI Event Objects and Extracting/Filtering

  * [MIDI Events](MIDIEvent)

Using EventMIDI-seqs

In this example, MidiEvents are extracted from a MidiFile, and then filtered
to separateand process channels. The resulting sequences are put in a new
EventMidi-seq with a midi-mix-console object to add the initial settings
events to the sequence.

[![](../res/sequences-ex_1.png)](../res/sequences-ex.png "Cliquez pour
agrandir")

 **Note  :** Using the function c **reate-midiseq** , a list of MIDI events or
an object is simply converted into EventMidi-seq, but the second (optional)
input allows to set a name to the newly created sequence. This name will
appear in the EventMidi-seq's miniview.

Events are normally automatically time-sorted in each **EventMidi-seq**
conversion. However, manually created sequences can be sorted using the
**temporal-sort** method.

|

![](../res/temporalsort.png)  
  
---|---  
  
Using EventMIDI-seqs for Score Object Processing

All OpenMusic score objects can be converted into MIDI sequences. Notes,a s
well as tempo, measure markers for voice and poly objects, are converted in
MIDI events. This conversion may allow special treatments (such as filters
with **get-midievents** method, etc.) and operations on MidiEvents.

The function **separate-channels** processes all Events of the EventMidi-seq
and put each channel on a diferent track.

In the following example, we separate notes of different channels in a chord-
seq into diferent multi-seq tracks via MidiEvents processing.

|

![](../res/separatechannels.png)  
  
---|---  
  
![](../res/separatechannels-ex.png)

## MIDI Controllers : MIDIControl / MIDI-Mix-Console

MIDI Controllers send messages changing the state of one or several MIDI
Channels. There exist two main MIDI Controller containers in OM.

About MIDI Control Messages

  * [Important MIDI Concepts](MIDI-Concepts)

MIDIControl

 **MidiControl** is a special case of Midi Sequence representing a single MIDI
**continuous controller** evolution. Such controller can be PitchBend, or any
kind of Control Change. It contains a single event type, a single channel,
port and track, and a list of dates and values.

MidiControl is actually a sub-class of **BPF** controlling a given MIDI
parameter.

|

![](../res/midicontrol.png)  
  
---|---  
  
A List of controllers is proposed as an input menu for the first input
(controller type) of the **MidiControl** box.

Channel, port an track can be numbers or lists : In this case the same
continuous controller (dates/values) applies to all the channels/ports/tracks
of the lists.

Dates/values can be edited with the BPF editor.

BPFs and BPF Editor

  * [2D Objects : BPF / BPC](BPF-BPC)
  * [BPFs and BPCs Editors](BPFEditors)

Using a MIDIControl in a Maquette

The following example shows a Channel Volume controller in a maquette.

![](../res/maqcontrol.png)

About the Maquette

  * [Maquettes](Maquettes)

Continuous Controllers values

Most of the controllers are classical MIDI ControlChange controllers for which
values must be given in 0 - 127 range (7 bits).

(For On/Off switch controllers, value < 64 means "off", and value >= 64 means
"on".)

Some of them (controllers 0 to 31) have a corresponding "Fine" controller (32
to 63) for which values must be set in 0 - 16384 range (14 bits).

The PitchBend controller is value range is -64 to 63, and -8182 to 8191 for
"fine" pitchbend (also called pitchwheel).

Extracting Controllers

A **MidiControl** object can be extracted from Midifile or EventMidi-seq using
the **get-continuous-ctrl** method.

|

![Channel volume controller extracted from a MidiFile](../res/getcontrol.png)

Channel volume controller extracted from a MidiFile  
  
---|---  
  
Resampling a MIDI Controller

The **MidiControl** dates-values BPF can be resampled using **OM-SAMPLE**
method. This function create a new control BPF with a regular given sample
rate.

Resampling and Other Operations of BPF Objects

  * [BPF and BPC Tools](Tools)

MIDI-Mix-Console

MIDI-Mix-Console represents a set of simultaneous MIDI Events set at once to a
given port.

It can be set manually thanks to a multi-channel mixing console interface and
used as MIDI setup storage for playback or creation of MIDI objects.

|

![](../res/controller-Box.png)  
  
---|---  
  
[![](../res/controller_1.png)](../res/controller.png "Cliquez pour agrandir")

More About the MIDI-Mix-Console

  * [MIDI Player Controls](MIDI-Controls)

## Tempo and Metrics

The Tempo-Map Box

 **Tempo-Map** allows the separation of tempo and metric information for works
on quantification and analysis.

It contains a list of tempo changes (date , tempo), and a list of measure
markers (date, MIDI time signature).

|

![](../res/tempomap.png)  
  
---|---  
  
 **Tempo-Map** can be extracted from any type of musical or MIDI containers
(provided it contains tempo or metric information : MidiFile, EventMidi-seq,
Voice, Poly, Measure) using **get-tempomap** method.

|

![](../res/gettempomap.png)  
  
---|---  
  
It can be processed like other MIDI objects (conversions, get-midievents,...)

Improving Quantification

With **Tempo-Map** , Chord-seq to Voice conversion can be improved via the
**cseq+tempo- >voice** method. The tempo and measure informations will be used
to quantify chords.

In this example, notes and tempo map are extracted from a MIDIFile (could be
from a voice, for example). Notes are processed as chord-seq and then re-
written in a voice using the initial tempo and metric informations.

However, tempo information is used with some limits :

  * A MIDI file cannot contain different tempo maps for each track : if a poly with different tempo is saved, all tracks are set to tempo 60.

  * Voice and poly conversions do not (yet ?) accept tempo changes. If a MidiFile with variable tempo is conevrted to a voice, only the first tempo will be taken in account.

|

[![](../res/cs%20tempo_1.png)](../res/cs%20tempo.png "Cliquez pour agrandir")  
  
---|---  
  
References :

Plan :

  * [OpenMusic Documentation](OM-Documentation)
  * [OM 6.6 User Manual](OM-User-Manual)
    * [Introduction](00-Sommaire)
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
      * [Important MIDI Concepts](MIDI-Concepts)
      * [Rendering and Playback](MIDI-Playback)
      * [MIDI Objects](MIDI-Objects)
        * [MIDI File](MIDIFile)
        * [MIDI Events](MIDIEvent)
        * MIDI Containers
    * [Audio](Audio)
    * [SDIF](SDIF)
    * [Lisp Programming](Lisp)
    * [Errors and Problems](errors)
  * [OpenMusic QuickStart](QuickStart-Chapters)

Navigation : [page precedente](MIDIEvent "page précédente\(MIDI
Events\)") | [page suivante](Audio "page suivante\(Audio\)")

