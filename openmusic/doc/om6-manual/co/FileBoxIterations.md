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
</span>[<span>Files</span>](Files.md)<span class="stkSep"> \>
</span>[<span>File-Box</span>](File-Box.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Designing
Iterations</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](ReadingWriting.md "page précédente(Reading / Writing)")<span class="hidden">
| </span>[<span>page
suivante</span>](BasicObjects.md "page suivante(Basic Tools)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Designing an Iterative Process with the File-Box</span>

<div class="headCo_co">

<div class="secOutFra">

<div class="secOutTi">

[<span>Sommaire </span>](#)

</div>

<div class="secOutUi">

1.  [Getting Results : Finally](#jdN18)
2.  [InitDo : Performing Initial Operations](#jdNb9)
3.  [Eachtime : Repeating an Operation](#jdN123)
4.  [File-Box inputs](#jdN1c0)

</div>

</div>

<div>

<div class="infobloc">

<div class="txt">

All the [<span>common OMloop tools</span>](OMLoop.md) – iterators,
accumulators – can be used in the File-Box to design iterative file
read/write processes.

</div>

</div>

<div class="part">

## <span>Getting Results : Finally</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

[<span>Just like in an OMLoop</span>](LoopEvaluators.md), the Finally
box allows to return something as a result of the iteration.

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Example : Returning a Pathname</span>

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
<img src="../res/fileboxfinally.png" width="267" height="272" alt="fileboxfinally.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Pathnames can be returned at the end of a process, which is quite convenient when writing a file.</p>
<ul>
<li><span>On the left, <strong>Eachtime</strong> calls file-write-line three times to write three lines of string. </span></li>
<li><span>On the right, <strong>Finally</strong> returns the written file pathname.</span></li>
</ul>
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
<p>The file can be accessed and used in a program.</p>
<p>Here, the file pathname allows to load and visualize the written file in a <a href="textfile.md"><span>TextFile</span></a> object.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/filebox-textfile.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/filebox-textfile_1.png" width="300" height="197" alt="Visualizing the resulting text in a textfile box – above – and in the textfile editor – below." /></a>
</div>
<div class="caption_ti">
Visualizing the resulting text in a textfile box – above – and in the textfile editor – below.
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

## <span>InitDo : Performing Initial Operations</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The **InitDo** box is called internally, just after the filestream has
been initialized, and before the iteration starts.

It allows to perform initial operations, such as writing a "file
header", as in this example.

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Example : Writing a Header</span>

</div>

<div class="caption">

<div class="caption_co">

![initdo.png](../res/initdo.png)

</div>

</div>

<div class="txt">

Here, an Initdo module has been added to the program, so that a text
header is added before the strings.

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
<img src="../res/header.png" width="283" height="296" alt="header.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The data printed by InitDo is visible in the text file.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Eachtime : Repeating an Operation</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

**Eachtime** allows to execute an operation at each step of the loop.
can be used for writing data in the file at each step of the loop.

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Example : Writing Several Lines of Strings</span>

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
<li><span>At each step, file-write-line writes a line containing "hello" in the file. The path to the file is given by streamfile and outfile. </span></li>
<li><span>The operation is iterated ten times, as defined by forloop. </span></li>
<li><span>On the other hand, Finally returns the pathname.</span></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/resulteachtime1.png" width="200" height="265" alt="resulteachtime1.png" />
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
<p>The text file can be visualized in a <a href="textfile.md"><span> textfile </span></a> box.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/resutleachtime2.png" width="88" height="87" alt="resutleachtime2.png" />
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

## <span>File-Box inputs</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The content of the file and other parameters – the file pathname for
instance – can be set in higher-level programs and abstracted as inputs
of the File-Box.

Inputs are added or removed like in [<span>OMLoop
boxes</span>](LoopGeneral.md) : press `alt` + `→` or `←`.

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
<p>Here, File-Box writes a text file that contains ten lines with "hello". The internal program of FileBox allows to add a header to the text, and a number to each line.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/outsidethepatch.png" width="212" height="176" alt="outsidethepatch.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="caption">

<div class="caption_co">

![insidefilebox.png](../res/insidefilebox.png)

</div>

</div>

<div class="txt">

  - On the left, the " **pathname" input** box returns a pathname to
    Finally and streamfile.
    
    1.  The pathname is returned to file-write-line functions.
    
    2.  The first file-write-line returns a header to Initdo, which
        executes the operation before the iteration starts.

<!-- end list -->

  - The second file-write-line writes the content of the text file with
    the boxes located on the right.
    
    1.  The " **list" input** returns a list with ten "hellos".
    
    2.  Listloop enumerates each item of the list. At each step, count
        gets "true" and returns the number of the step.
    
    3.  String+ concatenates this number, ":" and "hello".
    
    4.  Eachtime writes a line containing the resulting string in the
        text at each step of the loop.

</div>

<div class="caption">

<div class="caption_co">

![fileboxinputs.png](../res/fileboxinputs.png)

</div>

</div>

<div class="txt">

The **pathname** returned by Finally can possibly be displayed in a
[<span>text-view</span>](TextBoxes.md) .

The **content of the text** displayed in the textfile box shows :

  - <span>the header printed by Initdo</span>
  - <span> the lines printed by Eachtime.</span>

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
          - [<span>Abstraction</span>](Abstraction.md)
          - [<span>Evaluation Modes</span>](EvalModes.md)
          - [<span>Higher-Order Functions</span>](HighOrder.md)
          - [<span>Control Structures</span>](Control.md)
          - [<span>Iterations: OMLoop</span>](OMLoop.md)
          - [<span>Instances</span>](Instances.md)
          - [<span>Interface Boxes</span>](InterfaceBoxes.md)
          - [<span>Files</span>](Files.md)
              - [<span>Pathnames</span>](Pathnames.md)
              - [<span>Default Directories</span>](DefDirectories.md)
              - [<span>File-Box</span>](File-Box.md)
                  - [<span>Introduction</span>](FileBoxIntro.md)
                  - [<span>Reading / Writing</span>](ReadingWriting.md)
                  - <span id="i4" class="outLeftSel_yes"><span>Designing
                    Iterations</span></span>
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
précédente</span>](ReadingWriting.md "page précédente(Reading / Writing)")<span class="hidden">
| </span>[<span>page
suivante</span>](BasicObjects.md "page suivante(Basic Tools)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
