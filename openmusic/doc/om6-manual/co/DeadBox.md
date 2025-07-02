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
I</span>](BasicVisualProgramming.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Dead Boxes</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](SavingPatch.md "page précédente(Saving / Reloading a Patch)")<span class="hidden">
| </span>[<span>page
suivante</span>](AdvancedVisualProgramming.md "page suivante(Visual Programming II)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Missing References : Dead Boxes</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

An item used in a patch may sometimes be missing. **Dead boxes**
<span class="iconButton_tim">![skull\_icon.png](../res/skull_icon.png)</span>
refer to saved items that OM cannot find anymore :

  - <span>if an item belongs to a library that was loaded at a previous
    session, and that this library isn't reloaded,</span>
  - <span>if an OM function doesn't exist in a new OM version, </span>
  - <span>If a sub patch that was used in another patch is missing in a
    workspace.</span>

</div>

<div class="txt">

Dead boxes have been designed to keep as much information as possible
about their original reference, so that they can possibly be loaded
again correctly.

</div>

</div>

<div class="part">

## <span>Dead Boxes</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

If the user tries to open a dead box or to get information or
documentation, the box doc will say "I have lost my reference, I am
dead"...

</div>

<div class="caption">

<div class="caption_co">

![dead.png](../res/dead.png)

</div>

</div>

<div class="txt">

... or a message of the same kind.

</div>

<div class="caption">

<div class="caption_co">

![deadboxwindows.png](../res/deadboxwindows.png)

</div>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Note</span>

</div>

<div class="txt">

When a dead box "knows" which reference – class or function for instance
– it was attached to, it can possibly be restored. Its reference must be
loaded again or re-created before the patch is reloaded. To reload a
patch containing dead boxes, use the "Last Saved" command.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Saving Procedures</span>

</div>

<div class="linkUL">

  - [<span>Saving / Reloading a Patch</span>](SavingPatch.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Finding Lost Patches</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

If a patch reference is missing in the workspace, OM will point it out
and offer to find it. If the item can't be found, the user will be
offered to look for it by himself.

</div>

<div class="caption">

<div class="caption_co">

![Looking for the reference of a dead box.](../res/deadpatches_scr.png)

</div>

<div class="caption_ti">

Looking for the reference of a dead
box.[<span>Zoom</span>](../res/deadpatches_scr_1.png "Zoom (nouvelle fenêtre)")

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>What Is a Patch Reference ?</span>

</div>

<div class="linkUL">

  - [<span>Standard Abstraction</span>](BlueAbstraction.md)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>See also : Workspace / Adding Components in a Workspace at a
Session : Import and Export Functions</span>

</div>

<div class="linkUL">

  - [<span>Workspace</span>](Workspace.md)

</div>

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
          - [<span>Patch Introduction</span>](ProgrammingIntro.md)
          - [<span>Adding Boxes Into a Patch</span>](AddingBoxes.md)
          - [<span>Elementary Manipulations</span>](ElementaryManips.md)
          - [<span>Boxes</span>](Boxes.md)
          - [<span>Box Inputs</span>](BoxInputs.md)
          - [<span>Connections</span>](Connections.md)
          - [<span>Evaluation</span>](Evaluation.md)
          - [<span>Documentation and Info</span>](DocAndInfo.md)
          - [<span>Comments</span>](Comments.md)
          - [<span>Pictures</span>](Pictures.md)
          - [<span>Saving / Reloading a Patch</span>](SavingPatch.md)
          - <span id="i2" class="outLeftSel_yes"><span>Dead
            Boxes</span></span>
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
précédente</span>](SavingPatch.md "page précédente(Saving / Reloading a Patch)")<span class="hidden">
| </span>[<span>page
suivante</span>](AdvancedVisualProgramming.md "page suivante(Visual Programming II)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
