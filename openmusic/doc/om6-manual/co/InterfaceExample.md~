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
</span><span class="stkSel_yes"><span>Examples of
Use</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](MenuBoxes.md "page précédente(Pop-Up Menu Box)")<span class="hidden">
| </span>[<span>page suivante</span>](Files.md "page suivante(Files)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Using the Interface Boxes : Example</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>Building a Triad with an Item-List-Box, a Button-Box, and a Check Box</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

 A minor or major triad is created with three interface boxes :
multiple-items-list-box, button-box, and check-box.

</div>

<div class="caption">

<div class="caption_co">

![buildchord\_scr.png](../res/buildchord_scr.png)

</div>

<div class="caption_ti">

</div>

</div>

<div class="txt">

  - On the left the `build note!` button calls a series of boxes :
    
    1.  two list-boxes allow to choose a note name from A to G, and an
        octave index, from 1 to 5.
    
    2.  the resulting reference is returned as a list with three lisp
        functions to 
        <span id="i2" class="defRef_ul"><span>n-\>mc</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc2682)</sup>
        ,
    
    3.  n-\>mc returns a midicents value to a chord box.

<!-- end list -->

  - On the right, the `build chord!` button calls another series of
    boxes :
    
    1.  The `minor` check box is checked and returns "true" to
        [<span>OMIF</span>](OMIF.md),
    
    2.  OMIF returns 300, which makes a minor third. If it isn't
        checked, OMIF returns the value of a major third – 400 mc.
    
    3.  The value of the root is added with 300 and 700 to build a minor
        triad, via two om+ boxes.
    
    4.  The resulting values are gathered by x-append into one single
        list and returned to a chord box.

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Note</span>

</div>

<div class="txt">

As n-\>mc returns **a list**, we have to use a chord box, and not a note
box, to create the root of the chord. A note box doesn't accept lists,
but atoms.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Choosing and Listening to a Sound with a Pop-Up-Menu Box</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Arguments of the Pop-Up-Menu</span>

</div>

<div class="caption">

<div class="caption_co">

![play.png](../res/play.png)

</div>

</div>

<div class="txt">

This pop-up box returns two types of results :

  - Input \#1 is connected to a [<span>textfile</span>](textfile.md)
    box, which contains a **list of midi channel names** . When output
    \#1 is evaluated, it returns the **midichannel number**.

  - Input \#2 is connected to a lambda patch, which can **play the sound
    of a selected sample**.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About MIDI Functions in OM</span>

</div>

<div class="linkUL">

  - [<span>MIDI</span>](MIDI.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Inside the Lambda Patch</span>

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
<img src="../res/lamdapatch.png" width="165" height="258" alt="lamdapatch.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>A sequence function evaluates two elements successively :</p>
<ol>
<li><p>The pgm-out function sets the MIDI program from the midichannel index value passed as argument to the lambda patch.</p></li>
<li><p>The play function plays a note with the chosen midi sound.</p></li>
</ol>
<p>The action programmed in the patch is executed when an item is selected in the pop-up-menu box.</p>
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
    
    <div id="kFootBsktc2682">
    
    <div class="footBskt_itti">
    
    n-\>mc
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    Converts a note name or list of note names into corresponding midi
    cents values. The reference is the standard notation, where the
    medium C (6000 midicents) = C3.
    
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
              - [<span>Pop-Up Menu Box</span>](MenuBoxes.md)
              - <span id="i3" class="outLeftSel_yes"><span>Examples of
                Use</span></span>
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
précédente</span>](MenuBoxes.md "page précédente(Pop-Up Menu Box)")<span class="hidden">
| </span>[<span>page suivante</span>](Files.md "page suivante(Files)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
