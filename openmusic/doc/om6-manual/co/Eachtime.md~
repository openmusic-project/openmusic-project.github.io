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
\> </span><span class="stkSel_yes"><span>EachTime</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Finally.md "page précédente(Finally)")<span class="hidden">
| </span>[<span>page suivante</span>](Initdo.md "page suivante(Initdo)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Executing Operations : EachTime</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

<span class="iconButton_tim">![eachtime\_icon.png](../res/eachtime_icon.png)</span>
**EachTime** **triggers successive evaluations** inside the OMLoop. It
is not visible from the outside.

EachTime can apply to any type of operation, but the results won't be
returned to other boxes or displayed, unless the user adds relevant
connections.

</div>

</div>

<div class="part">

## <span>Inputs</span>

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
<img src="../res/optionaleachtime.png" width="129" height="84" alt="optionaleachtime.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>﻿EachTime has one default input, and can be added a number of optional inputs. Each input <strong>calls upstream boxes</strong>, so that several tasks can be performed at each step of the iteration.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Uses</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Producing, Displaying and Returning Results</span>

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
<p>Even if an EachTime evaluator is used, <strong>the result of Finally alone</strong> is displayed by the Listener. Yet, EachTime plays a very important part in an iteration, since it is the only means to evaluate and keep track of the results yielded at each step of the program. This is one of the main specificities and interests of OMLoop.</p>
<p>The results of the operations called by EachTime can actually be displayed and returned to other boxes, inside and outside the OMLoop module . For instance, these results can be collected and returned to Finally with accumulators, or displayed by the Listener with a print box.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/eachtime-ex1.png" width="288" height="224" alt="EachTime has evaluated each step of the loop." />
</div>
<div class="caption_ti">
EachTime has evaluated each step of the loop.
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Example 1 : Checking an Iteration Process</span>

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
<p>To check what happens during the iteraion, a print box is evaluated at each step. </p>
<ol>
<li><p>When listloop returns an item in the (A B C D) list, EachTime evaluates print.</p></li>
<li><p>The current value of listloop is printed.</p></li>
<li><p>At the end of the list, finally returns the last value of listloop.</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/eachtime-ex2.png" width="263" height="201" alt="eachtime-ex2.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Example 2 : Collecting the Results of EachTime</span>

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
<img src="../res/collecteachtime.png" width="300" height="258" alt="collecteachtime.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The results of each loop of the iteration can be gathered in a list and returned to other boxes outside the module with <strong>collect</strong> , an accumulator.</p>
<p>Collect stores the results of each loop in a list.</p>
<ol>
<li><p>At each step, EachTime calls :</p>
<ul>
<li><span> print, which print the item returned by listloop</span></li>
<li><span> collect, which stores a new value. </span></li>
</ul></li>
<li><p>At the end, Finally gets all the collected values and returns them as the result of the OMLoop.</p></li>
</ol>
<p>Note  : the editable-text-box displays the value of the OMLoop output.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Loop Accumulators</span>

</div>

<div class="linkUL">

  - [<span>Accumulators</span>](LoopAccumulators.md)

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
              - [<span>Iteration</span>](LoopIntro.md)
              - [<span>General Features</span>](LoopGeneral.md)
              - [<span>Evaluators</span>](LoopEvaluators.md)
                  - [<span>Finally</span>](Finally.md)
                  - <span id="i2" class="outLeftSel_yes"><span>EachTime</span></span>
                  - [<span>Initdo</span>](Initdo.md)
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
précédente</span>](Finally.md "page précédente(Finally)")<span class="hidden">
| </span>[<span>page suivante</span>](Initdo.md "page suivante(Initdo)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
