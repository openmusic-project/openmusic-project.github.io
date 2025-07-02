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
</span><span class="stkSel_yes"><span>Button</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](ListBoxes.md "page précédente(List Boxes)")<span class="hidden">
| </span>[<span>page
suivante</span>](Slider.md "page suivante(Slider Box)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Triggering Operations : The Button Box</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

Button boxes are used for triggering operations. They don't return
anything.

When the button is pressed, an action is executed.

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
<td><div class="caption">
<div class="caption_co">
<img src="../res/push.png" width="300" height="70" alt="push.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The button box has two inputs</p>
<ol>
<li><p>"text" : the button appellation</p></li>
<li><p>"action" : is simply evaluated, and evaluates upstream connected boxes.</p></li>
</ol>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

When the button is pushed, the Listener displays the value returned by
the box connected to the second input.

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Reminder</span>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Displaying and Editing the Button Box Interface</span>

</div>

<div class="linkUL">

  - [<span>General Features</span>](GeneralFeatures.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>A Basic Example</span>

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
<p>Any box or part of a patch to be evaluated by pushing the button can be connected to the second input.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/bouton.png" width="273" height="265" alt="bouton.png" />
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
              - [<span>List Boxes</span>](ListBoxes.md)
              - <span id="i3" class="outLeftSel_yes"><span>Button</span></span>
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
précédente</span>](ListBoxes.md "page précédente(List Boxes)")<span class="hidden">
| </span>[<span>page
suivante</span>](Slider.md "page suivante(Slider Box)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
