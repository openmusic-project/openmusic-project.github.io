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
\> </span>[<span>Curves and
Functions</span>](CurvesAndFunctions.md)<span class="stkSep"> \>
</span>[<span>Editors</span>](BPFEditors.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>BPF-Lib / BPC-Lib
Editors</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Display.md "page précédente(Display)")<span class="hidden">
| </span>[<span>page
suivante</span>](Tools.md "page suivante(BPF / BPC Tools)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>BPF-Lib / BPC-Lib Editors</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

[<span></span>](BPFEditors.md)All the information provided in the
[<span> BPF and BPC Editor</span>](BPFEditors.md) section also apply to
BPF-lib and BPC-lib editors.

</div>

</div>

<div class="part">

## <span>Editing Curves</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Items Selection</span>

</div>

<div class="txt">

All editing operations can be performed upon one curve only. Edition
procedures are similar to those used in BPF or BPC editors.

To switch from a curve to another, press the `→❘` key.

  - <span>The selected curve is displayed in the foreground. Its index
    and name – if any – appears at the top of the editor.</span>
  - <span>The other curves are displayed in the background with dotted
    lines.</span>

To show or hide background curves, select or unselect the `Background`
option.

</div>

<div class="caption">

<div class="caption_co">

<div class="imgzFra" style="position: relative;">

![Selecting a curve and hiding the
background.](../res/switchbpf_scr.png)

</div>

</div>

<div class="caption_ti">

Selecting a curve and hiding the
background.[<span>Zoom</span>](../res/switchbpf_scr_1.png "Zoom (nouvelle fenêtre)")

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Name</span>

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
<p>Press <code class="keyboard_tl">n</code> to change the name of the current selected curve.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/bpfname.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/bpfname_1.png" width="300" height="202" alt="bpfname_1.png" /></a>
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

## <span>Adding Curves in BPF-lib or BPC-lib Editors</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Adding BPFs</span>

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
<img src="../res/addbpfbpflib.png" width="300" height="234" alt="addbpfbpflib.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>To add a curve in a BPF-lib editor :</p>
<ol>
<li><p>select the pointer tool.</p></li>
<li><p><code class="keyboard_tl">SHIFT</code> + <code class="keyboard_tl">Cmd</code> click in the editor.</p>
<ul>
<li><span>The existing curve(s) switch to the background and are displayed with dashes. </span></li>
<li><span>The new curve is at the foreground. </span></li>
</ul></li>
<li><p>To edit the new curve, <code class="keyboard_tl">Cmd</code> click in the editor to add a first point in it.</p></li>
</ol>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc tip">

<div class="bloc_ti tip_ti">

<span>Hidden Curve</span>

</div>

<div class="txt">

If previous curve hasn't been edited, the new curve **is superimposed to
it** at the foreground. To visualize the new curve, select the curve
tool and move the line.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Adding BPCs</span>

</div>

<div class="caption">

<div class="caption_co">

![bpclibedit.png](../res/bpclibedit.png)

</div>

</div>

<div class="txt">

Contrary to BPFs, which initially come with two default points, BPCs
come empty.

  - To add a first BPC :
    
    Select the pointer and `Cmd` click twice in the editor to create a
    curve. Two points at least must be added in the editor to make a new
    BPC visible.

<!-- end list -->

  - To add other BPCs :
    
    1.  `SHIFT` + `Cmd` click outside the line to create a new empty
        curve. The previous ones go to the background.
    
    2.  `Cmd` click twice in the editor to add points to the curve.

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
              - [<span>BPF / BPC</span>](BPF-BPC.md)
              - [<span>BPF/BPC-Libs</span>](MultiBPF.md)
              - [<span>Editors</span>](BPFEditors.md)
                  - [<span>Edition Basics</span>](Edition.md)
                  - [<span>Display</span>](Display.md)
                  - <span id="i2" class="outLeftSel_yes"><span>BPF-Lib /
                    BPC-Lib Editors</span></span>
              - [<span>BPF / BPC Tools</span>](Tools.md)
              - [<span>3D Objects</span>](3D.md)
          - [<span>Array</span>](ClassArray.md)
          - [<span>TextFile</span>](textfile.md)
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
précédente</span>](Display.md "page précédente(Display)")<span class="hidden">
| </span>[<span>page
suivante</span>](Tools.md "page suivante(BPF / BPC Tools)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
