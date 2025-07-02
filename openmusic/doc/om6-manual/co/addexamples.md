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
</span><span class="stkSel_yes"><span>Examples</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](addprocedure.md "page précédente(Adding TemporalBoxes)")<span class="hidden">
| </span>[<span>page
suivante</span>](REF3.md "page suivante(Accessing Boxes)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Adding TemporalBoxes : Examples</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>Adding a List of TemporalBoxes in a Maquette</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Program</span>

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
<img src="../res/addingbox.png" width="300" height="273" alt="addingbox.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<ul>
<li><span> List returns a list of TemporalBoxes that are added in the maquette. </span></li>
<li><span>The Temporalbox instances have temporal and graphic parameters. </span></li>
<li><span>The "self" outputs of the instances are connected to list. </span></li>
<li><span>The resulting list is returned to addbox2maquette. </span></li>
</ul>
<p>When addbox2maquette is evaluated, both TemporalBoxes are added in the maquette.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Maquette and Evaluations</span>

</div>

<div class="txt">

The corresponding temporal objects are represented by gray boxes
<span class="iconButton_tim">![boxadded\_icon.png](../res/boxadded_icon.png)</span>
, which show a small OM icon if the `show box icon` option is selected
in the maquette preferences.

</div>

<div class="caption">

<div class="caption_co">

![The maquette, after the first evaluation of
addbox2maquette.](../res/addedboxxes.png)

</div>

<div class="caption_ti">

The maquette, after the first evaluation of addbox2maquette.

</div>

</div>

<div class="txt">

This maquette already contained three temporal objects. Addbox2maquette
has been evaluated twice, without modifying the TemporalBoxes parameters
: objects are superimposed. Everytime the function is evaluated, the
TemporalBoxes are added in the maquette. No TemporalBox is deleted from
the maquette.

</div>

<div class="caption">

<div class="caption_co">

![After the second evaluation of the function.](../res/addedboxxes1.png)

</div>

<div class="caption_ti">

After the second evaluation of the function.

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Specifying Colour</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The colour of a TemporalBox is specified with R-G-B values and the
om-make-color function.

</div>

<div class="caption">

<div class="caption_co">

![changecolour\_2.png](../res/changecolour_2.png)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Systematizing Colour According to Posy and Offset</span>

</div>

<div class="linkUL">

  - [<span>TemporalBoxes Interaction : Examples (1)</span>](REF5.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Specifying TemporalBoxes Number and Position with a PBF</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Program</span>

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
<img src="../res/A2.png" width="138" height="184" alt="A2.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>This patch allows to place <strong>several</strong> TemporalBoxes in a maquette. It has a BPF, an OMLoop box, and the addbox2maquette function.</p>
<ul>
<li><span> The BPF is a series of points whose graphic position is transposed in the maquette. A series of point in the curve is selected. The x-points and y-points are converted into temporal and graphical data.</span></li>
<li><span>The OMLoop iterates the operation. </span></li>
</ul>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>OMLoop</span>

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
<img src="../res/A4.png" width="252" height="300" alt="A4.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The "self" of the BPF is returned to the input of the OMLoop : the x and y-points of each point are enumerated via the slots of a BPF and two listloops.</p>
<ul>
<li><span> Xs are returned to the "offset" input of the TemporalBox instance. </span></li>
<li><span> Ys are returned to the "posy" input.</span></li>
<li><span>A duration has also been assigned to the temporalbox instance.</span></li>
</ul>
<ol>
<li><p>At each step of the loop, collect stores the information returned by the temporalbox instance.</p></li>
<li><p>Finally returns the whole of the results addbox2maquette at the end of the iteration.</p></li>
</ol>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Resulting Maquette</span>

</div>

<div class="txt">

The BPF is expressed by the position of the TemporalBoxes.

</div>

<div class="caption">

<div class="caption_co">

![resultBPF.png](../res/resultBPF.png)

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
                  - <span id="i3" class="outLeftSel_yes"><span>Examples</span></span>
                  - [<span>Accessing Boxes</span>](REF3.md)
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
précédente</span>](addprocedure.md "page précédente(Adding TemporalBoxes)")<span class="hidden">
| </span>[<span>page
suivante</span>](REF3.md "page suivante(Accessing Boxes)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
