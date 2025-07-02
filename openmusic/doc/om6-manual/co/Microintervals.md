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
</span><span class="stkSel_yes"><span>Microintervals</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](MIDI-Ports.md "page précédente(Managing MIDI Ports)")<span class="hidden">
| </span>[<span>page
suivante</span>](Record%20MIDI.md "page suivante(Recording / MIDI In)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Playing Microintervals with MIDI</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

The MIDI pitch unit correspond to 1 semi-tone, so microintervals, in
principle, are not handled by this format.

In OM however, pitches are expressed in **midicents**, which corresponds
to MIDI pitch \* 100.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Writing Microintervals</span>

</div>

<div class="linkUL">

  - [<span>Microintervals Notation</span>](Editor-Microintervals.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="txt">

Two possibilities exist to play microintervals in OM :

</div>

</div>

<div class="part">

## <span>Using MidiShare (The Default MIDI Player)</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

When playing microintervals, OpebnMusic uses a "trick" consisting in
dispatching the notes on different MIDI channels depending on their
micro-intervallic pitch.

  - 1/8 tones are sent to channel \#2

  - 1/4 tones are sent to channel \#3

  - 3/8 tones are sent to channel \#4

As a consequence, you just need to "depitch" the corresponding channels
to the right values in order to obtain the right microintervalling
rendering.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Modifying Pitches in MIDI : PitchBend</span>

</div>

<div class="linkUL">

  - [<span>Important MIDI Concepts</span>](MIDI-Concepts.md)

</div>

</div>

</div>

<div class="bloc warning">

<div class="bloc_ti warning_ti">

<span>Limitations of the Microintervals Playback</span>

</div>

<div class="txt">

1\) This techniques works **ONLY** for 1/4 and 1/8th tones (other or
smaller microintervals are not considered)

</div>

<div class="txt">

2\) MIDI channels must not be set or used for other purposes : they will
be changed automatically by the OM player, so all the notes should
initially be on channel 1.

</div>

</div>

<div class="bloc tip">

<div class="bloc_ti tip_ti">

<span>Setting the MIDI Channels for Microintervals</span>

</div>

<div class="txt">

In order to play 1/ or 1/8th tones in OM, channels 1, 2 and 3 must be
depitched :

  - Channel 2 of 1/8 tone

  - Channel 3 of 2/8 tones (or 1/4 tone)

  - Channel 4 of 3/8 tones

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Channel 1</span>

</div>

<div class="txt">

Channel 1 does not need to be modified since 1/2 tones only will be kept
on this channel.

</div>

</div>

<div class="bloc tip">

<div class="bloc_ti tip_ti">

<span>Procedure</span>

</div>

<div class="txt">

The **pitchbend** and **pitchwheel** functions can be use to set the
pitch of the "microintervallic channels".

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>PitchBend/PitchWheel : MIDI-Send boxes</span>

</div>

<div class="linkUL">

  - [<span>MIDI Player Controls</span>](MIDI-Controls.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Depitching with PitchWheel</span>

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
<p>The <strong>pitchweel</strong> function has more precision than pitchbend (this is the main difference between the two functions).</p>
<p>The value range for the pitchwheel are 0 - 8192, which usually correspond to 1 tone pitch deviation.</p>
<p>As a consequence, 1/8th tone corresponds to pitchwheel = 1024, 2/8th tones = 2048, and 3/8th tones = 3072.</p>
<p>These values must be assigned respectively to channels 2, 3 and 4.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/pitchwheel-microtones.png" width="214" height="120" alt="pitchwheel-microtones.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

At evaluating the **pitchwheel** box, the MIDI channels will be
modified and subsequent MIDI playback will render miucrotones
accordingly.

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Reset</span>

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
<p>To reset the pitchbend values pitchweel again with values = 0 for every channel:</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/pitchweel1.png" width="189" height="108" alt="pitchweel1.png" />
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

## <span>Using Another Player</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The MicroPlayer allows to play MIDI objects with no microintervallic
restriction.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Changing the Player / About MicroPlayer</span>

</div>

<div class="linkUL">

  - [<span>Score Players</span>](ScorePlayer.md)

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
              - [<span>MIDI Player Controls</span>](MIDI-Controls.md)
              - [<span>MIDI Selection Tools</span>](MIDI-Utils.md)
              - [<span>Managing MIDI Ports</span>](MIDI-Ports.md)
              - <span id="i2" class="outLeftSel_yes"><span>Microintervals</span></span>
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
précédente</span>](MIDI-Ports.md "page précédente(Managing MIDI Ports)")<span class="hidden">
| </span>[<span>page
suivante</span>](Record%20MIDI.md "page suivante(Recording / MIDI In)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
