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
</span>[<span>Maquettes in
Patches</span>](Maquettes%20in%20Patches.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Build Mode</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Maquettes%20in%20Patches.md "page précédente(Maquettes in Patches)")<span class="hidden">
| </span>[<span>page
suivante</span>](Maquettes%20in%20Patches1.md "page suivante(Functional Mode)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Build Mode</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>Build Mode</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Use</span>

</div>

<div class="txt">

|                                                                                       |                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| <span class="iconButton_tim">![buildmode\_icon.png](../res/buildmode_icon.png)</span> | The "build" mode is the default mode of the maquette when it is dropped in a patch. It then shows dark blue inputs and outputs. |

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Procedure</span>

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
<p>To set a maquette back on build mode :</p>
<ol>
<li><p><code class="keyboard_tl">Ctrl</code> / right click on the maquette box</p></li>
<li><p>select <code class="menuPath_tl">Maquette Object Inputs</code>.</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/changemode1.png" width="242" height="228" alt="changemode1.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

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
<img src="../res/functionalinputs.png" width="260" height="194" alt="functionalinputs.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The two default inputs of the maquette box always take :</p>
<ul>
<li><span>an onsets list</span></li>
<li><span>an objects list.</span></li>
</ul>
<p>The "build" mode was oringinally the only way to add one or more TemporalBoxes in a maquette. It is a convenient way to add a succession of objects in a maquette. Other parameters, such as the vertical position of boxes, cannot be specified.</p>
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
<td><div class="dk_txtRes_txt txt">
<p>The default output of the maquette box returns the value built by the maquette :</p>
<ul>
<li><span>a maquetteobj type of object, which gathers all the values produced by the objects contains, </span></li>
<li><span>something else, if the maquette is related to a synthesis patch. </span></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/evalmaqobj.png" width="201" height="118" alt="evalmaqobj.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Inputs Lists</span>

</div>

<div class="txt">

Objects and onsets of each lists match each other. Maquettes accept the
following types of objects : **musical objects** , **patches** and
**maquettes** on **"reference" mode** .

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Standard Inputs and Outputs</span>

</div>

<div class="txt">

Possible standard inputs –
<span class="iconButton_tim">![input\_icon.png](../res/input_icon.png)</span>
and outputs –
<span class="iconButton_tim">![output\_icon.png](../res/output_icon.png)</span>
– are hidden outside the maquette.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Example : Adding a List of Items in a Maquette</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

We want to add a series of items in a maquette located in a patch.

</div>

<div class="caption">

<div class="caption_co">

![build.png](../res/build.png)

</div>

</div>

<div class="txt">

Each input of list is connected to an object. List returns a list of
objects references, such as :

OM ==\> (\# \# \# \# \#).

  - <span>The second input of the maquette takes this list of items.
    </span>
  - <span>The first input of the maquette takes a list of offsets, which
    determine the temporal position of the corresponding items.</span>

</div>

<div class="txt">

The items appear in the maquette after the evaluation.

Note that the maquette must be evaluated from the outside to display the
items in the right order.

</div>

<div class="caption">

<div class="caption_co">

![The maquette, once evaluated.](../res/maqbuild.png)

</div>

<div class="caption_ti">

The maquette, once evaluated.

</div>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Evaluation and Content</span>

</div>

<div class="txt">

Once the maquette is built, its content can either

  - remain the same, if no object is connected to it,

  - be replaced by new objects, if objects are connected to it.

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
          - [<span>The Maquette Editor</span>](Editor.md)
          - [<span>Maquette
            Programming</span>](Programming%20Maquette.md)
          - [<span>Maquettes in
            Patches</span>](Maquettes%20in%20Patches.md)
              - <span id="i2" class="outLeftSel_yes"><span>Build
                Mode</span></span>
              - [<span>Functional
                Mode</span>](Maquettes%20in%20Patches1.md)
              - [<span>Reference
                Mode</span>](Maquettes%20in%20Patches2.md)
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
précédente</span>](Maquettes%20in%20Patches.md "page précédente(Maquettes in Patches)")<span class="hidden">
| </span>[<span>page
suivante</span>](Maquettes%20in%20Patches1.md "page suivante(Functional Mode)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
