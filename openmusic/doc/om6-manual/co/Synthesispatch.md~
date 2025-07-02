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
</span>[<span>Maquette
Programming</span>](Programming%20Maquette.md)<span class="stkSep"> \>
</span>[<span>The Synthesis
Patch</span>](Synthpatchprog.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Maquette
Value</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Synthpatchprog.md "page précédente(The Synthesis Patch)")<span class="hidden">
| </span>[<span>page
suivante</span>](Synthpatchexample.md "page suivante(Synthesis Patch Example)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Calculating the Value of a Maquette</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

A synthesis patch is like a standard patch. It produces a value **from
the content** of a maquette.

To access this content, a **Maquette Self Input** :
<span class="iconButton_tim">![maqselfinput\_icon.png](../res/maqselfinput_icon.png)</span>
must be added in the patch.

The patch can then manipulate this content.

The result of the computation is attributed to the maquette via the
**Tempout**
<span class="iconButton_tim">![tempout\_icon.png](../res/tempout_icon.png)</span>of
the patch.

</div>

</div>

<div class="part">

## <span>The Maquette Self Input</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Parameters</span>

</div>

<div class="caption">

<div class="caption_co">

![selfinputoutputs.png](../res/selfinputoutputs.png)

</div>

</div>

<div class="txt">

The **Maquette Self Input** returns the maquette's content. It can be
used **as a patch input** . The Maquette Self Input returns:

1.  the maquette's **value** itself,

2.  the **duration** of the maquette,

3.  the **list of boxes** contained in the maquette,

4.  the list **each box's value** contained in the maquette.

</div>

</div>

</div>

</div>

<div class="part">

## <span>The Synthesis Patch</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Creating and Implementing the Patch</span>

</div>

<div class="caption">

<div class="caption_co">

![dropsynth.png](../res/dropsynth.png)

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
<ol>
<li><p>Create a blue or red patch.</p></li>
<li><p>Drag and drop the patch on the lower-left corner of the maquette editor.</p></li>
<li><p>Add a <strong>Maquette Self Input</strong> in the patch :</p>
<p><code class="keyboard_tl">Ctrl</code> / right click and choose <code class="menuPath_tl">TemporalBoxes / Maq Self Input</code>.</p></li>
<li><p>Add a <strong>Tempout</strong> to the patch :</p>
<p><code class="keyboard_tl">Ctrl</code> / right click and choose <code class="menuPath_tl">TemporalBoxes / Temporal Output</code>.</p></li>
</ol>
<p>You can now manipulate the data returned by the Maquette Self Input with the program you will design in the synthesis patch. The maquette's value will be that of the object connected to the Tempout <strong>of the synthesis patch</strong> .</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/drop.png" width="200" height="258" alt="drop.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Evaluation Program</span>

</div>

<div class="txt">

The resulting synthesis patch actually is the **evaluation program, or
evaluation tool** of the maquette. When the maquette is evaluated, the
Maquette Self Input of the synthesis patch is updated, and the synthesis
patch is evaluated too.

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Accessing the Results of a Synthesis Patch ?</span>

</div>

<div class="txt">

The result of a synthesis patch is computed **when the maquette is
evaluated** . The information produced is returned to other boxes only
for **subsequent computation** : the Self Input box must be considered a
virtual storage box. Consequently, information won't be displayed in the
Listener, unless a specific function, like print, is resorted to.

</div>

<div class="caption">

<div class="caption_co">

![This synthesis patch prints the list returned by the Maquette Self
Input : its reference, duration, TemporalBoxes references, and the
objects contained in the TemporalBoxes.](../res/evlamaqselfinput.png)

</div>

<div class="caption_ti">

This synthesis patch prints the list returned by the Maquette Self Input
: its reference, duration, TemporalBoxes references, and the objects
contained in the TemporalBoxes.

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Assigning a Synthesis Patch via a Maquette Input</span>

</div>

<div class="linkUL">

  - [<span>Assigning a Synthesis Patch to a Maquette with the Set-Eval
    Function</span>](Seteval.md)

</div>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Internal Patches / Synthesis Patch</span>

</div>

<div class="txt">

Modifying an internal patch doesn't affect the other references of the
patch, including the patch that was dropped in the corner of the
maquette. Out of security, we advise you to make a copy of the last
version of this internal patch.

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
              - [<span>Functional Components</span>](InputsOutputs.md)
              - [<span>Evaluation</span>](MaquetteEvaluation.md)
              - [<span>The Synthesis Patch</span>](Synthpatchprog.md)
                  - <span id="i2" class="outLeftSel_yes"><span>Maquette
                    Value</span></span>
                  - [<span>Synthesis Patch
                    Example</span>](Synthpatchexample.md)
                  - [<span>Set-Eval Function</span>](Seteval.md)
              - [<span>TempBoxes Programming</span>](TempProgramming.md)
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
précédente</span>](Synthpatchprog.md "page précédente(The Synthesis Patch)")<span class="hidden">
| </span>[<span>page
suivante</span>](Synthpatchexample.md "page suivante(Synthesis Patch Example)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
