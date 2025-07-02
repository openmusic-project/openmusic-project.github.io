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
</span><span class="stkSel_yes"><span>Accumulators</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](InfiniteLoops.md "page précédente(Infinite Loops)")<span class="hidden">
| </span>[<span>page
suivante</span>](Collect.md "page suivante(Collect)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Accumulators</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>Function</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

At each step of an iteration, resulting data can be memorized and stored
with the OMLoop **accumulators** . Accumulators execute storage or other
operation upon the elements they are returned successively.

There are six accumulators :

  - <span class="iconButton_tim">![collect\_icon.png](../res/collect_icon.png)</span>:
    **Collect** gathers the result of each step of a loop into a list.

  - <span class="iconButton_tim">![sum\_icon.png](../res/sum_icon.png)</span>
    : **Sum** returns the sum of the collected elements.

  - <span class="iconButton_tim">![minmax\_icon.png](../res/minmax_icon.png)</span>
    : **Min** and **max** return the lowest and highest value among a
    set of collected elements.

  - <span class="iconButton_tim">![if\_icon.png](../res/if_icon.png)</span>:
    **Counter** counts the number of non-nil collected elements.

  - <span class="iconButton_tim">![acum\_icon.png](../res/acum_icon.png)</span>:
    **Acum** allows to define specific accumulation procedures.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Adding Iterators</span>

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
<img src="../res/acums.png" width="300" height="224" alt="acums.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>To add an accumulator in the OMLoop editor .</p>
<ul>
<li><p>click on an icon</p></li>
<li><p><code class="keyboard_tl">Cmd</code> click and type a name directly in the editor.</p></li>
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

## <span>Inputs and Outputs</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

  - All accumulators but acum have a single input : this input is used
    for **collecting the successive values** during a loop.

  - All accumulator have three outputs, allowing to access their current
    "memory"  :
    
      - <span>first output : **executes a specific operation** with each
        new collected element.</span>
      - <span>second output : **returns the current stat** e of the
        accumulator's memory,</span>
      - <span>third output : **reinitializes** the memory.</span>

</div>

<div class="caption">

<div class="caption_co">

![COLLECT.png](../res/COLLECT.png)

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
              - <span id="i3" class="outLeftSel_yes"><span>Accumulators</span></span>
                  - [<span>Collect</span>](Collect.md)
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
précédente</span>](InfiniteLoops.md "page précédente(Infinite Loops)")<span class="hidden">
| </span>[<span>page
suivante</span>](Collect.md "page suivante(Collect)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
