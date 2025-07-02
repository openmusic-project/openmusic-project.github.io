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
\>
</span>[<span>Application</span>](AbsApplication.md)<span class="stkSep">
\> </span><span class="stkSel_yes"><span>Inputs /
Outputs</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](AbsApplication.md "page précédente(Application)")<span class="hidden">
| </span>[<span>page
suivante</span>](AbsInputBoxes.md "page suivante(Input Boxes)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Inputs / Outputs</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>Creating Connections to the Outside</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Once a patch is added in another patch editor, it can be used as an
<span id="i2" class="defRef_ul"><span>abstraction</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc1802)</sup>.

An abstraction can have as many inlets and outlets as necessary to
establish connections with other boxes.

  - Values are returned by the inlets from the outside to the sub patch
    .

  - Results of computations are returned by the outlets to the outside.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Adding Inputs and Outputs</span>

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
<p>Inputs and outputs are added with a click on the <span class="iconButton_tim"><img src="../res/greenarrow_icon.png" class="sfile_icon-png_icon-gif_icon" width="18" height="18" alt="greenarrow_icon.png" /></span> and <span class="iconButton_tim"><img src="../res/bluearrow_icon.png" class="sfile_icon-png_icon-gif_icon" width="18" height="19" alt="bluearrow_icon.png" /></span> arrow icons in the open patch.</p>
<p>To add the desired number of inputs and outputs, click as many times as necessary on the corresponding icons. Inlets and outlets will appear on the sub patch icon.</p>
<p>Connections to other boxes in the patch editor can then be created.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/inout.png" width="193" height="223" alt="inout.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Internal Evaluation</span>

</div>

<div class="caption">

<div class="caption_co">

![InternalEvaluationExample\_scr.png](../res/InternalEvaluationExample_scr.png)

</div>

<div class="caption_ti">

[<span>Zoom</span>](../res/InternalEvaluationExample_scr_1.png "Zoom (nouvelle fenêtre)")

</div>

</div>

<div class="txt">

An internal patch can potentially be used in an infinite number of
configurations. Hence, if a patch is assigned input boxes, OM considers
that these boxes can get any values from the outside. Consequentely,
when a patch with input boxes is evaluated from the inside, the values
outside the patch are ignored, and OM returns "nil".

To be evaluated, a program that is assigned values from the outside of a
patch must be evaluated from the outside of the patch , via its output.

If an internal patch is assigned its own default values , it can then be
evaluated from the inside.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Assigning Default Values to Input Boxes</span>

</div>

<div class="linkUL">

  - [<span>Input Boxes</span>](AbsInputBoxes.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Naming Inputs and Outputs</span>

</div>

<div class="txt">

To rename inputs and outputs :

|                                                                                                                                               |                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 1\. double click on the name of the icon :<span class="iconButton_tim">![changenameinput\_icon.png](../res/changenameinput_icon.png)</span> , | 2\. edit it and validate : <span class="iconButton_tim">![result\_icon.png](../res/result_icon.png)</span>. |

This has no effect on the input or output's behaviour.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>More Information about Input Boxes Edition :</span>

</div>

<div class="linkUL">

  - [<span>Input Boxes</span>](AbsInputBoxes.md)

</div>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Viewing Inlets and Outlets</span>

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
<p>Inlets and outlets of blue patches are not visible in the workspace.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/inletsoutlets1.png" width="170" height="89" alt="inletsoutlets1.png" />
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
<td><div class="caption">
<div class="caption_co">
<img src="../res/display.png" width="206" height="90" alt="display.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>To display information about inputs and outputs names, as well as a possible documentation, keep <code class="keyboard_tl">Cmd</code> pressed while hovering the mouse over them.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Example : Using a Sub Patch as a Functional Abstraction</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Once a patch is added one or more inputs and connected to other items,
it can manipulate **variables**, just like a function does. These
variables are taken as arguments by the function. Data returned by the
abstraction output(s) can also become variables for other boxes or for
other functional abstractions.

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>A "Large" Program</span>

</div>

<div class="txt">

The following program is quite developed. It could be used as a
subordinate and coherent element in a more important patch. We will
integrate it in a patch to use it as an abstraction.

</div>

<div class="caption">

<div class="caption_co">

![Building successive chords from a chord
multiplication.](../res/chordmult.png)

</div>

<div class="caption_ti">

Building successive chords from a chord multiplication.

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Adding Inputs and Outputs to the Patch</span>

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
<ul>
<li><span>Two input boxes are substituted to the parameters of the random-list function.</span></li>
<li><span>One output box is substituted to the chord-seq to return the result of the computation to the outside of the patch.</span></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/chordmult1A.png" width="137" height="194" alt="chordmult1A.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Functional Call of the Patch</span>

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
<p>The patch is dropped into <strong>another patch editor</strong> .</p>
<ol>
<li><p>Values can now be sent to the inputs of random-list from the outside of the patch, via the patch inputs.</p></li>
<li><ul>
<li><span>The resulting data can also be returned to other boxes and be manipulated. </span></li>
<li><span>The result of the computation can also be materialized by an external chord-seq box, via its "midics" input.</span></li>
</ul></li>
</ol>
<p>Hence, the patch behaves like a function within a "larger-scale" program.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/chordm.png" width="227" height="217" alt="chordm.png" />
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
    
    <div id="kFootBsktc1802">
    
    <div class="footBskt_itti">
    
    Functional Abstraction
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    A functional abstraction is a program whose some elements can become
    variables, via connections to the outside environment. Hence, this
    program must have inputs or outputs that can be connected to
    external variable elements. The resulting functional abstraction can
    then be embedded into other programs to be used as a functional
    component.
    
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
              - [<span>Abstraction Boxes</span>](AbsBoxes.md)
              - [<span>Application</span>](AbsApplication.md)
                  - <span id="i3" class="outLeftSel_yes"><span>Inputs /
                    Outputs</span></span>
                  - [<span>Input Boxes</span>](AbsInputBoxes.md)
              - [<span>Recursive Patches</span>](Recursion.md)
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
précédente</span>](AbsApplication.md "page précédente(Application)")<span class="hidden">
| </span>[<span>page
suivante</span>](AbsInputBoxes.md "page suivante(Input Boxes)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
