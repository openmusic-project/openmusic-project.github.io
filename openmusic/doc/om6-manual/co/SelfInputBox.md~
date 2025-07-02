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
</span>[<span>TempBoxes
Programming</span>](TempProgramming.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>The Self Input Box –
Tempin</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](TempProgramming.md "page précédente(TempBoxes Programming)")<span class="hidden">
| </span>[<span>page
suivante</span>](Examplestempbox.md "page suivante(Programming with the Tempin)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>The Self Input Box – Tempin</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>The Self Input box</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

<table>
<tbody>
<tr class="odd">
<td><p><span class="iconButton_tim"><img src="../res/selfbox_icon.png" class="sfile_icon-png_icon-gif_icon" width="139" height="59" alt="selfbox_icon.png" /></span></p></td>
<td><p>A <strong>Self Input box</strong> can be added in a patch, to <strong>apply or control the characteristics</strong> of a Temporalbox from the very <strong>inside of the patch</strong> .</p>
<p>Consequently, the Self Input box is only useful if the patch is represented in a maquette.</p></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Adding a Self Input box</span>

</div>

<div class="txt">

To add a Self Input Box in a patch :

  - <span> `Ctrl` / right click in the editor and choose `TemporalBoxes
    / Self Input`</span>
  - <span> `Cmd` click and type "tempin".</span>

</div>

<div class="caption">

<div class="caption_co">

![addself.png](../res/addself.png)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Self Input Parameters</span>

</div>

<div class="txt">

The Self Input box parameters are very similar to those of a musical
object. In addition, it has temporal and graphic values, which allow the
interaction with the maquette.

</div>

<div class="caption">

<div class="caption_co">

![selfbox.png](../res/selfbox.png)

</div>

</div>

<div class="txt">

|                          |                                                        |                           |                                                                         |
| ------------------------ | ------------------------------------------------------ | ------------------------- | ----------------------------------------------------------------------- |
| **1. self** **:**        | the Temporalbox itself – like a "self" output          | **6. p**osy**** **:**     | vertical position                                                       |
| **2. offset **:****      | starting point of the box in milliseconds              | **7. stretch-fac**t **:** | time stretch factor, expresses the size modification of a TemporalBox.  |
| **3. extend** **:**      | calculated duration                                    | **8. sizey** **:**        | vertical size of the box                                                |
| **4. color frame** **:** | box colour                                             | **9. free-store** **:**   | a "free" parameter                                                      |
| **5. value** **:**       | whatever is connected to the Tempout of a TemporalBox. | **10. reference** **:**   | an object connected to the "reference" input of a TemporalBox instance. |

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Actual Duration of a TemporalBox</span>

</div>

<div class="txt">

duration = extend \* stretch-fact

</div>

</div>

</div>

</div>

<div class="part">

## <span>Accessing the Parameters of the Self Input</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Using the Information of the Self Input box</span>

</div>

<div class="txt">

Information provided by the Self Input box can be used in the patch with
simple connections with other boxes.

For instance, we can use :

  - <span>the "posy" value to define the pitch of a chord</span>
  - <span>the "offset" value to define the velocity or duration of the
    chord...</span>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>A Programming Example</span>

</div>

<div class="linkUL">

  - [<span>Example 1 : Programming With the Self Input
    Box</span>](Examplestempbox.md)

</div>

</div>

<div class="txt">

Information can also possibly be returned by the output(s) of the
TemporalBox to other TemporalBoxes, in order to define relations between
their respective properties or temporal qualities.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Another Example</span>

</div>

<div class="linkUL">

  - [<span>Example 2 : Defining Temporal Relations Between
    TemporalBoxes</span>](EX2.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Slots box : Defining the Properties of the Self Input from the
Patch</span>

</div>

<div class="txt">

|                                                                                                                                                                                                                                               |                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| The Self Input box shows no inputs, like an instance box. Yet, we sometimes need to access and modify the parameters of a TemporalBox from its internal program. To do so, we can resort to a slots box that will represent this TemporalBox. | <span class="iconButton_tim">![slotstempbox\_icon.png](../res/slotstempbox_icon.png)</span> |

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
<img src="../res/tempbslots.png" width="203" height="66" alt="tempbslots.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>To create a slots box out of a TemporalBox instance :</p>
<ol>
<li><p><code class="keyboard_tl">Cmd</code>  click in a patch editor and type "temporalbox"</p></li>
<li><p>validate while keeping <code class="keyboard_tl">SHIFT</code> pressed.</p></li>
</ol>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

The slot box can define the properties of the TemporalBox from the
patch. Using a slot box amounts to modifying the attributes of the
"self" output of the Self Input Box.

Hence, we can use slots for defining :

  - <span>the colour of the TemporalBox,</span>
  - <span> its position according to other parameters, </span>
  - <span>data returned by other boxes...</span>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Defining TemporalBoxes From their Internal Patch</span>

</div>

<div class="linkUL">

  - [<span>Adding TemporalBoxes : Examples</span>](addexamples.md)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Using the Slots Box</span>

</div>

<div class="linkUL">

  - [<span>Reference Mode</span>](Maquettes%20in%20Patches2.md)

</div>

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Slots Box Value</span>

</div>

<div class="txt">

The slots box must be connected to the **"self" output** of the self
input box otherwise, it has no value.

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
              - [<span>TempBoxes Programming</span>](TempProgramming.md)
                  - <span id="i2" class="outLeftSel_yes"><span>The Self
                    Input Box – Tempin</span></span>
                  - [<span>Programming with the
                    Tempin</span>](Examplestempbox.md)
                  - [<span>Temporal Relations</span>](EX2.md)
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
précédente</span>](TempProgramming.md "page précédente(TempBoxes Programming)")<span class="hidden">
| </span>[<span>page
suivante</span>](Examplestempbox.md "page suivante(Programming with the Tempin)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
