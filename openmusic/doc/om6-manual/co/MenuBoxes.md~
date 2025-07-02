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
</span><span class="stkSel_yes"><span>Pop-Up Menu
Box</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Slider.md "page précédente(Slider Box)")<span class="hidden">
| </span>[<span>page
suivante</span>](InterfaceExample.md "page suivante(Examples of Use)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Selecting Items and Triggering Actions: Pop-Up Menu Box</span>

<div class="headCo_co">

<div class="secOutFra">

<div class="secOutTi">

[<span>Sommaire </span>](#)

</div>

<div class="secOutUi">

1.  [Features](#ddN33)
2.  [Settings](#ddNb2)
3.  [Uses](#ddN123)
4.  [A Musical Application : an Extended Example](#ddN1db)

</div>

</div>

<div>

<div class="infobloc">

<div class="txt">

The **pop-up-menu** box allows to

  - select items of a list in a pop-up menu interface

  - trigger a computation corresponding to a selected item.

To some extent, it resembles the items-list boxes.

</div>

</div>

<div class="part">

## <span>Features</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Inputs</span>

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
<img src="../res/popupbox.png" width="298" height="83" alt="popupbox.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The pop-up-menu box has two inputs :</p>
<ul>
<li><p>"items" : a list of menu items</p></li>
<li><p>"action" : an action to perform, represented by a lambda function or lambda patch.</p></li>
</ul>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc warning">

<div class="bloc_ti warning_ti">

<span>Outputs</span>

</div>

<div class="txt">

The two outputs are independent from the inputs :

  - the first output returns the **index of the selected item**.

  - the second output : returns **the value of the selected item as a
    text**.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Settings</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Menu</span>

</div>

<div class="caption">

<div class="caption_co">

![popup1.png](../res/popup1.png)

</div>

</div>

<div class="txt">

To set the menu items, edit the first input, select the box and
evaluate.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Selected Item Value</span>

</div>

<div class="txt">

Click on the menu to select an item. When the box is evaluated :

  - The first output returns the number corresponding to the selected
    item. **Note that the first menu item is equal to 0**.

  - The second output returns the value of the selected item as text.

</div>

<div class="caption">

<div class="caption_co">

![valuemaybe.png](../res/valuemaybe.png)

</div>

</div>

</div>

<div class="bloc warning">

<div class="bloc_ti warning_ti">

<span>Locking the Menu</span>

</div>

<div class="txt">

Mind locking the box before the evaluation : otherwize, the selected
item might be reinitialized (by default to the first item in the list).

</div>

</div>

</div>

</div>

<div class="part">

## <span>Uses</span>

<div class="part_co">

<div class="bloc tip">

<div class="bloc_ti tip_ti">

<span>Tip : Selecting Files</span>

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
<a href="../res/menu-dir.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/menu-dir_1.png" width="300" height="113" alt="Using a directory to initialize the menu contents." /></a>
</div>
<div class="caption_ti">
Using a directory to initialize the menu contents.
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The pop-up-menu box can be useful for selecting files in a folder.</p>
<p>Connect a <strong>folder pathname</strong> to the first output of the pop up box : the menu items will stand for the files contained in the folder.</p>
<p>The infile and outfile boxes are designed to return a <strong>directory pathname</strong> to the files contained in the <code class="filePath_tl">in-files</code> and <code class="filePath_tl">outfiles</code> folder of the current workspace. They can be connected to the pop-up-menu to list and select files in these folders.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Triggering an Operation</span>

</div>

<div class="txt">

The second input of the menu can be used for triggering an operation
using the selected item as parameter. This input must be connected to a
function or a [<span>box on "lambda" mode</span>](LambdaMode.md) with
one input or argument.

To set or modify the function associated with the menu, connect a box or
function, then evaluate the box .

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
<p>The lambda function is called when an item is selected.</p>
<p>The index of this item is the number returned by the first output. It is the argument of the function.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/menu-action.png" width="193" height="111" alt="The value of the selected item – a number between 0 and 2 – is printed in the listener at selection." />
</div>
<div class="caption_ti">
The value of the selected item – a number between 0 and 2 – is printed in the listener at selection.
</div>
</div></td>
</tr>
</tbody>
</table>

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

<span>Choosing and Listening to a Sound with a Pop-Up-Menu Box</span>

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
              - [<span>List Boxes</span>](ListBoxes.md)
              - [<span>Button</span>](Button.md)
              - [<span>Slider Box</span>](Slider.md)
              - <span id="i4" class="outLeftSel_yes"><span>Pop-Up Menu
                Box</span></span>
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
précédente</span>](Slider.md "page précédente(Slider Box)")<span class="hidden">
| </span>[<span>page
suivante</span>](InterfaceExample.md "page suivante(Examples of Use)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
