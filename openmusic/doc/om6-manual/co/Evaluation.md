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
</span>[<span>Visual Programming
I</span>](BasicVisualProgramming.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Evaluation</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Connections.md "page précédente(Connections)")<span class="hidden">
| </span>[<span>page
suivante</span>](DocAndInfo.md "page suivante(Documentation and Info)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Evaluation</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

Evaluating a box means calling its inner function and parameters. If
this box is connected to others, all the upstream boxes will be
evaluated one by one. Thus, evaluating one box can trigger a more or
less lengthy evaluation chain. This chain refers to the calculus of a
function tree, or, in other words, of the visual program.

</div>

</div>

<div class="part">

## <span>Evaluating Boxes and Outlets</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Shortcuts</span>

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
<img src="../res/evaluation.png" width="281" height="133" alt="evaluation.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<ul>
<li><p>To evaluate a box, select it and press <code class="keyboard_tl">v</code>.</p>
<p>The result of the leftmost output is displayed in the Listener.</p></li>
<li><p>To evaluate a specific output of a box, <code class="keyboard_tl">Cmd</code> click on the outlet.</p>
<p>The corresponding value is displayed in the Listener.</p></li>
</ul>
<p>In any case, the whole box, that is all of its outputs, are computed during the evaluation.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Reminder : Listener Window</span>

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
<p>The Listener window displays the different messages and the results of evaluations.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/patchandlistener.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/patchandlistener_1.png" width="144" height="300" alt="patchandlistener_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Computation Flow : Left-Right, Bottom-Up</span>

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
<p>In a program, a box evaluates all boxes connected to its inputs, and evaluates its inputs <strong>from left to right</strong> .</p>
<p>Therefore, the evaluation of a patch always goes <strong>bottom-top and left right</strong> , graphically speaking.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/downtop.png" width="101" height="165" alt="downtop.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

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
<img src="../res/defin.png" width="220" height="105" alt="defin.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Box inlets generally have a default value. This is why a box can often be evaluated even if part or the totality of its inlets are not connected to other boxes. Default values can be visualized by hovering the mouse over an inlet.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Box Inputs</span>

</div>

<div class="linkUL">

  - [<span>Box Inputs</span>](BoxInputs.md)

</div>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Reinitializing box contents</span>

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
<p>To reset the content of a box to its default value, press <code class="keyboard_tl">SHIFT</code> + <code class="keyboard_tl">i</code>.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/reinitialize-box.png" width="147" height="82" alt="The same chord, before and after it was reinitialized." />
</div>
<div class="caption_ti">
The same chord, before and after it was reinitialized.
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Listener Window</span>

</div>

<div class="linkUL">

  - [<span>Windows of the OM Environment</span>](MainWindows.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Locking / Unlocking a Box</span>

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
<td><div class="caption">
<div class="caption_co">
<img src="../res/lockedboxes.png" width="201" height="187" alt="Locked boxes : the values of the locked boxes are fixed and do not depend on the box inputs anymore." />
</div>
<div class="caption_ti">
Locked boxes : the values of the locked boxes are fixed and do not depend on the box inputs anymore.
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>To lock a box, select it and press <code class="keyboard_tl">b</code> . A small <span class="iconButton_tim"><img src="../res/cross_icon.png" class="sfile_icon-png_icon-gif_icon" width="12" height="12" alt="cross_icon.png" /></span> icon appears on the upper left corner of the box icon.</p>
<ul>
<li><span>The last computed value will kept as a definitive value for this box. </span></li>
<li><span>The input values of this box, as well as the possible elements connected to these inputs will be ignored at a subsequent evaluation.</span></li>
</ul>
<p>To unlock the box, press <code class="keyboard_tl">b</code> again.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Evaluation Modes</span>

</div>

<div class="txt">

Several other evaluation modes can be used for controlling the
transmission of resulting data in a program, or to perform specific
tasks.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Evaluation Modes :</span>

</div>

<div class="linkUL">

  - [<span>Evaluation Modes</span>](EvalModes.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Evaluation Control</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Evaluation process</span>

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
<p>The <code class="textCheckBox_tl">enable evaluation process</code> option in the OM preferences allows to trigger evaluations on a specific process separated from the user interface. The user can therefore keep on using the interface during evaluations. During an evaluation, the other evaluations are queued and performed successively after the current one terminates.</p>
<p>This option also enables <strong>to stop ongoing computations</strong> can via the "Abort" command (see below).</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/evaluation-prefs.png" width="291" height="205" alt="evaluation-prefs.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Aborting Evaluations</span>

</div>

<div class="txt">

When the `enable evaluation process` option is selected, it is possible
to abort evaluations :

1.  Select the Listener window

2.  Abort using the `Lisp / Abort` menu or the shortcut `Cmd` + `a`.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Error handling</span>

</div>

<div class="txt">

The `handle error messages` option in the OM preferenxes allows, to some
extent, to limit the consequences of possible programming errors and
prevent OM from crashing. If an error occurs, a message is displayed in
a pop up window.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Errors in OM</span>

</div>

<div class="linkUL">

  - [<span>Errors and Problems</span>](errors.md)

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
          - [<span>Patch Introduction</span>](ProgrammingIntro.md)
          - [<span>Adding Boxes Into a Patch</span>](AddingBoxes.md)
          - [<span>Elementary Manipulations</span>](ElementaryManips.md)
          - [<span>Boxes</span>](Boxes.md)
          - [<span>Box Inputs</span>](BoxInputs.md)
          - [<span>Connections</span>](Connections.md)
          - <span id="i3" class="outLeftSel_yes"><span>Evaluation</span></span>
          - [<span>Documentation and Info</span>](DocAndInfo.md)
          - [<span>Comments</span>](Comments.md)
          - [<span>Pictures</span>](Pictures.md)
          - [<span>Saving / Reloading a Patch</span>](SavingPatch.md)
          - [<span>Dead Boxes</span>](DeadBox.md)
      - [<span>Visual Programming
        II</span>](AdvancedVisualProgramming.md)
      - [<span>Basic Tools</span>](BasicObjects.md)
      - [<span>Score Objects</span>](ScoreObjects.md)
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
précédente</span>](Connections.md "page précédente(Connections)")<span class="hidden">
| </span>[<span>page
suivante</span>](DocAndInfo.md "page suivante(Documentation and Info)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
