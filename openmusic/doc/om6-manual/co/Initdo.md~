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
</span>[<span>Iterations: OMLoop</span>](OMLoop.md)<span class="stkSep">
\>
</span>[<span>Evaluators</span>](LoopEvaluators.md)<span class="stkSep">
\> </span><span class="stkSel_yes"><span>Initdo</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Eachtime.md "page précédente(EachTime)")<span class="hidden">
| </span>[<span>page
suivante</span>](LoopIterators.md "page suivante(Iterators)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Prior Evaluation(s) : Initdo</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

<span class="iconButton_tim">![finally\_icon.png](../res/finally_icon.png)</span>
This evaluator can execute one or several operations **prior to the
iteration**. It can be added as many optional inputs as necessary.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Optional Intputs</span>

</div>

<div class="linkUL">

  - [<span>Additional Inputs : Optional, Keyword and Rest
    Arguments</span>](AdditionalInputs.md)

</div>

</div>

</div>

<div class="part">

## <span>Adding the Box in the Editor</span>

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
<p>Contrary to EachTime and Finally, Initdo must be added in the editor by the user. To do so, <code class="keyboard_tl">Cmd</code> click, type its name and validate, as for any other box.</p>
<p>Note that there can be only one Initdo box in the editor : the box can be added multiple optional inputs.</p>
<p>Press <code class="keyboard_tl">Alt</code> +<code class="keyboard_tl"> →</code> or <code class="keyboard_tl">←</code> to add or delete an input.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/addinitdo.png" width="135" height="56" alt="addinitdo.png" />
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

## <span>Example : Modifying a List Before an Enumeration</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

We'll send a message and reverse our list before the iteration begins.

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
<img src="../res/initdoexample1.png" width="300" height="265" alt="initdoexample1.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>On the left, Initdo is called internally before the iteration starts. It performs three evaluations :</p>
<ol>
<li><p>Input #1 evaluates a print box, which prints the original list</p></li>
<li><p>Input #2 evaluates another print box, which prints the following message : "let's revers the list".</p></li>
<li><p>Input #3 evaluates the reverse function, which reverses the original list.</p></li>
</ol>
<p>Then, the iteration starts : Listloop enumerates the items of the reversed list returned by reverse . EachTime and Finally return the results of the iteration.</p>
<ol>
<li><p>At each step, EachTime evaluates a print box that prints a an item of the list</p></li>
<li><p>At the end of the iteration, Finally returns the resulting list.</p></li>
</ol>
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
          - [<span>Evaluation Modes</span>](EvalModes.md)
          - [<span>Higher-Order Functions</span>](HighOrder.md)
          - [<span>Control Structures</span>](Control.md)
          - [<span>Iterations: OMLoop</span>](OMLoop.md)
              - [<span>Iteration</span>](LoopIntro.md)
              - [<span>General Features</span>](LoopGeneral.md)
              - [<span>Evaluators</span>](LoopEvaluators.md)
                  - [<span>Finally</span>](Finally.md)
                  - [<span>EachTime</span>](Eachtime.md)
                  - <span id="i2" class="outLeftSel_yes"><span>Initdo</span></span>
              - [<span>Iterators</span>](LoopIterators.md)
              - [<span>Accumulators</span>](LoopAccumulators.md)
              - [<span>Example : A Random Series</span>](LoopExample.md)
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
précédente</span>](Eachtime.md "page précédente(EachTime)")<span class="hidden">
| </span>[<span>page
suivante</span>](LoopIterators.md "page suivante(Iterators)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
