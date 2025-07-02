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
</span><span class="stkSel_yes"><span>Display</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Edition.md "page précédente(Edition Basics)")<span class="hidden">
| </span>[<span>page
suivante</span>](BPFLibEditors.md "page suivante(BPF-Lib / BPC-Lib Editors)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Display Options</span>

<div class="headCo_co">

<div class="secOutFra">

<div class="secOutTi">

[<span>Sommaire </span>](#)

</div>

<div class="secOutUi">

1.  [Curve and Points](#ndN6)
2.  [View](#ndNd4)
3.  [Background Picture](#ndN191)
4.  [Spline Display](#ndN237)

</div>

</div>

<div>

<div class="part">

## <span>Curve and Points</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Show / Hide Points</span>

</div>

<div class="txt">

To display or hide the points of a curve, click on or outside it.

</div>

<div class="caption">

<div class="caption_co">

![showpoints.png](../res/showpoints.png)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Show / Hide Line</span>

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
<p>The <code class="textCheckBox_tl">line</code> option is selected by default.</p>
<p>To display points only, unselect this option.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/points.png" width="281" height="244" alt="points.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Grid</span>

</div>

<div class="caption">

<div class="caption_co">

![Displaying a grid in a BPF editor.](../res/grid_scr.png)

</div>

<div class="caption_ti">

Displaying a grid in a BPF editor.

</div>

</div>

<div class="txt">

To display a grid in the editor, select the `grid` option.

The grid's step is adapted automatically to the window size and to the
axis scale.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Indexes</span>

</div>

<div class="txt">

Press `p` to show or hide the indexes of the points. The indexes are not
ordered "chronologically", but follow the abscissa axis order.

</div>

<div class="caption">

<div class="caption_co">

![point-indices.png](../res/point-indices.png)

</div>

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Closed BPC</span>

</div>

<div class="txt">

BPC editors have an additional option : the `Closed BPC` option.

This option allows to connect the first and last point of the curve, in
order to get a polyhedron.

</div>

<div class="caption">

<div class="caption_co">

![closebpc2.png](../res/closebpc2.png)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>View</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Browsing the Editor</span>

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
<a href="../res/moveineditor.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/moveineditor_1.png" width="300" height="275" alt="moveineditor_1.png" /></a>
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>To browse the editor's surface :</p>
<ol>
<li><p>select the hand tool <span class="iconButton_tim"><img src="../res/hand_icon.png" class="sfile_icon-png_icon-gif_icon" width="24" height="23" alt="hand_icon.png" /></span>,</p></li>
<li><p>click and drag the mouse in the editor.</p></li>
</ol>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Rulers</span>

</div>

<div class="txt">

To change the editor's scale, click and drag the abscissa or ordinates
axis.

The adjustment limits of the abscissa ruler depends on the value of the
"decimals" input.

</div>

<div class="caption">

<div class="caption_co">

![rulers.png](../res/rulers.png)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Zoom In / Out, Resize</span>

</div>

<div class="caption">

<div class="caption_co">

[![zoom\_1.png](../res/zoom_1.png)](../res/zoom.png "Cliquez pour agrandir")

</div>

</div>

<div class="txt">

To zoom in a region of a curve :

1.  select the zoom tool
    <span class="iconButton_tim">![zoom\_icon.png](../res/zoom_icon.png)</span>
    ,

2.  click and drag a region.

To fit the editor's scale to the object size, click on the rezise tool
<span class="iconButton_tim">![resizecurs\_icon.png](../res/resizecurs_icon.png)</span>
.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Background Picture</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

A picture can be associated with the BPF or BPC editors and displayed as
background. To select a background picture :

1.  `Ctrl` / right click and and select `Background Picture` in the
    contextual menu

2.  Click on the picyre icon

3.  Select a picture via the dialogue window

</div>

<div class="caption">

<div class="caption_co">

<div class="imgzFra" style="position: relative;">

![choosepic\_scr.png](../res/choosepic_scr.png)

</div>

</div>

<div class="caption_ti">

[<span>Zoom</span>](../res/choosepic_scr_1.png "Zoom (nouvelle fenêtre)")

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Pictures Management</span>

</div>

<div class="linkUL">

  - [<span>Resources</span>](resources.md)

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
<td><div class="caption">
<div class="caption_co">
<img src="../res/deletebckg.png" width="98" height="70" alt="deletebckg.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>To delete the picture, click on the small cross icon.</p>
<ul>
<li><p>Several options are available to set the picture coordinates and size relatively to the editor scale.</p></li>
<li><p>When a background picture is attached to the editor, the resize command <span class="iconButton_tim"><img src="../res/resizecurs_icon.png" class="sfile_icon-png_icon-gif_icon" width="24" height="23" alt="resizecurs_icon.png" /></span> fits the editor's scales to the picture size.</p></li>
</ul>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Spline Display</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Spline Curves</span>

</div>

<div class="txt">

Spline are mathematical functions defined piecewise by polynomial
interpolation. They are used for generating smoothed interpolated shapes
, starting from a set of control points. Some functions in OM allow to
generate spline curves starting from the points of a BPF or BPC.

</div>

<div class="caption">

<div class="caption_co">

<div class="imgzFra" style="position: relative;">

![Displaying the spline of a curve.](../res/spline1_scr.png)

</div>

</div>

<div class="caption_ti">

Displaying the spline of a
curve.[<span>Zoom</span>](../res/spline1_scr_1.png "Zoom (nouvelle fenêtre)")

</div>

</div>

<div class="txt">

To display the preview of a spline curve computed from the BPF/BPC,
check the `spline` display option.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Parameters</span>

</div>

<div class="txt">

  - <span>The spline's resolution represents the number of points in the
    spline preview. </span>
  - <span>The spline's degree determines the number of adjacent control
    points used for computing the spline curve points. Higher values
    produce smoother curves.</span>

To modify the spline resolution or degree :

1.  click on the **"Degree"** or " **Resolution"** frames

2.  scroll the mouse up or down to change the value.

</div>

<div class="caption">

<div class="caption_co">

![spline.png](../res/spline.png)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Spline Tools in OM</span>

</div>

<div class="linkUL">

  - [<span>BPF and BPC Tools</span>](Tools.md)

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
                  - [<span>Edition Basics</span>](Edition.md)
                  - <span id="i4" class="outLeftSel_yes"><span>Display</span></span>
                  - [<span>BPF-Lib / BPC-Lib
                    Editors</span>](BPFLibEditors.md)
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
précédente</span>](Edition.md "page précédente(Edition Basics)")<span class="hidden">
| </span>[<span>page
suivante</span>](BPFLibEditors.md "page suivante(BPF-Lib / BPC-Lib Editors)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
