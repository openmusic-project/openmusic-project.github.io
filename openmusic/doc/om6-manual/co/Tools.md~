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
</span><span class="stkSel_yes"><span>BPF / BPC
Tools</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](BPFLibEditors.md "page précédente(BPF-Lib / BPC-Lib Editors)")<span class="hidden">
| </span>[<span>page suivante</span>](3D.md "page suivante(3D Objects)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>BPF and BPC Tools</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

This section details a set of important concept and tools. Among these,
a number of function boxes allow to build or manipulate BPFs and BPCs.
To access these tools, go to `Functions / Basic Tools / Curves &
Functions`.

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Online Documentation Reference</span>

</div>

<div class="txt">

The online function reference provides more detailed information about
the following (and more) functions, as well as different arguments. To
refer to it, select a function and press `d`.

</div>

</div>

<div class="part">

## <span>Getting Coordinates : Transfer and Point Coordinates</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Point-Pairs : Points of the Curve</span>

</div>

<div class="txt">

The **point-pairs** function returns the points of the curve as a list
of (x y) coordinates.

</div>

<div class="caption">

<div class="caption_co">

![Point-pairs : list of (x y) points in the
curve.](../res/point-pairs.png)

</div>

<div class="caption_ti">

Point-pairs : list of (x y) points in the curve.

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Transfer : Selected Points</span>

</div>

<div class="txt">

Two **transfer** tools return the values of points that are not
explicitly given in the curve.

  - **"X-transfer"** returns the ordinates for a given abscissa.

  - **"Y-transfer"** returns the abscissa values corresponding to given
    ordinates.

</div>

<div class="caption">

<div class="caption_co">

![Transfers : x-transfer returns the y-coordinate for x=5. Y-transfer
returns the various abscissa for y=20.](../res/transfers.png)

</div>

<div class="caption_ti">

Transfers : x-transfer returns the y-coordinate for x=5. Y-transfer
returns the various abscissa for y=20.

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Sampling a Curve : Om-Sample</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

|                                                                                     |                                                                                                           |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| <span class="iconButton_tim">![omsample\_icon.png](../res/omsample_icon.png)</span> | Sampling consists in creating a new curve of n regularly sampled points, out of an initial set of points. |

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Inputs</span>

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
<p>The <strong>om-sample</strong> function has two default inputs :</p>
<ul>
<li><p>"self" : a list of points, BPF or BPC objects.</p></li>
<li><p>"sample-rate" : a <strong>number of samples</strong> in integers, or a <strong>sample-rate</strong> in floats.</p></li>
</ul>
<p>It has three optional inputs :</p>
<ul>
<li><p>"x-min" and "x-max" define a segment to sample within the curve.</p></li>
<li><p>"decimals" :</p></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<div class="imgzFra" style="position: relative;">
<img src="../res/SRsample_scr.png" width="300" height="250" alt="The sampling rate can be expressed as a float input to Om-sample" />
</div>
</div>
<div class="caption_ti">
The sampling rate can be expressed as a float input to Om-sample<a href="../res/SRsample_scr_1.png" class="caption_zm" title="Zoom (nouvelle fenêtre)"><span>zoom</span></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>"sample-rate" input : Integer or Float</span>

</div>

<div class="txt">

Be a curve whose min = 0 and max = 100.

  - <span>Integer : n = 20 we get 20 points, whose values are (0 5 10 15
    20 25 30 35 .... 100).</span>
  - <span>Float : SR = 20.0, we get 5 points, whose values are (0 20.0
    40.0 60.0 80.0 100.0). </span>

In any case n = (xmax - xmin) / SR

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Outputs</span>

</div>

<div class="txt">

Om-sample returns 3 values :

  - <span>a sampled object, such as a BPF , BPC ...</span>
  - <span>a list of x -coordinates</span>
  - <span>a list of y -coordinates</span>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Up-Sampling and Down-Sampling</span>

</div>

<div class="caption">

<div class="caption_co">

![sample1.png](../res/sample1.png)

</div>

</div>

<div class="txt">

If n is lower than the initial number of points, curves are
**down-sampled**. If n is higher, curves are **up-sampled**.

</div>

<div class="caption">

<div class="caption_co">

![upanddownsample.png](../res/upanddownsample.png)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Splines : Om-Spline</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

<table>
<tbody>
<tr class="odd">
<td><p><span class="iconButton_tim"><img src="../res/spli_icon.png" class="sfile_icon-png_icon-gif_icon" width="46" height="46" alt="spli_icon.png" /></span></p></td>
<td><p><strong>Splines</strong> are mathematical functions defined piecewise by polynomial interpolation. They are used for generating smoothed interpolated shapes , starting from a set of control points.</p>
<p>The <strong>om-spline</strong> function generates spline curves starting from the points of a BPF or BPC.</p></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Inputs</span>

</div>

<div class="txt">

  - "resolution" : a number of points in the spline preview.

  - "degree" : a number of **adjacent control points** used for
    computing the spline curve points. Higher values produce smoother
    curves.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Outputs</span>

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
<p>The three outputs of om-spline return :</p>
<ul>
<li><p>a spline object (BPF, BPC...)</p></li>
<li><p>a list of x-coordinates</p></li>
<li><p>a list of y-coordinates</p></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/spline_1.png" width="207" height="241" alt="spline_1.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Spline Preview</span>

</div>

<div class="txt">

The BPF and BPC editors allow to visualize a preview of the output
spline object.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Spline Preview in the BPF/BPC Editors.</span>

</div>

<div class="linkUL">

  - [<span>Display Options</span>](Display.md)

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
      - [<span>Basic Tools</span>](BasicObjects.md)
          - [<span>Curves and Functions</span>](CurvesAndFunctions.md)
              - [<span>BPF / BPC</span>](BPF-BPC.md)
              - [<span>BPF/BPC-Libs</span>](MultiBPF.md)
              - [<span>Editors</span>](BPFEditors.md)
              - <span id="i3" class="outLeftSel_yes"><span>BPF / BPC
                Tools</span></span>
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
précédente</span>](BPFLibEditors.md "page précédente(BPF-Lib / BPC-Lib Editors)")<span class="hidden">
| </span>[<span>page suivante</span>](3D.md "page suivante(3D Objects)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
