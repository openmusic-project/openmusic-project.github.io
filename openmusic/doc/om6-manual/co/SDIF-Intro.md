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
</span><span class="stkSel_yes"><span>Introduction to
SDIF</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](SDIF.md "page précédente(SDIF)")<span class="hidden">
| </span>[<span>page
suivante</span>](SDIFFile.md "page suivante(SDIFFile)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Introduction to SDIF</span>

<div class="headCo_co">

<div class="secOutFra">

<div class="secOutTi">

[<span>Sommaire </span>](#)

</div>

<div class="secOutUi">

1.  [SDIF Frames and Streams](#mgN12)
2.  [SDIF Data/Matrices](#mgNe9)
3.  [SDIF Types](#mgN152)
4.  [Examples of Common Standard SDIF Descriptions](#mgN1d8)

</div>

</div>

<div>

<div class="infobloc">

<div class="txt">

In this section we give a general introduction of the main SDIF concepts
required to understand and make an efficient use of the OM SDIF tools.

</div>

</div>

<div class="part">

## <span>SDIF Frames and Streams</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

SDIF is a binary format where data are encoded in time-tagged **FRAMES**
.

"Time-tagged" means each frame embeds its own time localization and
there is no global (regular) sample rate for the data flow. Each frame
has a header , where the time-tag as well as other information are
stored, and contain a certain amount of data.

</div>

<div class="caption">

<div class="caption_co">

![A sequence (stream) of SDIF frames.](../res/sdif-frames.png)

</div>

<div class="caption_ti">

A sequence (stream) of SDIF frames.

</div>

</div>

<div class="txt">

The next paragraphs explicit the additional data contained in the SDIF
frame headers.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Frame Type</span>

</div>

<div class="txt">

The frame **TYPE** allows to determine the contents of the frame and the
structure of the data it contains. SDIF types are identified by a
signature of 4 ASCII characters.

Examples of standard SDIF frame types are for instance "1TRC"
(sinusoidal tracks, used for additive sound descriptions), "1MRK"
(markers), "1FQ0" (fudamental frequency), "1ENV" (spectral envelope)
etc.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Stream ID</span>

</div>

<div class="txt">

Each frame also has a **stream** ID ( sID ). It is therefore possible to
store several interleaved frame streams (connected by their common
stream ID and frame type) in a same SDIF file.

**Stream ID and frame type will be crucial information to access and
read the data in SDIF files.**

</div>

</div>

<div class="bloc example">

<div class="txt">

Below are two examples of interleaved SDIF streams.

  - In the first example frames are divided in 2 streams and of
    identical types. This could be for instance the result of the same
    analysis of different parallel audio tracks.

</div>

<div class="caption">

<div class="caption_co">

[![sdif-2streams-1type\_1.png](../res/sdif-2streams-1type_1.png)](../res/sdif-2streams-1type.png "Cliquez pour agrandir")

</div>

</div>

<div class="txt">

Note that the frames time-tags are not necessarily synchronous nor
strictly interleaved (they must only be in ascending temporal order).
Reading applications should handle and manage the stream separation
using the frame stream IDs.

</div>

<div class="txt">

  - In the second examples frames are different in the two streams (type
    "XAAA" in stream 0, and type "XBBB" in stream 1). This can be for
    instance the results of several analyses of a same sound extract, or
    even completely unrelated data merged in a same sequence of frames
    and in the SDIF file.

</div>

<div class="caption">

<div class="caption_co">

[![sdif-2streams-2types\_1.png](../res/sdif-2streams-2types_1.png)](../res/sdif-2streams-2types.png "Cliquez pour agrandir")

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>SDIF Data/Matrices</span>

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
<p>Within every SDIF frame, the actual data is stored in bidimensional matrices.</p>
<p>A frame can contain one or several matrices. Each matrix is an array of data preceded (like SDIF frames)by a "matrix header" containing some general information. In particular, each matrix also has a <strong>TYPE</strong> (signature of 4 characters) used to identify the nature of the data it contains.</p>
<p>By conventions, the columns of the SDIF matrices are called <strong>fields </strong> : they correspond to the different parameters of a given description. For instance, sinusoidal tracks matrices (type "1TRC") have 4 fields describing partials : index, frequency, amplitude, phase.</p>
<p>Matrix lines are called <strong>components</strong> . There is a fixed number of fields in a matrix, but there can be any number of components.</p>
<p>As matrices are embedded in time-tagged frames, this description is supposed to be at one particular time. In other words, SDIF matrices contain the value of a given set of parameters for a number of components at the time determined by their containing frame.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/sdif-1-frame.png" width="175" height="300" alt="sdif-1-frame.png" />
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

## <span>SDIF Types</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The SDIF signatures define types for frames and matrices, that is, it
informs about the data contained in these structures.

Concretely, the frame types list the possible of matrix types found in
the frame,a nd the matrix types list the matrix fields' names.

A set of SDIF types exist by default. Others can be declared in the SDIF
files.

An informative list of standard types is provided at
[<span>http://sdif.sourceforge.net/standard/types-main.html
</span>](http:/sdif.sourceforge.net/standard/types-main.md "http://sdif.sourceforge.net/standard/types-main.html (nouvelle fenêtre)")

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Frame Types</span>

</div>

<div class="txt">

SDIF Frame type declarations indicate a type signature and a set of
allowed matrix types.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Matrix Types</span>

</div>

<div class="txt">

SDIF Matrix type declarations indicate a type signature and an ordered
list of fields.

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Notes about SDIF type signatures</span>

</div>

<div class="txt">

  - By convention, standard SDIF types' first character is a version
    number (most often, "1"), while experimental types start with an
    "X".

  - It can happend (and is correct) that a frame and matrix type have
    the same signature.

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Type extension</span>

</div>

<div class="txt">

In addition to type declaration, it is also possible to declare
extensions of existing SDIF types, for instance, in order to add fields
n a given matrix type, or to add matrices in a frame type.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Examples of Common Standard SDIF Descriptions</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Here is a set of common sound descriptions used in musical applications.

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Fundamental Frequency</span>

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
<p>The fundamental frequency estimation is one of the simplest sound descriptions : it generally has one single field (the frequency) and one single component.</p>
<p><strong>The fudamental frequency matrix type signature is "1FQ0".</strong></p>
<p>It ususally has one single field (frequency) : here is what the type declaration looks like :</p>
<p>1FQ0 { frequency }</p>
<p>Sometimes the fundamental frequency description can involve additional parameter. The standard matrix type definition is actually of the form :</p>
<p>1FQ0 { frequency, confidence, score, realamplitude}</p>
<p><strong>The fudamental frequency frame type signature is also "1FQ0".</strong> 1FQ0 frames only contain one 1FQ0 matrix. The type declaration is therefore of the form :</p>
<p>1FQ0 { 1FQ0 FundamentalFrequencyEstimate}</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/1fq0.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/1fq0_1.png" width="300" height="132" alt="1fq0_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Partials / Sinusoidal Track</span>

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
<p>The partials are described frame by frame in SDIF. In each frame, the parameters are described for each partial, which is identified by a unique index.</p>
<p><strong>The partials matrix type signature is "1TRC".</strong></p>
<p>The standard matrix type definition is of the form :</p>
<p>1TRC { index, frequency, amplitude, phase }</p>
<p>An arbitrary number of partials can de stored in every matrix.</p>
<p><strong>The partials frame type signature is also "1TRC".</strong> 1TRC frames only contain one 1TRC matrix. The type declaration is therefore of the form :</p>
<p>1TRC { 1TRC SinusoidalTracks}</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/1trc.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/1trc_1.png" width="300" height="244" alt="1trc_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Harmonic Partials</span>

</div>

<div class="txt">

Harmonic partials are stored exactly like partials in frames / matrices
of type "**1HRM**"

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Markers</span>

</div>

<div class="txt">

Markers are simple time information. They are generally stored in
**frames of type "1MRK"** with adequate time-tag.

It is often the case, however, that markers embed additional data and
information. In particular, transient detection markers differentiate
begin and end of the transients. In this case, beginning marker frames
contain a matrix of type "1BEG", while end markers contain matrix of
type "1END".

1BEG and 1END matrices contain ID values (matrix 1 x n ).

</div>

<div class="caption">

<div class="caption_co">

[![1mrk\_1.png](../res/1mrk_1.png)](../res/1mrk.png "Cliquez pour agrandir")

</div>

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Chord-Sequence Analysis</span>

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
<p>Chord-Sequence analysis or descriptions are not straightforward to embed in SDIF, since they are closer to "symbolic" (MIDI-like) data than signal descriptors. They can however be stored efficiently using markers and 1MRK frames.</p>
<p>Following the model of the SDIF partials, each "note" in such analysis is identified by a unique ID. The marker frames will then contains, at a given time:</p>
<ul>
<li><p>1BEG matrices containing the ID of the notes beginning at this moment.</p></li>
<li><p>1TRC matrices containing the value of the different parameters of the notes begining at this moment</p></li>
<li><p>1END frames containing the ID of the notes ending at this moment.</p></li>
</ul>
<p>Note that a same 1MRK frame does not necessarily contain both 1BEG and 1END matrices.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/1mrk-cs.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/1mrk-cs_1.png" width="213" height="300" alt="1mrk-cs_1.png" /></a>
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
          - <span id="i4" class="outLeftSel_yes"><span>Introduction to
            SDIF</span></span>
          - [<span>SDIFFile</span>](SDIFFile.md)
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
précédente</span>](SDIF.md "page précédente(SDIF)")<span class="hidden">
| </span>[<span>page
suivante</span>](SDIFFile.md "page suivante(SDIFFile)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
