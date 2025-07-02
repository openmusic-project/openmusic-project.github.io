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
</span><span class="stkSel_yes"><span>MIDI Selection
Tools</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](MIDI-Controls.md "page précédente(MIDI Player Controls)")<span class="hidden">
| </span>[<span>page
suivante</span>](MIDI-Ports.md "page suivante(Managing MIDI Ports)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>MIDI Selection Tools</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

In order to make Midi objects and functions easier to set, some
"menu-functions" allow to choose parameters with their standard names
(according to General MIDI specifications) internally converted into
corresponding integer values.

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>About General MIDI</span>

</div>

<div class="txt">

[<span>http://www.midi.org/techspecs/gm.php</span>](http://www.midi.org/techspecs/gm.php "http://www.midi.org/techspecs/gm.php (nouvelle fenêtre)")

</div>

</div>

<div class="infobloc">

<div class="txt">

This functions can be used to parameterize the "MIDI Send" control boxes
or to instanciate MIDI objects in OM patches.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>MIDI Controls</span>

</div>

<div class="linkUL">

  - [<span>MIDI Player Controls</span>](MIDI-Controls.md)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>MIDI Objects in OM</span>

</div>

<div class="linkUL">

  - [<span>MIDI Objects</span>](MIDI-Objects.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="txt">

|                                                                                         |                    |                                                                                                 |
| --------------------------------------------------------------------------------------- | ------------------ | ----------------------------------------------------------------------------------------------- |
| <span class="iconButton_tim">![gmprog\_icon.png](../res/gmprog_icon.png)</span>         | **GM-PROGRAM**     | Selects a MIDI program and returns the corresponding General MIDI program number.               |
| <span class="iconButton_tim">![ctrlchange\_icon.png](../res/ctrlchange_icon.png)</span> | **CONTROL-CHANGE** | Selects a control change and returns the corresponding General MIDI control number.             |
| <span class="iconButton_tim">![gmdrum\_icon.png](../res/gmdrum_icon.png)</span>         | **GM-DRUMNOTE**    | Selects a note and return the corresponding drum element pitch value according to General MIDI. |
| <span class="iconButton_tim">![msevent\_icon.png](../res/msevent_icon.png)</span>       | **MS-EVENT**       | Selects an Event type and returns the corresponding MidiShare event number.                     |

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
<td><div class="caption">
<div class="caption_co">
<a href="../res/selection-ex.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/selection-ex_1.png" width="300" height="122" alt="selection-ex_1.png" /></a>
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>1) GM-PROGRAM is used to select the program number for changing the timbre of channel 1 with PGMOUT.</p>
<p>2) CONTROL-CHANGE is used to select the control number to modify on channel 1 with CTRLCHG</p>
<p>3) GM-DRUMNOTE is used to select the correct pitch to assign to a NOTE object in order to get the desired drum sound (Note that the MIDI channel is 10, which is generally the channel reserved for drums in MIDI synthesizers).</p>
</div></td>
</tr>
</tbody>
</table>

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
              - <span id="i0" class="outLeftSel_yes"><span>MIDI
                Selection Tools</span></span>
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
précédente</span>](MIDI-Controls.md "page précédente(MIDI Player Controls)")<span class="hidden">
| </span>[<span>page
suivante</span>](MIDI-Ports.md "page suivante(Managing MIDI Ports)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
