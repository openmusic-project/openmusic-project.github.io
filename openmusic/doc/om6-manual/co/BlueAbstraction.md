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
</span><span class="stkSel_yes"><span>Standard
Abstraction</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](AbsBoxes.md "page précédente(Abstraction Boxes)")<span class="hidden">
| </span>[<span>page
suivante</span>](RedAbstraction.md "page suivante(Internal Abstractions)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Standard Abstraction</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

This section deals with the integration of an existing patch
<span class="iconButton_tim">![bluepatch\_icon.png](../res/bluepatch_icon.png)</span>
in another patch.

</div>

</div>

<div class="part">

## <span>Adding a Patch From the Workspace to Another Patch</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Procedure</span>

</div>

<div class="txt">

To be used as an abstraction, a patch can be dragged from the
**workspace window** to another **patch editor** .

The abstraction **refers** to the patch located in the workspace.

</div>

<div class="caption">

<div class="caption_co">

![dragpatchinpatch.png](../res/dragpatchinpatch.png)

</div>

</div>

<div class="txt">

Consequently :

  - the abstraction and the patch in the workspace have the same name
    and icon,

  - the representation of the patch remains visible in the workspace :
    it hasn't been moved to the patch editor,

  - both items will be affected by subsequent operations performed in
    the abstraction.

</div>

<div class="caption">

<div class="caption_co">

![No matter where the patch is open from, the editor displayed is the
same.](../res/masteraffect.png)

</div>

<div class="caption_ti">

No matter where the patch is open from, the editor displayed is the
same.

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Preserving the Master of a Patch</span>

</div>

<div class="linkUL">

  - [<span>Saving / Reloading a Patch</span>](SavingPatch.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Using Duplicates</span>

</div>

<div class="txt">

Several patch boxes with the same reference can coexist in a patch
editor. Hence, the same function can be used at several steps of a
program. When an abstraction is duplicated, another box, which refers to
the same master patch, is created. Subsequent modifications to the
reference patch will therefore affect both items.

</div>

<div class="caption">

<div class="caption_co">

![One representation of patch1 has been added inputs. The other
representation has been added outputs. Both items have been equally and
simultaneously modified.](../res/step2.png)

</div>

<div class="caption_ti">

One representation of patch1 has been added inputs. The other
representation has been added outputs. Both items have been equally and
simultaneously modified.

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Managing Abstractions in the Workspace</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Renaming an Abstraction</span>

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
<img src="../res/rename.png" width="223" height="205" alt="rename.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>A blue patch can only be renamed in the workspace.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Deleting a Patch from the Workspace</span>

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
<p><strong>In a workspace</strong>, nothing shows that a blue patch is used as an abstraction : this must be taken into account when organizing it.</p>
<p>A warning pops up if one attempts to delete a patch used as an abstraction in another patch. If it is deleted its reference in the other patch editor will be replaced by a <a href="SavingPatch.md"><span>dead box</span></a> <span class="iconButton_tim"><img src="../res/skull_icon.png" class="sfile_icon-png_icon-gif_icon" width="12" height="16" alt="skull_icon.png" /></span>.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/warning.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/warning_1.png" width="300" height="177" alt="warning_1.png" /></a>
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
                  - <span id="i2" class="outLeftSel_yes"><span>Standard
                    Abstraction</span></span>
                  - [<span>Internal
                    Abstractions</span>](RedAbstraction.md)
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
précédente</span>](AbsBoxes.md "page précédente(Abstraction Boxes)")<span class="hidden">
| </span>[<span>page
suivante</span>](RedAbstraction.md "page suivante(Internal Abstractions)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
