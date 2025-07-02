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
</span>[<span>Reference
Mode</span>](Maquettes%20in%20Patches2.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Accessing
Boxes</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](addexamples.md "page précédente(Examples)")<span class="hidden">
| </span>[<span>page
suivante</span>](REF4.md "page suivante(Removing Boxes)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Accessing TemporalBoxes of a Maquette from a Patch</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

Accessing TemporalBoxes from a patch is especially necessary for
removing them from a maquette, and for manipulating them from outside
the maquette.

</div>

</div>

<div class="part">

## <span>Temporalboxes Function : Use</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

<table>
<tbody>
<tr class="odd">
<td><p><span class="iconButton_tim"><img src="../res/tb_icon.png" class="sfile_icon-png_icon-gif_icon" width="75" height="56" alt="tb_icon.png" /></span></p></td>
<td><p>The temporalboxes function allows to access and modifiy all the temporal objects contained in a maquette.</p>
<p>To add the temporalboxes function :</p>
<ul>
<li><span> <code class="keyboard_tl">Cmd</code> click and type "temporalboxes" </span></li>
<li><span> select <code class="menuPath_tl">Functions / OMKernel / Maquette / Temporalboxes</code>. </span></li>
</ul></td>
</tr>
</tbody>
</table>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Procedure</span>

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
<ol>
<li><p>Connect the maquette box on "reference" mode to the input of the temporalboxes function.</p></li>
<li><p>Connect the output of the temporalboxes function to the program. The boxes contained in the maquette can be manipulated from the patch.</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/evalfuntemp.png" width="193" height="179" alt="The temporal objects enclosed in the maquette is returned as a TemporalBoxes list when evaluating the function." />
</div>
<div class="caption_ti">
The temporal objects enclosed in the maquette is returned as a TemporalBoxes list when evaluating the function.
</div>
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
              - [<span>Build Mode</span>](Build.md)
              - [<span>Functional
                Mode</span>](Maquettes%20in%20Patches1.md)
              - [<span>Reference
                Mode</span>](Maquettes%20in%20Patches2.md)
                  - [<span>Adding TemporalBoxes</span>](addprocedure.md)
                  - [<span>Examples</span>](addexamples.md)
                  - <span id="i2" class="outLeftSel_yes"><span>Accessing
                    Boxes</span></span>
                  - [<span>Removing Boxes</span>](REF4.md)
                  - [<span>Interaction (1)</span>](REF5.md)
                  - [<span>Interation (2)</span>](Intercation2.md)
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
précédente</span>](addexamples.md "page précédente(Examples)")<span class="hidden">
| </span>[<span>page
suivante</span>](REF4.md "page suivante(Removing Boxes)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
