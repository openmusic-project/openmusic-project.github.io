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
</span>[<span>The Maquette
Editor</span>](Editor.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Rulers and
Grid</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](EditorAppearance.md "page précédente(Editor Appearance)")<span class="hidden">
| </span>[<span>page
suivante</span>](player.md "page suivante(The Palette)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Rulers and Grid</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>Rulers</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Function</span>

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
<img src="../res/axes.png" width="272" height="255" alt="axes.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The maquette editor has two rulers :</p>
<ul>
<li><span>the horizontal ruler, or abscissas axis, measures time in milliseconds</span></li>
<li><span>the vertical ruler, or ordinates axis, measures space with an arbitrary unit.</span></li>
</ul>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Zoom</span>

</div>

<div class="txt">

The scale of each ruler can be increased or decreased manually to zoom
in or out, vertically and/or horizontally in the maquette.

To modify the scale of a ruler :

1.  click on a ruler to view the double-arrow cursor

2.  keep pressing while scroling the mouse.
    
    To zoom in scroll the mouse upwards or rightwards. To zoom out,
    scroll it downwards or leftwards.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Grid</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Displaying and Resolution</span>

</div>

<div class="txt">

To display the grid of the maquette editor, press `g` .The grid's
resolution is calculated automatically, according to the zoom scale.

</div>

<div class="caption">

<div class="caption_co">

![grid.png](../res/grid.png)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Quantization and Snap to Grid Option</span>

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
<img src="../res/magnetic.png" width="266" height="141" alt="magnetic.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The quantization allows to snap boxes to the grid when they are moved manually. The quantization of the <strong>ordinates axis</strong> can be defined with positive integers.</p>
<ul>
<li><p>To specify a quantization :</p>
<ol>
<li><p>double click on the vertical ruler.</p></li>
<li><p>enter a number of steps in the <strong>"Y Step"</strong> frame.</p></li>
</ol></li>
</ul>
<ul>
<li><p>To activate the quantization, select the <code class="textCheckBox_tl">Magnetic</code> option. Boxes will snap to the closest vertical step.</p></li>
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

## <span>The Metric Ruler : Rhythmic Parameters of the Maquette</span>

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
<p>The <strong>metric ruler</strong> displays measures and beats. It can be shown at the top of the maquette editor.</p>
<p>To display the metric ruler :</p>
<ol>
<li><p><code class="keyboard_tl">Ctrl</code> / right click in the maquette</p></li>
<li><p>choose <code class="menuPath_tl">Show / Hide Metric Ruler</code>.</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/show.png" width="177" height="224" alt="show.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

The metric ruler has three parameters :

  - <span>tempo</span>
  - <span> meter</span>
  - <span>a metric quantization applying to objects.</span>

To define the musical parameters of the maquette, double click on the
metric ruler.

</div>

<div class="caption">

<div class="caption_co">

![meteraxis.png](../res/meteraxis.png)

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
<ul>
<li><p>To define a tempo :</p>
<ol>
<li><p>click successively on the quarter note <span class="iconButton_tim"><img src="../res/n_icon.png" class="sfile_icon-png_icon-gif_icon" width="13" height="28" alt="n_icon.png" /></span> icon to choose a unit.</p></li>
<li><p>enter a tempo in the <strong>"Tempo"</strong> frame.</p></li>
</ol></li>
</ul>
<ul>
<li><p>To define a metric pattern, enter a list of one or more measures in the <strong>Metric</strong> frame according to the usual conventions.</p></li>
</ul>
<ul>
<li><p>To specify pattern repetitions, use the <code class="textRadioButton_tl"> Loop Measure / Last Measure</code> option :</p>
<ul>
<li><span>The <code class="textRadioButton_tl">Loop Measure</code> option allows to repeat the meter pattern defined above. </span></li>
<li><span>The <code class="textRadioButton_tl">Repeat Last Measure</code> option allows to apply the last metric value of the pattern to the following measures</span></li>
</ul></li>
</ul>
<p>Note that complex or irregular meter changes, which cannot be expressed by a single pattern, require a thorough expression, measure by measure...</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/meter.png" width="300" height="247" alt="meter.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Snap to Metrics</span>

</div>

<div class="txt">

The **"Maximum Subdivision"** frame takes a metric quantization unit.

  - The reference unit of this
    <span id="i3" class="defRef_ul"><span>subdivision</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc3484)</sup>
    **** **is always **equal to the whole note****
    **<span class="iconButton_tim">![r\_icon.png](../res/r_icon.png)</span>**
    , no matter which time signature has been chosen.
    
    For instance, "64" represents a 64th note subdivision, that is :
    <span class="iconButton_tim">![6411\_icon.png](../res/6411_icon.png)</span>.

  - Values must be integers.

  - Any subdivision of the whole note, – other values than powers of 2 –
    are accepted by OM.
    
    For instance, "12" represents a triplet's fourth note subdivision,
    that is :
    <span class="iconButton_tim">![2of3\_icon.png](../res/2of3_icon.png)</span>.

