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
I</span>](BasicVisualProgramming.md)<span class="stkSep"> \>
</span>[<span>Boxes</span>](Boxes.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Objects – Factory
Boxes</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](FunctionBoxes.md "page précédente(Function Boxes)")<span class="hidden">
| </span>[<span>page
suivante</span>](1-Visualization.md "page suivante(Visualization)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Objects – Factory Boxes</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

In OM, objects are created and used in patches via " **factory** "
boxes. A factory box refers to a
<span id="i0" class="defRef_ul"><span>class</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc1871)</sup>
and allows to create
<span id="i1" class="defRef_ul"><span>instances</span></span><sup>[<span>\[</span>2<span>\]</span>](#kFootBsktc1804)</sup>
– exemplars, in other words –, of this class.

  - <span>Factories can be connected to the other components of a visual
    program. </span>
  - <span>Their inner editor is a graphical user interface that allows
    to visualize, edit and manipulate the objects produced by factories.
    For instance, one can edit a musical sequence in a traditional score
    editor.</span>

This dual aspect of formalized computation, associated with direct
manual interaction on the musical material, is a fundamental feature of
OM, which makes the factory box a major patch component.

Factory boxes are accessed via the `Classes` menu or can be added in a
patch from the [<span>Library window</span>](Library.md).

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>How To Add a Box into a Patch Editor</span>

</div>

<div class="linkUL">

  - [<span>Adding Boxes Into a Patch</span>](AddingBoxes.md)

</div>

</div>

</div>

</div>

</div>

</div>

<span class="hidden">Références : </span>

1.  
    
    <div id="kFootBsktc1871">
    
    <div class="footBskt_itti">
    
    Class
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    A category of objects sharing common properties – characteristics
    and behaviour. A class specifies the internal structure and
    behaviour of an object. In OM, it is represented in a patch by a
    factory box that can produce an instance of a class.
    
    See also : Object, Instance
    
    </div>
    
    </div>
    
    </div>
    
    </div>

2.  
    
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
          - [<span>Patch Introduction</span>](ProgrammingIntro.md)
          - [<span>Adding Boxes Into a Patch</span>](AddingBoxes.md)
          - [<span>Elementary Manipulations</span>](ElementaryManips.md)
          - [<span>Boxes</span>](Boxes.md)
              - [<span>Boxes Features</span>](GraphicFeatures.md)
              - [<span>Data Boxes</span>](DataBox.md)
              - [<span>Function Boxes</span>](FunctionBoxes.md)
              - <span id="i2" class="outLeftSel_yes"><span>Objects –
                Factory Boxes</span></span>
                  - [<span>Visualization</span>](1-Visualization.md)
                  - [<span>Instantiating
                    Objects</span>](2-Instanciation.md)
                  - [<span>Playback and Players</span>](1-Play.md)
                  - [<span>Editors</span>](3-Editors.md)
                  - [<span>Import/Export</span>](4-ImportExport.md)
              - [<span>Abstraction Boxes</span>](AbsBoxesIntro.md)
              - [<span>Other Boxes</span>](OtherBoxes.md)
          - [<span>Box Inputs</span>](BoxInputs.md)
          - [<span>Connections</span>](Connections.md)
          - [<span>Evaluation</span>](Evaluation.md)
          - [<span>Documentation and Info</span>](DocAndInfo.md)
          - [<span>Comments</span>](Comments.md)
          - [<span>Pictures</span>](Pictures.md)
          - [<span>Saving / Reloading a Patch</span>](SavingPatch.md)
          - [<span>Dead Boxes</span>](DeadBox.md)
      - [<span>Visual Programming
        II</span>](AdvancedVisualProgramming.md)
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
précédente</span>](FunctionBoxes.md "page précédente(Function Boxes)")<span class="hidden">
| </span>[<span>page
suivante</span>](1-Visualization.md "page suivante(Visualization)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
