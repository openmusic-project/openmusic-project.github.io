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
</span>[<span>Accumulators</span>](LoopAccumulators.md)<span class="stkSep">
\> </span><span class="stkSel_yes"><span>Collect</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](LoopAccumulators.md "page précédente(Accumulators)")<span class="hidden">
| </span>[<span>page suivante</span>](Sum.md "page suivante(Sum)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Collect : Collecting Values</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

**<span class="iconButton_tim">![collect\_icon.png](../res/collect_icon.png)</span>Collect**
is the most basic collector of the OMLoop module. It collects the values
returned to its input in a list.

</div>

</div>

<div class="part">

## <span>Inputs and Outputs</span>

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
<img src="../res/collect-inouts.png" width="182" height="135" alt="collect-inouts.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Collect has one default input and three outputs :</p>
<ul>
<li><p>"what" : collects successive values coming from other boxes</p></li>
<li><p>first output : appends each new value returned to its input, and returns this new element as a list</p></li>
<li><p>second output : returns the list of the collected elements</p></li>
<li><p>third output : resets the collected list to "nil", and returns an empty list.</p></li>
</ul>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Example : Building a Random List of Numbers</span>

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
<p>We want to make a list with seven random numbers between 1 and 100.</p>
<ol>
<li><p>Forloop defines a <strong>number of loops</strong> . The iteration will stop after seven loops.</p></li>
<li><p>Om-random calculates a random number, which is printed at each loop by EachTime and print.</p></li>
<li><p>At each step, the successive elements are collected by collect.</p></li>
<li><p>After seven loops, the iteration is stopped by forloop.</p></li>
<li><p>When the iteration stops, Finally returns the list of the numbers collected by collect.</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/collect-ex.png" width="298" height="260" alt="collect-ex.png" />
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
          - [<span>Evaluation Modes</span>](EvalModes.md)
          - [<span>Higher-Order Functions</span>](HighOrder.md)
          - [<span>Control Structures</span>](Control.md)
          - [<span>Iterations: OMLoop</span>](OMLoop.md)
              - [<span>Iteration</span>](LoopIntro.md)
              - [<span>General Features</span>](LoopGeneral.md)
              - [<span>Evaluators</span>](LoopEvaluators.md)
              - [<span>Iterators</span>](LoopIterators.md)
              - [<span>Accumulators</span>](LoopAccumulators.md)
                  - <span id="i2" class="outLeftSel_yes"><span>Collect</span></span>
                  - [<span>Sum</span>](Sum.md)
                  - [<span>Min / Max</span>](MinMax.md)
                  - [<span>Count</span>](Count.md)
                  - [<span>Acum</span>](Acum.md)
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
précédente</span>](LoopAccumulators.md "page précédente(Accumulators)")<span class="hidden">
| </span>[<span>page suivante</span>](Sum.md "page suivante(Sum)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
