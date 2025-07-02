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
</span>[<span>Iterations: OMLoop</span>](OMLoop.md)<span class="stkSep">
\> </span><span class="stkSel_yes"><span>General
Features</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](LoopIntro.md "page précédente(Iteration)")<span class="hidden">
| </span>[<span>page
suivante</span>](LoopEvaluators.md "page suivante(Evaluators)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>General Features</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

|                                                                                   |                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="iconButton_tim">![omloop2\_icon.png](../res/omloop2_icon.png)</span> | The OMLoop module is a specific type of abstraction – or patch. It encloses a number of specialized components, which allow to design iterative programs. Programming takes place in the internal editor of OMLoop. |

</div>

</div>

<div class="part">

## <span>OMLoop Editor and Components</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Editor</span>

</div>

<div class="txt">

To open the OMLoop editor, double click on the OMLoop box.

</div>

<div class="caption">

<div class="caption_co">

![The OMLoop editor resembles a patch editor.](../res/loopeditor.png)

</div>

<div class="caption_ti">

The OMLoop editor resembles a patch editor.

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Components</span>

</div>

<div class="txt">

OMLoop provides three types of programming components :

</div>

<div class="caption">

<div class="caption_co">

![loopcomponents1.png](../res/loopcomponents1.png)

</div>

</div>

<div class="txt">

  - **iterators** : determine and stop the iteration process.

  - **accumulators** : gather the result at each step of the iteration
    in the ongoing process until the iteration is over.
    
    Iterators and accumulators are visible at the top of the OMLoop
    editor and can be added with a click. The choice of iterators and
    accumulators depends on the iteration program.

<!-- end list -->

  - **evaluators** : trigger the evaluation and return the results, at
    each step or at the end of the iteration.
    
    The eachtime and finally evaluators are essential components which
    are displayed by default in the editor. Initdo can be added typing
    its name in the editor.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Adding Inputs and Outputs</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

<table>
<tbody>
<tr class="odd">
<td><p><span class="iconButton_tim"><img src="../res/omloop2_icon.png" class="sfile_icon-png_icon-gif_icon" width="31" height="36" alt="omloop2_icon.png" /></span></p></td>
<td><p>Initially, the OMLoop box has only <strong>one output</strong> <strong>and no input</strong> : programming can be done without the use of external data, like with a patch.</p>
<p>Additional outputs and inputs can be added using the following procedures.</p></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Inputs</span>

</div>

<div class="txt">

|                                                                                       |                                                                                                                                        |
| ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="iconButton_tim">![inputloop\_icon.png](../res/inputloop_icon.png)</span> | **Inputs** transfer incoming data to the programming functions of OMLoop. They are represented green top-down arrow inside the editor. |

</div>

<div class="caption">

<div class="caption_co">

![The OMLoop editor shows additional inputs, as well as a number of
default internal components.](../res/addinputsloop.png)

</div>

<div class="caption_ti">

The OMLoop editor shows additional inputs, as well as a number of
default internal components.

</div>

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
<img src="../res/omloop-box.png" width="145" height="60" alt="omloop-box.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p><strong></strong> To add or delete an input in the OMLoop box,</p>
<ul>
<li><p>press <code class="keyboard_tl">Alt</code> +  <code class="keyboard_tl">→</code> or <code class="keyboard_tl">←</code></p></li>
<li><p>press  <code class="keyboard_tl">&gt;</code> or <code class="keyboard_tl">&lt;</code>.</p></li>
</ul>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Outputs</span>

</div>

<div class="txt">

OMLoop outputs are managed with another procedure.

</div>

<div class="txt">

<table>
<tbody>
<tr class="odd">
<td><p><span class="iconButton_tim"><img src="../res/finally-box_icon.png" class="sfile_icon-png_icon-gif_icon" width="31" height="38" alt="finally-box_icon.png" /></span></p></td>
<td><p>The finally evaluator represents the <strong>visible output(s)</strong> of OMLoop. It returns the results of the iteration. <strong>Outputs</strong> can therefore be added and deleted by adding or deleting <strong>optional inputs</strong> to and from Finally.</p></td>
</tr>
<tr class="even">
<td><p><span class="iconButton_tim"><img src="../res/finally-box2_icon.png" class="sfile_icon-png_icon-gif_icon" width="45" height="39" alt="finally-box2_icon.png" /></span></p></td>
<td><p>To add or delete inputs to finally :</p>
<ul>
<li><p>press <code class="keyboard_tl">Alt</code> + <code class="keyboard_tl">→</code> or <code class="keyboard_tl">← </code></p></li>
<li><p>press <code class="keyboard_tl">&gt;</code> or <code class="keyboard_tl">&lt;</code> .</p></li>
</ul></td>
</tr>
<tr class="odd">
<td><p><span class="iconButton_tim"><img src="../res/addoutloop_icon.png" class="sfile_icon-png_icon-gif_icon" width="29" height="37" alt="addoutloop_icon.png" /></span></p></td>
<td><p>Outputs also represented on the OMLoop icon once added.</p></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About Evaluators :</span>

</div>

<div class="linkUL">

  - [<span>Evaluators : Eachtime, Finally,
    Initdo</span>](LoopEvaluators.md)

</div>

</div>

</div>

<div class="bloc warning">

<div class="bloc_ti warning_ti">

<span>About Evaluation in OMLoops</span>

</div>

<div class="txt">

  - An OMLoop can't be evaluated from the inside of its editor. It will
    be ineffective until its internal program is defined correctly.

  - Do not evaluate it before it is completed : an infinite loop might
    get OM stuck for a while...

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
          - [<span>Iterations: OMLoop</span>](OMLoop.md)
              - [<span>Iteration</span>](LoopIntro.md)
              - <span id="i2" class="outLeftSel_yes"><span>General
                Features</span></span>
              - [<span>Evaluators</span>](LoopEvaluators.md)
              - [<span>Iterators</span>](LoopIterators.md)
              - [<span>Accumulators</span>](LoopAccumulators.md)
              - [<span>Example : A Random Series</span>](LoopExample.md)
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
précédente</span>](LoopIntro.md "page précédente(Iteration)")<span class="hidden">
| </span>[<span>page
suivante</span>](LoopEvaluators.md "page suivante(Evaluators)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
