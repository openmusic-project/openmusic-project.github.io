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
</span><span class="stkSel_yes"><span>BPF / BPC</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](CurvesAndFunctions.md "page précédente(Curves and Functions)")<span class="hidden">
| </span>[<span>page
suivante</span>](MultiBPF.md "page suivante(BPF/BPC-Libs)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>2D Objects : BPF / BPC</span>

<div class="headCo_co">

<div>

<div class="infobloc">

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
<img src="../res/bpfboxes.png" width="209" height="60" alt="The BPF and BPC boxes" />
</div>
<div class="caption_ti">
The BPF and BPC boxes
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>OM offers two types of objects for the manipulation of 2D curves :</p>
<p>the BPF and BPC objects – <span id="i2" class="defRef_ul"><span>Break Point Function</span></span><sup><a href="#kFootBsktc2761"><span>[</span>1<span>]</span></a></sup> and Break-Point Curve .</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="part">

## <span>Properties</span>

<div class="part_co">

<div class="bloc legal">

<div class="bloc_ti legal_ti">

<span>Definition</span>

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
<p>A BPF represents a function as a set of 2D points with increasing x values.</p>
<p>In the mathematical sense, a BPF can be considered as a function y = f(x).</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/function.png" width="273" height="118" alt="A break-point function defined by points (0 0), (14 46), (43 9), (89 19) and (97 , -1)." />
</div>
<div class="caption_ti">
A break-point function defined by points (0 0), (14 46), (43 9), (89 19) and (97 , -1).
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
<td><div class="caption">
<div class="caption_co">
<img src="../res/curve.png" width="280" height="117" alt="A break-point curve defined by points (8,6) (90,41) (15,42) and (101,3)." />
</div>
<div class="caption_ti">
A break-point curve defined by points (8,6) (90,41) (15,42) and (101,3).
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>A BPC is a free curve defined in a 2D plane.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Inputs and Outputs</span>

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
<img src="../res/bpfslots.png" width="265" height="234" alt="bpfslots.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>BPF and BPC objects have four inputs and outputs :</p>
<ol>
<li><p>"self" : as in every object box, represents the object instance itself – BPF or BPC</p></li>
<li><p>" x-points" : abscissa, a list of positive or negative numbers</p></li>
<li><p>" y –points" : ordinates, a list of positive or negative numbers</p></li>
<li><p>"decimals" : a number of decimals representing the approximation or step value of the points.</p></li>
</ol>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Creating BPF or BPC in a Patch</span>

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
<p>The BPF or BPC points can be set by connecting lists of values to the "x-points" and "y-points" inputs, or with the <a href="BPFEditors.md"><span>BPF/BPC editor</span></a>.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/bpfexample.png" width="161" height="129" alt="bpfexample.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>X-Points Order in BPFs</span>

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
<img src="../res/bpfpointsorder.png" width="179" height="204" alt="bpfpointsorder.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>In a BPF, x-points must be in a strictly increasing order.</p>
<p>If the list is not ordered correctly, the points will be created from the y-points values and sorted automatically before the actual BPF is created.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Incomplete Coordinates Lists</span>

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
<p>If the x or y list is shorter than the other, the last interval in the shorter list is repeated until the right number of points is reached.</p>
<p>For instance, this allows to create a BPF with a list of y-points and a periodic x interval.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/filling-points.png" width="190" height="162" alt="filling-points.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Decimals and BPF/BPC Precision</span>

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
<img src="../res/decimals.png" width="242" height="150" alt="Rounding or increasing precision of the point coordinates with &quot;decimals&quot;." />
</div>
<div class="caption_ti">
Rounding or increasing precision of the point coordinates with "decimals".
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The " decimals" input determines the number of decimals per coordinates , that is, the precision of the curve.</p>
<p>Coordinates are therefore rounded according to the number of decimals.</p>
<p>If "decimals"= 0, all coordinates are rounded to the closest integer.</p>
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

1.  
    
    <div id="kFootBsktc2761">
    
    <div class="footBskt_itti">
    
    Break Point Function
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    A "break-point" function is a function defined by a finite number of
    points (x,y).
    
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
          - [<span>Curves and Functions</span>](CurvesAndFunctions.md)
              - <span id="i3" class="outLeftSel_yes"><span>BPF /
                BPC</span></span>
              - [<span>BPF/BPC-Libs</span>](MultiBPF.md)
              - [<span>Editors</span>](BPFEditors.md)
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
précédente</span>](CurvesAndFunctions.md "page précédente(Curves and Functions)")<span class="hidden">
| </span>[<span>page
suivante</span>](MultiBPF.md "page suivante(BPF/BPC-Libs)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
