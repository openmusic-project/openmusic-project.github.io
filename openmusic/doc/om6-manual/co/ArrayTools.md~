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
</span>[<span>Basic Tools</span>](BasicObjects.md)<span class="stkSep">
\> </span>[<span>Array</span>](ClassArray.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Class-Array
Tools</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](ArrayEditor.md "page précédente(Class-Array Editor)")<span class="hidden">
| </span>[<span>page
suivante</span>](textfile.md "page suivante(TextFile)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Class-Array Tools Overview</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

The values of array components can be accessed and modified via specific
tools. These are especially designed for advanced applications, in
particular in the [<span> OMChroma </span>]() project, where synthesis
parameters are specified using subclasses of class-array . These
applications allow the access and extension of specified parameters at
synthesis time.

To access these tools, select the the `Functions/Basic Tools/Array`
menu.

</div>

<div class="caption">

<div class="caption_co">

![datamenu.png](../res/datamenu.png)

</div>

</div>

<div class="txt">

These functions mostly operate on array **components** – or columns –,
since they are transverse to the different fields – or lines – that were
specified via the inputs of the array box.

Instances of the internal class component are returned and manipulated
by these functions.

More information on these functions and their arguments is available in
the online function reference – type `d`.

</div>

</div>

<div class="part">

## <span>Accessing Array Data</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Functions</span>

</div>

<div class="txt">

|                                                                                       |                                                                                                                                                    |
| ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="iconButton_tim">![getcomp\_icon.png](../res/getcomp_icon.png)</span>     | **get-comp** returns the nth component of an array.                                                                                                |
| <span class="iconButton_tim">![complist\_icon.png](../res/complist_icon.png)</span>   | **comp-list** returns a list of values in a component, corresponding to the different array fields.                                                |
| <span class="iconButton_tim">![compfield\_icon.png](../res/compfield_icon.png)</span> | **comp-field** returns the value of a specific field in a given component. This field can be specified by an index (number) or by a name (string). |

More information on these functions and their arguments is available in
the online function reference – type `d` .

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Example : Getting the Value of a Chord from a Class-Array</span>

</div>

<div class="caption">

<div class="caption_co">

![compfunctions1.png](../res/compfunctions1.png)

</div>

</div>

<div class="txt">

Here,

  - <span> get-comp returns the value of the **second component** , or
    column, of the class-array </span>
  - <span> comp-list returns the list of values belonging to the
    **second column** of the class- array : a chord and two
    ordinates</span>
  - <span> comp-field returns the value of the **first field** , or
    line, corresponding to the second column : a chord.</span>

Remember that numbering starts at 0, consequently, 0 = 1st element, 1 =
2nd element...

</div>

</div>

</div>

</div>

<div class="part">

## <span>Modifying Array Data</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Functions</span>

</div>

<div class="txt">

|                                                                                         |                                                                                                                                                                               |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="iconButton_tim">![complist2\_icon.png](../res/complist2_icon.png)</span>   | **comp-list** can also set the list of values of a given components via an optional second input.                                                                             |
| <span class="iconButton_tim">![compfield2\_icon.png](../res/compfield2_icon.png)</span> | **comp-field** can also set the value of a given field of the components via an optional third input. This field can be specified by an index (number) or by a name (string). |
| <span class="iconButton_tim">![newcomp\_icon.png](../res/newcomp_icon.png)</span>       | ******new-comp****** function allows to create a new component with a given list of values.                                                                                   |
| <span class="iconButton_tim">![addcomp\_icon.png](../res/addcomp_icon.png)</span>       | **add-comp** adds a component at a given position in the array.                                                                                                               |
| <span class="iconButton_tim">![removecomp\_icon.png](../res/removecomp_icon.png)</span> | **remove-comp** removes a component from the array.                                                                                                                           |

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Example : Modifying and Re-injecting a Component in an
Array</span>

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
<a href="../res/modifarray.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/modifarray_1.png" width="187" height="300" alt="modifarray_1.png" /></a>
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Here,</p>
<ul>
<li><span> get-comp returns the 3rd component in the array</span></li>
<li><span> clone creates a copy of this component</span></li>
<li><span> comp-field modifies a field of the new component</span></li>
<li><span> add-comp adds it to the array</span></li>
</ul>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc warning">

<div class="bloc_ti warning_ti">

<span>Permanent Modification of the Object</span>

</div>

<div class="txt">

These functions are destructive : the input parameters, that is, the
array or its internal components are modified at each evaluation. In the
previous example, the array on the top of the figure gets one new
component each time add-comp is evaluated.

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
          - [<span>Curves and Functions</span>](CurvesAndFunctions.md)
          - [<span>Array</span>](ClassArray.md)
              - [<span>Class-Array Object</span>](ArrayObject.md)
              - [<span>Class-Array Editor</span>](ArrayEditor.md)
              - <span id="i2" class="outLeftSel_yes"><span>Class-Array
                Tools</span></span>
          - [<span>TextFile</span>](textfile.md)
          - [<span>Picture</span>](Picture.md)
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
précédente</span>](ArrayEditor.md "page précédente(Class-Array Editor)")<span class="hidden">
| </span>[<span>page
suivante</span>](textfile.md "page suivante(TextFile)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
