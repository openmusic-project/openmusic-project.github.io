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
</span><span class="stkSel_yes"><span>Writing SDIF
Files</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](SDIF-Classes.md "page précédente(SDIF Classes)")<span class="hidden">
| </span>[<span>page
suivante</span>](Lisp.md "page suivante(Lisp Programming)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Writing SDIF Files</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>SDIF-Buffer</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The class **SDIF-BUFFER** allows to gather SDIF objects and makes the
connection with "real" SDIF files.

An SDIF-Buffer contains :

  - <span>A list of SDIF Frames or SDIF Streams</span>
  - <span>A list of SDIFTypes (type declarations)</span>
  - <span>A list of Name/Value tables</span>

</div>

<div class="caption">

<div class="caption_co">

![sdif-buffer.png](../res/sdif-buffer.png)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>More about the SDIF classes (SDIFFrame, SDIFType,
SDIFNVT...)</span>

</div>

<div class="linkUL">

  - [<span>SDIF Classes</span>](SDIF-Classes.md)

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
<p>The SDIF-BUFFER and its contents can then be saved in a file using SAVE-SDIF-FILE.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/save-sdif-buffer.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/save-sdif-buffer_1.png" width="300" height="209" alt="save-sdif-buffer_1.png" /></a>
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

## <span>Iterative SDIF file Writing using the File-Box</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

SDIF data can also be written in a file using the File-Box tool.

This alternative avoids storing large sets of data in your OM patches
and write generated SDIF data on-the-fly during an iterative process.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>How to use the File-Box</span>

</div>

<div class="linkUL">

  - [<span>File-Box : Iterative File Input/Output
    Processes</span>](File-Box.md)

</div>

</div>

<div class="caption">

<div class="caption_co">

[![sdif-file-box\_1.png](../res/sdif-file-box_1.png)](../res/sdif-file-box.png "Cliquez pour agrandir")

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>SDIF Write Tools in the File-Box</span>

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
<p>In order to write data in an SDIF file, the STREAMFILE pointer must be set to "SDIF" first.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/sdif-file-pointer.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/sdif-file-pointer_1.png" width="300" height="133" alt="sdif-file-pointer_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

The process must then start with a call to **SDIF-WRITE-HEADER**
connected to this pointer (see picture above). SDIF-WRITE-HEADER will
write type declarations and name/value tables in the file header, but
also some other general data, so it must be called **even if there is no
type or NVT to write**.

Use **SDIF-WRITE-FRAME** in the rest of your program in order to write
the sequence of SDIF frames in the file.

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
          - [<span>SDIF Classes</span>](SDIF-Classes.md)
          - <span id="i2" class="outLeftSel_yes"><span>Writing SDIF
            Files</span></span>
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
précédente</span>](SDIF-Classes.md "page précédente(SDIF Classes)")<span class="hidden">
| </span>[<span>page
suivante</span>](Lisp.md "page suivante(Lisp Programming)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
