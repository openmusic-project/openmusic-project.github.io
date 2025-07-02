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
</span><span class="stkSel_yes"><span>MIDI
Parameters</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](MIDI-Playback.md "page précédente(Rendering and Playback)")<span class="hidden">
| </span>[<span>page
suivante</span>](MIDI-Controls.md "page suivante(MIDI Player Controls)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>MIDI Parameters in OM Score Objects</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="infobloc_ti">

<span>MIDI Channel</span>

</div>

<div class="txt">

Midi notes and events are played on a **channel**, numbered from 1 to
16.

Each channel can be assigned a timbre – in MIDI, this timbre is called a
"program" – as well as a volume, pan, pitchbend and other effects.

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
<p>In OM objects, the MIDI channel is controlled via "chan" or "lchan" slots.</p>
<p>Each note has its own MIDI channel.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/inputMIDIchannel.png" width="278" height="138" alt="inputMIDIchannel.png" />
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
<p>To display the channel(s) in a score editor, select the <code class="menuPath_tl">channel</code> item of the editor control menu.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/midichannels.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/midichannels_1.png" width="246" height="300" alt="Visualizing MIDI channels : Here, every note is on channel 1" /></a>
</div>
<div class="caption_ti">
Visualizing MIDI channels : Here, every note is on channel 1
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

The MIDI channel can then be set note by note or for the whole object.

  - Use the corresponding inlet of the box : enter a list with one or
    several channels. (Remember that if the list in incomplete, the last
    item will be repeated and assigned to the remaining notes.)

  - Use the editor control menu or the score inspector :
    
    1.  choose the `channel` menu item in the menu
    
    2.  select one or several notes
    
    3.  enter a number or scroll the mouse in the adjacent text box.

</div>

<div class="caption">

<div class="caption_co">

![assignmidichannel1.png](../res/assignmidichannel1.png)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>MIDI "Tracks"</span>

</div>

<div class="txt">

In addition to the channels, MIDI also has a notion of tracks (as used
by most common multitrack sequencers). In OM, we consider each voice in
a POLY or MULTI-SEQ object as a different track when playing these
objects in MIDI. This is not the same thing as if they were on different
channels : a track can include events (notes) corresponding to several
diferent channels, and conversely, several tracks can play notes or
events on the same channel.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>MIDI Ports</span>

</div>

<div class="txt">

MIDI communication messages can be sent to different MIDI **ports**.

Depending on the MIDI port setting, a port can be connected to one or
several specific synthesizer(s) who will receive exclusively messages
sent on this port.

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
<p>The <strong>MIDI port</strong> parameter is not represented in the inputs of the box, but can be set and changed in the score editors.</p>
<p>To change the port number of one or several notes :</p>
<ol>
<li><p>select the <code class="menuPath_tl">port</code> menu item in the editor control menu</p></li>
<li><p>proceed as described above with the channel parameter</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/ports.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/ports_1.png" width="300" height="206" alt="The MIDI port can be modified in score editors, like the channel parameter." /></a>
</div>
<div class="caption_ti">
The MIDI port can be modified in score editors, like the channel parameter.
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>MIDI Ports Setup and Assignation</span>

</div>

<div class="linkUL">

  - [<span>Managing MIDI Ports</span>](MIDI-Ports.md)

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
              - <span id="i0" class="outLeftSel_yes"><span>MIDI
                Parameters</span></span>
              - [<span>MIDI Player Controls</span>](MIDI-Controls.md)
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
précédente</span>](MIDI-Playback.md "page précédente(Rendering and Playback)")<span class="hidden">
| </span>[<span>page
suivante</span>](MIDI-Controls.md "page suivante(MIDI Player Controls)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
