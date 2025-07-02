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
\> </span>[<span>Abstraction
Boxes</span>](AbsBoxes.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Internal
Abstractions</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](BlueAbstraction.md "page précédente(Standard Abstraction)")<span class="hidden">
| </span>[<span>page
suivante</span>](AbsConversion.md "page suivante(Conversions)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Internal Abstractions</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

Internal abstractions are only created in patch editors. They are
represented by **red patch boxes**
<span class="iconButton_tim">![redpatch\_icon.png](../res/redpatch_icon.png)</span>
. This section shows how to add an **internal abstraction** into a
patch.

A red patch is autonomous :

  - it is not attached to any external reference, conversely to a blue
    patch,

  - it only "exists" inside the patch where it was created.

</div>

</div>

<div class="part">

## <span>Adding an Internal Abstraction : Procedures</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Contextual Menu</span>

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
<p>To add an internal – red – patch in a patch editor :</p>
<ol>
<li><p><code class="keyboard_tl">Ctrl</code> / right click in the patch editor</p></li>
<li><p>choose <code class="menuPath_tl">Internal / Patch</code>.</p></li>
</ol>
<p>Double click on its name to edit it.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/addinternal.png" width="300" height="288" alt="addinternal.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Directly in the Patch Editor</span>

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
<p>To add an internal patch directly in a patch editor :</p>
<ul>
<li><p><code class="keyboard_tl">Cmd</code> click in the patch editor</p></li>
<li><p>type "patch" and validate.</p></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/createredpatch.png" width="203" height="150" alt="createredpatch.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Internal Programming</span>

</div>

<div class="txt">

An internal patch is programmed just as in any patch, without
restriction.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Duplicates</span>

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
<p>An internal abstraction cannot be affected by the modification of a possible duplicate.</p>
<p>Here a duplicate has been added inputs and outputs : the master item is preserved.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/duplicatered.png" width="254" height="173" alt="duplicatered.png" />
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
                  - [<span>Standard
                    Abstraction</span>](BlueAbstraction.md)
                  - <span id="i2" class="outLeftSel_yes"><span>Internal
                    Abstractions</span></span>
                  - [<span>Conversions</span>](AbsConversion.md)
              - [<span>Application</span>](AbsApplication.md)
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
précédente</span>](BlueAbstraction.md "page précédente(Standard Abstraction)")<span class="hidden">
| </span>[<span>page
suivante</span>](AbsConversion.md "page suivante(Conversions)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
