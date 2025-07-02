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
</span>[<span>Abstraction</span>](Abstraction.md)<span class="stkSep">
\> </span>[<span>Recursive
Patches</span>](Recursion.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Recursive
Trees</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](RecursivePatch.md "page précédente(Recursion in OM)")<span class="hidden">
| </span>[<span>page
suivante</span>](EvalModes.md "page suivante(Evaluation Modes)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Recursive Treatment of Tree Structures</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>Recursive Treatment of Tree Structures</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Recursion is often applied to tree structures, such as lists. Indeed, a
list can be described as a tree, whose components are either **leaves**
, or **nodes** . A leaf is a termination of a tree, a node is another
list that can, also, contain leaves of nodes.

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Example : Recursive Treatment of a Multiple Level List</span>

</div>

<div class="txt">

We would like to add 1 to each number in a tree with many sublists : **1
+** **(** **((1 2 3)(4 5 6)) (4) ((6 7)))** **)** .

In other words, we want to **increment** – increase the value of – **the
terminal items of the list**. But we cannot just apply om+1 to the list
: om+ cannot reach each atom directly. It must go through each level of
the tree.

We will apply the following **recursive function** to the tree :
IncrListElements (LIST) = for each ELEMENT in the LIST, do :

  - <span> "If element is an atom, then return element + 1." **This is
    the termination condition**. </span>
  - <span> "Else, apply IncrListElement to the elements." This is the
    recursive call to IncrListElements. </span>

The whole tree is ran through and all terminal items are incremented.
Hence, the termination condition of a recursive function, when applied
to a tree structure, is to reach a leaf, or extremity of a tree.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Implementation of IncrListElements in OM</span>

</div>

<div class="txt">

This patch illustrates the previous case :

1.  "Input" yields values or lists of values to be processed.

2.  If an element is an atom, "input" is incremented directly.

3.  If an element is not an atom, – that is, a list –, the patch is
    applied recursively to each element of the list...

</div>

<div class="caption">

<div class="caption_co">

![When the patch is called on the list, each atom is
incremented.](../res/reclist.png)

</div>

<div class="caption_ti">

When the patch is called on the list, each atom is incremented.

</div>

</div>

<div class="txt">

Mapcar allows to apply the patch on "lambda" mode **successively to each
element of a list**. An alternative would be using an OMLoop to call the
sub patch successively on each element of the list.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>More Info about Lambda Mode :</span>

</div>

<div class="linkUL">

  - [<span>Lambda Mode</span>](LambdaMode.md)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About OMLoop :</span>

</div>

<div class="linkUL">

  - [<span>Iterations: OMLoop</span>](OMLoop.md)

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
          - [<span>Abstraction</span>](Abstraction.md)
              - [<span>Abstraction Boxes</span>](AbsBoxes.md)
              - [<span>Application</span>](AbsApplication.md)
              - [<span>Recursive Patches</span>](Recursion.md)
                  - [<span>Recursion in OM</span>](RecursivePatch.md)
                  - <span id="i1" class="outLeftSel_yes"><span>Recursive
                    Trees</span></span>
          - [<span>Evaluation Modes</span>](EvalModes.md)
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
précédente</span>](RecursivePatch.md "page précédente(Recursion in OM)")<span class="hidden">
| </span>[<span>page
suivante</span>](EvalModes.md "page suivante(Evaluation Modes)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
