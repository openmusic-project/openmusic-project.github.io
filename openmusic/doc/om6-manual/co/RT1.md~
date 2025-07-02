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
</span>[<span>Rhythm Trees</span>](RT.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Rhythm Trees
Structure</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](RT.md "page précédente(Rhythm Trees)")<span class="hidden">
| </span>[<span>page
suivante</span>](RT2.md "page suivante(Notation : in Practice)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Rhythm Trees Structure</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

Traditionally, rhythm is broken up into several data : meter, measure(s)
and duration(s). Rhythm trees must enclose these information in lists
and sub list.

This elementary rhythm :

<span class="iconButton_tim">![treebasic\_icon.png](../res/treebasic_icon.png)</span>

can be expressed as follows :

  - <span> **( ? ( (4//4 (1 1 1 1) ) ) )** </span>
  - <span> **( ? ( ( (4 4) (1 1 1 1) ) ) )** </span>

A tree structure can be reduced to a list : (D (S)).

</div>

</div>

<div class="part">

## <span>Main Components : Duration and Subdivisions</span>

<div class="part_co">

<div class="infobloc">

<div class="caption">

<div class="caption_co">

![rtree1.png](../res/rtree1.png)

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
<li><p>D = a <strong>duration</strong> , or number of measures : ( ? ) or a number ( n ).</p>
<p>When D = ?, OM calculates the duration.</p>
<p>By default, this duration is equal to 1.</p></li>
</ul>
<ul>
<li><p>S = <strong>subdivisions</strong> (S) of this duration, that is a <strong>time signature</strong> and <strong>rhythmic proportions</strong>.</p>
<ol>
<li><p>Time signature = n // n   or ( n n ).</p>
<p>It must be specified at each new measure, even if it remains unchanged.</p></li>
<li><p>Rhythm = proportions : ( n n n n )</p></li>
</ol></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/calculate.png" width="282" height="209" alt="Here, the (1 1 1 1) sub list represents four equal subdivisions of a 4/4 measure. OM calculated that the tree has two measures." />
</div>
<div class="caption_ti">
Here, the (1 1 1 1) sub list represents four equal subdivisions of a 4/4 measure. OM calculated that the tree has two measures.
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Parenthesis Levels</span>

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
<p>A rhythm tree has at least three levels of parenthesis :</p>
<ol>
<li><p>number of measures</p></li>
<li><p>list of measures</p></li>
<li><p>time signature and proportions.</p>
<p>Note that different rhythm trees with equal proportional structures produce the same rhythmic result :</p>
<p>( 1 1 1 1) = (2 2 2 2) = (124 124 124 124)</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/treestructure.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/treestructure_1.png" width="300" height="203" alt="treestructure_1.png" /></a>
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

## <span>Durations</span>

<div class="part_co">

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Manipulating Durations</span>

</div>

<div class="txt">

By default, the duration of a measure is equal to 1. 1 represents the
global measurement unit traditionally expressed by the time signature,
such as : 4/4, 2/2  =
<span class="iconButton_tim">![ronde\_icon.png](../res/ronde_icon.png)</span>, 
3/8 =
<span class="iconButton_tim">![point\_icon.png](../res/point_icon.png)</span>
etc.

</div>

<div class="caption">

<div class="caption_co">

![changeD2.png](../res/changeD2.png)

</div>

</div>

<div class="txt">

Changing this value multiplies or divides all the durations by a given
coefficient.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Subdivisions : Measures and Groups</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Measures</span>

</div>

<div class="txt">

Trees define the way **measures** are split into proportional durations.

The following rhythm :

<span class="iconButton_tim">![rhythm2\_icon.png](../res/rhythm2_icon.png)</span>

is written : **( ? ( (4//4 (1 2 1) ) ) **)**** .

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Groups</span>

</div>

<div class="txt">

Trees also define internal subdivisions, or
**<span id="i3" class="defRef_ul"><span>groups</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc3122)</sup>**
, within a measure**.**

The following rhythm :

<span class="iconButton_tim">![rhythm3\_icon.png](../res/rhythm3_icon.png)</span>

is written : **( ? ( (4//4 (1 ( 2 (1 1 1) ) 1) ) ) ****** )**** .

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Writing Groups</span>

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
<p>Note that groups must be written with a new subordinate level of parenthesis.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/decomp.png" width="193" height="191" alt="decomp.png" />
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

1.  
    
    <div id="kFootBsktc3122">
    
    <div class="footBskt_itti">
    
    Group
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    An internal subdivision, that is, a list of proportions within a
    measure. A group can enclose a sub group. Basic examples
    are tuplets, groups of eighth, sixteenth notes. Groups of quarter,
    semibreves, whole notes or any other values are also admitted in
    rhythm trees.
    
    For instance :
    
    (? ((4//4 ( (2 ( 1 1)) (1 ( 1 (1 (1 1 1)))) (1 (1 1 1 1 1)) )))).
    
    This one measure tree has one group – two quarter notes – , one
    group with a sub group – one eighth note and a sixteenth notes
    triplet, and a last group – a quintuplet.
    
    <span class="iconButton_tim">![group1\_icon.png](../res/group1_icon.png)</span>
    
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
          - [<span>Presentation</span>](Score-Objects-Intro.md)
          - [<span>Rhythm Trees</span>](RT.md)
              - <span id="i4" class="outLeftSel_yes"><span>Rhythm Trees
                Structure</span></span>
              - [<span>Notation : in Practice</span>](RT2.md)
          - [<span>Score Players</span>](ScorePlayer.md)
          - [<span>Score Editors</span>](ScoreEditors.md)
          - [<span>Quantification</span>](Quantification.md)
          - [<span>Export / Import</span>](ImportExport.md)
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
précédente</span>](RT.md "page précédente(Rhythm Trees)")<span class="hidden">
| </span>[<span>page
suivante</span>](RT2.md "page suivante(Notation : in Practice)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
