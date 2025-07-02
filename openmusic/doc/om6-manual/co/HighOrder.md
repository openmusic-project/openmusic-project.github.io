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
</span><span class="stkSel_yes"><span>Higher-Order
Functions</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](RefMode.md "page précédente(Reference Mode)")<span class="hidden">
| </span>[<span>page
suivante</span>](Funcall.md "page suivante(Using Functions as Data)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Higher-Order Programs and Functions</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

In functional languages such as Lisp, programs and data are generally
considered as <span id="i2" class="defRef_ul"><span>"**first-class''
objects**</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc2312)</sup>.
A Lisp function can thus be considered as data and used or constructed
in the calculus.

Functions that accept other functions as arguments, or that produce
functions as output values are called **higher-order functions**.

In OM, higher-order programming is mainly possible with boxes in
"lambda" evaluation mode.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Lambda Mode</span>

</div>

<div class="linkUL">

  - [<span>Lambda Mode</span>](LambdaMode.md)

</div>

</div>

<div class="txt">

|                                                                                        |                                                                                                                                                                                                                                                     |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Some functions are more specifically designed to be called with functional arguments : | <span class="iconButton_tim">![apply\_icon.png](../res/apply_icon.png)</span> <span class="iconButton_tim">![funcall\_icon.png](../res/funcall_icon.png)</span> <span class="iconButton_tim">![mapcar\_icon.png](../res/mapcar_icon.png)</span> ... |

</div>

</div>

<div class="part">

## <span>Using a Lambda Function in OM</span>

<div class="part_co">

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Example</span>

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
<p>In Lisp, apply is one of the simplest example of higher-order function. Apply takes two arguments :</p>
<ol>
<li><p>a function</p></li>
<li><p>a list of parameters</p></li>
</ol>
<p>The function on "lambda" mode is applied to each item of the list.</p>
<p>In this example, the + is on "lambda" mode : it can return the <strong>+ function</strong> .</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/apply1.png" width="109" height="132" alt="apply1.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Using the function name</span>

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
<p>When a simple function is involved, its <strong>name</strong> can be used instead of the function box on "lambda" mode.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/pluslambda.png" width="96" height="123" alt="pluslambda.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>In Practice</span>

</div>

<div class="txt">

In practice, functional arguments are used in two main configurations :

1.  as an argument applied to one or more other arguments by the
    higher-order function ****

2.  as a test function to determine the behaviour of a higher-order
    function.

The following sections detail several typical cases regarding the use of
higher-order functions and "lambda" mode.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Higher-Order Functions in OM</span>

</div>

<div class="linkUL">

  - [<span>Lambda Mode Examples: Funcall - Using Functions as
    Data</span>](Funcall.md)
  - [<span>Lambda Mode Examples: Mapcar - Iterations</span>](Mapcar.md)
  - [<span>Lambda Mode Examples: Lambda Patches</span>](LambdaPatch.md)
  - [<span>Lambda Mode Examples: Test Functions</span>](LambdaTest.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Inputs of a Lambda Function and Currying</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

In a higher-order function call, a function may be applied to a number
of items. These items are then matched to the different arguments of the
function. Hence, one must make sure that this function

  - has the **right number of arguments**
    
    an / or

  - is applied to the right number of items.

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Example \#1</span>

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
<p>Arithm-ser requires <strong>3 arguments</strong> : "from", "to" and "step".</p>
<p>It is applied to a list of <strong>two values only</strong>. OM returns an error message.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/errorlambda.png" width="254" height="176" alt="errorlambda.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Currying : Controling the Arguments of a Lambda Function</span>

</div>

<div class="txt">

In some situations, we may want to ignore some of the arguments required
by a "lambda" function. In this case we only want to define the bounds
of the series : "from", and "to", and ignore "step".

To do so, we need to **set** one of the variables of the lambda form.
This procedure is known as
<span id="i3" class="defRef_ul"><span>currying</span></span><sup>[<span>\[</span>2<span>\]</span>](#kFootBsktc2323)</sup>.

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
<p>In OM, the arguments of a function box on "lambda" mode are represented by free inputs, and only free inputs. Free inputs are not connected to anything.</p>
<p>The values connected to the other inputs are comprised in the lambda function .</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/curry.png" width="169" height="157" alt="curry.png" />
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
    
    <div id="kFootBsktc2312">
    
    <div class="footBskt_itti">
    
    First Class Object
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    A first-class object is an entity which can be passed as a parameter
    to a function, returned from a function, or assigned into the
    variable of a program.
    
    </div>
    
    </div>
    
    </div>
    
    </div>

2.  
    
    <div id="kFootBsktc2323">
    
    <div class="footBskt_itti">
    
    Currying
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    Reducing the number of arguments of a lambda function by assigning
    values to some of them.
    
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
          - <span id="i4" class="outLeftSel_yes"><span>Higher-Order
            Functions</span></span>
              - [<span>Using Functions as Data</span>](Funcall.md)
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
précédente</span>](RefMode.md "page précédente(Reference Mode)")<span class="hidden">
| </span>[<span>page
suivante</span>](Funcall.md "page suivante(Using Functions as Data)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
