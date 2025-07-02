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
</span><span class="stkSel_yes"><span>OMif</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](ConditionalOps.md "page précédente(Conditional Operators)")<span class="hidden">
| </span>[<span>page
suivante</span>](Conditional.md "page suivante(Conditional)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>OMif : If, Then, Else</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

The behaviour of omif can be described by the following proposition :
"IF the A condition is verified, THEN execute the B operation, ELSE
execute the C operation".

The omif box can be accessed via the `Functions / Kernel / Control /
OMIF` menu (or typing "OMIF" in the patch window).

</div>

<div class="caption">

<div class="caption_co">

![menuomif.png](../res/menuomif.png)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Box Inputs</span>

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
<img src="../res/omif-box.png" width="211" height="172" alt="omif-box.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Omif has two default inputs and one optional input :</p>
<ul>
<li><span> "test" stands for "if" : it represents the test of a condition in a given proposition. </span></li>
<li><span> "action" stands for "then" : it represents the consequence of the test in the same proposition. </span></li>
<li><span>"else" : allows to perform another operation if the condition is not fulfilled.</span></li>
</ul>
<p>Each input accepts a function, a factory, or a data box.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

To add or delete the optional "else" argument : press `Alt` +`←` or `→` 
/ `SHIFT` + `>` or `<`.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Behaviour</span>

</div>

<div class="txt">

"Test" evaluates the box it is connected to and checks if a number of
conditions for the operation are fulfilled.

  - <span>If the box yields something else than "nil", the conditional
    test is verified, and " then" evaluates the box connected to its
    second input.</span>
  - <span>It the box yields "nil", OMIF returns the same "nil"
    value.</span>

Omif is evaluated like any other box, and returns the value yielded by
"then" or "else".

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Example : IF, THEN</span>

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
<p>Here, "test" evaluates the om= predicate, which checks if the value returned by om-random is equal to 2. </p>
<ul>
<li><span> If the condition is not fulfilled, om= and OMIF return "nil".</span></li>
<li><span>If the condition is fulfilled, OMIF evaluates the data box connected to its second input, and returns "blue". </span></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/omif-basicex.png" width="267" height="225" alt="omif-basicex.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

Here, "test" is determined by the om= predicate, but it can also be
connected to any other type of box.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>For Full Information about Predicates :</span>

</div>

<div class="linkUL">

  - [<span>Predicates : Testing Relations and
    Properties</span>](Predicates.md)

</div>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Example : IF, THEN, ELSE</span>

</div>

<div class="txt">

In this example, "else" has been added to OMIF. If the condition is not
fulfilled, OMIF doesn't return "nil", but the random number.

</div>

<div class="caption">

<div class="caption_co">

![ifthenelse.png](../res/ifthenelse.png)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Adding Optional Arguments</span>

</div>

<div class="linkUL">

  - [<span>Additional Inputs : Optional, Keyword and Rest
    Arguments</span>](AdditionalInputs.md)

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
              - [<span>Predicates</span>](Predicates.md)
              - [<span>Conditional Operators</span>](ConditionalOps.md)
                  - <span id="i0" class="outLeftSel_yes"><span>OMif</span></span>
                  - [<span>Conditional</span>](Conditional.md)
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
précédente</span>](ConditionalOps.md "page précédente(Conditional Operators)")<span class="hidden">
| </span>[<span>page
suivante</span>](Conditional.md "page suivante(Conditional)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
