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
\> </span><span class="stkSel_yes"><span>While Loop</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](ForLoop.md "page précédente(For Loop)")<span class="hidden">
| </span>[<span>page
suivante</span>](InfiniteLoops.md "page suivante(Infinite Loops)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>WhileLoop : Defining Iteration Conditions</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>General Properties</span>

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
<img src="../res/whilarg.png" width="143" height="79" alt="whilarg.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Whileloop allows a loop to go on <strong>as long as a condition is fulfilled</strong> .</p>
<p>It has only one default input : "expression", which defines a condition. This condition can be expressed by a <span id="i2" class="defRef_ul"><span>predicate</span></span><sup><a href="#kFootBsktc2498"><span>[</span>1<span>]</span></a></sup> or any other value connected to the input of whileloop.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Example : Using Whileloop with a Predicate</span>

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
<p>A list that contains numbers and letters is enumerated until something else than a number is reached.</p>
<ol>
<li><p>The list is enumerated by listloop. Each item returned by listloop is sent to the predicate numberp.</p></li>
<li><p>Numberp tests if the item is a number, and returns "t" or "nil" .</p></li>
<li><p>The result of the predicate is returned to whileloop. As long as whileloop gets "t", the loop goes on.</p>
<p>When numberp returns "nil", whileloop stops the loop, and finally returns "done".</p></li>
<li><p>At each step of the loop, the results returned by listloop and numberp are gathered in a list, and EachTime prints the list.</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/whilebehaioura.png" width="219" height="232" alt="whilebehaioura.png" />
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

1.  
    
    <div id="kFootBsktc2498">
    
    <div class="footBskt_itti">
    
    Predicate
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    A predicate verifies the property of a thing or a relation between
    two things. It has two possible answers : "true", and "false", that
    is, "t", or "nil" in Lisp.
    
    </div>
    
    </div>
    
    </div>
    
    </div>

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
                  - [<span>OnList Loop</span>](OnListLoop.md)
                  - [<span>For Loop</span>](ForLoop.md)
                  - <span id="i3" class="outLeftSel_yes"><span>While
                    Loop</span></span>
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
précédente</span>](ForLoop.md "page précédente(For Loop)")<span class="hidden">
| </span>[<span>page
suivante</span>](InfiniteLoops.md "page suivante(Infinite Loops)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
