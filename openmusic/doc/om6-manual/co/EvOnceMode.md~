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
</span>[<span>Visual Programming
II</span>](AdvancedVisualProgramming.md)<span class="stkSep"> \>
</span>[<span>Evaluation
Modes</span>](EvalModes.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Evaluate-Once
Mode</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](LockMode.md "page précédente(Lock Mode)")<span class="hidden">
| </span>[<span>page
suivante</span>](LambdaMode.md "page suivante(Lambda Mode)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Evaluate-Once Mode</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>Properties</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Use</span>

</div>

<div class="txt">

<span id="i2" class="defRef_ul"><span></span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc2296)</sup>A
box on "evaluate-once" mode is locked at each
<span id="i3" class="defRef_ul"><span>user-evaluation</span></span><sup>[<span>\[</span>2<span>\]</span>](#kFootBsktc2297)</sup>
after the **first internal evaluation**. It remains locked for all
subsequent
<span id="i4" class="defRef_ul"><span>internal-evaluations</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc2296)</sup>.
When the **next user-evaluation** takes place, the box is evaluated
again.

A box on "eval-once" mode is evaluated once, and only once. This is
valid :

  - if this box has multiple outputs,

  - if this box is connected to several upstream boxes,

  - for all upstream connected boxes.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Multiple Internal Evaluations</span>

</div>

<div class="txt">

A box connected to several downstream boxes can be evaluated several
times at a single evaluation : in this case, reproducing the evaluation
of a box can be either useless and lengthy. It can also be or a source
of miscalculation, when a box is likely to return different results ,
while it must return the same values to all connected boxes.

A box set on "evaluate-once" mode returns the same values to all the
boxes it is connected to at a single evaluation.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Procedure</span>

</div>

<div class="txt">

To set a box on "once" mode, press `b` and click on the upper left cross
once. A small
<span class="iconButton_tim">![oneicon\_icon.png](../res/oneicon_icon.png)</span>
icon appears.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Example</span>

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
<td><div class="caption">
<div class="caption_co">
<img src="../res/evalonce11.png" width="286" height="209" alt="evalonce11.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>In the example below, the output of om-random is connected to the two inputs of list. In both cases, om-random returns a different value every time is is called. But :</p>
<ul>
<li><p>when the evaluation mode is not specified, <strong>one</strong> <strong></strong> user evaluation of list triggers t<strong>wo</strong> internal evaluations of om-random, that is, one per input of the list function ;</p></li>
<li><p>on "once" mode, <strong>one</strong> user evaluation triggers a <strong>single</strong> internal evaluation, and both inputs of list get the same value.</p></li>
</ul>
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
    
    <div id="kFootBsktc2296">
    
    <div class="footBskt_itti">
    
    Internal Evaluation
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    Evaluation of a box by OM, triggered by a user evaluation, or by the
    internal evaluation of an upstream box connected to it.
    
    </div>
    
    </div>
    
    </div>
    
    </div>

2.  
    
    <div id="kFootBsktc2297">
    
    <div class="footBskt_itti">
    
    User Evaluation
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    A user evaluation triggers one or more internal evaluation of the
    box and of possible upstream boxes connected to it.
    
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
          - [<span>Abstraction</span>](Abstraction.md)
          - [<span>Evaluation Modes</span>](EvalModes.md)
              - [<span>Lock Mode</span>](LockMode.md)
              - <span id="i5" class="outLeftSel_yes"><span>Evaluate-Once
                Mode</span></span>
              - [<span>Lambda Mode</span>](LambdaMode.md)
              - [<span>Reference Mode</span>](RefMode.md)
          - [<span>Higher-Order Functions</span>](HighOrder.md)
          - [<span>Control Structures</span>](Control.md)
          - [<span>Iterations: OMLoop</span>](OMLoop.md)
          - [<span>Instances</span>](Instances.md)
          - [<span>Interface Boxes</span>](InterfaceBoxes.md)
          - [<span>Files</span>](Files.md)
      - [<span>Basic Tools</span>](BasicObjects.md)
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
précédente</span>](LockMode.md "page précédente(Lock Mode)")<span class="hidden">
| </span>[<span>page
suivante</span>](LambdaMode.md "page suivante(Lambda Mode)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
