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
</span><span class="stkSel_yes"><span>SDIFFile</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](SDIF-Intro.md "page précédente(Introduction to SDIF)")<span class="hidden">
| </span>[<span>page
suivante</span>](SDIF-Read.md "page suivante(Accessing SDIF Data)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>SDIF Files in OM : The SDIFFile Object</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

SDIF files are handled in OM via the **SDIFFILE** object. SDIFFILE boxes
(when correctly initialized) are attached to a file on the computer hard
disk. Therefore the actual data is not intern in the OM patch but always
remains in the external file.

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
<p>SDIFFILE has one single input/output used to initialize the box or access the contents of the attached SDIF file.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/sdiffile.png" width="138" height="83" alt="sdiffile.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="part">

## <span>SDIFFile Initialization</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Default Initialization</span>

</div>

<div class="txt">

If nothing is connected to the SDIFFILE box input, when it is evaluated,
a file chooser dialog opens and allows to choose a file to load.

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
<p>When initialized, the box miniview (press <code class="keyboard_tl">m</code>) displays some general information about the contents of the SDIF file. Each line is a stream ID followed by a frame type signature and a list of contained matrix type signatures.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/sdiffile-miniview.png" width="185" height="81" alt="sdiffile-miniview.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About the Structure of an SDIF File (Streams, Frames,
Matrices...)</span>

</div>

<div class="linkUL">

  - [<span>Introduction to SDIF</span>](SDIF-Intro.md)

</div>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>File Name</span>

</div>

<div class="txt">

When the name of the box is visible (press `n`) the name of the file is
displayed and updated at initializing the box.

</div>

</div>

<div class="bloc tip">

<div class="txtRes">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><div class="dk_txtRes_txt txt">
<p>After the SDIF file is loaded, you may want to <a href="LockMode.md"><span>lock the box</span></a> (press <code class="keyboard_tl">b</code>) in order to avoid reinitalizing it at next evaluations.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/sdiffile-locked.png" width="188" height="74" alt="sdiffile-locked.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Pathname Initialization</span>

</div>

<div class="txt">

The SDIFFILE box is more generally initialized with a file pathname,
which can be connected to its input.

This pathname can be typed textually or come from another box or
function.

</div>

<div class="caption">

<div class="caption_co">

![sdiffile-pathnames.png](../res/sdiffile-pathnames.png)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About Pathnames in OM</span>

</div>

<div class="linkUL">

  - [<span>Creating and Using Pathnames</span>](Pathnames.md)

</div>

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Sound Analysis Results</span>

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
<p>Most of the sound analysis tools available in OM (generally part of external libraries such as OM-SuperVP or OM-pm2) write analysis results in SDIF files and just return the written file pathname.</p>
<p>These return values are therefore suitable for connection to the SDFFILE box.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/pm2-to-sdif.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/pm2-to-sdif_1.png" width="300" height="196" alt="Fundamental frequency analysis with pm2-f0 from the OM-pm2 library. The result of analysis is a created SDIF file pathname, connected to the SDIFFILE box." /></a>
</div>
<div class="caption_ti">
Fundamental frequency analysis with pm2-f0 from the OM-pm2 library. The result of analysis is a created SDIF file pathname, connected to the SDIFFILE box.
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

## <span>File Contents</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Like MIDI or AIFF, SDIF is a binary data format: the contents of an SDIF
file can not be read or edited as a simple text but requires specific
tools and conversions. [<span>A number of different tools are available
in OM for this purpose</span>](SDIF-Read.md), which will be presented in
these SDIF manual pages.

It is however possible to convert an SDIF file to text in order to check
the full exact contents of a file.

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
<ul>
<li><p>The SDIF-&gt;TEXT box allows to write a text file from an input SDIFFIle. If no pathname is given for the text file, the created files will have the same name and location as the original SDIF file, with the "txt" extension.</p></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/sdif-to-text.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/sdif-to-text_1.png" width="300" height="95" alt="sdif-to-text_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

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
<ul>
<li><p>The output of SDIF-&gt;TEXT is the pathname of the text file created. This pathname can therefore also be used to initialize a <a href="textfile.md"><span>TEXTFILE</span></a> object and visualize the text conversion in OM.</p></li>
<li><p>For convenience, it is also possible to directly connect the output of SDIFFILE to the first input of <a href="textfile.md"><span>TEXTFILE</span></a> in order to convert the SDIF data to text and initialize the TEXTFILE in one single step. The file created on the disk will have the same name and location as the original SDIF file, with the "txt" extension.</p></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/sdif-to-textfile.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/sdif-to-textfile_1.png" width="300" height="222" alt="sdif-to-textfile_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

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
<a href="../res/sdif-text.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/sdif-text_1.png" width="285" height="300" alt="sdif-text_1.png" /></a>
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Here is an example of the text conversion of an SDIF file. We can already observe a number of information:</p>
<ul>
<li><p>The <strong>1NVT</strong> block ( name-value tables ) contains some global textual information about the file contents</p></li>
<li><p>The <strong>1TYP</strong> block contains some type declarations</p></li>
<li><p>The (main) <strong>SDFC</strong> part contains a succession of SDIF frames. All frames are listed (each described by its type signature, number of matrices inside, stream ID, time tag) and followed by a description of the different matrices (type signature, data size, number of components - rows, number of fields - columns) and their numerical data (matrix of numbers).</p></li>
</ul>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>The SDIF Format</span>

</div>

<div class="linkUL">

  - [<span>Introduction to SDIF</span>](SDIF-Intro.md)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Reading SDIF File Data in OM</span>

</div>

<div class="linkUL">

  - [<span>Accessing SDIF Data</span>](SDIF-Read.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>SDIFFile Editor</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Once initialize and attached to a file , double click on the SDIFFILE
box to open the SDIFFile editor.

</div>

<div class="caption">

<div class="caption_co">

[![sdiffile-editor\_1.png](../res/sdiffile-editor_1.png)](../res/sdiffile-editor.png "Cliquez pour agrandir")

</div>

</div>

<div class="txt">

The SDIFFile editor is divided in two main areas :

  - **On the left-part**, the different streams in the SDIF file are
    listed in separate blocks. Each block in turns contains a number of
    sub-blocks corresponding to the different SDIF matrix types found in
    this stream. Total number of frames, as well as beginning and end
    time are given for the different streams. For each matrix type, the
    different fields are given,as well as the maximum number of elements
    found in such matrix and its number of occurences in the stream.

Selecting a matrix block allows to visualize details of its contents on
the right-part of the editor.

  - **On the right part**, some data from the selected "matrix stream"
    is displayed. A specific field must be selected in the top-right
    menu. For this field, the evolution (in time) of a number of
    components is plotted as a set of curves. (When there is no
    evolution -- that is, only one matrix of this type has been found in
    the frame stream -- the single numerical values are displayed
    insteand of a curve).

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>More Information about the Structure of an SDIF File</span>

</div>

<div class="linkUL">

  - [<span>Introduction to SDIF</span>](SDIF-Intro.md)

</div>

</div>

</div>

<div class="bloc note">

<div class="txt">

The SDIFFile editor allows to inspect and visualize the contents of the
SDIF file, but does not allow any modification or data edition.

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>An alternative editor for SDIF files : SDIF-Edit</span>

</div>

<div class="txt">

SDIF-Edit is a program allowing to visualize and edit SDIF files in 3D.

It was used as the default editor for SDIFFile boxes in former versions
of OM (\< 6.4)

In OM 6.4 you can use SDIF-Edit instead of the default SDIF Editor
installing a dedicated external library.

All information and downloads for SDIF-Edit available here :
[<span>http://repmus.ircam.fr/sdifedit</span>](http://repmus.ircam.fr/sdifedit "http://repmus.ircam.fr/sdifedit (nouvelle fenêtre)")

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
          - <span id="i3" class="outLeftSel_yes"><span>SDIFFile</span></span>
          - [<span>Accessing SDIF Data</span>](SDIF-Read.md)
          - [<span>SDIF Classes</span>](SDIF-Classes.md)
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
précédente</span>](SDIF-Intro.md "page précédente(Introduction to SDIF)")<span class="hidden">
| </span>[<span>page
suivante</span>](SDIF-Read.md "page suivante(Accessing SDIF Data)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
