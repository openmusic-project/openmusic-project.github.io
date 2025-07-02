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
de section : </span>[<span>OpenMusic
QuickStart</span>](QuickStart-Chapters.md)<span class="stkSep"> \>
</span>[<span>A Musical
Application</span>](4_MusicalAp.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Creating an
Instance</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](4aApplication.md "page précédente(Chord & Musical Objects)")<span class="hidden">
| </span>[<span>page
suivante</span>](4cApplication.md "page suivante(Formalizing a Process)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Creating an Instance</span>

<div class="headCo_co">

<div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Covered Topics</span>

</div>

<div class="txt">

  - Parametric values : pitches, dynamics... how to define a chord

  - Applying lists of parametric values to a chord object

  - Materializing and visualizing the chord object

</div>

</div>

<div class="infobloc">

<div class="media">

</div>

</div>

<div class="bloc legal">

<div class="bloc_ti legal_ti">

<span>Good to Know</span>

</div>

<div class="txt">

1.  What is a list ?
    
    A list is a **finite**, **ordered** sequence of elements, delineated
    by **two parenthesis**. In a list, **each element** itself is an
    **atom**, or a **list**. A list inside a list is also called a **sub
    list**.

2.  How much is a semitone in midicents ?
    
    A semitone is equal to **100 midicents**

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Keywords</span>

</div>

<div class="txt">

<span id="i1" class="defRef_ul"><span>Evaluation</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc2030)</sup>

</div>

</div>

<div class="part">

## <span>Main Links to the User Manual</span>

<div class="part_co">

<div class="infobloc">

<div class="linkSet">

<div class="linkSet_ti">

<span>Voir aussi</span>

</div>

<div class="linkUL">

  - [<span>Elementary Manipulations</span>](ElementaryManips.md)
  - [<span>Box Inputs</span>](BoxInputs.md)
  - [<span>Evaluation</span>](Evaluation.md)

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

<span class="hidden">Références : </span>

1.  
    
    <div id="kFootBsktc2030">
    
    <div class="footBskt_itti">
    
    Evaluation
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    In Lisp, evaluating an expression amounts to interpreting and
    reducing its contents in order to return a result.
    
    In OM, visual programs represent Lisp expressions and evaluating a
    box triggers the calculus that will determine the value of these
    expressions.
    
    Any kind of box can be evaluated and return something. To evaluate a
    box, ⤷ Click and press `v` or `Cmd` click on an outlet.
    
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
  - [<span>OpenMusic QuickStart</span>](QuickStart-Chapters.md)
      - [<span>Summary</span>](Intro_1.md)
      - [<span>Starting a Session</span>](1_StartSession.md)
      - [<span>Programming a Simple Patch</span>](2_progpatch.md)
      - [<span>Manipulating the Patch</span>](3ManipPatch.md)
      - [<span>A Musical Application</span>](4_MusicalAp.md)
          - [<span>Chord & Musical Objects</span>](4aApplication.md)
          - <span id="i2" class="outLeftSel_yes"><span>Creating an
            Instance</span></span>
          - [<span>Formalizing a Process</span>](4cApplication.md)
          - [<span>Materializing Results</span>](4dApplication.md)
      - [<span>Manipulating and Visualizing
        Objects</span>](5_CompletEdition.md)
      - [<span>Saving and Quitting OM</span>](6_Quit.md)

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
précédente</span>](4aApplication.md "page précédente(Chord & Musical Objects)")<span class="hidden">
| </span>[<span>page
suivante</span>](4cApplication.md "page suivante(Formalizing a Process)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
