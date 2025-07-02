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
\> </span>[<span>TextFile</span>](textfile.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Outer
Environment</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](TextFileEdition.md "page précédente(TextFile Edition)")<span class="hidden">
| </span>[<span>page
suivante</span>](Picture.md "page suivante(Picture)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>TextFile and Outer Environment</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>Importing / Exporting Contents</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The contents of textfile can be imported or exported from / to a ****
file on the disk.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Import and Export From a Box</span>

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
<img src="../res/import_1.png" width="284" height="191" alt="import_1.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>To import or export a contents :</p>
<ol>
<li><p><code class="keyboard_tl">Ctrl</code> / right click on the textfile box</p></li>
<li><p>choose <code class="menuPath_tl">Import Contents from File</code> or <code class="menuPath_tl">Export contents to File</code> in the contextual menu</p></li>
<li><p>choose a file and directory in the dialogue window.</p></li>
</ol>
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
<p>The imported file appears in the textfile box and in the buffer.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/filetoimport.png" width="235" height="203" alt="filetoimport.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Import or Export from the Editor</span>

</div>

<div class="txt">

  - To import contents from an external file to the open text editor,
    select `File / Import From...`

  - To export contents, select `File / Savec As...`

</div>

</div>

</div>

</div>

<div class="part">

## <span>External File Attachment</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Other options allow to attach the object permanently to an **external
file on the disk** .

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>From the TextFile Box</span>

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
<img src="../res/importattach.png" width="287" height="188" alt="importattach.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<ul>
<li><span>To fill textfile with the contents of a persistent file, Ctrl / right click on the box, select <code class="menuPath_tl">Import and Attach File</code> . </span></li>
<li><span>To save the contents of textfile in an external file, select <code class="menuPath_tl">Export and Attach File</code>.</span></li>
</ul>
<p>These option are alike "Import" and "Export" options, but they link the content of the object with a file on the hard drive of the computer.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>With a File Pathname</span>

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
<p>To initialize a textfile with a file :</p>
<ol>
<li><p>enter the name of a file in the "self" input of an infile , outfile or tempfile box</p></li>
<li><p>connect the output of the box to the "self" input of the textfile box.</p></li>
</ol>
<p>The textfile is then attached to the corresponding file.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/connecttextfile.png" width="105" height="141" alt="Connecting a pathname to TextFile" />
</div>
<div class="caption_ti">
Connecting a pathname to TextFile
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About Pathnames</span>

</div>

<div class="linkUL">

  - [<span>Creating and Using Pathnames</span>](Pathnames.md)

</div>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Example : Reading a Pathname</span>

</div>

<div class="txt">

When a box returns a **pathname**, this pathname can be visualized via a
textfile box.

</div>

<div class="caption">

<div class="caption_co">

![The editsco function from the OM2Csound userlibrary writes a text file
– a Csound score – and returns the file
pathname.](../res/csound2text_scr.png)

</div>

<div class="caption_ti">

The editsco function from the OM2Csound userlibrary writes a text file –
a Csound score – and returns the file
pathname.[<span>Zoom</span>](../res/csound2text_scr_1.png "Zoom (nouvelle fenêtre)")

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Removing Attachements</span>

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
<p>To remove a link to a file, select <code class="menuPath_tl">Free Attached File</code>.</p>
<p>This option is only available if the textfile is already attached to a file. Once the attached file is is "freed", the contents of the textfile is <strong>internalized</strong> in the patch.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/free.png" width="300" height="209" alt="free.png" />
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

## <span>File Modification</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Save Command</span>

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
<img src="../res/arose.png" width="228" height="112" alt="Inputting data via &quot;exp-list&quot; on append mode." />
</div>
<div class="caption_ti">
Inputting data via "exp-list" on append mode.
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>To modify an attached file :</p>
<ol>
<li><p>input data via the "exp-list" input</p></li>
<li><p>evaluate the box</p></li>
<li><p>from the text editor, press <code class="keyboard_tl">cmd</code> + <code class="keyboard_tl">s</code> to store the modifications in the box.</p></li>
</ol>
<p>When the object is saved, the related file on the hard drive is modified as well.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc warning">

<div class="bloc_ti warning_ti">

<span>Externalized Contents</span>

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
<img src="../res/erroropening.png" width="239" height="264" alt="The attached file has been deleted. The Listener displays an error message." />
</div>
<div class="caption_ti">
The attached file has been deleted. The Listener displays an error message.
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Contrary to the "import" and "export" options, the <code class="menuPath_tl">attach</code> option implies that the textfile object itself refers to a persistent file. Hence, its content won't be stored int the patch itself.</p>
<ul>
<li><p>Parallel modifications of the attached file will affect the textfile box's content.</p></li>
<li><p>If the <strong>attached file</strong> is deleted of moved, the textfile will be empty when the patch is reloaded.</p></li>
</ul>
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
          - [<span>Curves and Functions</span>](CurvesAndFunctions.md)
          - [<span>Array</span>](ClassArray.md)
          - [<span>TextFile</span>](textfile.md)
              - [<span>TextFile Edition</span>](TextFileEdition.md)
              - <span id="i3" class="outLeftSel_yes"><span>Outer
                Environment</span></span>
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
précédente</span>](TextFileEdition.md "page précédente(TextFile Edition)")<span class="hidden">
| </span>[<span>page
suivante</span>](Picture.md "page suivante(Picture)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
