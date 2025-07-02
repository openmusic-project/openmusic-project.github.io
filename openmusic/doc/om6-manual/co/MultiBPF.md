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
</span><span class="stkSel_yes"><span>BPF/BPC-Libs</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](BPF-BPC.md "page précédente(BPF / BPC)")<span class="hidden">
| </span>[<span>page
suivante</span>](BPFEditors.md "page suivante(Editors)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Multiple Objects : BPF/BPC-Lib</span>

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
<img src="../res/libboxes.png" width="246" height="67" alt="libboxes.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p><strong>BPC-lib</strong> and <strong>BPF-lib</strong> objects are collections of BPFs and BPCs.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="part">

## <span>Properties</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

BPF-libs and BPC-libs have two inputs and outputs :

1.  "self" : the object itself, a BPF-Lib or BPC-Lib

2.  "bpf / bpc list" : a list of BPFs or BPCs.

</div>

<div class="caption">

<div class="caption_co">

![bpflibslots.png](../res/bpflibslots.png)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Creating BPF-Libs or BPF-Libs in a patch</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

BPF-lib and BPC-lib instances can be created

  - <span>out of existing BPFs or BPCs gathered in lists.</span>
  - <span>via their respective
    [<span>editors</span>](BPFEditors.md).</span>

</div>

<div class="caption">

<div class="caption_co">

![makebpflib.png](../res/makebpflib.png)

</div>

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Abscissa Scale</span>

</div>

<div class="txt">

The BPF-lib or BPC-lib precision is automatically adapted to the highest
"decimal" value of the BPF or BPC objects of the list.

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
              - <span id="i2" class="outLeftSel_yes"><span>BPF/BPC-Libs</span></span>
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
précédente</span>](BPF-BPC.md "page précédente(BPF / BPC)")<span class="hidden">
| </span>[<span>page
suivante</span>](BPFEditors.md "page suivante(Editors)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
