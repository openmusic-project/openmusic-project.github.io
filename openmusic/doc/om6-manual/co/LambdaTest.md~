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
</span><span class="stkSel_yes"><span>Test
Functions</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](LambdaPatch.md "page précédente(Lambda Patches)")<span class="hidden">
| </span>[<span>page
suivante</span>](Control.md "page suivante(Control Structures)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Lambda Mode Examples: Test Functions</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

Some functions have a **test** argument. This test argument determines
the way the function operates on data. For instance, it can set
comparaison rules for a sorting process, conditions to fulfill reject
items from a list, etc.

This test can therefore be modified by specifying a function, or more
generally a lambda function, which allows to modify the behaviour of the
initial function.

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Example : Removing Duplicates in a List</span>

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
<p>The remove-dup function tests if the items of a list are <strong>equal</strong> <strong>pairwise</strong>, and if so, removes duplicates from the pair.</p>
<ul>
<li><p>Its first argument is a list.</p></li>
<li><p>Its second argument is a <strong>test function</strong>. This test function determines the nature of the "equal" test. It has a default value : <strong>'eql</strong>. Values are compared with the Lisp eql function.</p></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/removedup-args.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/removedup-args_1.png" width="300" height="71" alt="removedup-args_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="caption">

<div class="caption_co">

![removing duplicates : One of the two occurences of 6300 has been
removed from the input list.](../res/removedup.png)

</div>

<div class="caption_ti">

removing duplicates : One of the two occurences of 6300 has been removed
from the input list.

</div>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Defining a New Test Function</span>

</div>

<div class="txt">

We would like to remove octaves from a list of pitches, but there is no
such function in OM. To do so, we can use remove-dup with **a new test
function** that can detect octaves in the input pitch list. For
instance, the previous example has two duplicates : 6000 and 7200, a C4
and a C5.

Values can be considered equal according to the octave interval, if they
are compared
<span id="i0" class="defRef_ul"><span>modulo</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc2344)</sup>
the octave interval .

Note that an octave = 1200 cents.

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
<p>The following patch tests if the pitches are equal <strong>modulo an octave</strong> with the function om//.</p>
<ul>
<li><p>The first output of om// returns <strong>the quotient</strong> of the division.</p></li>
<li><p>The second output returns <strong>the remainder</strong> of the division.</p></li>
</ul>
<p>The = predicate tests if the remainders of the division by 1200 of two elements are equal, that is, if these two elements are equal modulo 1200.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/modulotest.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/modulotest_1.png" width="300" height="274" alt="modulotest_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Modulo and Octave</span>

</div>

<div class="txt">

  - Two values are "equal the same modulo" when their division by the
    **same divisor** produces the **same remainder** .
    
    An octave = 1200 cents. If two values are "equal modulo 1200" they
    have an octave relation. This mieans that an euclidean division by
    1200 should return the same remainder. 

<!-- end list -->

  - For instance : C4 is equal to 6000, C5 to 7200. F\#4 is equal to
    6400, F\#5 to 7600.
    
    <table>
    <tbody>
    <tr class="odd">
    <td><p>C4 : (6000 / 1200) = 5, <strong>remainder 0</strong></p>
    <p>C5 : (7200 / 1200) = 6, <strong>remainder 0</strong></p></td>
    <td><p>F#4 : (6400 / 1200) = 5, <strong>remainder 4</strong></p>
    <p>F#5 : (7600 / 1200) = 6, <strong>remainder 4</strong></p></td>
    </tr>
    </tbody>
    </table>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Modifying the Function Behaviour</span>

</div>

<div class="txt">

The new test function can now become the test argument and replace the
defautt eql test of remove-dup .

  - The patch, now on [<span>"lambda" mode</span>](LambdaMode.md) is
    connected to remove-dup as a test argument.

  - The two inlets of the patch indicate that the lambda function takes
    two arguments.

</div>

<div class="caption">

<div class="caption_co">

![Remove-dup can now remove all values whose modulo 1200 is equal to the
modulo 1200 of another value.](../res/modulotest-lambda.png)

</div>

<div class="caption_ti">

Remove-dup can now remove all values whose modulo 1200 is equal to the
modulo 1200 of another value.

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Lambda Patch</span>

</div>

<div class="linkUL">

  - [<span>Lambda Mode Examples: Lambda Patches</span>](LambdaPatch.md)

</div>

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

1.  
    
    <div id="kFootBsktc2344">
    
    <div class="footBskt_itti">
    
    Modulo
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    In computing, the modulo operation finds the **remainder** of
    division of one number by another. If two numbers, a and b , when
    divided by the same n **divisor**, have the same remainder, they are
    **"equal modulo n ".**
    
    \-\> If remainder ( a  / n ) = remainder ( b / n ), a = b , modulo n
    .
    
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
              - [<span>Using Functions as Data</span>](Funcall.md)
              - [<span>Mapcar - Iterations</span>](Mapcar.md)
              - [<span>Lambda Patches</span>](LambdaPatch.md)
              - <span id="i1" class="outLeftSel_yes"><span>Test
                Functions</span></span>
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
précédente</span>](LambdaPatch.md "page précédente(Lambda Patches)")<span class="hidden">
| </span>[<span>page
suivante</span>](Control.md "page suivante(Control Structures)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
