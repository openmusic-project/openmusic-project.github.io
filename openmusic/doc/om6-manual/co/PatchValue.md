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
</span>[<span>Maquettes</span>](Maquettes.md)<span class="stkSep"> \>
</span>[<span>TemporalBoxes</span>](TemporalBoxes.md)<span class="stkSep">
\> </span>[<span>TemporalBoxes
Value</span>](TempValues.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Patches</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](TempValues.md "page précédente(TemporalBoxes Value)")<span class="hidden">
| </span>[<span>page
suivante</span>](MaquetteValue.md "page suivante(Sub Maquettes)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Patches</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

The " value" of a patch is produced by the patches itself, but this
value has to be expressed in the maquette. The **Tempout is a specific
outlet which allows to express this value.** "Tempout" stands for
"Temporal Output".

</div>

</div>

<div class="part">

## <span>The TempOut</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

|                                                                                   |                                                                                            |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| <span class="iconButton_tim">![tempout\_icon.png](../res/tempout_icon.png)</span> | The **Tempout** is used for expressing the musical value of the patch within the maquette. |

</div>

<div class="txt">

  - <span> When a patch is created directly in a maquette, a tempout is
    automatically added in its internal editor. </span>
  - <span>If a patch is dropped in the maquette editor, this box can be
    added manually.</span>

</div>

<div class="caption">

<div class="caption_co">

![addigntemp1.png](../res/addigntemp1.png)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Adding a TempOut in a Patch</span>

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
<p>To add a tempout :</p>
<ul>
<li><p><code class="keyboard_tl">Cmd</code> click and type "tempout",</p></li>
</ul>
<ul>
<li><ol>
<li><p><code class="keyboard_tl">Ctrl</code> / right click in the patch editor,</p></li>
<li><p>select <code class="menuPath_tl">TemporalBoxes / Temporal Output</code> in the contextual menu.</p></li>
</ol></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/addigntemp.png" width="139" height="89" alt="addigntemp.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Instances and Maquettes Don't Have a TempOut</span>

</div>

<div class="txt">

TemporalBoxes representing **instances,** **global variables** or
**factory boxes** only have **one standard output** , as a matter of
course, since they are a value.

TemporalBoxes representing **maquettes** only have standard inputs and
outputs, their potential musical value being expressed by the maquette
itself.

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Using a Patch Without a TempOut</span>

</div>

<div class="txt">

Sub patches don't have to be integrated in the musical structure of a
maquette to be used there. Therefore, a Tempout can be deleted. To
display and express the value of the object, though, a connection to a
Tempout still remains necessary.

</div>

<div class="caption">

<div class="caption_co">

![Here, the temporal object just performs an addition. It is not
connected to any item, and its value is not displayed in the
maquette.](../res/nomusic1.png)

</div>

<div class="caption_ti">

Here, the temporal object just performs an addition. It is not connected
to any item, and its value is not displayed in the maquette.

</div>

</div>

<div class="txt">

This patch can return / get data to / from other boxes via its inputs
and outputs.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Setting the TempOut Value</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The value of a sub patch is the value connected to the **Tempout** . The
user can select the value(s) to express in the maquette.

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Example</span>

</div>

<div class="caption">

<div class="caption_co">

![tempout%2Boutput1.png](../res/tempout%2Boutput1.png)

</div>

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
<p>In the upper TemporalBox :</p>
<ol>
<li><p>the value of a chord-seq is expressed via the Tempout, which is connected to the "self" output of the chord-seq</p></li>
<li><p>the last chords of the chord-seq are returned by the cdr function to the standard <strong>output</strong> of the TemporalBox</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/tempoutput2.png" width="274" height="294" alt="tempoutput2.png" />
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
<td><div class="caption">
<div class="caption_co">
<img src="../res/tempoutput1.png" width="104" height="233" alt="tempoutput1.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The value of the lower TemporalBox is calculated from the resulting list :</p>
<ol>
<li><p>The input of the patch returns the list to flat .</p></li>
<li><p>All sub-lists are then concatenated in a single list, which is returned to the"midics" input of the chord.</p></li>
<li><p>The "self" output of the chord is connected to a <strong>Tempout</strong> .The chord becomes the value of the TemporalBox.</p></li>
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

## <span>The Tempin / Self Input Box</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

A patch created directly in a maquette has another default box : the
**Tempin** , or **Self Input Box** .

</div>

<div class="txt">

<table>
<tbody>
<tr class="odd">
<td><p><span class="iconButton_tim"><img src="../res/selfbox_icon.png" class="sfile_icon-png_icon-gif_icon" width="139" height="59" alt="selfbox_icon.png" /></span></p></td>
<td><p>The <strong>Tempin</strong> , or <strong>Self Input Box</strong> allows to control and use the <strong>relation</strong> between the patch and the maquette wherein it is located as <strong>programming parameters</strong> .</p>
<p>Hence, the Tempin is not compulsary for using a patch within a maquette, and can be deleted.</p></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Using the Self Input Box for Programming :</span>

</div>

<div class="linkUL">

  - [<span>Programming with TemporalBoxes</span>](TempProgramming.md)

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
      - [<span>Basic Tools</span>](BasicObjects.md)
      - [<span>Score Objects</span>](ScoreObjects.md)
      - [<span>Maquettes</span>](Maquettes.md)
          - [<span>Creating a Maquette</span>](Maquette.md)
          - [<span>TemporalBoxes</span>](TemporalBoxes.md)
              - [<span>Adding TemporalBoxes</span>](AddingTempbox.md)
              - [<span>Elementary Manipulations</span>](elementary.md)
              - [<span>Temporalboxes Appearance</span>](Appearance.md)
              - [<span>TemporalBoxes Value</span>](TempValues.md)
                  - <span id="i3" class="outLeftSel_yes"><span>Patches</span></span>
                  - [<span>Sub Maquettes</span>](MaquetteValue.md)
                  - [<span>Instances</span>](InstancesValue.md)
          - [<span>The Maquette Editor</span>](Editor.md)
          - [<span>Maquette
            Programming</span>](Programming%20Maquette.md)
          - [<span>Maquettes in
            Patches</span>](Maquettes%20in%20Patches.md)
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
précédente</span>](TempValues.md "page précédente(TemporalBoxes Value)")<span class="hidden">
| </span>[<span>page
suivante</span>](MaquetteValue.md "page suivante(Sub Maquettes)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
