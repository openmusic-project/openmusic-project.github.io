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
</span>[<span>Boxes</span>](Boxes.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Data Boxes</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](GraphicFeatures.md "page précédente(Boxes Features)")<span class="hidden">
| </span>[<span>page
suivante</span>](FunctionBoxes.md "page suivante(Function Boxes)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Data Boxes</span>

<div class="headCo_co">

<div class="secOutFra">

<div class="secOutTi">

[<span>Sommaire </span>](#)

</div>

<div class="secOutUi">

1.  [Use](#tN1e)
2.  [Adding a Data Box](#tN115)
3.  [Editing the Content of a Box](#tN1a5)
4.  [Connection to Another Box](#tN233)

</div>

</div>

<div>

<div class="infobloc">

<div class="txt">

**Data boxes** are the simplest of all OM boxes. A data box represents a
constant value. This value belongs to one of the primitive Lisp types,
which are available in the OM Kernel / Lisp package.

</div>

</div>

<div class="part">

## <span>Use</span>

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
<td><div class="caption">
<div class="caption_co">
<img src="../res/basictypebox.png" width="129" height="63" alt="basictypebox.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>A data box is designed to pass data to other boxes in a patch. It is made of a text field that expresses a value or a text, and an output that allows to connect this content to other boxes.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Primitive Lisp Types</span>

</div>

<div class="txt">

There are several primitive Lisp types :

<table>
<tbody>
<tr class="odd">
<td><ul>
<li><p>number :</p></li>
</ul></td>
<td><p>any type of numeric data</p></td>
<td><ul>
<li><p>list :</p></li>
</ul></td>
<td><p>a list of any type of item between parenthesis</p></td>
</tr>
<tr class="even">
<td><ul>
<li><p>integer :</p></li>
</ul></td>
<td><p>an integer number</p></td>
<td><ul>
<li><p>string :</p></li>
</ul></td>
<td><p>a text between double quotes – inverted commas –</p></td>
</tr>
<tr class="odd">
<td><ul>
<li><p>float :</p></li>
</ul></td>
<td><p>decimal number</p></td>
<td><ul>
<li><p>t :</p></li>
</ul></td>
<td><p>the Lisp expression for "true"</p></td>
</tr>
<tr class="even">
<td><ul>
<li><p>rational :</p></li>
</ul></td>
<td><p>a/b </p></td>
<td><ul>
<li><p>nil :</p></li>
</ul></td>
<td><p>the Lisp expression of "false" or "nothing"</p></td>
</tr>
</tbody>
</table>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Adding a Data Box</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Typing Directly In the Patch Editor</span>

</div>

<div class="txt">

|                                                                                     |                                                                                                                            |
| ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| <span class="iconButton_tim">![editdata\_icon.png](../res/editdata_icon.png)</span> | `Cmd` click in the patch editor and type a content – for instance 4, (2 3 4), "hello", etc. – directly in the text prompt. |

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Menus Or Library Window</span>

</div>

<div class="caption">

<div class="caption_co">

![basictypemenu.png](../res/basictypemenu.png)

</div>

</div>

<div class="txt">

  - <span> Go to `Classes / Kernel / Lisp` and choose a menu
    item.</span>
  - <span> `Ctrl` / right click in the patch editor and choose a menu
    item in the contextual menu.</span>
  - <span>Pick the box in the relevant package from the
    [<span>Library</span>](Library.md) window and drop it in the editor.
    </span>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Note</span>

</div>

<div class="txt">

A data box accepts any primitive type, no matter what its type was
initially.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Editing the Content of a Box</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

|                                                                                                   |                                            |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| <span class="iconButton_tim">![promptbasictype\_icon.png](../res/promptbasictype_icon.png)</span> | Double click on a box to edit its content. |

  - <span> Numbers should be entered as simple numbers.</span>
  - <span> Strings should be entered between double quotes – inverted
    commas.</span>
  - <span> Symbols should be entered as simple text.</span>
  - <span> Lists should be entered between parenthesis, just as in Lisp.
    Ill-formed lists are not accepted.</span>

**** To confirm the input value, press `Enter` or click in the patch
editor. **** ****No line return is allowed in data boxes.**** ****

</div>

</div>

<div class="bloc tip">

<div class="bloc_ti tip_ti">

<span>Resizing</span>

</div>

<div class="txt">

To fit the box size to its content, select it and type `i`.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Connection to Another Box</span>

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
<p>Click on the outlet to create a connection and drag it to the wanted inlet of another box.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/connecting.png" width="83" height="125" alt="Connecting a simple value box to the pitch inlet of a &quot;note&quot; box." />
</div>
<div class="caption_ti">
Connecting a simple value box to the pitch inlet of a "note" box.
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc tip">

<div class="bloc_ti tip_ti">

<span>Automatic Connection</span>

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
<img src="../res/autobasic.png" width="71" height="87" alt="autobasic.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>To add a connected data box to a factory or function box, <code class="keyboard_tl">SHIFT</code> click on an input. This data box will have the default value of the input, which will then be displayed permanently.</p>
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
          - [<span>Patch Introduction</span>](ProgrammingIntro.md)
          - [<span>Adding Boxes Into a Patch</span>](AddingBoxes.md)
          - [<span>Elementary Manipulations</span>](ElementaryManips.md)
          - [<span>Boxes</span>](Boxes.md)
              - [<span>Boxes Features</span>](GraphicFeatures.md)
              - <span id="i4" class="outLeftSel_yes"><span>Data
                Boxes</span></span>
              - [<span>Function Boxes</span>](FunctionBoxes.md)
              - [<span>Objects – Factory Boxes</span>](FactoryBoxes.md)
              - [<span>Abstraction Boxes</span>](AbsBoxesIntro.md)
              - [<span>Other Boxes</span>](OtherBoxes.md)
          - [<span>Box Inputs</span>](BoxInputs.md)
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
précédente</span>](GraphicFeatures.md "page précédente(Boxes Features)")<span class="hidden">
| </span>[<span>page
suivante</span>](FunctionBoxes.md "page suivante(Function Boxes)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
