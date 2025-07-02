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
</span>[<span>Control
Structures</span>](Control.md)<span class="stkSep"> \>
</span>[<span>Conditional
Operators</span>](ConditionalOps.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Conditional</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](OMIF.md "page précédente(OMif)")<span class="hidden">
| </span>[<span>page
suivante</span>](Logical.md "page suivante(Logical Operators)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Conditional : Multiple Conditions</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

Conditional is very similar to omif : it tests if **a set **of
conditions**** is fulfilled, one by one. As soon as one condition is
fulfilled, conditional executes the corresponding operation.

Its behaviour can be summed up as :

"IF condition A is fulfilled, THEN return x, ELSE check if condition B
is fulfilled.

IF condition B is fulfilled, THEN return y, ELSE check if condition C is
fulfilled.

IF condition C is fulfilled..."

The conditional box can be accessed via the `Functions / Control /
CONDITIONAL` menu.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Inputs and Outputs</span>

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
<p>The conditional box takes a number of test arguments. It has one default input and output and a free number of additional inputs.</p>
<ul>
<li><span>"test" : a test argument</span></li>
<li><span>"add-test" : an additional test argument.</span></li>
<li><span>The user can add as additional test arguments as necessary. </span></li>
</ul>
<p>Its output returns the value of the last evaluated input.</p>
<p>All inputs are test inputs : predicates, or other types of boxes.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/cond-box.png" width="224" height="88" alt="cond-box.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Behaviour</span>

</div>

<div class="txt">

Conditional behaves like an [<span> or operator.</span>](Logical.md)

1.  The box evaluates its inputs successively until an input returns a
    non nil value.

2.  This value is returned by conditional.

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Conditional and Omif</span>

</div>

<div class="txt">

Conditional can be used as a meta-omif box, with a virtually unlimited
number of "if" / "then" and "else" inputs, and a terminal "else" input.

Each input can take an omif box representing a condition and an action.
Because conditional stops the inputs evaluation as soon as it gets a non
nil value, these actions are linked with each other in a causal chain.

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
<td><div class="caption">
<div class="caption_co">
<img src="../res/cond3.png" width="273" height="246" alt="cond3.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>In this example, we will test successively if 4 = 5, and define a last argument for conditional.</p>
<ol>
<li><p>Om+ returns 4.</p></li>
<li><p>Every time, om= tests if 4 = 5, and returns "nil" to the omif boxes. One by one, they return "nil", because the condition to return "1984" is not fulfilled.</p></li>
<li><p>Finally, the last input of conditional is evaluated and returns "george".</p></li>
<li><p>Conditional returns "george".</p></li>
</ol>
</div></td>
</tr>
</tbody>
</table>

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
<p>In this example, we want to filter values from 1 to 10 and pass 1, 7, 9 or 10.</p>
<ol>
<li><p>Om-random returns a number between 1 and 10. The box is on "<a href="EvOnceMode.md"><span>evaluate-once mode</span></a>" so that the <strong>same value</strong> is returned to all the other boxes at the evaluation.</p></li>
<li><p>The value is tested by two predicates.</p>
<ul>
<li><span>If it is comprised between 2 and 6, the first predicate returns true and omif returns "A".</span></li>
<li><span>If it is equal to 8, the second predicate returns true and omif returns "B". </span></li>
</ul></li>
<li><p>Finally, if none of these conditions is fulfilled, the last input of conditional is evaluated and returns the random number yielded by om-random.</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/conditional2.png" width="235" height="273" alt="conditional2.png" />
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
              - [<span>Predicates</span>](Predicates.md)
              - [<span>Conditional Operators</span>](ConditionalOps.md)
                  - [<span>OMif</span>](OMIF.md)
                  - <span id="i0" class="outLeftSel_yes"><span>Conditional</span></span>
              - [<span>Logical Operators</span>](Logical.md)
              - [<span>Sequential Operators</span>](Sequencial.md)
          - [<span>Iterations: OMLoop</span>](OMLoop.md)
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
précédente</span>](OMIF.md "page précédente(OMif)")<span class="hidden">
| </span>[<span>page
suivante</span>](Logical.md "page suivante(Logical Operators)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
