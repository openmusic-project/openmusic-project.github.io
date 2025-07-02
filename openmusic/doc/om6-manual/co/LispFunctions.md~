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
</span>[<span>Lisp Programming</span>](Lisp.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Lisp Function
Boxes</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](LispInOM.md "page précédente(Lisp Code in OM)")<span class="hidden">
| </span>[<span>page
suivante</span>](LowLevel.md "page suivante(Lisp Tools)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Lisp Function Boxes</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

Writing a function or procedure in Lisp can be more convenient that the
creation of a visual program. **Lisp Function boxes** are abstractions
defined in Lisp textually. Like visual abstractions

  - they can be internal to a patch
    <span class="iconButton_tim">![lispfunction\_icon\_1.png](../res/lispfunction_icon_1.png)</span>
    – red

  - or defined globally in the environment and workspace 
    <span class="iconButton_tim">![lispfunctionblue\_icon.png](../res/lispfunctionblue_icon.png)</span>–blue.

</div>

</div>

<div class="part">

## <span>Creating Lisp Functions</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Internal Lisp Function (Red)</span>

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
<img src="../res/addinternallisp.png" width="300" height="228" alt="addinternallisp.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>To create a new Lisp function in a patch you can either</p>
<ul>
<li><p>use the contextual menu <code class="menuPath_tl">Internal / Lisp Function</code> in the patch editor</p></li>
<li><p>or <code class="keyboard_tl">Cmd</code> click and type "lisp".</p></li>
</ul>
<p>A new box will appear, with one output. It doesn't have a default input. This box behaves externally as a red patch box — internal abstraction —.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Internal Abstractions</span>

</div>

<div class="linkUL">

  - [<span>Internal Abstractions</span>](RedAbstraction.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Global Lisp Function (Blue)</span>

</div>

<div class="caption">

<div class="caption_co">

![addlispfunction.png](../res/addlispfunction.png)

</div>

</div>

<div class="txt">

To create a **global Lisp Function** like a patch or a maquette, use the
`File / New Function` menu item in the workspace or folder windows.

The new Lisp function created here can be used in several locations,
just like a blue patch. All its representations will refer to this same
master function.

</div>

<div class="txt">

The box created will (externally) behave as a blue patch box.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Global Abstraction</span>

</div>

<div class="linkUL">

  - [<span>Standard Abstraction</span>](BlueAbstraction.md)

</div>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Lisp Functions Conversion</span>

</div>

<div class="txt">

Red and blue Lisp functions can also be converted with the standard
patch conversion procedures.

</div>

<div class="caption">

<div class="caption_co">

![internaliza.png](../res/internaliza.png)

</div>

</div>

<div class="txt">

To globalize a red lisp function, drag it to the workspace. The function
will be converted automatically.

To rename the function, rename it from the workspace.

</div>

<div class="caption">

<div class="caption_co">

![internalize.png](../res/internalize.png)

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
<td><div class="dk_txtRes_txt txt">
<p>To internalize a blue lisp function, select it and press <code class="keyboard_tl">a</code>. It can then be copied and renamed freely in the patch.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/renameinternalfunction.png" width="166" height="58" alt="renameinternalfunction.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Converting Internal/Global Abstractions</span>

</div>

<div class="linkUL">

  - [<span>Conversions</span>](AbsConversion.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Editing Lisp Functions</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Lisp Function Editor</span>

</div>

<div class="caption">

<div class="caption_co">

![editfunction.png](../res/editfunction.png)

</div>

</div>

<div class="txt">

Double click a Lisp Function box to edit its contents. The window that
opens is similar to a Lisp editor.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>The Lisp Editor</span>

</div>

<div class="linkUL">

  - [<span>Writing/Evaluating Lisp Code : The Lisp
    Editor</span>](LispEditor.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Writing Lisp Functions</span>

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
<p>The function must be written as a <strong>lambda expression</strong> with a given number of arguments. The editor provides a default basic edition pattern showing the components of such lambda expression.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/lambdapattern.png" width="300" height="28" alt="lambdapattern.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>What is a Lambda Expression ?</span>

</div>

<div class="linkUL">

  - [<span>Introduction to Lisp</span>](LispIntro.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Arguments and Inputs</span>

</div>

<div class="caption">

<div class="caption_co">

![lambda1.png](../res/lambda1.png)

</div>

</div>

<div class="txt">

When the Lisp editor of the box is closed, the number of inputs is
updated according to the number of arguments of the function, if
arguments have been added or deleted.

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Unique Output</span>

</div>

<div class="txt">

Lisp functions can have only one output, which corresponds to the value
returned by the Lambda expression.

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
      - [<span>Basic Tools</span>](BasicObjects.md)
      - [<span>Score Objects</span>](ScoreObjects.md)
      - [<span>Maquettes</span>](Maquettes.md)
      - [<span>Sheet</span>](Sheet.md)
      - [<span>MIDI</span>](MIDI.md)
      - [<span>Audio</span>](Audio.md)
      - [<span>SDIF</span>](SDIF.md)
      - [<span>Lisp Programming</span>](Lisp.md)
          - [<span>Introduction to Lisp</span>](LispIntro.md)
          - [<span>The Lisp Editor</span>](LispEditor.md)
          - [<span>The Listener</span>](LispListener.md)
          - [<span>Lisp Code in OM</span>](LispInOM.md)
          - <span id="i2" class="outLeftSel_yes"><span>Lisp Function
            Boxes</span></span>
          - [<span>Lisp Tools</span>](LowLevel.md)
          - [<span>Writing an OM Library</span>](LispUserLib.md)
          - [<span>Writing Code for OM</span>](LispForOM.md)
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
précédente</span>](LispInOM.md "page précédente(Lisp Code in OM)")<span class="hidden">
| </span>[<span>page
suivante</span>](LowLevel.md "page suivante(Lisp Tools)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
