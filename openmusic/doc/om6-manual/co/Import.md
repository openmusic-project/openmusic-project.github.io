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
</span>[<span>Score
Objects</span>](ScoreObjects.md)<span class="stkSep"> \>
</span>[<span>Export /
Import</span>](ImportExport.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Import</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Export.md "page précédente(Export)")<span class="hidden">
| </span>[<span>page
suivante</span>](Maquettes.md "page suivante(Maquettes)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Import</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

Importing OM musical objects from external files can be done from the
boxes' contextual menu, orfrom the score editors (menu `File / Import`).

</div>

<div class="caption">

<div class="caption_co">

![score-editor-import.png](../res/score-editor-import.png)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Import/Export Formats and Generalities</span>

</div>

<div class="linkUL">

  - [<span>Export / Import</span>](ImportExport.md)

</div>

</div>

<div class="txt">

**Other possibilities exist using the OM patch boxes and objects, which
are detailed in the next sections.**

</div>

</div>

<div class="part">

## <span>MIDI Import</span>

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
<p>The easiest way to import MIDI data in OM is to instanciate a <strong>MIDIFile</strong> box. Several options are possible :</p>
<ul>
<li><p>Evaluate the box and choose a file on the disk.</p></li>
<li><p>Connect a pathname to the box input.</p></li>
<li><p>Drag the file from your computer folder to an OM patch editor.</p></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/midiimport.png" width="79" height="72" alt="midiimport.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Lock the Box</span>

</div>

<div class="txt">

Remember to lock the box after the file is loaded, in order to avoid
initializing it again at every subsequent box evaluation.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Evaluating/Locking Boxes</span>

</div>

<div class="linkUL">

  - [<span>Evaluation</span>](Evaluation.md)

</div>

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
<p>The MIDIfile box can then be connected to a chord-seq or multi-seq in order to convert the data to OM musical object formats.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/midi-cs.png" width="300" height="218" alt="midi-cs.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>MIDI to Voice/Poly</span>

</div>

<div class="txt">

Importing a MIDI file to a voice or poly object is not straightforward
since MIDI has no rhythmic information. An approximate quantification
will be performed using the metric information available.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About Quantification</span>

</div>

<div class="linkUL">

  - [<span>Quantification</span>](Quantification.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>MusicXML Import</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

MusicXML files can be imported and loaded into **voice** or **poly**
objects from the `Import` menus or using the **import-musicxml** box.

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
<p>At evaluation, the <strong>import-musicxml</strong> box opens a file chooser dialog allowing to select a file to import.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/miniviewxml.png" width="209" height="208" alt="miniviewxml.png" />
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
<p>An optional input allows to specify the file pathname directly in the patch editor.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/xml-import-file.png" width="258" height="256" alt="xml-import-file.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>More About Pathnames in OM</span>

</div>

<div class="linkUL">

  - [<span>Creating and Using Pathnames</span>](Pathnames.md)

</div>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Import-MusicXML Output Value</span>

</div>

<div class="txt">

The import-musicxml output is always a **POLY** object. If a **VOICE**
is connected, only the first voice of the imported score will be loaded.

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Creating a MusicXML file from Finale</span>

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
<p>MusicXML files can be created by Finale via the<code class="menuPath_tl"> File / MusicXML / Export</code> menu.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<div class="imgzFra" style="position: relative;">
<img src="../res/exp_scr.png" width="233" height="300" alt="exp_scr.png" />
</div>
</div>
<div class="caption_ti">
<a href="../res/exp_scr_1.png" class="caption_zm js_hidden" title="Zoom (nouvelle fenêtre)"><span>zoom</span></a>
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
          - [<span>Presentation</span>](Score-Objects-Intro.md)
          - [<span>Rhythm Trees</span>](RT.md)
          - [<span>Score Players</span>](ScorePlayer.md)
          - [<span>Score Editors</span>](ScoreEditors.md)
          - [<span>Quantification</span>](Quantification.md)
          - [<span>Export / Import</span>](ImportExport.md)
              - [<span>Export</span>](Export.md)
              - <span id="i2" class="outLeftSel_yes"><span>Import</span></span>
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
précédente</span>](Export.md "page précédente(Export)")<span class="hidden">
| </span>[<span>page
suivante</span>](Maquettes.md "page suivante(Maquettes)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
