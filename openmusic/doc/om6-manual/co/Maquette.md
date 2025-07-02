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
</span>[<span>Maquettes</span>](Maquettes.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Creating a
Maquette</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Maquettes.md "page précédente(Maquettes)")<span class="hidden">
| </span>[<span>page
suivante</span>](TemporalBoxes.md "page suivante(TemporalBoxes)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Creating a Maquette</span>

<div class="headCo_co">

<div class="secOutFra">

<div class="secOutTi">

[<span>Sommaire </span>](#)

</div>

<div class="secOutUi">

1.  [General Features](#seN71)
2.  [Creating General Maquettes](#seNef)
3.  [Using Maquettes inside Patches](#seN195)
4.  [Using Maquettes inside Other Maquettes](#seN25a)
5.  [Saving a Maquette](#seN2bb)

</div>

</div>

<div>

<div class="infobloc">

<div class="txt">

Like patches, maquettes be used as autonomous programs, or within other
patches and maquettes, like blue and red patches. Consequently, OM also
offers two types of maquettes :

<table>
<tbody>
<tr class="odd">
<td><ul>
<li><p>general maquettes :</p></li>
</ul></td>
<td><p><span class="iconButton_tim"><img src="../res/maq5_icon.png" class="sfile_icon-png_icon-gif_icon" width="54" height="47" alt="maq5_icon.png" /></span></p></td>
<td><ul>
<li><p>internal maquettes :</p></li>
</ul></td>
<td><p><span class="iconButton_tim"><img src="../res/intmaq_icon.png" class="sfile_icon-png_icon-gif_icon" width="72" height="66" alt="intmaq_icon.png" /></span></p></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Voir aussi</span>

</div>

<div class="linkUL">

  - [<span>Abstraction Boxes</span>](AbsBoxes.md)

</div>

</div>

</div>

<div class="part">

## <span>General Features</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>General and Local Maquetttes</span>

</div>

<div class="txt">

**General maquettes** can be :

  - <span>added in a workspace and used as main programs.</span>
  - <span>dropped and used in a patch, like an abstraction.</span>

**Local** **maquettes** can be added directly into a patch like an
internal abstraction.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Using Maquettes in Other Maquettes</span>

</div>

<div class="txt">

Maquettes can also be used within other maquettes, according to similar
principles :

  - <span>an existing maquette can be dropped and used into another
    maquette.</span>
  - <span>a maquette can be created directly within another
    maquette.</span>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Conversions</span>

</div>

<div class="txt">

Last, like blue and red patches again, general maquettes can be
**converted** into local maquettes, and vice-versa.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Creating General Maquettes</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Procedure</span>

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
<img src="../res/maquetteinwksp.png" width="248" height="218" alt="maquetteinwksp.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>General maquettes are equivalent to standard blue patches. Like them, they can be created in the workspace, or one of its folders.</p>
<p>To add a maquette in a workspace :</p>
<ul>
<li><span> select <code class="menuPath_tl">File / New Maquette</code> </span></li>
<li><span> press <code class="keyboard_tl">Ctrl</code> click and choose <code class="menuPath_tl">New Maquette</code> in the contextual menu</span></li>
<li><span> press <code class="keyboard_tl">Cmd</code> + <code class="keyboard_tl">2</code></span></li>
</ul>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Maquette Files</span>

</div>

<div class="txt">

General maquettes are persistent files that can be manipulated like
patches. They can be :

  - <span> imported and exported from a workspace</span>
  - <span>duplicated and renamed</span>
  - <span> used in other maquettes and patches.</span>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Managing Items in the Workspace</span>

</div>

<div class="linkUL">

  - [<span>The Workspace Window</span>](WS-Window.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Using Maquettes inside Patches</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Using a General Maquette in a Patch</span>

</div>

<div class="txt">

Once a maquette is added in a workspace, it can be dropped in a patch,
on the same basis as an abstraction : like a "global" abstraction, or
blue patch, the maquette keeps it original reference, which means any
modification will affect all of its representations.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Adding an Internal Maquette in a Patch</span>

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
<img src="../res/internalmaq.png" width="254" height="206" alt="internalmaq.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Internal maquettes are the equivalent to internal – red – patches .They can be created inside a patch.</p>
<p>To add a maquette in a patch :</p>
<ul>
<li><span> <code class="keyboard_tl">Cmd</code> click and type "maquette" in the editor </span></li>
<li><span> <code class="keyboard_tl">Ctrl</code> / right click and choose <code class="menuPath_tl">Maquette</code> in the contextual menu.</span></li>
</ul>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Converting Maquettes</span>

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
<p>General maquettes can be converted into internal maquettes, and reciprocally, internal maquettes can be converted into global abstractions.</p>
<ul>
<li><span>To convert a general maquette into an internal maquettes, select it and type <code class="keyboard_tl">a</code>.</span></li>
<li><span>To convert an internal maquette into a general maquette, drop it from the patch into the workspace, or one of its folders. </span></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/convertgenintern.png" width="300" height="258" alt="convertgenintern.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Patch Conversion Procedures</span>

</div>

<div class="linkUL">

  - [<span>Conversions</span>](AbsConversion.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Using Maquettes inside Other Maquettes</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

This use of maquettes mostly sets forth a number of specificities
dealing with the use of
<span id="i5" class="defRef_ul"><span>TemporalBoxes</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc3391)</sup>.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Creating and Using Objects within Maquettes</span>

</div>

<div class="linkUL">

  - [<span>Maquette Programming</span>](Programming%20Maquette.md)
  - [<span>TemporalBoxes</span>](TemporalBoxes.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Saving a Maquette</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

To save a maquette :

  - <span>press `Cmd` + `s` </span>
  - <span>choose ` File / Save  `</span>
  - <span> `Ctrl` / right click in the maquette and choose `Last Saved`
    in the contextual menu.</span>

The `Last Saved` command allows to reset the maquette to its last saved
version.

</div>

</div>

</div>

</div>

</div>

</div>

</div>

<span class="hidden">Références : </span>

1.  
    
    <div id="kFootBsktc3391">
    
    <div class="footBskt_itti">
    
    TemporalBox
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    A TemporalBox refers to an object in a maquette : an instance, a
    patch, or another maquette.
    
    </div>
    
    </div>
    
    </div>
    
    </div>

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
          - <span id="i6" class="outLeftSel_yes"><span>Creating a
            Maquette</span></span>
          - [<span>TemporalBoxes</span>](TemporalBoxes.md)
          - [<span>The Maquette Editor</span>](Editor.md)
          - [<span>Maquette
            Programming</span>](Programming%20Maquette.md)
          - [<span>Maquettes in
            Patches</span>](Maquettes%20in%20Patches.md)
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
précédente</span>](Maquettes.md "page précédente(Maquettes)")<span class="hidden">
| </span>[<span>page
suivante</span>](TemporalBoxes.md "page suivante(TemporalBoxes)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
