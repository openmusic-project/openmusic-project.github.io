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
</span><span class="stkSel_yes"><span>Sheet</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Intercation2.md "page précédente(Interation (2))")<span class="hidden">
| </span>[<span>page
suivante</span>](Sheet-Editor.md "page suivante(Sheet Editor)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Sheet</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

The **OMSheet** object is a special polyphonic container allowing to
bring together heterogeneous musical objects on its different voices.
The OMSheet editor has specific features ensuring space/time alignments
between the notation and other temporal objects.

Different types of musical objects can be embedded in a sheet  :

  - <span>CHORD-SEQ</span>
  - <span>VOICE</span>
  - <span>SOUND</span>
  - <span>BPF / MIDICONTROL</span>
  - <span>MAQUETTE</span>

</div>

<div class="txt">

The Sheet also allows to process and generate the contents of these
different tracks using visual programs.

</div>

<div class="caption">

<div class="caption_co">

[![sheet-patch-2\_1.png](../res/sheet-patch-2_1.png)](../res/sheet-patch-2.png "Cliquez pour agrandir")

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Structure</span>

</div>

<div class="txt">

The OMSheet is made of a number of **TRACKS** (). Each track can contain
one or several internal **OBJECTS** localized with a given onset time
and identified in the Sheet by a unique ID number.

An OMSheet has also a number of attached inbuilt patches () allowing to
generate the contents or link the sheet track objects together.

</div>

<div class="caption">

<div class="caption_co">

![sheet-box.png](../res/sheet-box.png)

</div>

</div>

</div>

<div class="bloc complement">

<div class="txtRes">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><div class="dk_txtRes_txt txt">
<p>Find the OMSheet object and tools in the <code class="menuPath_tl">Classes / Score / Sheet</code> menu.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/sheet-menu.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/sheet-menu_1.png" width="300" height="183" alt="sheet-menu_1.png" /></a>
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
      - <span id="i0" class="outLeftSel_yes"><span>Sheet</span></span>
          - [<span>Sheet Editor</span>](Sheet-Editor.md)
          - [<span>Sheet Box</span>](Sheet-Box.md)
          - [<span>Sheet Patches</span>](Sheet-Patch.md)
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
précédente</span>](Intercation2.md "page précédente(Interation (2))")<span class="hidden">
| </span>[<span>page
suivante</span>](Sheet-Editor.md "page suivante(Sheet Editor)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
