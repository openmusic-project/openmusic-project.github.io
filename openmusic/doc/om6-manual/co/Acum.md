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
\> </span><span class="stkSel_yes"><span>Acum</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Count.md "page précédente(Count)")<span class="hidden">
| </span>[<span>page
suivante</span>](LoopExample.md "page suivante(Example : A Random Series)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Acum : Defining Accumulation Procedures</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

**<span class="iconButton_tim">![acum\_icon.png](../res/acum_icon.png)</span>
Acum** is a generic module used for defining storage or accumulation
procedure.

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
<img src="../res/acum-inouts.png" width="204" height="193" alt="acum-inouts.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Contrary to the other accumulators, accum has three default inputs and one optional input :</p>
<ul>
<li><span>"acum" : collects the successive elements of a list returned by an iterator</span></li>
<li><span>"init" : <strong>initial value</strong> of the accumulator</span></li>
<li><span>"fun" : an <strong>accumulation function</strong> to apply to each collected element.</span></li>
<li><span>first output : </span></li>
</ul>
<ol>
<li><p>collects the input value and applies the accumulation function</p></li>
<li><p>returns the current state of the accumulator.</p></li>
</ol>
<ul>
<li><span> second output : returns the finale value of acum. </span></li>
<li><span> third output : resets the accumulator to the value specified by "init".</span></li>
</ul>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>More information about Lambda Functions :</span>

</div>

<div class="linkUL">

  - [<span>Lambda Mode</span>](LambdaMode.md)

</div>

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>"Init" : Defining Acum's Behaviour</span>

</div>

<div class="txt">

" **Init** " actually defines the accumulator's behaviour.

It must take a function or box on[<span> lambda</span>](LambdaMode.md)
mode, with two inputs :

1.  one for the element to collect,

2.  one for the initial value.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Example : Subtracting a List of Numbers</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

We want to subtract numbers successively – for instance (100-8-2-3-9).
For this, we need an initial value, x, a list of numbers, the om-
function on "lambda" mode, and acum.

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
<p>The initial value of acum is 100. Om- is set on "lambda" mode it is connected to the third output of acum. It is applied recursively to the elements of the list and to the initial value. We get (100 - a - b - c - d).</p>
<ol>
<li><p>Listloop returns the successive elements of the list to acum.</p></li>
<li><p>At each step of the iteration, the first print box prints the <strong>successive current values</strong> of acum : 100 ; 100-8 = 92 ; 92-2 = 90 ; ...</p></li>
<li><p>At each step of the iteration, the second print box prints the result of the subtraction, which is then stored as <strong>the new current value</strong> of accum.</p></li>
<li><p>When the iteration is over, Finally returns the final state of acum.</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/acum3.png" width="207" height="284" alt="acum3.png" />
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
                  - [<span>Collect</span>](Collect.md)
                  - [<span>Sum</span>](Sum.md)
                  - [<span>Min / Max</span>](MinMax.md)
                  - [<span>Count</span>](Count.md)
                  - <span id="i2" class="outLeftSel_yes"><span>Acum</span></span>
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
précédente</span>](Count.md "page précédente(Count)")<span class="hidden">
| </span>[<span>page
suivante</span>](LoopExample.md "page suivante(Example : A Random Series)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
