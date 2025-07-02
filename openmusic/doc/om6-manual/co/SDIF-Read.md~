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
</span><span class="stkSel_yes"><span>Accessing SDIF
Data</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](SDIFFile.md "page précédente(SDIFFile)")<span class="hidden">
| </span>[<span>page
suivante</span>](SDIF-Classes.md "page suivante(SDIF Classes)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Accessing SDIF Data</span>

<div class="headCo_co">

<div class="secOutFra">

<div class="secOutTi">

[<span>Sommaire </span>](#)

</div>

<div class="secOutUi">

1.  [File Overview / General Information](#ogN39)
2.  [Get SDIF Data](#ogN18c)
3.  [High-Level Conversion Tools](#ogN2b4)
4.  [NVTs: Name/Value Tables](#ogN40f)

</div>

</div>

<div>

<div class="infobloc">

<div class="txt">

There exist several ways, more or less precise and specific, to inspect
and read the contents of an SDIF file in an OM visual program.

You'll probably have to know about the contents structure of the file
before to extract some particular data out of it. Several tools
presented in this section might help, but a quick preview of the file
structure using the SDIFFile editor is generally useful.

All the tools presented in this section must be used with an SDIFFile
object and can be found in the `SDIF/Read/` menus or packages. See the
specific reference pages for a more complete descriptions and details
about the box arguments and outputs (select the box and type `d`).

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>The SDIFFile Box and Editor</span>

</div>

<div class="linkUL">

  - [<span>SDIF Files in OM : The SDIFFile Object</span>](SDIFFile.md)

</div>

</div>

</div>

<div class="part">

## <span>File Overview / General Information</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

A set of tools allow to get some general data and information about the
structure and contents of the file.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Streams and File Structure</span>

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
<p><strong>SDIFINFO</strong> provides some information about the general file structure, displayed as text in the OM Listener.</p>
<p>A list of "matrix streams" ( stream ID , frame type , matrix type tuples) is returned.</p>
<p>This information basically corresponds to what can be observed on the left-hand part of the SDIFFile editor.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/sdif-read-info.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/sdif-read-info_1.png" width="300" height="131" alt="sdif-read-info_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Frame vs. Matrix Streams</span>

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
<p>Note that the "real" structure of an SDIF file consists in identified frame streams in which matrices of different types are stored (and actually not "matrix streams"). This actual stream structure can also be collected using the <strong>SDIFSTREAMS</strong> box.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/sdif-read-stream-boxes.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/sdif-read-stream-boxes_1.png" width="300" height="155" alt="sdif-read-stream-boxes_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Contents Meta-Data</span>

</div>

<div class="txt">

The following boxes allow to get some specific information about the
farmes and matrix in the SDIF file :

  - **NUMFRAMES** : number of frames of a given type (or in total) in
    the file

  - **FRAMEINFO** : information about frame number n (of a specific type
    or in total) : type signature, stream ID, time, position, number of
    matrices inside.

  - **MATRIXINFO** : information about matrix number m in frame number n
    (of a specific type or in total) : type signature, number of fields,
    number of components..

</div>

<div class="caption">

<div class="caption_co">

![sdif-read-info-boxes.png](../res/sdif-read-info-boxes.png)

</div>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>SDIF Data</span>

</div>

<div class="txt">

Note that none of these tools give you any of the actual data contained
in the file, but some meta-data related to the file structure.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Type Descriptions</span>

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
<p><strong>SDIFTYPEDESCRIPTION</strong> allows to get information about the frames and matrices of a specific type.</p>
<p>Notes :</p>
<ul>
<li><p>Although type description might seem like stream descriptions, they list all possible matrix types allowed in frames of a given type, or all possible fields in matrices of a given type. It is not guaranteed that such "allowed" data will actually be in part of the file data.</p></li>
<li><p>SDIF types are defined and initialized so they are attached to a particular file. It is therefore always necessary to connect the SDIF file to SDIFTYPEDESCRIPTION, in addition to the type signature.</p></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/sdif-read-type.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/sdif-read-type_1.png" width="300" height="218" alt="sdif-read-type_1.png" /></a>
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

## <span>Get SDIF Data</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

There exist different ways to access the numerical values contained in
an SDIF file. It is important, in any case, to preliminary know what we
are looking for, or where to find it.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Extracting localized data</span>

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
<p>You might know exactly where to find the data you're looking for thanks to the inspection tools described in the previous sections. In this case, the functions <strong>GETCOL</strong>, <strong>GETROW</strong> or <strong>GETVAL</strong> allow you to extract the data (either a whole column, a whole row or a single value) from a matrix localized by its index in a frame and by the exact rank of this frame.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/sdif-read-vals.png" width="211" height="272" alt="sdif-read-vals.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Extracting Specific Data</span>

</div>

<div class="txt">

The more useful and efficient way to extract data from an SDIF file is
to know which type of data we want (that is, what are the frame and
matrix type we are looking for).

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
<p>The <strong>GETSDIFDATABOX</strong> is the definite and more general way to get your data out of the file.</p>
<p>The main (required) arguments are the stream ID, frame type and matrix type which will allow to discriminate a particular SDIF "matrix stream". The other ones allow to target a particular time interval (begin time, end time), a particular matrix field (column number), and a particular range for the matrix components (rmin, rmax).</p>
<ul>
<li><span>The resulting data is a list of lists: each element represents the values of the different matrix components for the selected field. If several fields are requested (or no field number is given), the result will be a list of lists of lists: for each component, the values of the different requested (or all) fields will be retured.</span></li>
<li><span>The second output of GETSDIFDATA returns the time list corresponding to the values list in the first input.</span></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/sdif-read-getsdifdata.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/sdif-read-getsdifdata_1.png" width="300" height="129" alt="sdif-read-getsdifdata_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Avoiding Useless File Accesses</span>

</div>

<div class="txt">

If both the values and time output are to be used, it is recommended to
set the GETSDIFFILE box to [<span>mode
"eval-once"</span>](EvOnceMode.md) so as to avoid to read and store the
data twice for the same box.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Extracting SDIF as OM Objects</span>

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
<p>Instead of getting numerical values out of the SDIF file, the <strong>GETSDIFSTREAM</strong> function can also create and return an SDIFSTREAM object.</p>
<p>SDIFSTREAM is part of the classes provided in OM to represent and manipulate SDIF data. SDIFFRAMES and SDIFMATRICES can extracted from and SDIFSTREAM and manipulated as well in OM visual programs. Some tools are also provided to write a new SDIF file using these SDIF structures.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/sdif-read-stream.png" width="298" height="228" alt="sdif-read-stream.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Manipulating SDIF Data as Objects in OM</span>

</div>

<div class="linkUL">

  - [<span>SDIF Classes</span>](SDIF-Classes.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>High-Level Conversion Tools</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Some commonly used SDIF descriptions can be straightforwardly converted
to specific OM data or objects. A number of predefined functions allow
to make this conversion for you.

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Markers</span>

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
<p>Temporal markers may be contained in SDIF descriptions, for instance in the results of transient detection analysis.</p>
<p><strong>SDIF-&gt;MARKERS</strong> extracts the time values of marker frames and returns them as a simple list of values in seconds. This list can for instance be connected to the markers input of a <a href="Sound.md"><span>SOUND</span></a> object, containing the original sound file.</p>
<p>By default, markers are extracted from all frames of type "1MRK". This default type can be changed, however, using the SDIF-&gt;MARKERS <a href="AdditionalInputs.md"><span>additional inputs</span></a>. It is also possible to refine the markers extraction by specifying a specific matrix type to target. You may want, for instance, to extract only the transient begin markers (matrix type "1BEG") and not the transient ends (type "1END") from the 1MRK frames.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/sdif-markers-sound.png" width="300" height="297" alt="sdif-markers-sound.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Markers and SDIF Structure</span>

</div>

<div class="linkUL">

  - [<span>Introduction to SDIF</span>](SDIF-Intro.md)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About Sounds and Markers</span>

</div>

<div class="linkUL">

  - [<span>The Sound Object</span>](Sound.md)

</div>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>BPFs</span>

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
<p>Some SDIF descriptions consist of a single scalar parameter, which can easily be extracted and converted to a <a href="BPF-BPC.md"><span>BPF object</span></a>. This is typically the case of the fundamental frequency analyses.</p>
<p>The <strong>SDIF-&gt;BPF</strong> function allows to directly perform this conversion. If the SDIF data is not a fundamental frequency (frame or matrix type is not "1FQ0"), then the <a href="AdditionalInputs.md"><span>additional inputs of this function</span></a> allow to consider different types of frames and matrices.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/sdif-bpf.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/sdif-bpf_1.png" width="300" height="251" alt="sdif-bpf_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Chords</span>

</div>

<div class="txt">

"Chords" can be extracted from SDIF data, either from "1TRC"/"1HRM"
frames (inharmonic/harmonic partials or sinusoïdal track descriptions)
or from "1MRK" frames containing chord-sequence analyses.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Partials and Chord Sequences in SDIF</span>

</div>

<div class="linkUL">

  - [<span>Introduction to SDIF</span>](SDIF-Intro.md)

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
<p>Two main functions allow to extract chords (or, more precisely "notes") from the partials in an SDIF file.</p>
<p><strong>1) GETSDIFCHORDS</strong> returns a list of ( pitch [Hz] onset [s] duration [s] velocity [lin]). In case of partials (1TRC/1HRM) the pitch and velocities are the mean values of these parameters on the total duration of the original partial.</p>
<p>Note: <strong>GET-SDIF-RAW-DATA</strong> allows to get the "original" unporcessed SDIF data: for each partials, the list of time-tags, frequencies, amplitudes and phases are returned.</p>
<p><strong>2) SDIF-&gt;CHORD-SEQ</strong> directly converts the data to a CHORD-SEQ object</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/sdif-chords.png" width="225" height="300" alt="sdif-chords.png" />
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

## <span>NVTs: Name/Value Tables</span>

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
<p>Name/Value Tables (or NVT s) are global information stored in the SDIF file header. They can be read in OM with the function GETNVTLIST.</p>
<p>GETNVTLIST returns a list of <strong>SDIFNVT</strong> instances. SDIFNVT is a class representing the name value table.</p>
<p>The value corresponding to a particular NVT entry name can be searched with FIND-IN-NVT and FIND-IN-NVTLIST functions.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/sdif-read-nvt.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/sdif-read-nvt_1.png" width="300" height="255" alt="sdif-read-nvt_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>More About OM Representation of SDIF NVTs</span>

</div>

<div class="linkUL">

  - [<span>SDIF Classes</span>](SDIF-Classes.md)

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
      - [<span>Sheet</span>](Sheet.md)
      - [<span>MIDI</span>](MIDI.md)
      - [<span>Audio</span>](Audio.md)
      - [<span>SDIF</span>](SDIF.md)
          - [<span>Introduction to SDIF</span>](SDIF-Intro.md)
          - [<span>SDIFFile</span>](SDIFFile.md)
          - <span id="i4" class="outLeftSel_yes"><span>Accessing SDIF
            Data</span></span>
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
précédente</span>](SDIFFile.md "page précédente(SDIFFile)")<span class="hidden">
| </span>[<span>page
suivante</span>](SDIF-Classes.md "page suivante(SDIF Classes)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
