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
</span><span class="stkSel_yes"><span>Removing
Boxes</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](REF3.md "page précédente(Accessing Boxes)")<span class="hidden">
| </span>[<span>page
suivante</span>](REF5.md "page suivante(Interaction (1))")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Removing TemporalBoxes from a Patch :</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>Removealltemporalboxes / Removetemporalboxes :</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Functionalities</span>

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
<img src="../res/ratb.png" width="125" height="160" alt="ratb.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The <strong>removealltemporalboxes</strong> function allows to remove all TemporalBoxes of a maquette from a patch.</p>
<p>The <strong>removetemporalbox</strong> function allows to delete one or several selected TemporalBoxes from a maquette.</p>
<ul>
<li><span>It must be associated with the temporalboxes function, which returns the list of temporal boxes contained in a maquette. </span></li>
<li><span>The boxes to be removed can be defined by <strong>a number of conditions</strong> via a program. Boxes are checked successively to be eventually removed.</span></li>
<li><span> The OMLoop module can then be very convenient : it will check each item of the list successively.</span></li>
</ul>
</div></td>
</tr>
</tbody>
</table>

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
<p>Connect the maquette on "reference" mode to the input of removealltemporalboxes and evaluate the function.</p>
<p>All the temporal objects of the maquette are deleted.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/removetemp.png" width="147" height="135" alt="removetemp.png" />
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

## <span>Example : Removing Preexistent Boxes Before Adding New Boxes</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Building a Specific Sequence</span>

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
<img src="../res/clean.png" width="264" height="271" alt="clean.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>In the following sequence, the maquette is "cleaned" systematically before a new TemporaBox is added into it. The sequence function applies the following command line :</p>
<p>(sequence (removealltemporalboxes maquette) (addbox2maquette maquette temporalboxes) )</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Evaluation</span>

</div>

<div class="txt">

Before the evaluation, the maquette contains three TemporalBoxes. At the
evaluation, all preexistent TemporalBoxes are suppressed from the
maquette.

</div>

<div class="caption">

<div class="caption_co">

![trop3.png](../res/trop3.png)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Example : Removing Boxes According to Posy</span>

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
<p>In this maquettes, the green boxes "posy" is superior or equal to 50. The purple boxes "posy" is inferior to 50. The purple TemporalBoxes must be deleted.</p>
<p>This can be done with two programs :</p>
<ul>
<li><span>with list-filter and a specific test argument </span></li>
<li><span>with an OMLoop box.</span></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/maquetteposy1.png" width="299" height="258" alt="maquetteposy1.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>First Option : List-filter</span>

</div>

<div class="txt">

List-filter takes a test argument, a list, and an action : "reject" or
"pass" – "reject" in this case.

1.  Temporalboxes returns a list with the values of each TemporalBox
    located in the maquette.

2.  The test argument defined in the patch on "lambda" mode checks is
    the "posy" of each box is superior or equal to 50

3.  List-filter rejects them and returns boxes whose "posy" is inferior
    to 50. 

4.  Removetemporalboxes is evaluated and removes these Temporalboxes
    from the maquette.

</div>

<div class="caption">

<div class="caption_co">

![listfilter.png](../res/listfilter.png)

</div>

</div>

<div class="txt">

The test-patch has a slots box and a, OM \>= predicate.

The slots box represents a TemporalBox, whose "posy" output is connected
to the \>= predicate. The test argument tests if the "posy" of a
TemporalBox is superior or equal to 50.

Removetemporalboxes removes boxes whose value is returned by
list-filter, that is, boxes, whose "posy" is inferior to 50.

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Second Option : With OMLoop</span>

</div>

<div class="txt">

This program is very similar to the program above. Here, temporalboxes
is connected to the input of OMLoop, which executes the same task as
list-filter.

</div>

<div class="caption">

<div class="caption_co">

![testloop.png](../res/testloop.png)

</div>

</div>

<div class="txt">

1.  At each step of the loop, listloop returns the value of a
    TemporalBox, and the \> predicate tests if the "posy" of the slots
    box is inferior to 50.
    
    Slots stands for a TemporalBox.
    
      - <span> If this posy is inferior to 50, omif returns it. </span>
      - <span>Otherwise, it returns "nil". </span>

2.  The result of the successive evaluations is stored by collect.

3.  At the end of the iteration, remove removes all "nil" values from
    the list.

4.  The list is returned by the output of the OMLoop to
    removetemporalboxes.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Evaluation</span>

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
<a href="../res/withoutposy.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/withoutposy_1.png" width="300" height="266" alt="withoutposy_1.png" /></a>
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>In both cases, when evaluated, removetemporalboxes removes all the items of the list from the maquette, that is, all the boxes whose "posy" is inferior to 50.</p>
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
                  - [<span>Accessing Boxes</span>](REF3.md)
                  - <span id="i3" class="outLeftSel_yes"><span>Removing
                    Boxes</span></span>
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
précédente</span>](REF3.md "page précédente(Accessing Boxes)")<span class="hidden">
| </span>[<span>page
suivante</span>](REF5.md "page suivante(Interaction (1))")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
