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
</span><span class="stkSel_yes"><span>Reading /
Writing</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](FileBoxIntro.md "page précédente(Introduction)")<span class="hidden">
| </span>[<span>page
suivante</span>](FileBoxIterations.md "page suivante(Designing Iterations)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Reading and Writing Files</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>StreamFile : a Pointer to Read and Write Files</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The StreamFile box represents the file to read or write during the
File-Box process. It is attached to the file via its
[<span>pathname</span>](Pathnames.md).

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
<img src="../res/streamfile-init.png" width="98" height="168" alt="streamfile-init.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>It has one input and one output :</p>
<ul>
<li><span> its input takes a pathname to a file</span></li>
<li><span>its output returns a file pointer used for reading or writing operations.</span></li>
</ul>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Actions and Formats</span>

</div>

<div class="txt">

The properties of the StreamFile can be edited if needed.

To open the `StreamFIle properties` window, double click on the box.

  - <span>Three options are offered a the top of the window : `Read /
    Write`, `Write`, `Read`. </span>
  - <span>The `File Type` pop up menu offers two file formats : text or
    SDIF. </span>

</div>

<div class="caption">

<div class="caption_co">

![streamfile.png](../res/streamfile.png)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>File Options</span>

</div>

<div class="txt">

The `File Exists` pop up menu offers four options, which apply to the
targeted file if it exists. Each of the different options determine the
way the program behaves when the text file is open or created to access
its contents and the choice of a **destructive or non destructive**
action.

  - <span>" **Rename** " : the existing file is renamed and a new file
    is created.</span>
  - <span>" **Supersede** " : the existing file is superseded; that is,
    a new file with the same name as the old one is created. The old
    file is deleted.</span>
  - <span>" **Overwrite** " : the file is not deleted but modified with
    the input data. For instance, if an existing file contains ten
    lines, and that the new data represents three lines, the three first
    lines of the existing file are replaced. </span>
  - <span>" **Append** " : the new data is added after the ending of the
    previous content of the file.</span>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Writing Contents</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>File-Write</span>

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
<p>The <strong>file-write</strong> function writes something in the file.</p>
<p>It has two inputs and one output:</p>
<ul>
<li><span>"line" : the text or data to write in the file, </span></li>
<li><span> "stream" : a targeted file pointer to write in, that is, the output of the streamfile box within the File-Box.</span></li>
<li><span>Its output returns the text of the first input.</span></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/filewrite.png" width="295" height="241" alt="filewrite.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>File-Write-Line</span>

</div>

<div class="txt">

The **file-write-line** function is similar to file-write, but adds a
line return at the end of the input data.

</div>

<div class="caption">

<div class="caption_co">

![Write 1001 times in the file – loop from 0 to
1000](../res/writelines.png)

</div>

<div class="caption_ti">

Write 1001 times in the file – loop from 0 to 1000

</div>

</div>

</div>

<div class="bloc note">

<div class="txt">

To write several lines, an iterative process must be introduced in the
program. Most of the time, each iteration triggers one operation in the
File-Box loop.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Iterative File-Box Processes</span>

</div>

<div class="linkUL">

  - [<span>Designing an Iterative Process with the
    File-Box</span>](FileBoxIterations.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Reading Data from a File</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>File-Read-Line</span>

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
<p>The <strong>file-read-line</strong> function <strong></strong> allows to read one line in a file.</p>
<p>It has one input and one output :</p>
<ul>
<li><span>"stream" : a targeted file pointer to write in, that is, the output of the streamfile box within the File-Box.</span></li>
<li><span>Its output returns a text line.</span></li>
</ul>
<p>When all the lines of the text are exhausted, file-read-line returns "nil".</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/fileread.png" width="101" height="217" alt="fileread.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="txt">

Most of the time, each iteration triggers one operation. In this case,
the successive lines can be stored with an accumulator such as collect,
as in an OMLoop.

</div>

<div class="caption">

<div class="caption_co">

![Reading and collecting the contents of the six first lines in a file –
loop from 0 to 5.](../res/6lines.png)

</div>

<div class="caption_ti">

Reading and collecting the contents of the six first lines in a file –
loop from 0 to 5.

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Reading Files in Iterations</span>

</div>

<div class="linkUL">

  - [<span>Designing an Iterative Process with the
    File-Box</span>](FileBoxIterations.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>File-Eof-p</span>

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
<p>"Eof" stands for "end of file", "p" for "predicate".</p>
<p>The <strong>file-eof-p</strong> function is a predicate, which tests if a streamfile is at the end of the file.</p>
<p>It has one input and one output :</p>
<ul>
<li><span>"stream" : a targeted file pointer to write in, that is, the output of the streamfile box within the File-Box.</span></li>
<li><span>Its output returns "t" or "nil".</span></li>
</ul>
<p>It can be associated with <strong>whileloop</strong> and <strong>OMIF</strong>, which execute a specific operation when the end of the file has been reached. Hence, this function allows to read a file whose number of lines is unknown.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/read-eof.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/read-eof_1.png" width="179" height="300" alt="As long as the predicate finds no streamfile, it returns &quot;nil&quot;, and lines are collected." /></a>
</div>
<div class="caption_ti">
As long as the predicate finds no streamfile, it returns "nil", and lines are collected.
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
                  - <span id="i3" class="outLeftSel_yes"><span>Reading /
                    Writing</span></span>
                  - [<span>Designing
                    Iterations</span>](FileBoxIterations.md)
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
précédente</span>](FileBoxIntro.md "page précédente(Introduction)")<span class="hidden">
| </span>[<span>page
suivante</span>](FileBoxIterations.md "page suivante(Designing Iterations)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
