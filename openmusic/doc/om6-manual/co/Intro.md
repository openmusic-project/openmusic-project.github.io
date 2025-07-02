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
</span><span class="stkSel_yes"><span>Introduction</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](MIDI.md "page précédente(MIDI)")<span class="hidden">
| </span>[<span>page
suivante</span>](MIDI-Concepts.md "page suivante(Important MIDI Concepts)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Introduction to MIDI in OpenMusic</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>The MIDI Protocol</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

MIDI stands for Musical Instrument Digital Interface. It is a music
industry standard **communication protocol** that lets MIDI instruments,
sequencers, computers and other electronic equipment to synchronize and
communicate with each other in order to play and record music. MIDI
**does not transmit any audio signal**: It can be considered as a set of
musical **command messages** (note on/off, volume or other effect
control, clock signals, etc.), which electronic instruments send to
control each other.

MIDI data are commonly stored and interchanged in files following the
MIDI Standard Format.

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>About MIDI</span>

</div>

<div class="txt">

[<span>http://www.midi.org/aboutmidi/</span>](http://www.midi.org/aboutmidi/ "http://www.midi.org/aboutmidi/ (nouvelle fenêtre)")

</div>

</div>

</div>

</div>

<div class="part">

## <span>MIDI in OpenMusic</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>The MidiShare Library</span>

</div>

<div class="txt">

In OpenMusic, musical objects are played or recorded with MIDI using the
**MidiShare library**. In a basic configuration, MIDI messages are sent
by OpenMusic via MidiShare to the default built-in MIDI device of the
computer. However, other MIDI instruments, such as synthesizers,
expanders, samplers can be connected to the application – see
[<span>MIDI ports setup</span>](MIDI-Ports.md)).

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>About MIDIShare</span>

</div>

<div class="txt">

[<span>http://midishare.sourceforge.net/</span>](http://midishare.sourceforge.net/ "http://midishare.sourceforge.net/ (nouvelle fenêtre)")

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>The OpenMusic MIDI Tools</span>

</div>

<div class="txt">

The MIDI classes and functions allow the control of the communication
between OpenMusic and MIDI instruments or applications from OM patches.

It includes MIDI data analysis, filter, conversion tools.

All MIDI items are accessed via the `Classes - Functions / MIDI` menu.

</div>

<div class="caption">

<div class="caption_co">

![midimenus.png](../res/midimenus.png)

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
          - <span id="i2" class="outLeftSel_yes"><span>Introduction</span></span>
          - [<span>Important MIDI Concepts</span>](MIDI-Concepts.md)
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
précédente</span>](MIDI.md "page précédente(MIDI)")<span class="hidden">
| </span>[<span>page
suivante</span>](MIDI-Concepts.md "page suivante(Important MIDI Concepts)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
