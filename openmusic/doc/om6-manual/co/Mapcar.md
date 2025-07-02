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
</span>[<span>Higher-Order
Functions</span>](HighOrder.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Mapcar -
Iterations</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Funcall.md "page précédente(Using Functions as Data)")<span class="hidden">
| </span>[<span>page
suivante</span>](LambdaPatch.md "page suivante(Lambda Patches)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Lambda Mode Examples: Mapcar - Iterations</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

Mapcar is a very useful Lisp function, which can apply a function to the
items of one or more lists successively. The function is assigned is the
first argument of mapcar. The lists are assigned as other argument(s).

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Usign Mapcar for Iterations</span>

</div>

<div class="txt">

Mapcar constitutes a simple an elegant way to implement **iterative
processes**.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>An Other Way of Doing Iterations in OM :</span>

</div>

<div class="linkUL">

  - [<span>Iterations: OMLoop</span>](OMLoop.md)

</div>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Applying a Function to a List with Mapcar</span>

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
<p>The first input of the mapcar box must be a <strong>lambda function</strong> – or a box in <a href="LambdaMode.md"><span>"lambda" mode</span></a>. The other argument is a list to operate.</p>
<p>Here, the box *  has</p>
<ul>
<li><p>one fixed argument : a number (5)</p></li>
<li><p>one free input, which represents the argument of the lambda function.</p></li>
</ul>
<p>Therefore, (A) represents the "f(x) = x * 5" function.</p>
<p>Mapcar goes through the list (B) and applies (A) to each of its items successively. Results are collected and returned as a list :</p>
<p>((3 * 5) (4 * 5)) = (15 20)</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/mapcar-curry.png" width="187" height="162" alt="mapcar-curry.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Multiple Lists Processing</span>

</div>

<div class="txt">

Mapcar accepts a **variable number of lists** to operate, and can
process them simultaneously. Items are matched and processed by the
lambda function successively.

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
<img src="../res/multi-mapcar.png" width="215" height="173" alt="multi-mapcar.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Here, the* function box has <strong>two free inputs</strong>. It represents the function " f(x,y) = x * y ".</p>
<p>The * function is connected to input #0. It is applied successively to the first elements of inputs #1 and #2, then to the second elements of inputs #1 and 2, then to the third elements, and so on. A list is built a out of the successive results.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc warning">

<div class="bloc_ti warning_ti">

<span>Free Inputs and Lists Size</span>

</div>

<div class="txt">

The number of **free inputs** of the lambda box must be equal to the
number of **additional arguments** of the mapcar function.

Mapcar can only process lists with the same number of items.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>General Issues with Lambda Functions</span>

</div>

<div class="linkUL">

  - [<span>Higher-Order Programs and Functions</span>](HighOrder.md)

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
              - [<span>Using Functions as Data</span>](Funcall.md)
              - <span id="i0" class="outLeftSel_yes"><span>Mapcar -
                Iterations</span></span>
              - [<span>Lambda Patches</span>](LambdaPatch.md)
              - [<span>Test Functions</span>](LambdaTest.md)
          - [<span>Control Structures</span>](Control.md)
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
précédente</span>](Funcall.md "page précédente(Using Functions as Data)")<span class="hidden">
| </span>[<span>page
suivante</span>](LambdaPatch.md "page suivante(Lambda Patches)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
