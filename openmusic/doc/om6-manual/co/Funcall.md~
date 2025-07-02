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
</span><span class="stkSel_yes"><span>Using Functions as
Data</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](HighOrder.md "page précédente(Higher-Order Functions)")<span class="hidden">
| </span>[<span>page
suivante</span>](Mapcar.md "page suivante(Mapcar - Iterations)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Lambda Mode Examples: Funcall - Using Functions as Data</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

Functional arguments are **variables** of higher-order functions and
programs. Here is a way of applying higher-order programs and lambda
mode in OM.

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Applying a function via Funcall</span>

</div>

<div class="txt">

It can sometimes be necessary to leave the choice of a function in a
program. The call of the function, which is passed as data in the
program is then delayed.

Funcall has two types of arguments :

  - its first argument is a function

  - its other arguments are additional -
    "[<span>rest</span>](AdditionalInputs.md)" - arguments).

Funcall calls the function taking these additional arguments as
parameters.

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
<img src="../res/basiclambdarotatefuncal.png" width="240" height="196" alt="basiclambdarotatefuncal.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Rotate performs circular permutations upon a list : items are enumerated starting from the second element. In this example, rotate is applied to a simple list of numbers : (1 2 3).</p>
<ol>
<li><p>Funcall is called with the rotate function, and a list.</p>
<p>The rotate box is on <a href="LambdaMode.md"><span>"lambda"</span></a> mode. Its free input is assigned the (1 2 3) list by funcall.</p></li>
<li><p>Rotate is not on "lambda" mode. Its input is assigned the same list as argument.</p></li>
</ol>
<p>The result of the computation is similar in both cases. We will however extend it to show how using a function as an actual variable .</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Random Selection of a Functions to Apply</span>

</div>

<div class="txt">

Using lambda functions allows to choose between several functions, as if
they were plain data.

We will modify a list of numbers with one of these two functions :
permut-random or rotate.

  - Permut-random makes a random permutation of the elements of a list.

  - Rotate makes a circular permutation of the elements in the list (see
    previous example).

The function will be selected randomly, so that is becomes **a random
variable**.

</div>

<div class="caption">

<div class="caption_co">

!["Permut-random" is applied randomly to the
list.](../res/examplelambda.png)

</div>

<div class="caption_ti">

"Permut-random" is applied randomly to the list.

</div>

</div>

<div class="txt">

1.  To use permut-random and rotate as variables, we have set them on
    "lambda" mode.

2.  List makes a list **with these two functions**.

3.  Nth-random picks one of the two functions in this list randomly.

4.  Funcall applies the selected function to its second argument, the
    list of numbers.

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Note</span>

</div>

<div class="txt">

Setting the functions on "lambda" mode **precisely** allows to :

  - make a list with these two functions

  - choose one of them in this list like a "lambda item".

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
<a href="../res/errorfuncall.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/errorfuncall_1.png" width="300" height="253" alt="errorfuncall_1.png" /></a>
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>If the functions were not on "lambda" mode, the list function would return a list that contains the result of these functions call.</p>
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
              - <span id="i0" class="outLeftSel_yes"><span>Using
                Functions as Data</span></span>
              - [<span>Mapcar - Iterations</span>](Mapcar.md)
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
précédente</span>](HighOrder.md "page précédente(Higher-Order Functions)")<span class="hidden">
| </span>[<span>page
suivante</span>](Mapcar.md "page suivante(Mapcar - Iterations)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
