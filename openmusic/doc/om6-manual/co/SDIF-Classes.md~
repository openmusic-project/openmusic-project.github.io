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
</span>[<span>SDIF</span>](SDIF.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>SDIF Classes</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](SDIF-Read.md "page précédente(Accessing SDIF Data)")<span class="hidden">
| </span>[<span>page
suivante</span>](SDIF-Write.md "page suivante(Writing SDIF Files)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>SDIF Classes</span>

<div class="headCo_co">

<div class="secOutFra">

<div class="secOutTi">

[<span>Sommaire </span>](#)

</div>

<div class="secOutUi">

1.  [SDIF Matrices](#pgN3a)
2.  [SDIF Frames](#pgNf0)
3.  [SDIF Types](#pgN1ae)
4.  [Name/Value Tables](#pgN2af)

</div>

</div>

<div>

<div class="infobloc">

<div class="txt">

OM provides a set of classes used to represent SDIF data. These class
basically follow the structure and components of the SDIF format. Thay
can be used to inspect or create data to write in SDIF files.

</div>

<div class="caption">

<div class="caption_co">

![sdif-classes.png](../res/sdif-classes.png)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Creating SDIF Files in OM</span>

</div>

<div class="linkUL">

  - [<span>Writing SDIF Files</span>](SDIF-Write.md)

</div>

</div>

</div>

<div class="part">

## <span>SDIF Matrices</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Matrices are the basic data structure in SDIF. They are made of an
arbitrary number of elements (columns) and a number of fields (lines)
depending on the SDIF types.

The class **SDIFMATRIX** is a subclass of
[<span>CLASS-ARRAY</span>](ClassArray.md). It is initialized and created
by specifying a number of components ( ) and the values of these
components for a number of fields.

The different fields are added like in the CLASS-ARRAY, as
[<span>keyword inputs</span>](AdditionalInputs.md).

SDIF matrix has one required specific slot ( ) corresponding to the SDIF
type signature of the matrix.

</div>

<div class="caption">

<div class="caption_co">

![An SDIFMatrix of type "1FQ0" with 1 element and 3
fields.](../res/sdifmatrix.png)

</div>

<div class="caption_ti">

An SDIFMatrix of type "1FQ0" with 1 element and 3 fields.

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>More about SDIF Matrices</span>

</div>

<div class="linkUL">

  - [<span>Introduction to SDIF</span>](SDIF-Intro.md)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>More about the CLASS-ARRAY Object</span>

</div>

<div class="linkUL">

  - [<span>Array</span>](ClassArray.md)

</div>

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Alternative Matrix Class</span>

</div>

<div class="txt">

Sometimes large numbers of SDIF matrices have to be generated and stored
by algorithmic processes where the potentialities of the CLASS-ARRAY
object become heavy and unnecessary. In this case, the class
**RAW-SDIFMATRIX** may be used instead.

RAW-SDIFMATRIX contains the raw matrix data with no specific storage nor
symbolic processing features. It is initialized with a type signature, a
number of elements and fields, and a plain list of data corresponding to
the matrix contents. This plain data can be written and stored directly
on disk when writing the matrix to an SDIF file, which can significantly
reduce the overall computation cost.

</div>

<div class="caption">

<div class="caption_co">

![raw-sdifmatrix.png](../res/raw-sdifmatrix.png)

</div>

</div>

<div class="txt">

**Note:** In the RAW-SDIFMATRIX the data is specified column by column
(or element by element) and not field by field as with the SDIFMatrix or
CLASS-ARRAY.

The data list for the same example matrix with two identical elements
would therefore be (440.0 1 100.0 440.0 1 100.0)

</div>

</div>

</div>

</div>

<div class="part">

## <span>SDIF Frames</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

An SDIF frame gathers one or several SDIF matrices in a time-stamped
data unit.

Frames of different types are identified by a signature, and frames of a
given type can be grouped in streams thanks to their stream ID.

**SDIFFRAME** represents an SDIF frame object in the OM framework.

</div>

<div class="caption">

<div class="caption_co">

![sdifframe.png](../res/sdifframe.png)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>SDIF Streams</span>

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
<p>SDIF frames can be groupped in streams, which can be used to discriminate, for instance, interleaved parallel descriptions in the SDIF file.</p>
<p>SDIF streams are not real structural components in the SDIF format though, and are only impliciely created depending on the frames' <strong>stream ID</strong></p>
<p>The <strong>SDIFSTREAM</strong> class can be used to group a sequence of frames in a common stream. It is an optional utility which allows in particular to automatically set the correct stream ID to every frames in it.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/sdifstream.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/sdifstream_1.png" width="300" height="208" alt="sdifstream_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

An SDIFSTREAM a can also be created from an existing SDIF file using
**GETSDIFSTREAM**. Internal extracted SDIFFrame and SDIFMatrix objects
can then be inspected and manipulated in OM patches.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Acessing Data from SDIF Files</span>

</div>

<div class="linkUL">

  - [<span>Accessing SDIF Data</span>](SDIF-Read.md)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>More About SDIF Structure (Frames, Types, Streams...)</span>

</div>

<div class="linkUL">

  - [<span>Introduction to SDIF</span>](SDIF-Intro.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>SDIF Types</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The class **SDIFType** allows to create SDIF type declatations to be
embedded in SDIF files.

</div>

</div>

<div class="bloc warning">

<div class="bloc_ti warning_ti">

<span>Declare your SDIF types</span>

</div>

<div class="txt">

All non-standard frame and matrix types used in a file MUST be declared
in this file beforehand.

</div>

</div>

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
<p>The second input of the SDIFTyep box ()allows to select between Frame or Matrix type.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/sdif-type-select.png" width="148" height="82" alt="sdif-type-select.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Frame Types</span>

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
<p>Frame types ( = 'f) are initialized with a four ACSCII characters and a &gt; list.</p>
<p>The description list is a list of lists of strings indicating the contained matrix type signatures and description label pairs.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/sdif-type-frame.png" width="194" height="169" alt="Frame type declaration : the frame type &quot;XFRA&quot; contains matrices of types &quot;XNFO&quot; (labelled &quot;InfoMat&quot;) and &quot;XMAT&quot; (labelled &quot;datamat&quot;)." />
</div>
<div class="caption_ti">
Frame type declaration : the frame type "XFRA" contains matrices of types "XNFO" (labelled "InfoMat") and "XMAT" (labelled "datamat").
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Matrix Types</span>

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
<p>Matrix types ( = 'm) are also initialized with a four ACSCII characters signature and a description list.</p>
<p>The description list is of strings indicating the matrix field names.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/sdif-type-matrix.png" width="231" height="118" alt="MAtrix type declaration : the matrix type &quot;XMAT&quot; contains 3 fields labelled &quot;par1&quot;, &quot;par2&quot; and &quot;par3&quot;." />
</div>
<div class="caption_ti">
MAtrix type declaration : the matrix type "XMAT" contains 3 fields labelled "par1", "par2" and "par3".
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>More About SDIF Types</span>

</div>

<div class="linkUL">

  - [<span>Introduction to SDIF</span>](SDIF-Intro.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Name/Value Tables</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Name/Value Tables (or NVT s) are global information stored in the SDIF
file header.

They are represented in OM by the class **SDIFNVT**.

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
<p>An SDIFNVT is initialized with a list of name/value pairs, a table name and a table ID (optional).</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/sdif-nvt.png" width="286" height="158" alt="sdif-nvt.png" />
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
      - [<span>Sheet</span>](Sheet.md)
      - [<span>MIDI</span>](MIDI.md)
      - [<span>Audio</span>](Audio.md)
      - [<span>SDIF</span>](SDIF.md)
          - [<span>Introduction to SDIF</span>](SDIF-Intro.md)
          - [<span>SDIFFile</span>](SDIFFile.md)
          - [<span>Accessing SDIF Data</span>](SDIF-Read.md)
          - <span id="i4" class="outLeftSel_yes"><span>SDIF
            Classes</span></span>
          - [<span>Writing SDIF Files</span>](SDIF-Write.md)
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
précédente</span>](SDIF-Read.md "page précédente(Accessing SDIF Data)")<span class="hidden">
| </span>[<span>page
suivante</span>](SDIF-Write.md "page suivante(Writing SDIF Files)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
