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
</span>[<span>Box Inputs</span>](BoxInputs.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Standard
Inputs</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](BoxInputs.md "page précédente(Box Inputs)")<span class="hidden">
| </span>[<span>page
suivante</span>](AdditionalInputs.md "page suivante(Additional Inputs)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Standard Inputs</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>Information and Default Values</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Getting Information : Tooltips</span>

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
<img src="../res/infobulleinlet.png" width="115" height="76" alt="infobulleinlet.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>To display information about an inlet, keep <code class="keyboard_tl">Cmd</code> pressed while hovering the mouse over the inlet. A tooltip appears and displays </p>
<ul>
<li><span> a parameter name,</span></li>
<li><span>a short documentation about this parameter.</span></li>
</ul>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Default Values</span>

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
<p>All box inputs have default values that are used by the box if no values have been specified by the user, or if the box is not connected to anything.</p>
<p>To visualize the default value of an inlet, hover the mouse over it. If it is connected to any kind of component – such as a value or a box – this default value will be ignored.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/defaultvalue.png" width="69" height="71" alt="The default pitch of a note is 6000 midicents, that is, a C4." />
</div>
<div class="caption_ti">
The default pitch of a note is 6000 midicents, that is, a C4.
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Getting Information about Inputs</span>

</div>

<div class="linkUL">

  - [<span>Documentation and Info</span>](DocAndInfo.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Entering Values</span>

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
<p>To enter a value in an inlet :</p>
<ol>
<li><p>click on it</p></li>
<li><p>type a value in the text field</p></li>
<li><p>validate.</p></li>
</ol>
<p>The value remains hidden unless you hover the mouse over the inlet.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/inletsetvalue.png" width="65" height="82" alt="inletsetvalue.png" />
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
<p><code class="keyboard_tl">SHIFT</code> click on the inlet to display the input value in a connected data box that will remain visible.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/inletshiftclick.png" width="161" height="95" alt="inletshiftclick.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc warning">

<div class="bloc_ti warning_ti">

<span>Saving Values</span>

</div>

<div class="txt">

**Always validate** after entering a value in an inlet :

  - <span> **** click in the window </span>
  - <span>press `Enter`.</span>

This is very important since default values can remain hidden.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Input Menu</span>

</div>

<div class="txt">

When the number of possible values is very limited for an argument, some
functions display a pop up menu where the user can pick the desired
value.

To chose a menu item, click on the input, and click again in the pop up
menu.

</div>

<div class="caption">

<div class="caption_co">

![The list-filter function has three arguments : the numberp predicate,
a list and an action (pass or reject). Here, it passes numbers only
(pass + numberp) and returns (2).](../res/list-filter.png)

</div>

<div class="caption_ti">

The list-filter function has three arguments : the numberp predicate, a
list and an action (pass or reject). Here, it passes numbers only (pass
+ numberp) and returns (2).

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
              - <span id="i2" class="outLeftSel_yes"><span>Standard
                Inputs</span></span>
              - [<span>Additional Inputs</span>](AdditionalInputs.md)
          - [<span>Connections</span>](Connections.md)
          - [<span>Evaluation</span>](Evaluation.md)
          - [<span>Documentation and Info</span>](DocAndInfo.md)
          - [<span>Comments</span>](Comments.md)
          - [<span>Pictures</span>](Pictures.md)
          - [<span>Saving / Reloading a Patch</span>](SavingPatch.md)
          - [<span>Dead Boxes</span>](DeadBox.md)
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
précédente</span>](BoxInputs.md "page précédente(Box Inputs)")<span class="hidden">
| </span>[<span>page
suivante</span>](AdditionalInputs.md "page suivante(Additional Inputs)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
