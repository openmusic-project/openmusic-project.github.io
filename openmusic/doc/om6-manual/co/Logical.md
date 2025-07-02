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
</span><span class="stkSel_yes"><span>Logical
Operators</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Conditional.md "page précédente(Conditional)")<span class="hidden">
| </span>[<span>page
suivante</span>](Sequencial.md "page suivante(Sequential Operators)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Logical Operators</span>

<div class="headCo_co">

<div>

<div class="def">

<div id="i2" class="dk_concept_def">

<div class="dk_definition_notion">

<div class="dk_definition_notion_ti">

<span>Omor, Omand</span>

</div>

<div class="dk_definitionMeta_def">

Omor
<span class="iconButton_tim">![or\_icon.png](../res/or_icon.png)</span>and
omand
<span class="iconButton_tim">![and\_icon.png](../res/and_icon.png)</span>
are **boolean logical operators** that stand for the "and" and "or"
coordinating conjunctions.

  - <span>A proposition that contains an "and" is true if **all** its
    elements are true. </span>
  - <span>A proposition that contains an "or" is true if **at least
    one** of its elements is true. </span>

For instance, the following propositions are respectively true and false
:

  - <span>A : "Men are living creatures". B : "Cats are living
    creatures". "A and B" is true, and "A or B" is true.</span>
  - <span>A : "Men are human beings." B : "Cats are human beings". "A or
    B" is true, but "A and B" is not true. </span>

In OM

  - <span> the omand box returns "true" if **all** its inputs return
    "true". Otherwise, it returns "nil". </span>
  - <span>the omor box returns "true" if one of its inputs return
    "true". Otherwise, it returns "nil".</span>

</div>

</div>

</div>

</div>

<div class="infobloc">

<div class="txt">

Logical operators are accessed via the  `Functions / OM Kernel / Control
/ Logical Operators`, menu.

</div>

<div class="caption">

<div class="caption_co">

![menulogic.png](../res/menulogic.png)

</div>

</div>

</div>

<div class="part">

## <span>Functionalities and Behaviour</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Inputs</span>

</div>

<div class="txt">

Operators have one default input, "self" and as many additional "rest"
inputs as necessary

  - <span>"self" : any data</span>
  - <span>"rest" : any data.</span>

Their output returns data, or "nil".

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Use</span>

</div>

<div class="txt">

  - Logical operators evaluate their inputs successively. Any non "nil"
    data is "true".
    
    Consequently, operators don't have to verify the truth-value of a
    proposition, to return "true". Numbers, as well as symbols and other
    non nil values are always "true" for logical operators.

  - Logical operators are also used for associating **several
    predicates** in a single proposition.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Behaviour</span>

</div>

<div class="txt">

Inputs are evaluated from left to right.

</div>

<div class="txt">

<table>
<tbody>
<tr class="odd">
<td><p><span class="iconButton_tim"><img src="../res/evalomor_icon.png" class="sfile_icon-png_icon-gif_icon" width="78" height="104" alt="evalomor_icon.png" /></span></p></td>
<td><p>Omor <strong>tests a first input</strong> , and stops if <strong>it is true</strong> .</p>
<p>If not, it goes on until it gets "true". As a consequence, omor returns the first non-nil value, or "nil" if all inputs return "nil".</p>
<p>In this example, omor will always return the first input, "A".</p></td>
</tr>
<tr class="even">
<td><p><span class="iconButton_tim"><img src="../res/evalomand_icon.png" class="sfile_icon-png_icon-gif_icon" width="78" height="85" alt="evalomand_icon.png" /></span></p></td>
<td><p>Omand <strong></strong> stops the evaluation if <strong>one of its inputs is not true</strong> . It goes on until it gets "nil", or until it reaches the last input.</p>
<p><strong></strong> All inputs have to be true for the condition to be verified, and omand then returns the last non-nil value.</p>
<p>In this example, omand will always return the last input, "B".</p></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Example</span>

</div>

<div class="txt">

The following program tests if a random number between 1 and 5 is
superior to 1 and inferior to 4.

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
<li><p>The number returned by om-random is compared with 1 and 3 by the om&gt; and om&lt; predicates.</p></li>
<li><p>Omand evaluates the predicates and returns "true" or "nil".</p></li>
<li><p>List makes a list with :</p>
<ul>
<li><span>the result of both predicates evaluation, </span></li>
<li><span>the result of the omand operator,</span></li>
<li><span>the number returned by om-random.</span></li>
</ul></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/testoreds.png" width="229" height="211" alt="testoreds.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

Note that om-random is on "evaluate-once" mode, so that the same result
is sent to all boxes during the same evaluation.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About EvalOnce Mode :</span>

</div>

<div class="linkUL">

  - [<span>Evaluate-Once Mode</span>](EvOnceMode.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Composing Propositions : Associating Logical Operators with Predicates</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Operators behave with predicates **like with any other boxes**.
Predicates are evaluated **one by one,** from left to right and return
"true" or  "nil".

  - <span> Omand returns "true" if all predicates return "true", and
    returns "nil" if one predicate returns "nil".</span>
  - <span> Omor returns "true" as soon as one predicate passes "true",
    and returns "nil" if all predicates return "nil".</span>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>An Incorrect Formalization</span>

</div>

<div class="txt">

We might use logical operators to compare more than one value to
another, as in the following proposition : "If A **and** B **or** C are
superior to D, then return A, B, and C."

If we formalize the proposition **literally**, the program will be
ineffective and will lead to a miscalculation.

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
<img src="../res/formal.png" width="146" height="194" alt="formal.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Let's test if 3 and 1 or 6 are superior to 2 :</p>
<ol>
<li><p>Omand is evaluated and returns <strong>the numeric value</strong> of its last input</p></li>
<li><p>Omor is evaluated and returns <strong>the numeric value</strong> of its first input</p></li>
<li><p>Om&gt; compares the numeric value of its first input with 2, and returns "nil".</p></li>
</ol>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

6 should be compared with 2, and 6 is superior to 2. Om\> should return
"true". The error comes from the way predicates have been applied with
logical operators.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Basic Formalization Principles</span>

</div>

<div class="txt">

Formalizing a comparison with predicates and logical operators implies
that :

1.  First, **predicates** must compare values by **pairs.**

2.  Then, **logical operators** must be applied to **the result** **of
    each comparison** .

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>A correct Formalization</span>

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
<img src="../res/formal4.png" width="290" height="300" alt="formal4.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Be a list. Each number of the list is compared with a number.</p>
<ol>
<li><p>Omif evaluates omor.</p></li>
<li><p>Omand is evaluated and returns the value of the two om&gt; predicates on the left.</p>
<p>It gets "nil" and "t", so it returns "nil". 3 and 1 are not <strong>both</strong> superior to 2.</p></li>
<li><p>The last om&gt; predicate is evaluated. It returns "true".</p></li>
<li><p>Omor gets "nil" and "t", so it returns "t" . 6 is <strong>at least</strong> superior to 2.</p></li>
<li><p>Omif gets the result of omor : "t", and hence returns the list.</p></li>
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
              - [<span>Predicates</span>](Predicates.md)
              - [<span>Conditional Operators</span>](ConditionalOps.md)
              - <span id="i3" class="outLeftSel_yes"><span>Logical
                Operators</span></span>
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
précédente</span>](Conditional.md "page précédente(Conditional)")<span class="hidden">
| </span>[<span>page
suivante</span>](Sequencial.md "page suivante(Sequential Operators)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
