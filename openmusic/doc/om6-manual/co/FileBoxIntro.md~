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
</span><span class="stkSel_yes"><span>Introduction</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](File-Box.md "page précédente(File-Box)")<span class="hidden">
| </span>[<span>page
suivante</span>](ReadingWriting.md "page suivante(Reading / Writing)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Introduction to the File-Box</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

Programming with the File-Box takes place in an internal editor, which
resembles the OMLoop editor. Like OMLoop, File-Box can only be evaluated
from outside the editor, in its container patch.

</div>

<div class="caption">

<div class="caption_co">

![file-box1.png](../res/file-box1.png)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Iterations : OMLoop</span>

</div>

<div class="linkUL">

  - [<span>Iterations: OMLoop</span>](OMLoop.md)

</div>

</div>

</div>

<div class="part">

## <span>StreamFile : a Pointer to Read and Write Files in File-Box</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

This editor has one main additional feature : the **StreamFile** ****
box.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Features</span>

</div>

<div class="txt">

StreamFile is an indispensable element for the File-Box : it is required
to read from a file, or write to a file.

</div>

<div class="txt">

<table>
<tbody>
<tr class="odd">
<td><p><span class="iconButton_tim"><img src="../res/streamfile_icon.png" class="sfile_icon-png_icon-gif_icon" width="49" height="58" alt="streamfile_icon.png" /></span></p></td>
<td><p>The <strong>StreamFile</strong> box represents a file pointer , that is :</p>
<ul>
<li><span>an <strong>access to a file</strong> on the computer drive</span></li>
<li><span>a <strong>position in the file</strong> . </span></li>
</ul></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Use</span>

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
<li><p>Several StreamFile boxes can be used in a File-Box, if several files must be read or written at the same time.</p></li>
<li><p>A StreamFile box is added by default in the File-Box editor.</p>
<p>To add another StreamFile box, click on the icon in the upper right corner of the window.</p></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/addfilebox.png" width="283" height="147" alt="addfilebox.png" />
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

## <span>Reading and Writing Files in File-Box : Functions of the "Files" Package</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

A number of functions of the package are used for writing or reading
files in the Text-Box.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Access</span>

</div>

<div class="txt">

To access these functions, go to `Functions / Kernel / Files`.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Features</span>

</div>

<div class="txt">

<table>
<tbody>
<tr class="odd">
<td><ul>
<li><p><span class="iconButton_tim"><img src="../res/write_icon.png" class="sfile_icon-png_icon-gif_icon" width="48" height="56" alt="write_icon.png" /></span></p></li>
</ul></td>
<td><p>The <strong>file-write</strong> function writes something (its input) in a file.</p></td>
<td><ul>
<li><p><span class="iconButton_tim"><img src="../res/readline_icon.png" class="sfile_icon-png_icon-gif_icon" width="66" height="59" alt="readline_icon.png" /></span></p></li>
</ul></td>
<td><p>The <strong>file-read-line</strong> function reads one line in a file.</p></td>
</tr>
<tr class="even">
<td><ul>
<li><p><span class="iconButton_tim"><img src="../res/writeline_icon.png" class="sfile_icon-png_icon-gif_icon" width="69" height="54" alt="writeline_icon.png" /></span></p></li>
</ul></td>
<td><p>The <strong>file-write-line</strong> function writes a line (that is, its input and a line break) a file.</p></td>
<td><ul>
<li><p><span class="iconButton_tim"><img src="../res/eof_icon.png" class="sfile_icon-png_icon-gif_icon" width="46" height="54" alt="eof_icon.png" /></span></p></li>
</ul></td>
<td><p>The <strong>file-eof-p</strong> function tells if the end of file has been reached.</p></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Using Connate Functions</span>

</div>

<div class="linkUL">

  - [<span>Reading and Writing Files</span>](ReadingWriting.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Inito</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

|                                                                             |                                                                                                                                                        |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span class="iconButton_tim">![init\_icon.png](../res/init_icon.png)</span> | The [<span>Initdo module</span>](LoopEvaluators.md) performs an action before the iteration starts. It is a useful tool to read or write file headers. |

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Using Initdo in Iterative Processes</span>

</div>

<div class="linkUL">

  - [<span>Designing an Iterative Process with the
    File-Box</span>](FileBoxIterations.md)

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
                  - <span id="i3" class="outLeftSel_yes"><span>Introduction</span></span>
                  - [<span>Reading / Writing</span>](ReadingWriting.md)
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
précédente</span>](File-Box.md "page précédente(File-Box)")<span class="hidden">
| </span>[<span>page
suivante</span>](ReadingWriting.md "page suivante(Reading / Writing)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
