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
</span><span class="stkSel_yes"><span>Visual Programming
II</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](DeadBox.md "page précédente(Dead Boxes)")<span class="hidden">
| </span>[<span>page
suivante</span>](Abstraction.md "page suivante(Abstraction)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Visual Programming II (Advanced)</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

This section describes the following advanced programming concepts and
tools :

  - defining options or control procedures within programs,

  - designing complex programming structures by the means of
    <span id="i0" class="defRef_ul"><span>functional
    abstraction</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc1802)</sup>
    or
    <span id="i1" class="defRef_ul"><span>iteration</span></span><sup>[<span>\[</span>2<span>\]</span>](#kFootBsktc1803)</sup>,

  - manipulating and globalizing objects with
    <span id="i2" class="defRef_ul"><span>instances</span></span><sup>[<span>\[</span>3<span>\]</span>](#kFootBsktc1804)</sup>
    and <span id="i3" class="defRef_ul"><span>global
    variables</span></span><sup>[<span>\[</span>4<span>\]</span>](#kFootBsktc1805)</sup>,

  - using files and advanced user inetraction modules.

</div>

</div>

</div>

</div>

</div>

<span class="hidden">Références : </span>

1.  
    
    <div id="kFootBsktc1802">
    
    <div class="footBskt_itti">
    
    Functional Abstraction
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    A functional abstraction is a program whose some elements can become
    variables, via connections to the outside environment. Hence, this
    program must have inputs or outputs that can be connected to
    external variable elements. The resulting functional abstraction can
    then be embedded into other programs to be used as a functional
    component.
    
    </div>
    
    </div>
    
    </div>
    
    </div>

2.  
    
    <div id="kFootBsktc1803">
    
    <div class="footBskt_itti">
    
    Iteration
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    The repetition of a process within a computer program.
    
    See also : Recursion.
    
    </div>
    
    </div>
    
    </div>
    
    </div>

3.  
    
    <div id="kFootBsktc1804">
    
    <div class="footBskt_itti">
    
    Instance
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    An actual object created at runtime, out of a given class. In OM,
    more specifically, an object created when evaluating a factory box.
    An instance can be saved as a global variable.
    
    ⤷ `SHIFT` click on an outlet – especially the first outlet
    representing the self, the whole object – of a factory box to
    materialize an instance.
    
    </div>
    
    </div>
    
    </div>
    
    </div>

4.  
    
    <div id="kFootBsktc1805">
    
    <div class="footBskt_itti">
    
    Global variable
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    An instance of OM object that has been saved in order to be used in
    other programs. Global variables are visible from the `Library`
    window and stored as .omi files in the `Globals` folder of the
    workspace.
    
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
      - <span id="i4" class="outLeftSel_yes"><span>Visual Programming
        II</span></span>
          - [<span>Abstraction</span>](Abstraction.md)
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
précédente</span>](DeadBox.md "page précédente(Dead Boxes)")<span class="hidden">
| </span>[<span>page
suivante</span>](Abstraction.md "page suivante(Abstraction)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
