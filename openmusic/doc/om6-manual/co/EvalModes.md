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
</span><span class="stkSel_yes"><span>Evaluation
Modes</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](RecursiveTree.md "page précédente(Recursive Trees)")<span class="hidden">
| </span>[<span>page
suivante</span>](LockMode.md "page suivante(Lock Mode)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Evaluation Modes</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

"Evaluation" refers to two different concepts :

  - The **user-evaluation**, which is triggered **by the user via the
    interface** :
    
    `Cmd` click on an outlet, or with a selection + `v` .

  - The **internal evaluation**, which refers to an evaluation or to a
    series of evaluations **resulting** from a user-evaluation.

This section deals with the **control of internal evaluations**.

</div>

<div class="txt">

Boxes can be set on four different evaluation modes, in addition to the
default mode, to control the transmission of resulting data in a
program, or to perform specific tasks. These modes are :

<table>
<tbody>
<tr class="odd">
<td><ul>
<li><span> <strong></strong> <a href="LockMode.md"><span> <strong></strong> <strong><strong>lock</strong></strong> <strong>mode</strong></span></a> <strong></strong> : <span class="iconButton_tim"><img src="../res/lock_icon.png" class="sfile_icon-png_icon-gif_icon" width="57" height="56" alt="lock_icon.png" /></span> </span></li>
</ul></td>
<td><ul>
<li><span> <strong></strong> <a href="EvOnceMode.md"><span> <strong></strong> <strong><strong>evaluate-once</strong></strong> <strong>mode</strong></span></a> <strong></strong> : <span class="iconButton_tim"><img src="../res/once_icon.png" class="sfile_icon-png_icon-gif_icon" width="61" height="58" alt="once_icon.png" /></span> </span></li>
</ul></td>
</tr>
<tr class="even">
<td><ul>
<li><span> <strong></strong> <a href="LambdaMode.md"><span> <strong></strong> <strong><strong>lambda</strong></strong> <strong>mode</strong></span></a> <strong></strong> : <span class="iconButton_tim"><img src="../res/lambada_icon.png" class="sfile_icon-png_icon-gif_icon" width="60" height="56" alt="lambada_icon.png" /></span> </span></li>
</ul></td>
<td><ul>
<li><span> <strong></strong> <a href="RefMode.md"><span> <strong></strong> <strong><strong>reference</strong></strong> <strong>mode</strong></span></a> <strong></strong> : <span class="iconButton_tim"><img src="../res/refmode_icon.png" class="sfile_icon-png_icon-gif_icon" width="65" height="64" alt="refmode_icon.png" /></span> </span></li>
</ul></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

To select an evaluation mode :

1.  press `b` to set the box on "lock" mode

2.  click successively on the upper left label of the box to select
    other modes.

To reset the box to its initial state, press `b` again.

Duplication doesn't affect the state of a box that was set on a specific
evaluation mode : the copy will have the same parameters and will be on
the same mode as the master.

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
          - <span id="i0" class="outLeftSel_yes"><span>Evaluation
            Modes</span></span>
              - [<span>Lock Mode</span>](LockMode.md)
              - [<span>Evaluate-Once Mode</span>](EvOnceMode.md)
              - [<span>Lambda Mode</span>](LambdaMode.md)
              - [<span>Reference Mode</span>](RefMode.md)
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
précédente</span>](RecursiveTree.md "page précédente(Recursive Trees)")<span class="hidden">
| </span>[<span>page
suivante</span>](LockMode.md "page suivante(Lock Mode)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
