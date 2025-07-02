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
</span>[<span>Iterations: OMLoop</span>](OMLoop.md)<span class="stkSep">
\>
</span>[<span>Iterators</span>](LoopIterators.md)<span class="stkSep">
\> </span><span class="stkSel_yes"><span>List Loop</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](LoopIterators.md "page précédente(Iterators)")<span class="hidden">
| </span>[<span>page
suivante</span>](OnListLoop.md "page suivante(OnList Loop)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>ListLoop : Enumerating the Elements of a List</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>General Properties</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

**Listloop** enumerates and returns the elements of a list one by one.

In other words, at each step of the iteration, listloop takes a smaller
chunk of the list, and returns its first element. The execution ends
once the list is exhausted.

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
<img src="../res/listlooparg.png" width="236" height="81" alt="listlooparg.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Listloop has one default input and one optional input :</p>
<ul>
<li><span>"list" : a list</span></li>
<li><span>"by" : a box defining <strong>the way the list is exhausted</strong> . </span></li>
</ul>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

Here, listloop enumerates a list and returns its items one by one.

1.  At each step of the loop, EachtTime evaluates collect.

2.  Collect stores the items of the list.

3.    - <span>The first input of Finally returns the last value of the
        iteration.</span>
      - <span>Its second input returns the result of collect. </span>

</div>

<div class="caption">

<div class="caption_co">

![listloop1.png](../res/listloop1.png)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>"By" : Changing Enumeration Modalities</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>"By"</span>

</div>

<div class="txt">

The default value of the " **by** " optional input is a
<span id="i2" class="defRef_ul"><span>cdr</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc2375)</sup>
.

This means that, at each loop, listloop returns :

1.  the first element of the list,

2.  and then, the first element of the remaining chunk,

3.  and so on.

In Lisp, this means that listloop returns successive
<span id="i3" class="defRef_ul"><span>cadrs</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc2375)</sup>
.

"By" can be replaced by another function meant to return a smaller chunk
of a list, such as : <span id="i4" class="defRef_ul"><span> cddr
</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc2375)</sup>
or nthcdr for instance.

It can be either a function box on [<span>"lambda"
mode</span>](LambdaMode.md), or a function name.

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Examples : Selecting Items to Return</span>

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
<img src="../res/listloopoptional.png" width="290" height="205" alt="listloopoptional.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>If "by" is a cddr, listloop returns</p>
<ol>
<li><p>the first element of the list,</p></li>
<li><p>then, the first element of the cddr,</p></li>
<li><p>and repeats the operation until the list is exhausted.</p></li>
</ol>
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
<td><div class="dk_txtRes_txt txt">
<p>If "by" is an nthcdr, listloop returns</p>
<ol>
<li><p>the first element of the list,</p></li>
<li><p>then the first element of the nthcdr,</p></li>
<li><p>and repeats the operation until the list is exhausted.</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/listloopoptional1.png" width="288" height="233" alt="listloopoptional1.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc warning">

<div class="bloc_ti warning_ti">

<span>Choosing the Right Function</span>

</div>

<div class="txt">

Applying an irrelevant "by" argument to listloop may prevent the list
from being exhausted. In this case, if no other iterator is present, the
loop may go on for infinite iterations.

</div>

</div>

</div>

</div>

</div>

</div>

</div>

<span class="hidden">Références : </span>

1.  
    
    <div id="kFootBsktc2375">
    
    <div class="footBskt_itti">
    
    CAR, CDR, CADR, CDDR, CADDR...
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    Elementary Lisp functions, allowing the access to one or more
    elements in a list.
    
    Lisp fonctions are actually linked list. Lists are actually "conses"
    (or "pairs") made of a first element and a pointer to the rest (or
    "tail") of the list (another cons). These two parts of the list are
    accessed with the CAR and CDR functions, respectively.
    
    Let the following list be : (A B C D).
    
    CAR (A B C D) = A.
    
    CDR (A B C D) = (B C D).
    
    CDR (B) =\> NIL \[this list has no CDR\]
    
    "CAR" and "CDR" are technical terms which originally refer to the
    way data is handled by the computer. CAR is the acronym of "Contents
    of the Address part of Register number". CDR is the acronym of
    "Contents of the Decrement part of Register number".
    
    The rest of the functions below are built upon these two kernel
    accessors.
    
    CADR (A B C D) = B. CADR means CAR of the CDR.
    
    CDDR (A B C D) = (C D). CDDR means CDR of the CDR.
    
    CADDR (A B C D) = C. CADDR means CAR of the CDDR.
    
    NTHCDR (A B C D) = NTH CDR of the list – N must be specified as
    argument. NTHCDR 3 (A B C D) = (D).
    
    And so on...
    
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
          - [<span>Higher-Order Functions</span>](HighOrder.md)
          - [<span>Control Structures</span>](Control.md)
          - [<span>Iterations: OMLoop</span>](OMLoop.md)
              - [<span>Iteration</span>](LoopIntro.md)
              - [<span>General Features</span>](LoopGeneral.md)
              - [<span>Evaluators</span>](LoopEvaluators.md)
              - [<span>Iterators</span>](LoopIterators.md)
                  - <span id="i5" class="outLeftSel_yes"><span>List
                    Loop</span></span>
                  - [<span>OnList Loop</span>](OnListLoop.md)
                  - [<span>For Loop</span>](ForLoop.md)
                  - [<span>While Loop</span>](WhileLoop.md)
                  - [<span>Infinite Loops</span>](InfiniteLoops.md)
              - [<span>Accumulators</span>](LoopAccumulators.md)
              - [<span>Example : A Random Series</span>](LoopExample.md)
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
précédente</span>](LoopIterators.md "page précédente(Iterators)")<span class="hidden">
| </span>[<span>page
suivante</span>](OnListLoop.md "page suivante(OnList Loop)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
