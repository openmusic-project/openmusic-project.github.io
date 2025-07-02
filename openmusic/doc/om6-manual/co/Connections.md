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
</span><span class="stkSel_yes"><span>Connections</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](AdditionalInputs.md "page précédente(Additional Inputs)")<span class="hidden">
| </span>[<span>page
suivante</span>](Evaluation.md "page suivante(Evaluation)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Connections</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

A connection is a link between the outlet of a box and the inlet of
another box. It means that the value of the downstream box inlet will be
the result of the upstream box computation.

The connections define the functional composition, that is the syntax of
a visual program.

</div>

</div>

<div class="part">

## <span>Creating and modifying connections</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Creating a connection</span>

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
<img src="../res/create-connection.png" width="158" height="165" alt="create-connection.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>A connection is created by clicking on a box output and drag the mouse cursor to the input of another box.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Modifying a connection</span>

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
<p>Connections can be selected and modified as well :</p>
<ul>
<li><span>to change the shape of a connection : click and drag its articulations</span></li>
<li><span>to change the colour of a connection : select its and press <code class="keyboard_tl">c</code> </span></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/modconnexion.png" width="266" height="163" alt="modconnexion.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Deleting a connection</span>

</div>

<div class="txt">

To delete a connection

  - <span>select it and press `Backspace`</span>
  - <span> `Cmd` click on the cotresponding input of the
    connection.</span>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Syntactic Relevance</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

When boxes are being connected to each other, OM applies syntactic
rules, so that the connection may be rejected. This includes :

  - <span> **preventing cycles** : a box can not be connected to another
    one if this connection creates a cycle – see example below –</span>
  - <span> **deleting existing connections** when a new connection is
    made to an input. An input is necessarily assigned a single value
    and therefore cannot be connected to more than one box.</span>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Preventing Cycles</span>

</div>

<div class="caption">

<div class="caption_co">

![connect-cycle.png](../res/connect-cycle.png)

</div>

</div>

<div class="txt">

One of the inputs of the om\* box is connected to the om+ box. Om\* will
then need to know the result returned by om+ to perform its computation.
In this case, OM "refuses" to connect the result of the multiplication
to the inlet of the addition, as shown in the Listener.

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
          - <span id="i2" class="outLeftSel_yes"><span>Connections</span></span>
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
précédente</span>](AdditionalInputs.md "page précédente(Additional Inputs)")<span class="hidden">
| </span>[<span>page
suivante</span>](Evaluation.md "page suivante(Evaluation)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
