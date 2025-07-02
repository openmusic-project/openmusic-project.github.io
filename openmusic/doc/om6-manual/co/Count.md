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
\> </span><span class="stkSel_yes"><span>Count</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](MinMax.md "page précédente(Min / Max)")<span class="hidden">
| </span>[<span>page suivante</span>](Acum.md "page suivante(Acum)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Count : Counting Items</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

<span class="iconButton_tim">![count\_icon.png](../res/count_icon.png)</span>
**Count** is a counter. Its internal value increases at each evaluation
evaluated, if the input value is non nil.

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
<img src="../res/count-inouts.png" width="153" height="151" alt="count-inouts.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Count has one default input and three outputs :</p>
<ul>
<li><span>"what" : a value.</span></li>
<li><span>first output : triggers the increment of the counter if the input is non nil, and returns its current value. </span></li>
<li><span>second output : returns the current state of the counter.</span></li>
<li><span> third output : resets the value of the counter to zero.</span></li>
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

<span>Counting the Items of a List</span>

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
<ol>
<li><p>Listloop returns each element of the list successively to count. These elements are non nil values.</p></li>
<li><p>The first output of count adds 1 every time listloop returns an element.</p></li>
<li><p>Once the enumeration of listloop is over, the final state of count is returned by Finally.</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/count2a.png" width="158" height="247" alt="count2a.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Counting Specific Items of a List</span>

</div>

<div class="txt">

We will now apply count more specifically, to know how many **strings**
a list contains among other types of items.

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
<img src="../res/count3a.png" width="207" height="300" alt="count3a.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<ol>
<li><p>Listloop enumerates the elements of a list.</p></li>
<li><p>The stringp predicate returns true every time it evaluates a string.</p></li>
<li><p>At each step of the loop, the first output of count is evaluated :</p>
<ul>
<li><span>if it gets a non nil value from stringp, it increments the value of the counter</span></li>
<li><span>if it gets "nil", the value doesn't change.</span></li>
</ul></li>
<li><p>The results returned by stringp and counter are gathered in a list and printed.</p></li>
<li><p>The total number of strings, that is, the final state of counter is returned by Finally.</p></li>
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
                  - [<span>Sum</span>](Sum.md)
                  - [<span>Min / Max</span>](MinMax.md)
                  - <span id="i2" class="outLeftSel_yes"><span>Count</span></span>
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
précédente</span>](MinMax.md "page précédente(Min / Max)")<span class="hidden">
| </span>[<span>page suivante</span>](Acum.md "page suivante(Acum)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
