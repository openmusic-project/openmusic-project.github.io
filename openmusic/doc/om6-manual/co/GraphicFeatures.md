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
</span><span class="stkSel_yes"><span>Boxes
Features</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Boxes.md "page précédente(Boxes)")<span class="hidden">
| </span>[<span>page
suivante</span>](DataBox.md "page suivante(Data Boxes)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Boxes Graphic Features and Components</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

This section deals with function boxes and
<span id="i3" class="defRef_ul"><span>factory
boxes</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc2025)</sup>.
A [<span>factory box</span>](FactoryBoxes.md) represents a **class of
objects** in a program, such as notes, sounds, rhythms. A
[<span>function box</span>](FunctionBoxes.md) refers to a **function**
that is designed to perform an operation upon objects.

</div>

</div>

<div class="part">

## <span>Main Layout</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Kernel, Inlet(s), Outlet(s)</span>

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
<p>All boxes have :</p>
<ul>
<li><span>a <strong>kernel</strong> or "body" represented by an icon, </span></li>
<li><span>at least one <strong>inlet</strong> – a few rare functions have no inlet – which takes data,</span></li>
<li><span>at least one <strong>outlet</strong> , which returns the data computed by the box,</span></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/funclassbox.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/funclassbox_1.png" width="300" height="169" alt="funclassbox_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

Inlets and outlets are used for connecting boxes. They are represented
by small blue balls and located on the upper and lower parts of the box.
Each of them is assigned a specific parameter that characterizes the
<span id="i4" class="defRef_ul"><span>function</span></span><sup>[<span>\[</span>2<span>\]</span>](#kFootBsktc1872)</sup>
or the
<span id="i5" class="defRef_ul"><span>class</span></span><sup>[<span>\[</span>3<span>\]</span>](#kFootBsktc1871)</sup>
the box refers to.

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
<p>Several functions or factory boxes belonging to a same category of operators often share the same icon.</p>
<p>Factory boxes are often characterized by a blue-green background layer.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/funandfact-boxes.png" width="300" height="159" alt="Function boxes and factory boxes belonging to the &quot;combinatorial&quot; and &quot;score&quot; categories." />
</div>
<div class="caption_ti">
Function boxes and factory boxes belonging to the "combinatorial" and "score" categories.
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Boxes Names</span>

</div>

<div class="txt">

The name of factory boxes is not displayed by default.

A number of simple functions – such as om+, om-, om/ ... show no name
either.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Specific Graphic Features of Factory Boxes : Displaying
Names</span>

</div>

<div class="linkUL">

  - [<span>Visualization</span>](1-Visualization.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Additional Characteristics</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Evaluation Mode Label</span>

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
<p>  A <strong>small label</strong> located on the upper left corner of the box can show the possible <span id="i6" class="defRef_ul"><span>evaluation</span></span><sup><a href="#kFootBsktc2030"><span>[</span>4<span>]</span></a></sup> mode of a box. Evaluation modes are used for <strong>controlling the transmission</strong> of resulting data in a program, or for <strong>performing specific tasks</strong> .</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/lockicon.png" width="164" height="77" alt="Boxes on lock mode : computed values can&#39;t be changed." />
</div>
<div class="caption_ti">
Boxes on lock mode : computed values can't be changed.
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Evaluation Modes of a Box :</span>

</div>

<div class="linkUL">

  - [<span>Evaluation Modes</span>](EvalModes.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Resizing Area</span>

</div>

<div class="txt">

|                                                                                 |                                                                                |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| <span class="iconButton_tim">![resize\_icon.png](../res/resize_icon.png)</span> | All boxes have an invisible square resizing area in their bottom-right corner. |

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Manipulating Objects in a Patch Editor</span>

</div>

<div class="linkUL">

  - [<span>Elementary Manipulations</span>](ElementaryManips.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Boxes Appearance</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The font style and icon size can be globally specified via the OM
preferences.

1.  Select the `OM 6.X.X. / Preferences menu`.

2.  Click on the `Appearance` tab and go to the **Patches - Boxes**
    section

</div>

<div class="caption">

<div class="caption_co">

<div class="imgzFra" style="position: relative;">

![boxesstyle\_scr.png](../res/boxesstyle_scr.png)

</div>

</div>

<div class="caption_ti">

[<span>Zoom</span>](../res/boxesstyle_scr_1.png "Zoom (nouvelle fenêtre)")

</div>

</div>

<div class="txt">

1.    - To change the default size of the boxes icons, select a value in
        the `Boxes Size` pop up menu.
    
      - To change the font style of the boxes names, click on `Name
        Font`, and define a style in the font dialogue window.

2.    - Press `Apply` and/or `OK` to validate the modifications.
    
      - Press `Restore` to get back to the OM default preferences.

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Applying Changes</span>

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
<img src="../res/box-sizes.png" width="155" height="107" alt="The rotate function box, with the default appearance and with new appearance preferences." />
</div>
<div class="caption_ti">
The rotate function box, with the default appearance and with new appearance preferences.
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>New preferences will apply to new items only. Close and reopen your patch windows to see all box resized.</p>
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
    
    <div id="kFootBsktc2025">
    
    <div class="footBskt_itti">
    
    Factory Box
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    A box used for creating an instance, or exemplar, of a given class
    within a visual program.
    
    </div>
    
    </div>
    
    </div>
    
    </div>

2.  
    
    <div id="kFootBsktc1872">
    
    <div class="footBskt_itti">
    
    Function
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    A  portion of code within a larger program, which performs a
    specific task. Operates upon 0 or more parameters and returns a
    value.
    
    </div>
    
    </div>
    
    </div>
    
    </div>

3.  
    
    <div id="kFootBsktc1871">
    
    <div class="footBskt_itti">
    
    Class
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    A category of objects sharing common properties – characteristics
    and behaviour. A class specifies the internal structure and
    behaviour of an object. In OM, it is represented in a patch by a
    factory box that can produce an instance of a class.
    
    See also : Object, Instance
    
    </div>
    
    </div>
    
    </div>
    
    </div>

4.  
    
    <div id="kFootBsktc2030">
    
    <div class="footBskt_itti">
    
    Evaluation
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    In Lisp, evaluating an expression amounts to interpreting and
    reducing its contents in order to return a result.
    
    In OM, visual programs represent Lisp expressions and evaluating a
    box triggers the calculus that will determine the value of these
    expressions.
    
    Any kind of box can be evaluated and return something. To evaluate a
    box, ⤷ Click and press `v` or `Cmd` click on an outlet.
    
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
          - [<span>Patch Introduction</span>](ProgrammingIntro.md)
          - [<span>Adding Boxes Into a Patch</span>](AddingBoxes.md)
          - [<span>Elementary Manipulations</span>](ElementaryManips.md)
          - [<span>Boxes</span>](Boxes.md)
              - <span id="i7" class="outLeftSel_yes"><span>Boxes
                Features</span></span>
              - [<span>Data Boxes</span>](DataBox.md)
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
précédente</span>](Boxes.md "page précédente(Boxes)")<span class="hidden">
| </span>[<span>page
suivante</span>](DataBox.md "page suivante(Data Boxes)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
