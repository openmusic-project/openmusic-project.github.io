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
</span><span class="stkSel_yes"><span>Lambda
Patches</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Mapcar.md "page précédente(Mapcar - Iterations)")<span class="hidden">
| </span>[<span>page
suivante</span>](LambdaTest.md "page suivante(Test Functions)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Lambda Mode Examples: Lambda Patches</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

Predefined functions on "lambda" mode may not always be adapted for
higher-order processes. [<span>Patch boxes</span>](AbsBoxes.md) can also
be set on [<span> "lambda" evaluation mode</span>](LambdaMode.md) : they
can represent more flexible functional arguments.

</div>

</div>

<div class="infobloc">

<div class="txt">

**Any patch** designed to process data can be used as a lambda function
and perform its process in a higher-order function.

</div>

</div>

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
<td><div class="caption">
<div class="caption_co">
<a href="../res/expatch.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/expatch_1.png" width="300" height="273" alt="expatch_1.png" /></a>
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>This patch converts a frequency (Hz) in a midicent value and rounds it to the closest fraction of a tone expressed in midicents. Note that a tone represents 200 midicents.</p>
<ul>
<li><p>The frequency value is assigned to the first input.</p></li>
<li><p>The fraction is defined in the second input.</p></li>
</ul>
<p>In this case, 479Hz = 7048. This value is rounded to the closest 1/4 tone, that is, 200/4 = 50.</p>
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
<p>The same patch box can be used on lambda mode with mapcar in order to process a list of input values. Mapcar applies a function to the items of one or more lists, successively.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/patch-mapcar.png" width="285" height="236" alt="patch-mapcar.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>The mapcar function</span>

</div>

<div class="linkUL">

  - [<span>Lambda Mode Examples: Mapcar - Iterations</span>](Mapcar.md)

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
              - [<span>Mapcar - Iterations</span>](Mapcar.md)
              - <span id="i0" class="outLeftSel_yes"><span>Lambda
                Patches</span></span>
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
précédente</span>](Mapcar.md "page précédente(Mapcar - Iterations)")<span class="hidden">
| </span>[<span>page
suivante</span>](LambdaTest.md "page suivante(Test Functions)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
