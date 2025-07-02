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
II</span>](AdvancedVisualProgramming.md)<span class="stkSep"> \>
</span>[<span>Abstraction</span>](Abstraction.md)<span class="stkSep">
\>
</span>[<span>Application</span>](AbsApplication.md)<span class="stkSep">
\> </span><span class="stkSel_yes"><span>Input
Boxes</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](AbsInOuts.md "page précédente(Inputs / Outputs)")<span class="hidden">
| </span>[<span>page
suivante</span>](Recursion.md "page suivante(Recursive Patches)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Input Boxes</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

The inputs of an abstraction are represented inside the patch by green
boxes. When these boxes are assigned default values , the patch can be
evaluated internally and autonomously.

</div>

</div>

<div class="part">

## <span>Editing Inputs</span>

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
<img src="../res/inputedit.png" width="269" height="179" alt="inputedit.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>To edit the inputs of an abstraction, double click on an input box to open its editor.The editor displays :</p>
<ul>
<li><span>the input name,</span></li>
<li><span>an editable <strong>"Documentation"</strong> frame,</span></li>
<li><span>an editable <strong>"Default Value"</strong> frame.</span></li>
</ul>
<p>To edit information :</p>
<ol>
<li><p>enter values and / or a documentation,</p></li>
<li><p>choose <code class="textButton_tl">Apply</code></p></li>
<li><p>close the input box once to validate the default values and documentation.</p></li>
</ol>
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
<p>To display the information :</p>
<ol>
<li><p><code class="keyboard_tl">Ctrl</code> / right click on the patch and choose <code class="menuPath_tl">Update Doc</code>,</p></li>
<li><p>press <code class="keyboard_tl">Cmd</code> while hovering the mouse over the patch.</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/input-update.png" width="210" height="261" alt="input-update.png" />
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

## <span>Using Default Value</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Default values allow to evaluate an internal patch from the inside .

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Using an Instance as a Default Value</span>

</div>

<div class="txt">

The **lower left** frame of the input editor can take an **instance** as
default input value.

To add an instance or a global variable there, drag an instance box from
a patch editor – or from the Globals package to this frame.

</div>

<div class="caption">

<div class="caption_co">

![An instance can be created out of a factory box and dropped, as well
as a global variable, from a patch editor to an input
editor.](../res/dropinstance3.png)

</div>

<div class="caption_ti">

An instance can be created out of a factory box and dropped, as well as
a global variable, from a patch editor to an input editor.

</div>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Reminder</span>

</div>

<div class="txt">

`SHIFT` + `Cmd` click on an outlet to create an instance in a patch
editor.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About Instances and Global Variables :</span>

</div>

<div class="linkUL">

  - [<span>Instance Boxes</span>](InstanceBoxes.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Internal Evaluation</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Default values are designed to test if a patch works with an internal
evaluation.

To evaluate a patch internally, `Cmd` click on the internal output box.

</div>

<div class="caption">

<div class="caption_co">

![evaldef.png](../res/evaldef.png)

</div>

</div>

<div class="txt">

Default values are ineffective as soon as a patch is evaluated from the
outside .

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Note</span>

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
<p>Default values are also ineffective if values are sent to the patch from other boxes.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/evalpatchval.png" width="213" height="178" alt="evalpatchval.png" />
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
          - [<span>Abstraction</span>](Abstraction.md)
              - [<span>Abstraction Boxes</span>](AbsBoxes.md)
              - [<span>Application</span>](AbsApplication.md)
                  - [<span>Inputs / Outputs</span>](AbsInOuts.md)
                  - <span id="i3" class="outLeftSel_yes"><span>Input
                    Boxes</span></span>
              - [<span>Recursive Patches</span>](Recursion.md)
          - [<span>Evaluation Modes</span>](EvalModes.md)
          - [<span>Higher-Order Functions</span>](HighOrder.md)
          - [<span>Control Structures</span>](Control.md)
          - [<span>Iterations: OMLoop</span>](OMLoop.md)
          - [<span>Instances</span>](Instances.md)
          - [<span>Interface Boxes</span>](InterfaceBoxes.md)
          - [<span>Files</span>](Files.md)
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
précédente</span>](AbsInOuts.md "page précédente(Inputs / Outputs)")<span class="hidden">
| </span>[<span>page
suivante</span>](Recursion.md "page suivante(Recursive Patches)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
