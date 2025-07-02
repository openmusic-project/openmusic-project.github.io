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
</span>[<span>Interface
Boxes</span>](InterfaceBoxes.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>List Boxes</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](CheckBox.md "page précédente(Check Box)")<span class="hidden">
| </span>[<span>page suivante</span>](Button.md "page suivante(Button)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Selection : List Boxes</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

List selection boxes allow to select one or several items among a list,
return and use it/them in downstream computations.

There exist two list selection boxes :

  - **single-item-list**

  - **multi-item-list**

</div>

</div>

<div class="part">

## <span>Features</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Inputs and Outputs</span>

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
<img src="../res/lists-boxes.png" width="111" height="83" alt="lists-boxes.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>List selection boxes have one input and one output :</p>
<ul>
<li><p>the "items" input is a <strong>list of atoms or strings</strong> to be displayed in the list</p></li>
<li><p>the output returns the selected item(s).</p></li>
</ul>
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
<img src="../res/evaluno.png" width="300" height="173" alt="evaluno.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>To set the content of a box :</p>
<ul>
<li><p>click or <code class="keyboard_tl">SHIFT</code> click on the box's input,</p></li>
<li><p>enter a list of items in the argument's data box.</p></li>
</ul>
<p>When evaluated, the box returns the selected item.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Default Item</span>

</div>

<div class="txt">

By default, the first item is selected and reset when the box is
initialized.

</div>

</div>

<div class="bloc warning">

<div class="bloc_ti warning_ti">

<span>Lock the Box to Preserve Its Items</span>

</div>

<div class="txt">

If the box is not locked, the selected item as well as the list of items
will be reinitialized when the box is evaluated.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Boxes</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Single-Item-List</span>

</div>

<div class="txt">

The **single-item-list** allows to select only one item at a time.

To select an item,

1.  press `b` to lock the box,

2.  click on an item.

</div>

<div class="caption">

<div class="caption_co">

![singleitem.png](../res/singleitem.png)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Multi-Item-List</span>

</div>

<div class="txt">

This box allows to select one or more items, which are returned as a
list.

The **multi-item-list** is edited and used as as single-item-list .

  - To select consecutive items or all the items of the box, `SHIFT`
    click on the items or click and drag them.

  - To select independent items, `Cmd` click on them.

</div>

<div class="caption">

<div class="caption_co">

![multiitem.png](../res/multiitem.png)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>A Musical Application : an Extended Example</span>

<div class="part_co">

<div class="infobloc">

<div class="linkSet">

<div class="linkSet_ti">

<span>Building a Triad with an Item-List-Box, a Button-Box, and a Check
Box</span>

</div>

<div class="linkUL">

  - [<span>Using the Interface Boxes :
    Example</span>](InterfaceExample.md)

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
      - [<span>Visual Programming
        II</span>](AdvancedVisualProgramming.md)
          - [<span>Abstraction</span>](Abstraction.md)
          - [<span>Evaluation Modes</span>](EvalModes.md)
          - [<span>Higher-Order Functions</span>](HighOrder.md)
          - [<span>Control Structures</span>](Control.md)
          - [<span>Iterations: OMLoop</span>](OMLoop.md)
          - [<span>Instances</span>](Instances.md)
          - [<span>Interface Boxes</span>](InterfaceBoxes.md)
              - [<span>General Features</span>](GeneralFeatures.md)
              - [<span>Text Boxes</span>](TextBoxes.md)
              - [<span>Check Box</span>](CheckBox.md)
              - <span id="i3" class="outLeftSel_yes"><span>List
                Boxes</span></span>
              - [<span>Button</span>](Button.md)
              - [<span>Slider Box</span>](Slider.md)
              - [<span>Pop-Up Menu Box</span>](MenuBoxes.md)
              - [<span>Examples of Use</span>](InterfaceExample.md)
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
précédente</span>](CheckBox.md "page précédente(Check Box)")<span class="hidden">
| </span>[<span>page suivante</span>](Button.md "page suivante(Button)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
