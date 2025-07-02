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
</span>[<span>Iterators</span>](LoopIterators.md)<span class="stkSep">
\> </span><span class="stkSel_yes"><span>OnList
Loop</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](ListLoop.md "page précédente(List Loop)")<span class="hidden">
| </span>[<span>page
suivante</span>](ForLoop.md "page suivante(For Loop)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>OnListLoop : Enumerating Subsets of Lists</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>General Properties</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

**OnListLoop** returns a list and then **successive smaller chunks** of
the list. The execution ends once the list is exhausted.

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
<img src="../res/onlistarg.png" width="233" height="81" alt="onlistarg.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Onlistloop has one default input and one optional input :</p>
<ul>
<li><span> "list" : a list</span></li>
<li><span> "by" : a box defining <strong>the way the list is exhausted</strong> .</span></li>
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

## <span>Controling Subsets Enumeration</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>"By"</span>

</div>

<div class="txt">

The default value of "by" is a cdr. This means that, at each loop, the
cdr of the list is returned.

This default value can be replaced by any other Lisp function meant to
return a small chunk of list, just as
[<span>listloop</span>](ListLoop.md) .

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Examples</span>

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
<p>Here, onlistloop successively returns smaller chunks of the list, by taking away <strong>the first element</strong> of the list : it returns cdrs.</p>
<p>The result of each loop is collected by collect and returned by the second input of finally.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/listbya.png" width="288" height="212" alt="listbya.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

The value of "by" is switched to cddr. Onlistloop successively returns
cdrs of cdrs : at each step, the **two first elements** of the list are
left aside.

Note that the first input of finally always returns "nil" at the end of
the loop.

</div>

<div class="caption">

<div class="caption_co">

![onlistby1a.png](../res/onlistby1a.png)

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
              - [<span>Iterators</span>](LoopIterators.md)
                  - [<span>List Loop</span>](ListLoop.md)
                  - <span id="i2" class="outLeftSel_yes"><span>OnList
                    Loop</span></span>
                  - [<span>For Loop</span>](ForLoop.md)
                  - [<span>While Loop</span>](WhileLoop.md)
                  - [<span>Infinite Loops</span>](InfiniteLoops.md)
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
précédente</span>](ListLoop.md "page précédente(List Loop)")<span class="hidden">
| </span>[<span>page
suivante</span>](ForLoop.md "page suivante(For Loop)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
