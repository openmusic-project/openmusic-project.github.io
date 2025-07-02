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
</span>[<span>Rendering and
Playback</span>](MIDI-Playback.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>MIDI Player
Controls</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](MIDI-Params.md "page précédente(MIDI Parameters)")<span class="hidden">
| </span>[<span>page
suivante</span>](MIDI-Utils.md "page suivante(MIDI Selection Tools)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>MIDI Player Controls</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

In addition to playing notes, several other types of playback control
commands can be sent to a MIDI synthesizer. For instance : changing the
timbre (or "program") for a given channel, changing the volume, etc.

All such MIDI control events are also generally sent for a specific
channel. There exist several ways to send them in OM.

</div>

</div>

<div class="part">

## <span>The "MIDI Send" Boxes</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The functions of the `MIDI/MIDI Send` menu send events to the MIDI
player when they are evaluated.

Typically, such evaluation will modify the state of the MIDI devices or
synthesizers connected to a given port (and often for a given channel).

</div>

<div class="caption">

<div class="caption_co">

![send-functions.png](../res/send-functions.png)

</div>

</div>

<div class="txt">

One of the input of the "MIDI Send" boxes is the MIDI channel (or list
of channels) on which the event will be sent.

Another optionnal input is the MIDI port. If no port is specified, the
event are sent to the default MIDI port.

</div>

<div class="txt">

  - **midi-o** : General output function. Sends raw input data to a
    given port.

  - **pitchbend**/**pitchwheel** : Send PitchBend events (Change tuning
    of MIDI instrument)
    
      - Pitchweel use 14 bits precision (-8192 to 8191) ;
    
      - PitchBend use 7 bits precision (-64 to 63)

<!-- end list -->

  - **ctrlchg** : Sends control change events.
    
    Parameters of a Control Change event are a controller number and a
    value (0-127). For example (10 64) stands for "set controller 10
    (pan) to 64 (middle)".

<!-- end list -->

  - **volume** : Sends volume event with a volume value.
    
    Note : volume is a particular Control Change event (controller
    number 7)

<!-- end list -->

  - **pgmout** : Sends Program Change events with a program number (0 -
    127)
    
    Used to set instrumental timbre to be applyed to the different MIDI
    channels.

<!-- end list -->

  - **aftertouch** : sends a channel pressure event with pressure value.

  - **polykeypres** : sends a key pressure event with pressure and pitch
    values.

  - **sysex** : Sends a system exclusive message.

  - **midi-reset** : Resets default MIDI settings

</div>

</div>

<div class="bloc tip">

<div class="bloc_ti tip_ti">

<span>Selecting Values for MIDI Events</span>

</div>

<div class="txt">

The "selection" utilities provided in OM may make the use of the "MIDI
Send" boxes easier...

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>MIDI Select Utilities</span>

</div>

<div class="linkUL">

  - [<span>MIDI Selection Tools</span>](MIDI-Utils.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>The Midi-Mix-Console</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The **MIDI-MIX-CONSOLE** is a special object allowing to send control
messages to MIDI channels through a graphic editor similar to a standard
multi-channel mixing console.

Messages can be sent to control, for instance, the volume, pan,
instrument (timbre), pitch bend or any other MIDI control, for a given
number of channels.

</div>

<div class="caption">

<div class="caption_co">

[![controller\_1.png](../res/controller_1.png)](../res/controller.png "Cliquez pour agrandir")

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>The MIDI-MIX-CONSOLE Box</span>

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
<p>The MIDI-MIX-CONSOLE object has two main insitialization parameters :</p>
<ul>
<li><span>A port number (where all MIDI events will be sent)</span></li>
</ul>
<ul>
<li><span>A number of channels controlled by the console.</span></li>
</ul>
<p>Specific control and messages is done exclusively via the graphical interface.</p>
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

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Sending controls</span>

</div>

<div class="txt">

Every move or manipulation in the MIDI-MIX-CONSOLE interface immediately
triggers MIDI messages.

Alternatively, the MIDI-MIX-CONSOLE can be considered as a "standard"
musical object , and therefore be "played" using the standard playback
controls in the patch or maquette editors (see below).

</div>

</div>

</div>

</div>

<div class="part">

## <span>Playing MIDI Objects</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

All MIDI objects created in OM can be "played". Playing these objects
will not necessarily sound, but yet sends corresponding MIDI events and
therefore possibly modifies some (sounding or not) MIDI parameters.

Playing an object occurs in the patches using playback shortcuts, or in
the maquettes when the playing cursor reaches a given object.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>More about MIDI Objects</span>

</div>

<div class="linkUL">

  - [<span>MIDI Objects</span>](MIDI-Objects.md)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>How to "Play" the Boxes</span>

</div>

<div class="linkUL">

  - [<span>Playback and Players</span>](1-Play.md)

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
          - [<span>Important MIDI Concepts</span>](MIDI-Concepts.md)
          - [<span>Rendering and Playback</span>](MIDI-Playback.md)
              - [<span>MIDI Parameters</span>](MIDI-Params.md)
              - <span id="i3" class="outLeftSel_yes"><span>MIDI Player
                Controls</span></span>
              - [<span>MIDI Selection Tools</span>](MIDI-Utils.md)
              - [<span>Managing MIDI Ports</span>](MIDI-Ports.md)
              - [<span>Microintervals</span>](Microintervals.md)
              - [<span>Recording / MIDI In</span>](Record%20MIDI.md)
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
précédente</span>](MIDI-Params.md "page précédente(MIDI Parameters)")<span class="hidden">
| </span>[<span>page
suivante</span>](MIDI-Utils.md "page suivante(MIDI Selection Tools)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
