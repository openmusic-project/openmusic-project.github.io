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
</span>[<span>Instances</span>](Instances.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Global
Variables</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](InstanceBoxes.md "page précédente(Instance Boxes)")<span class="hidden">
| </span>[<span>page
suivante</span>](SlotsBox.md "page suivante(Slots)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Global Variables</span>

<div class="headCo_co">

<div class="secOutFra">

<div class="secOutTi">

[<span>Sommaire </span>](#)

</div>

<div class="secOutUi">

1.  [General Properties](#ucN1b)
2.  [Using a Global Variable](#ucN120)
3.  [Creating a Global Variable From an Instance](#ucN1a5)
4.  [Modifying a Global Variable](#ucN286)

</div>

</div>

<div>

<div class="infobloc">

<div class="txt">

**Global variables** are "globalized" instances.

</div>

</div>

<div class="part">

## <span>General Properties</span>

<div class="part_co">

<div class="bloc legal">

<div class="bloc_ti legal_ti">

<span>Advantages</span>

</div>

<div class="txt">

A global variable is an
<span id="i4" class="defRef_ul"><span>instance</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc1804)</sup>
associated with the workspace where it was created. It can be used in
**several programs of the same workspace**. It is designed so that **any
modification of the instance** **is incorporated into** **all its
representations** .

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Instances and Global Variables</span>

</div>

<div class="txt">

When defining a chord, a metric sequence, manipulating an audio file,
the user creates a specific
<span id="i5" class="defRef_ul"><span>instance</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc1804)</sup>
from a
<span id="i6" class="defRef_ul"><span>class</span></span><sup>[<span>\[</span>2<span>\]</span>](#kFootBsktc1871)</sup>.

|                                                                                     |                                                                                                                                                                                                                                                                            |
| ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="iconButton_tim">![instance\_icon.png](../res/instance_icon.png)</span> | This instance can be materialized in the current patch editor by instance boxes . Instance boxes are grey.                                                                                                                                                                 |
| <span class="iconButton_tim">![global\_icon.png](../res/global_icon.png)</span>     | It can also be exported as a **global variable** to a workspace where it will be stored in the [<span> Globals package</span>](Packages.md) of the Library <span class="iconButton_tim">![green\_icon.png](../res/green_icon.png)</span>. Global variable boxes are green. |

</div>

</div>

</div>

</div>

<div class="part">

## <span>Using a Global Variable</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Reference of a Global Variable</span>

</div>

<div class="txt">

A global variable can be used in **several different places** , but all
boxes created from it correspond to the same instance.

  - When evaluated, the box always returns the same instance.

  - **A same global variable can be present **in several different
    places**** : it refers to several boxes.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Modifications : Effects</span>

</div>

<div class="txt">

Any modification of a global variable will affect all of its
representations, as well as the master item.

  - Modifying a global variable affects each of its references.

  - Modifying **one of its references** equally affects the **variable
    itself and all its references** . 

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Connections to Other Boxes</span>

</div>

<div class="txt">

A global variable box can be connected to other boxes, just as an
instance box.

</div>

<div class="caption">

<div class="caption_co">

![createewchord.png](../res/createewchord.png)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Creating a Global Variable From an Instance</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Adding a Global Variable in the Library</span>

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
<p>Open the Globals package in the Library window :</p>
<ul>
<li><span> double click on its lower part to open it as a side frame,</span></li>
<li><span> double click on its upper part, or <code class="keyboard_tl">Ctrl</code> / right click and choose <code class="menuPath_tl">Open</code> in the contextual menu to open it as a window. </span></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/contextglob.png" width="127" height="71" alt="contextglob.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

Select an instance and drop it in the Globals package window. The
instance box in the patch is converted into a global variable box
automatically.

</div>

<div class="caption">

<div class="caption_co">

![dropinstvar.png](../res/dropinstvar.png)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Adding a Store Object in the Globals Package</span>

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
<a href="../res/new-global.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/new-global_1.png" width="300" height="213" alt="new-global_1.png" /></a>
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The <strong>store</strong> object is a <strong>general-purpose object</strong> , which is designed to store any type of data. A global variable created in the Globals package is an instance of the Store class, where any type of object can be stored.</p>
<p>To add a global variable in the Globals package, open the Globals package and select <code class="menuPath_tl">File / New Variable</code>.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>More About the Store Object</span>

</div>

<div class="linkUL">

  - [<span>The Store Object</span>](Store.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Modifying a Global Variable</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Name</span>

</div>

<div class="txt">

The variable can be renamed in the Globals window. All related elements
in the patch will be affected by this change immediately. They will have
the same name and reference.

</div>

<div class="caption">

<div class="caption_co">

![dropvariable.png](../res/dropvariable.png)

</div>

</div>

</div>

<div class="bloc legal">

<div class="bloc_ti legal_ti">

<span>Parametric Values : Using the Slots Box</span>

</div>

<div class="txt">

Like an instance box, the global variable box appears without inputs.
Parametric values of global variables can be accessed and modified via a
specific type of box : the **slots** box.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>How to Modify Instance Boxes</span>

</div>

<div class="linkUL">

  - [<span>Reading and Modifying Instances : Slots</span>](SlotsBox.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Modifying a Global Variable from its Editor</span>

</div>

<div class="txt">

A global variable can also be modified using its editor, like any
instance or factory box.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Modifying an Instance</span>

</div>

<div class="linkUL">

  - [<span>Editors</span>](3-Editors.md)

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

<span class="hidden">Références : </span>

1.  
    
    <div id="kFootBsktc1804">
    
    <div class="footBskt_itti">
    
    Instance
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    An actual object created at runtime, out of a given class. In OM,
    more specifically, an object created when evaluating a factory box.
    An instance can be saved as a global variable.
    
    ⤷ `SHIFT` click on an outlet – especially the first outlet
    representing the self, the whole object – of a factory box to
    materialize an instance.
    
    </div>
    
    </div>
    
    </div>
    
    </div>

2.  
    
    <div id="kFootBsktc1871">
    
    <div class="footBskt_itti">
    
    Class
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    A category of objects sharing common properties – characteristics
    and behaviour. A class specifies the internal structure and
    behaviour of an object. In OM, it is represented in a patch by a
    factory box that can produce an instance of a class.
    
    See also : Object, Instance
    
    </div>
    
    </div>
    
    </div>
    
    </div>

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
          - [<span>Evaluation Modes</span>](EvalModes.md)
          - [<span>Higher-Order Functions</span>](HighOrder.md)
          - [<span>Control Structures</span>](Control.md)
          - [<span>Iterations: OMLoop</span>](OMLoop.md)
          - [<span>Instances</span>](Instances.md)
              - [<span>Instance Boxes</span>](InstanceBoxes.md)
              - <span id="i7" class="outLeftSel_yes"><span>Global
                Variables</span></span>
              - [<span>Slots</span>](SlotsBox.md)
              - [<span>The Store Object</span>](Store.md)
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
précédente</span>](InstanceBoxes.md "page précédente(Instance Boxes)")<span class="hidden">
| </span>[<span>page
suivante</span>](SlotsBox.md "page suivante(Slots)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