</div>

<div class="caption">

<div class="caption_co">

![Here, we defined the following pattern : ((6 8) (3 8) (3 4) (6 4)) and
chose the "Repeat Last Measure" option.](../res/diffmeter.png)

</div>

<div class="caption_ti">

Here, we defined the following pattern : ((6 8) (3 8) (3 4) (6 4)) and
chose the "Repeat Last Measure" option.

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Grid and Metric Ruler</span>

</div>

<div class="txt">

The grid fits the measure unit of the metric ruler.

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Memento : Subdivisions</span>

</div>

<div class="txt">

<span class="iconButton_tim">![r\_icon.png](../res/r_icon.png)</span>=
1; <span class="iconButton_tim">![b\_icon.png](../res/b_icon.png)</span>
= 2;
<span class="iconButton_tim">![n\_icon.png](../res/n_icon.png)</span>=
4;
<span class="iconButton_tim">![16\_icon.png](../res/16_icon.png)</span>=
8;
<span class="iconButton_tim">![32\_icon.png](../res/32_icon.png)</span>=
16;
<span class="iconButton_tim">![641\_icon.png](../res/641_icon.png)</span>=
32;
<span class="iconButton_tim">![128\_icon.png](../res/128_icon.png)</span>=
64...

</div>

</div>

</div>

</div>

</div>

</div>

</div>

<span class="hidden">Références : </span>

1.  
    
    <div id="kFootBsktc3484">
    
    <div class="footBskt_itti">
    
    Subdivisions of the Whole Note
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    Memento :
    
    <span class="iconButton_tim">![r\_icon.png](../res/r_icon.png)</span>=
    1,
    <span class="iconButton_tim">![b\_icon.png](../res/b_icon.png)</span>
    = 2,
    <span class="iconButton_tim">![n\_icon.png](../res/n_icon.png)</span>=
    4,
    <span class="iconButton_tim">![16\_icon.png](../res/16_icon.png)</span>=
    8,
    <span class="iconButton_tim">![32\_icon.png](../res/32_icon.png)</span>=
    16,
    <span class="iconButton_tim">![641\_icon.png](../res/641_icon.png)</span>=
    32,
    <span class="iconButton_tim">![128\_icon.png](../res/128_icon.png)</span>=
    64
    
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
          - [<span>Creating a Maquette</span>](Maquette.md)
          - [<span>TemporalBoxes</span>](TemporalBoxes.md)
          - [<span>The Maquette Editor</span>](Editor.md)
              - [<span>Editor Appearance</span>](EditorAppearance.md)
              - <span id="i4" class="outLeftSel_yes"><span>Rulers and
                Grid</span></span>
              - [<span>The Palette</span>](player.md)
              - [<span>Markers / Anchors</span>](Markers.md)
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
précédente</span>](EditorAppearance.md "page précédente(Editor Appearance)")<span class="hidden">
| </span>[<span>page
suivante</span>](player.md "page suivante(The Palette)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
