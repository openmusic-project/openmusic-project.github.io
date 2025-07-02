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
</span>[<span>Interface
Boxes</span>](InterfaceBoxes.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Check Box</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](TextBoxes.md "page précédente(Text Boxes)")<span class="hidden">
| </span>[<span>page
suivante</span>](ListBoxes.md "page suivante(List Boxes)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Controlling Operations : the Check Box</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

The **check-box** object resembles a
[<span>predicate</span>](Predicates.md). If the box is checked, it
returns "true". If not, it returns "nil". Hence, it can be used as a
"switch on / off condition" for the execution of programs. It must be
associated with **conditional boxes** that will call the programs.

</div>

</div>

<div class="part">

## <span>Features</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Inputs and Outputs</span>

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
<img src="../res/check.png" width="153" height="80" alt="check.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The check-box object has one input and one output :</p>
<ul>
<li><p>"text" : a statement</p></li>
<li><p>the output returns "t" or "nil" depending on <strong>if the box is checked</strong> or not.</p></li>
</ul>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Editing the Statement</span>

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
<p>To change the box's statement :</p>
<ol>
<li><p>click or <code class="keyboard_tl">SHIFT</code> click on the first input to edit it and validate,</p></li>
<li><p>select the box again,</p></li>
<li><p>evaluate the box.</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/check-text.png" width="246" height="84" alt="check-text.png" />
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

## <span>Use</span>

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
<p>Wherever the box is clicked, it is successively checked or unchecked. Depending on its state, the box output returns "t" or "nil".</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/check-box-ex.png" width="275" height="172" alt="In the first case, the OMIF box returns the second argument, because the checkbox returns &quot;nil&quot;. In the second case, it returns the first argument, because the checkbox returns &quot;t&quot;." />
</div>
<div class="caption_ti">
In the first case, the OMIF box returns the second argument, because the checkbox returns "nil". In the second case, it returns the first argument, because the checkbox returns "t".
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Using Conditions in a Program</span>

</div>

<div class="linkUL">

  - [<span>Conditional Operators</span>](ConditionalOps.md)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>For a More than Two Options</span>

</div>

<div class="linkUL">

  - [<span>Selection : List Boxes</span>](ListBoxes.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>A Musical Application : an Extended Example</span>

<div class="part_co">

<div class="infobloc">

<div class="linkSet">

<div class="linkSet_ti">

<span>Building a Triad with an Item-List-Box, a Button-Box, and a Check
Box</span>

</div>

<div class="linkUL">

  - [<span>Using the Interface Boxes :
    Example</span>](InterfaceExample.md)

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
          - [<span>Abstraction</span>](Abstraction.md)
          - [<span>Evaluation Modes</span>](EvalModes.md)
          - [<span>Higher-Order Functions</span>](HighOrder.md)
          - [<span>Control Structures</span>](Control.md)
          - [<span>Iterations: OMLoop</span>](OMLoop.md)
          - [<span>Instances</span>](Instances.md)
          - [<span>Interface Boxes</span>](InterfaceBoxes.md)
              - [<span>General Features</span>](GeneralFeatures.md)
              - [<span>Text Boxes</span>](TextBoxes.md)
              - <span id="i3" class="outLeftSel_yes"><span>Check
                Box</span></span>
              - [<span>List Boxes</span>](ListBoxes.md)
              - [<span>Button</span>](Button.md)
              - [<span>Slider Box</span>](Slider.md)
              - [<span>Pop-Up Menu Box</span>](MenuBoxes.md)
              - [<span>Examples of Use</span>](InterfaceExample.md)
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
précédente</span>](TextBoxes.md "page précédente(Text Boxes)")<span class="hidden">
| </span>[<span>page
suivante</span>](ListBoxes.md "page suivante(List Boxes)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
