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
</span><span class="stkSel_yes"><span>Slider Box</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Button.md "page précédente(Button)")<span class="hidden">
| </span>[<span>page
suivante</span>](MenuBoxes.md "page suivante(Pop-Up Menu Box)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Controlling Values : Slider Box</span>

<div class="headCo_co">

<div class="secOutFra">

<div class="secOutTi">

[<span>Sommaire </span>](#)

</div>

<div class="secOutUi">

1.  [Features](#cdN1e)
2.  [Settings](#cdNa2)
3.  [Using the "Action" Input](#cdN128)
4.  [A Musical Application](#cdN19a)

</div>

</div>

<div>

<div class="infobloc">

<div class="txt">

The **slider** box allows to select a value in a given range with a
slider interface.

</div>

</div>

<div class="part">

## <span>Features</span>

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
<p>The slider has five inputs and outputs :</p>
<ol>
<li><p>" <strong>direction</strong> " : the slider's vertical or horizontal orientation.</p></li>
<li><p>" <strong>range</strong> " : the slider's range, from a minimum to a maximum value.</p></li>
<li><p>" <strong>step</strong> " : the precision of the slider – should be equal to 1.</p></li>
<li><p>" <strong>value</strong> " : position of the slider.</p></li>
<li><p>" <strong>action</strong> " : an action to perform specified by a lambda function or patch.</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/set-slider.png" width="267" height="114" alt="set-slider.png" />
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

## <span>Settings</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Completing the Slider's Setting</span>

</div>

<div class="txt">

To complete the slider's setting :

1.  enter values in the inputs data boxes

2.  evaluate the box

3.  **lock the box afterwards** to avoid resetting the values at
    subsequent evaluations.

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>"Direction" Input</span>

</div>

<div class="txt">

Note that the slider orientation might not be taken into account if it
is incompatible with the box's size. A horizontal slider can be "resized
vertically".

</div>

<div class="caption">

<div class="caption_co">

![slider-direction.png](../res/slider-direction.png)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Slider's Value(s)</span>

</div>

<div class="txt">

The range, step and value inputs can be used to set the slider. The
initial value is modified when the user moves the slider.

</div>

<div class="caption">

<div class="caption_co">

![slider-value.png](../res/slider-value.png)

</div>

</div>

<div class="txt">

The slider's outputs give access to the different properties of the
slider box.

In particular, the **fourth "value" output** returns a slider's
position's current value.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Using the "Action" Input</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The "action" input of the slider can be used for triggering an operation
that will integrate the "value" input, that is, **the slider's
position, ** as a parameter.

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
<img src="../res/slider-print.png" width="204" height="277" alt="slider-print.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The "action" input must be connected to a function or a <a href="LambdaMode.md"><span>box on "lambda" mode</span></a> with one input or argument.</p>
<p>When the slider is moved, this function is called with the value of the "value" input as argument.</p>
<p>To set or modify the function associated with the slider :</p>
<ol>
<li><p>connect the box or function to the fifth input,</p></li>
<li><p>evaluate the slider box .</p></li>
</ol>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

</div>

</div>

<div class="part">

## <span>A Musical Application</span>

<div class="part_co">

<div class="infobloc">

<div class="caption">

<div class="caption_co">

![slider1.png](../res/slider1.png)

</div>

</div>

<div class="txt">

  - The "range" input takes midi values from 48 to 72 – C3 to C5.

  - The "step" value is equal to 1, so that each step of the slider
    corresponds to a semi-tone.

  - The "initial value" of the slider is equal to 48, the lowest pitch
    of the range.

  - The patch on "lambda" mode is a very simple program that applies the
    slider's value to the pitch input of the send-midi-note function.

When the slider is moved, the note played by send-midi-note matches the
value of the slider.

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
              - <span id="i4" class="outLeftSel_yes"><span>Slider
                Box</span></span>
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
précédente</span>](Button.md "page précédente(Button)")<span class="hidden">
| </span>[<span>page
suivante</span>](MenuBoxes.md "page suivante(Pop-Up Menu Box)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
