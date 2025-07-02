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
Object</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](ClassArray.md "page précédente(Array)")<span class="hidden">
| </span>[<span>page
suivante</span>](ArrayEditor.md "page suivante(Class-Array Editor)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Class-Array Object</span>

<div class="headCo_co">

<div class="secOutFra">

<div class="secOutTi">

[<span>Sommaire </span>](#)

</div>

<div class="secOutUi">

1.  [Properties](#sdN1b)
2.  [Rows and Columns](#sdNec)
3.  [Instantiation](#sdN222)
4.  [Creating Arrays with Objects](#sdN36d)

</div>

</div>

<div>

<div class="infobloc">

<div class="txt">

The class-array box is accessed via the `Classes / Basic Tools / Array`
menu.

</div>

</div>

<div class="part">

## <span>Properties</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Columns and Lines</span>

</div>

<div class="txt">

The  **class-array** box has a number of **columns** , called "
**components** " and a variable number of **rows** or **lines** , called
" **fields** ".

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Default Inputs and Outputs</span>

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
<img src="../res/classarray.png" width="221" height="79" alt="classarray.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The class-array box has two default inputs and outputs</p>
<ul>
<li><span>"self" : an object or a list of objects </span></li>
<li><span>"numcols" : a number of components or columns.</span></li>
</ul>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Keyword Inputs</span>

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
<p>The class-array can be added a number of <a href="AdditionalInputs.md"><span> keyword arguments </span></a> , which represent <strong><a href="AdditionalInputs.md"><span> </span></a></strong> the <strong>fields</strong> of the matrix.</p>
<p>Each keyword input has a corresponding output.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/arraykeyword.png" width="76" height="75" alt="arraykeyword.png" />
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

## <span>Rows and Columns</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Use and Definition</span>

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
<img src="../res/arrayfields.png" width="179" height="120" alt="An empty class-array with 2 fields – rows – and 7 components – columns." />
</div>
<div class="caption_ti">
An empty class-array with 2 fields – rows – and 7 components – columns.
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Each <strong>column</strong> represents a <strong>component</strong> .</p>
<p>Each <strong>line</strong> <strong>or row</strong> in the matrix display represents a <strong>field</strong> , which corresponds to one of the <strong>keyword inputs </strong> of the box.</p>
<ul>
<li><span>Each line contains field values. Values are entered in the corresponding keyword input. </span></li>
<li><span>Field values are assigned successively to each component of the matrix. This means each cell has a specific value.</span></li>
</ul>
<ul>
<li><p>Fields can be added by the user with the <code class="keyboard_tl">k</code> keys, just like <strong>keyword arguments</strong> in OM function boxes.</p>
<p>To delete a field, press <code class="keyboard_tl">SHIFT</code> + <code class="keyboard_tl">k</code> .</p></li>
<li><p>Fields can be defined as <strong>slots</strong> of the class-array subclasses.</p>
<p>They can then be hidden or shown with the <code class="keyboard_tl">&gt;</code> or <code class="keyboard_tl">&lt;</code> keys.</p></li>
</ul>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Slots / Subclasses</span>

</div>

<div class="txt">

The class-array is designed to be used as a superclass for array classes
with default fields.

<span id="i4" class="defRef_ul"><span>Subclasses</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc2905)</sup>
can be created either with Lisp code, or visually in OMExamples of
class-array subclasses are the classes from the [<span>OMChroma
system</span>]() for the control of sound synthesis.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Creating Subclasses</span>

</div>

<div class="linkUL">

  - [<span>Object Oriented Programming</span>](OOP.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Keyword Inputs Name and Value</span>

</div>

<div class="txt">

By default, keyword inputs – additional fields – are called ":k1",
":k2", etc...

To modify these names :

1\. click on the input

2\. enter a name starting with ":"

The value of keyword inputs must come from a connected box.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Keyword Inputs</span>

</div>

<div class="linkUL">

  - [<span>Additional Inputs : Optional, Keyword and Rest
    Arguments</span>](AdditionalInputs.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Instantiation</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The class-array has an original and powerful instantiation system that
interprets the input data connected to its different filed inputs
automatically. If needed, input data is converted to generate and fill
all the components values internally, depending on the given number of
columns.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Applying a List of Values</span>

</div>

<div class="caption">

<div class="caption_co">

![If necessary, values are repeated.](../res/array-list.png)

</div>

<div class="caption_ti">

If necessary, values are repeated.

</div>

</div>

<div class="txt">

1.  The list fits the number of components. The items contained in each
    list are assigned to the successive components.

2.  If the number of items is superior to the number of components, the
    list is repeated.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Applying a Single Value</span>

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
<p>A single value is repeated for every component of the array.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/array-const.png" width="224" height="160" alt="The constant value is repeated for all the components." />
</div>
<div class="caption_ti">
The constant value is repeated for all the components.
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Resampling BPFs</span>

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
<img src="../res/bpf-array.png" width="224" height="267" alt="Eight values are sampled periodically in the curve." />
</div>
<div class="caption_ti">
Eight values are sampled periodically in the curve.
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>A BPF can be resampled according to the number of components of the class-array . Hence, each <strong>component</strong> can be assigned a <strong>value</strong> , no matter how many points the BPF has.</p>
<p>This class-array contains eight components, or columns.</p>
<ul>
<li><span>The BPF is the second field of the class-array .</span></li>
<li><span> Eight points are sampled in the BPF and assigned to the second line of the class-array .</span></li>
</ul>
<p>Note that using the "x-points" or "y-points" instead of the "self" output of the BPF amounts to feeding the array with a list of value.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Applying Functions</span>

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
<p>If a function or a box on <a href="LambdaMode.md"><span> "lambda" mode </span></a> is connected to a field of the array, it is applied to the components of the field at the evaluation.</p>
<p>Here, arrays # 1 and 3 are instantiated with two functions :</p>
<ol>
<li><p>the sinus function is evaluated for n = 1 to 30, that is, for each component's index.</p></li>
<li><p>The om-random box in "lambda" mode defines a function that returns a random number between 0 and n, where n = the component's index.</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/array-fun.png" width="241" height="210" alt="Instantiating arrays with the sinus and om-random functions." />
</div>
<div class="caption_ti">
Instantiating arrays with the sinus and om-random functions.
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

## <span>Creating Arrays with Objects</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Objects Lists</span>

</div>

<div class="txt">

Objects, such as notes , chords , or any object in OM, can also be used
for filling the matrix fields. These objects must be connected as a list
to the class-array inputs.

</div>

<div class="caption">

<div class="caption_co">

![objects-array.png](../res/objects-array.png)

</div>

</div>

<div class="txt">

This procedure also allows, for instance, to create **arrays of
arrays**, as in example 2 above.

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Advanced Issue : Row Types</span>

</div>

<div class="txt">

In class-array subclasses , the **type** of a subclass field may change
the way input data is interpreted.

</div>

</div>

</div>

</div>

</div>

</div>

</div>

<span class="hidden">Références : </span>

1.  
    
    <div id="kFootBsktc2905">
    
    <div class="footBskt_itti">
    
    Subclass
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    A subclass is derived from a preexisting class, by inheritance. In
    object-oriented programming, objects are defined by classes. New
    objects can be created from existing objects. As objects are defined
    by classes, classes can inherit other classes. Sub-classes inherit
    attributes and behavior of the pre-existing classes, or
    super-classes. Code is compartmentalized and reused by creating
    collections of attributes and behaviors called objects which can be
    based on previously created objects.
    
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
      - [<span>Basic Tools</span>](BasicObjects.md)
          - [<span>Curves and Functions</span>](CurvesAndFunctions.md)
          - [<span>Array</span>](ClassArray.md)
              - <span id="i5" class="outLeftSel_yes"><span>Class-Array
                Object</span></span>
              - [<span>Class-Array Editor</span>](ArrayEditor.md)
              - [<span>Class-Array Tools</span>](ArrayTools.md)
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
précédente</span>](ClassArray.md "page précédente(Array)")<span class="hidden">
| </span>[<span>page
suivante</span>](ArrayEditor.md "page suivante(Class-Array Editor)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
