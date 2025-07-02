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
\> </span><span class="stkSel_yes"><span>Sum</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Collect.md "page précédente(Collect)")<span class="hidden">
| </span>[<span>page
suivante</span>](MinMax.md "page suivante(Min / Max)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Sum : Calculating Sums</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

**<span class="iconButton_tim">![sum\_icon.png](../res/sum_icon.png)</span>
Sum** adds the successive input values.

</div>

</div>

<div class="part">

## <span>Inputs, Outputs</span>

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
<img src="../res/sum1.png" width="197" height="154" alt="sum1.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Sum has one input and three outputs :</p>
<ul>
<li><span>"what" : collects the successive values coming from other boxes.</span></li>
<li><span> first output :</span></li>
</ul>
<ol>
<li><p>triggers the collection of a new value, and the addition of this value to a sum</p></li>
<li><p>returns the current value of the sum</p></li>
</ol>
<ul>
<li><span>second output : returns the value of the current state of sum</span></li>
<li><span>third output : resets sum to zero.</span></li>
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

## <span>Examples</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Calculating a Sum from a List</span>

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
<p>The components of a list are returned successively by listloop to sum.</p>
<ol>
<li><p>At each step of the loop, eachtime triggers and prints the sum of the components.</p></li>
<li><p>The state of sum at the end of the loop, that is, the sum of all the components of the list, is returned by finally.</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/sum2a.png" width="162" height="254" alt="sum2a.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Calculating the Sum of N Random Numbers</span>

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
<img src="../res/sum5.png" width="171" height="292" alt="sum5.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>We now want to calculate the sum of 10 random numbers between 1 and 10.</p>
<ol>
<li><p>The number of loops is defined by forloop.</p></li>
<li><p>At each step :</p>
<ul>
<li><span>a random number is returned by om-random and printed</span></li>
<li><span>the sum of the successive is returned by sum and printed.</span></li>
</ul></li>
<li><p>After ten loops, the iteration is stopped by forloop.</p></li>
<li><p>Finally returns the sum of the whole set of numbers returned by om-random.</p></li>
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
              - [<span>Iterators</span>](LoopIterators.md)
              - [<span>Accumulators</span>](LoopAccumulators.md)
                  - [<span>Collect</span>](Collect.md)
                  - <span id="i2" class="outLeftSel_yes"><span>Sum</span></span>
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
précédente</span>](Collect.md "page précédente(Collect)")<span class="hidden">
| </span>[<span>page
suivante</span>](MinMax.md "page suivante(Min / Max)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
