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
</span><span class="stkSel_yes"><span>Managing MIDI
Ports</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](MIDI-Utils.md "page précédente(MIDI Selection Tools)")<span class="hidden">
| </span>[<span>page
suivante</span>](Microintervals.md "page suivante(Microintervals)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Managing MIDI Ports</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

The MIDI port selection determines how MIDI events are directed to one
or several synthesizers.

This can be configured at several levels.

</div>

</div>

<div class="part">

## <span>Default MIDI Ports</span>

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
<p>In the OM <code class="textTab_tl">MIDI</code> Preferences tab, the default <strong>IN</strong> and <strong>OUT</strong> ports allow to set a default port where MIDI events are sent if no other port is specified explicitely.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/MIDI-prefs.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/MIDI-prefs_1.png" width="300" height="115" alt="MIDI-prefs_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

The `Set MIDI Ports` button allows to set the different MIDI ports to
the devices connected (and detected) on the computer (see below).

</div>

</div>

</div>

</div>

<div class="part">

## <span>MIDI Port Setting for Score Objects</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

In the score objects, it is possible to assign a MIDI Port to each
individual note. A global behavior for the object can however be
controlled.

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
<ul>
<li><p><strong>Notes MIDI port</strong> : this option just respects the port assigned to the different notes (or use the default MIDI Port from the preferences if no port is specified).</p></li>
<li><p><strong>Set global port</strong> : this option allows you to set a single port to apply to the whole object, whatever the note ports are</p></li>
<li><p><strong>Default MIDI port </strong>: this option uses the MIDI port specified in the OM Preferences.</p></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/midi.png" width="295" height="171" alt="midi.png" />
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
<td><div class="caption">
<div class="caption_co">
<img src="../res/selectmidi.png" width="192" height="32" alt="selectmidi.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>These options are available at selecting the MidiShare player for a given box (in a patch or in a maquette) or in the score editors via the <code class="textButton_tl">...</code> button next to the player selection menu.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

</div>

</div>

<div class="part">

## <span>MidiShare Setup</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>OM MIDI Preferences</span>

</div>

<div class="txt">

MidiShare is OM's default MIDI player. The input / output connections to
the various devices of the system are defined in the OM `MIDI`
preferences tab via the `Set MIDI Ports` button.

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
<p>By default, port #0 is the only input and output connection to the system's MIDI inbuilt synthesizer (when available).</p>
<p>The notes in the score objects (if directed to port 0) are therefore sent to this synthesizer.</p>
<p>To change the input/output devices connected to a given port, select the corresponding cell in the <code class="label_tl">MIDI Ports</code> table and then check/uncheck the desired items in the <code class="label_tl">Input Devices</code> and <code class="label_tl">Output Devices</code> lists.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/ms-settings.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/ms-settings_1.png" width="300" height="157" alt="ms-settings_1.png" /></a>
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
              - [<span>MIDI Parameters</span>](MIDI-Params.md)
              - [<span>MIDI Player Controls</span>](MIDI-Controls.md)
              - [<span>MIDI Selection Tools</span>](MIDI-Utils.md)
              - <span id="i3" class="outLeftSel_yes"><span>Managing MIDI
                Ports</span></span>
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
précédente</span>](MIDI-Utils.md "page précédente(MIDI Selection Tools)")<span class="hidden">
| </span>[<span>page
suivante</span>](Microintervals.md "page suivante(Microintervals)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
