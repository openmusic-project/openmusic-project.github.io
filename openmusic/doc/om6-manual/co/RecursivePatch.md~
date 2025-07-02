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
</span>[<span>Abstraction</span>](Abstraction.md)<span class="stkSep">
\> </span>[<span>Recursive
Patches</span>](Recursion.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Recursion in
OM</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Recursion.md "page précédente(Recursive Patches)")<span class="hidden">
| </span>[<span>page
suivante</span>](RecursiveTree.md "page suivante(Recursive Trees)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Recursion in OM</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>Creating a Recursion</span>

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
<td><div class="dk_txtRes_txt txt">
<p>A recursive program can be designed putting the reference of a blue patch in its own editor – that is, putting a patch within itself .</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/rec1.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/rec1_1.png" width="300" height="278" alt="Creating a recursion : a patch is dropped into its own editor." /></a>
</div>
<div class="caption_ti">
Creating a recursion : a patch is dropped into its own editor.
</div>
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
<p>If this patch has inputs and outputs, they will also appear on the patch box, so that the patch can be "called from inside itself".</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/rec2.png" width="269" height="214" alt="rec2.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc warning">

<div class="bloc_ti warning_ti">

<span>Infinite Calls / Termination</span>

</div>

<div class="txt">

A **termination condition** is absolutely necessary in a recursive
patch. Otherwise, a succession of infinite calls will be triggered at
the evaluation.

Remind to save all your material before calling a recursive patch.

</div>

</div>

<div class="bloc warning">

<div class="bloc_ti warning_ti">

<span>Internal Patch Recursion</span>

</div>

<div class="txt">

**Do not ever build recursive programs with internal – red – patches, or
with OMLoop boxes.** A function has to be **global** to apply within
itself.

</div>

</div>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Example: Factorial Patch</span>

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
<p>This recursive patch implements a preliminary version of the factorial function. It is called inside itself and calculates fact(n) = n x fact(n-1).</p>
<p><strong>This function has no termination condition.</strong> If it is called in its current state, it will never end.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/fact-1.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/fact-1_1.png" width="200" height="300" alt="fact-1_1.png" /></a>
</div>
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
<p><strong>Termination :</strong></p>
<ul>
<li><span> The n values passed recursively are strictly decreasing, since they are each time equal to n-1. </span></li>
<li><span>Besides, we know that <strong>fact(1) = 1</strong>.</span></li>
<li><span>Therefore, we will add a non recursive branch via omif, applying to cases where n = 1.</span></li>
</ul>
<p>The resulting patch means : i<strong>f</strong> n = 1, then fact(n) = 1 <strong>else</strong>, fact(n) = n x fact(n-1)</p>
<ol>
<li><p>When omif is evaluated, it evaluates the <strong>=</strong> test.</p></li>
<li><p>The = test returns "nil" if n ≠ 1. I t returns "t" if n = 1. <strong>This is the termination condition of the patch.</strong></p></li>
<li><ul>
<li><span> omif returns the value of its second input (1), if it gets "t".</span></li>
<li><span> omif triggers the evaluation of the boxes that are connected to its third input if n ≠ 1. </span></li>
<li><span>The factorial of n is calculated by om-, the fact sub patch and om*. </span></li>
</ul></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/fact-2.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/fact-2_1.png" width="262" height="300" alt="fact-2_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Using Omif</span>

</div>

<div class="linkUL">

  - [<span>Conditional Operators</span>](ConditionalOps.md)

</div>

</div>

<div class="caption">

<div class="caption_co">

![call-fact.png](../res/call-fact.png)

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
              - [<span>Abstraction Boxes</span>](AbsBoxes.md)
              - [<span>Application</span>](AbsApplication.md)
              - [<span>Recursive Patches</span>](Recursion.md)
                  - <span id="i1" class="outLeftSel_yes"><span>Recursion
                    in OM</span></span>
                  - [<span>Recursive Trees</span>](RecursiveTree.md)
          - [<span>Evaluation Modes</span>](EvalModes.md)
          - [<span>Higher-Order Functions</span>](HighOrder.md)
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
précédente</span>](Recursion.md "page précédente(Recursive Patches)")<span class="hidden">
| </span>[<span>page
suivante</span>](RecursiveTree.md "page suivante(Recursive Trees)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
