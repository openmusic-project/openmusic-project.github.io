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
</span><span class="stkSel_yes"><span>Adding
TemporalBoxes</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Maquettes%20in%20Patches2.md "page précédente(Reference Mode)")<span class="hidden">
| </span>[<span>page
suivante</span>](addexamples.md "page suivante(Examples)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Reference Mode : Adding TemporalBoxes in a Maquette</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

Before a TemporalBox is added in a maquette on "reference" mode, this
box must be created in a patch as a TemporalBox instance. Several
functions can then be used for adding, accessing, deleting a TemporalBox
from a maquette.

</div>

</div>

<div class="part">

## <span>Creating a Temporalbox Instance in a Patch</span>

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
<p>To add a <strong>Temporalbox instance</strong> in a patch, <code class="keyboard_tl">Cmd</code> click and type "temporalbox", or select <code class="menuPath_tl">Classes / OMKernel / Maquette / TEMPORALBOX</code>.</p>
<p>TemporalBox instances must then be assigned required values, such as a position, a value, a duration, and so on.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/createtemp.png" width="198" height="53" alt="createtemp.png" />
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

## <span>Addbox2maquette Function</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Functionalities</span>

</div>

<div class="txt">

|                                                                             |                                                                                                      |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| <span class="iconButton_tim">![ab2m\_icon.png](../res/ab2m_icon.png)</span> | The **addbox2maquette function** allows to add one or more TemporalBoxes in a maquette from a patch. |

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
<p>The addbox2maquette function as two inputs and one input :</p>
<ul>
<li><span>"self" : a TemporalBox instance on "reference" mode. </span></li>
<li><span>"maquette" : a maquette on "reference" mode.</span></li>
<li><span>Its input returns the reference of a TemporalBox</span></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/adb2maq.png" width="201" height="173" alt="adb2maq.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

To add the addbox2maquette function :

  - <span> `Cmd` click and type "addbox2maquette" </span>
  - <span>select `Functions, OMKernel, Maquette / Addbox2maquette`.
    </span>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Procedure</span>

</div>

<div class="txt">

To add a TemporalBox with the addbox2maquette function :

1.  connect the "self" output of a TemporalBox instance to the "self"
    input of the function

2.  connect the "self" output of the maquette box to the "maquette"
    input of the function

3.  evaluate the function.

The parameters assigned to the TemporalBox instance are expressed by the
graphic position of the TemporalBox.

</div>

<div class="caption">

<div class="caption_co">

![The TemporalBox is assigned a temporal and a vertical
position.](../res/addbox.png)

</div>

<div class="caption_ti">

The TemporalBox is assigned a temporal and a vertical position.

</div>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Other Parameters</span>

</div>

<div class="txt">

Of course, many other parameters and more or less sophisticated
interactions between those parameters – for instance, position / colour
/ pitch – can be at stake in the maquette's program.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Programming with Parametric Interaction</span>

</div>

<div class="linkUL">

  - [<span>TemporalBoxes Interaction : Examples (1)</span>](REF5.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Reference and Value Inputs of the TemporalBox</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

A TemporalBox instance is an actual program, which can :

  - <span> **calculate and yield** an object via its internal
    program,</span>
  - <span> **be given a value** via the "value" input,</span>
  - <span> **refer to an object** via its "reference" input. </span>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Adding Objects with the "Value" and "Reference" Inputs of a
Temporalbox Instance</span>

</div>

<div class="caption">

<div class="caption_co">

![patchrefval.png](../res/patchrefval.png)

</div>

</div>

<div class="txt">

This patch adds three objects in a maquette :

1.  a chord, via a "reference" input

2.  another chord, via a "value" input

3.  a patch with a chord for musical value,via a "reference" input.

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
<img src="../res/evalmaquette1.png" width="297" height="279" alt="evalmaquette1.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Addbox2maquette has been evaluated, but the TemporalBoxes have not been evaluated yet.</p>
<ul>
<li><span>The first box shows a chord, its <strong>reference</strong> . </span></li>
<li><span>The second box shows an <strong>empty patch, because it has no reference</strong> , but its musical value is that of a chord.</span></li>
<li><span> The third box has a patch for <strong>reference</strong> . It doesn't have a musical value yet.</span></li>
</ul>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

The TemporalBoxes content shows a chord instance, an empty patch and a
patch producing a musical value.

</div>

<div class="caption">

<div class="caption_co">

![contentboxes.png](../res/contentboxes.png)

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
<p>The TemporalBoxes have been evaluated. Their content has not changed.</p>
<ul>
<li><span>The first box <strong>still shows</strong> a chord, because its reference hasn't changed.</span></li>
<li><span>The second box <strong>now shows</strong> <strong>no value</strong> , because its empty patch cannot yield anything. </span></li>
<li><span>The third box <strong>now shows</strong> a chord, because its internal patch has been evaluated. </span></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/evalmaquette2.png" width="259" height="293" alt="evalmaquette2.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>"Value" vs. "Reference" Input</span>

</div>

<div class="txt">

  - The object connected to the "value" input becomes the value of this
    box. This result is updated at each evaluation of **the box's
    program** in the maquette.
    
      - <span>If this program is empty, then the TemporalBox **won't
        yield anything** . </span>
      - <span>If not, it yields whatever is connected to the program's
        **Tempout** , no matter what is connected to its "value"
        input.</span>

  - The object connected to the "reference" input becomes a **permanent
    reference** for the TemporalBox in the maquette.
    
      - <span>This object can be a **patch** or **maquette** on
        "reference" mode, or an **instance** .</span>
      - <span> If no object is assigned to this "reference" input, the
        TemporalBox will be an empty patch.</span>

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
                  - <span id="i3" class="outLeftSel_yes"><span>Adding
                    TemporalBoxes</span></span>
                  - [<span>Examples</span>](addexamples.md)
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
précédente</span>](Maquettes%20in%20Patches2.md "page précédente(Reference Mode)")<span class="hidden">
| </span>[<span>page
suivante</span>](addexamples.md "page suivante(Examples)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
