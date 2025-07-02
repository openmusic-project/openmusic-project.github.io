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
\> </span><span class="stkSel_yes"><span>Example : A Random
Series</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Acum.md "page précédente(Acum)")<span class="hidden">
| </span>[<span>page
suivante</span>](Instances.md "page suivante(Instances)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>A Basic Example : Building a Random Series</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

We will build a random series of fifteen notes withing a range of 5000
and 8000 midicents. We defined a series of constraints.

  - <span>All notes must be different, including octaves. </span>
  - <span>Intervals can consist of semitones and quartertones. </span>
  - <span>Intervals can be repeated.</span>

</div>

</div>

<div class="part">

## <span>Designing the Iterative Process</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>"Keep on Until the List Has 15 Items"</span>

</div>

<div class="caption">

<div class="caption_co">

![exloop.png](../res/exloop.png)

</div>

</div>

<div class="txt">

1.  Om-random returns a random value within the given range.

2.  At each step of the loop, collect stores the value.

3.  The resulting list is returned to remove-dup, which removes equal
    values and octaves, give or take a quarter tone.

4.  Length returns the number of items in the list.

5.  This number is compared to 15 by om\<.

6.  The process goes on as long as the list has less then 15 items, as
    specified by whileloop.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Resulting Chord-Seq</span>

</div>

<div class="caption">

<div class="caption_co">

![genlist.png](../res/genlist.png)

</div>

</div>

<div class="txt">

The resulting chord-seq is returned to the outside of OMLoop by Finally.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Redefining the Equality Test</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Constraint : Rounded Intervals</span>

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
<p>Usually, remove-dup checks if two values are strictly equal. We have modified this predicate with a lambda patch.</p>
<p>Indeed, here is what happens if two pitches make almost an octave – 1200 midicents :</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/ex.png" width="192" height="136" alt="ex.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Lambda Patch</span>

</div>

<div class="caption">

<div class="caption_co">

![testex.png](../res/testex.png)

</div>

</div>

<div class="txt">

1.  The values tested by the remove-dup are returned by two inputs, and
    substracted by om-.

2.  The difference is divided by 1200 and rounded give or take a
    multiple of 1200.

3.  It is then multiplied again by 1200 to calculate the rest of the
    original difference.
    
    If this value is inferior to 50, it will be rounded so that we will
    get an octave or its multiple in the score.

4.  The absolute value of the rest is compared with 50 by om-.

5.  If om- returns "true", the value is rejected by remove-dup

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Test Arguments and Lambda Functions</span>

</div>

<div class="linkUL">

  - [<span>Lambda Mode Examples: Lambda Patches</span>](LambdaPatch.md)

</div>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Example : Rejecting a Rounded Octave</span>

</div>

<div class="txt">

If the test is applied to 6000 and 7187 midicents – preceding values –,
we get the following evaluations :

</div>

<div class="caption">

<div class="caption_co">

![testexample.png](../res/testexample.png)

</div>

</div>

<div class="txt">

Om\< returns "t", and pitches are considered equal.

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
              - <span id="i2" class="outLeftSel_yes"><span>Example : A
                Random Series</span></span>
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
précédente</span>](Acum.md "page précédente(Acum)")<span class="hidden">
| </span>[<span>page
suivante</span>](Instances.md "page suivante(Instances)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
