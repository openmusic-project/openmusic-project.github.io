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
</span>[<span>Score
Objects</span>](ScoreObjects.md)<span class="stkSep"> \>
</span>[<span>Score
Editors</span>](ScoreEditors.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Basic Editing</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Editor-Display.md "page précédente(Score Display)")<span class="hidden">
| </span>[<span>page
suivante</span>](Harmonic-Obj-Editor.md "page suivante(Harmonic Objects)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Basic Editing</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

Edition applies to all score objects. The **Palette** offers a set of
edition tools, adapted to each of these objects. The **Editor Control**
is the main edition interface of the editor window. The **Score
Inspector window** also allows a number of editing operations.

</div>

</div>

<div class="part">

## <span>Accessing Parameters</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Selecting the Right Item : the Palette</span>

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
<p>The palette displays a player in its upper part, and edition tools in its lower part.</p>
<p>To edit an item, select the relevant edition tool.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/genpaletteselect.png" width="201" height="68" alt="genpaletteselect.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Inspector Window</span>

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
<p>A non exhaustive set of parameters can be accessed via the <strong>Inspector window</strong> .</p>
<p>The Inspector window appears once an item is selected, and displays related parametric values.</p>
<p>To modify a parameter :</p>
<ul>
<li><span>Select a frame and scroll the mouse up or down to increase or decrease the values. </span></li>
<li><span>Add <code class="keyboard_tl">Cmd</code> to change the value by 10 steps, or <code class="keyboard_tl">SHIFT</code> to change the value by 100 steps.</span></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/selectthenote1.png" width="230" height="212" alt="Editing the pitch of a note." />
</div>
<div class="caption_ti">
Editing the pitch of a note.
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Editor Control Menu and Frame</span>

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
<img src="../res/selectthenote2.png" width="158" height="130" alt="selectthenote2.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The <strong>editor control</strong> allows a thorough edition of each slot, as shown below. It shows one or two menus and an adjacent numeric frame.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Editor Control : Selecting and Editing Slots</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Pitch</span>

</div>

<div class="txt">

There are three ways to change the pitch of a note. In any case, the
`midic` menu item must be previously selected.

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
<li><p>"Manually" :</p>
<p>Select an item and move it with the mouse.</p></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/movenote.png" width="112" height="65" alt="movenote.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

To raise or lower the pitch from the staff, use the `↑` or `↓` keys .

  - <span>Add `Cmd` to transpose the note from a perfect fifth.</span>
  - <span>Add `SHIFT` to transpose the note from an octave.</span>

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
<img src="../res/changepitch1.png" width="153" height="144" alt="changepitch1.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>To change a pitch from the Editor Control Frame, click on the value displayed in the numeric frame and scroll the mouse upwards or downwards.</p>
<ul>
<li><span>Add <code class="keyboard_tl">Cmd</code> to change the value by 100 midicents steps.</span></li>
<li><span>Add <code class="keyboard_tl">SHIFT</code> to change the value by 1000 midicents steps.</span></li>
</ul>
<p>Double click in the frame and type a value.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Velocity – Dynamics</span>

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
<img src="../res/changevel.png" width="139" height="103" alt="changevel.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<ol>
<li><p>Choose <code class="menuPath_tl">Dyn</code> in the editor control. The dynamic is displayed under the note.</p></li>
<li><p>Click on the note and scroll the mouse to increase or decrease the velocity value.</p>
<ul>
<li><span>Add <code class="keyboard_tl">SHIFT</code> to change the value by steps of 10.</span></li>
<li><span>Add <code class="keyboard_tl">Cmd</code> to switch from 0 to 127.</span></li>
</ul></li>
</ol>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Duration</span>

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
<p>Choose <code class="menuPath_tl">Dur</code> in the pop up menu. The duration is expressed by a plain line.</p>
<p>There are two ways to change the duration of a note :</p>
<ul>
<li><p>To Click in the numeric frame and scroll the mouse to increase or decrease the duration value</p></li>
<li><p>Use the <code class="keyboard_tl">←</code> and <code class="keyboard_tl">→</code> keys.</p>
<ul>
<li><span>Add <code class="keyboard_tl">Cmd</code> to change the value by steps of 100 milliseconds.</span></li>
<li><span>Add <code class="keyboard_tl">SHIFT</code> to change the value by steps of 1000 milliseconds.</span></li>
</ul></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/changedur2.png" width="184" height="128" alt="changedur2.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>MidiChannel</span>

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
<img src="../res/showcolorchannel.png" width="156" height="124" alt="showcolorchannel.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The OM midi interface has 16 midi channel.</p>
<ol>
<li><p>Choose <code class="menuPath_tl">Channel</code> in the pop up menu.</p></li>
<li><p>Click in the adjacent frame and scroll the mouse to increase or decrease the duration value.</p>
<p>Add <code class="keyboard_tl">Cmd</code> or <code class="keyboard_tl"> SHIFT</code> to switch from 1 to 16.</p></li>
</ol>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Port</span>

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
<p>You can access 255 audio ports.</p>
<ol>
<li><p>Choose <code class="menuPath_tl">Port</code> in the pop up menu.</p></li>
<li><p>Click in the adjacent frame and scroll the mouse to increase or decrease the duration value.</p>
<ul>
<li><span>Add <code class="keyboard_tl">Cmd</code> to change the value by steps of 100</span></li>
<li><span>Add <code class="keyboard_tl">SHIFT</code> to change the value by steps of 10.</span></li>
</ul></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/changeport.png" width="127" height="121" alt="changeport.png" />
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
          - [<span>Presentation</span>](Score-Objects-Intro.md)
          - [<span>Rhythm Trees</span>](RT.md)
          - [<span>Score Players</span>](ScorePlayer.md)
          - [<span>Score Editors</span>](ScoreEditors.md)
              - [<span>Overview</span>](Editor-Overview.md)
              - [<span>Preferences</span>](Editors-Prefs.md)
              - [<span>Score Display</span>](Editor-Display.md)
              - <span id="i2" class="outLeftSel_yes"><span>Basic
                Editing</span></span>
              - [<span>Harmonic Objects</span>](Harmonic-Obj-Editor.md)
              - [<span>Rhythmic Objects</span>](Editor-Rhythm.md)
              - [<span>Polyphonic Objects</span>](Poly-Multi-Editor.md)
              - [<span>Page Mode</span>](Editor-PageMode.md)
              - [<span>Tonal Display</span>](Editor-Tonality.md)
              - [<span>Microintervals
                Notation</span>](Editor-Microintervals.md)
              - [<span>Play Controls</span>](Editor-Play.md)
          - [<span>Quantification</span>](Quantification.md)
          - [<span>Export / Import</span>](ImportExport.md)
      - [<span>Maquettes</span>](Maquettes.md)
      - [<span>Sheet</span>](Sheet.md)
      - [<span>MIDI</span>](MIDI.md)
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
précédente</span>](Editor-Display.md "page précédente(Score Display)")<span class="hidden">
| </span>[<span>page
suivante</span>](Harmonic-Obj-Editor.md "page suivante(Harmonic Objects)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
