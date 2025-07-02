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
</span><span class="stkSel_yes"><span>Patch
Introduction</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](BasicVisualProgramming.md "page précédente(Visual Programming I)")<span class="hidden">
| </span>[<span>page
suivante</span>](AddingBoxes.md "page suivante(Adding Boxes Into a Patch)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Introduction to Patch Programming</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

Almost all programming in OpenMusic is done in patches, which are visual
representations of programs.

</div>

</div>

<div class="part">

## <span>Location</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Patches are created in the
<span id="i2" class="defRef_ul"><span>workspace</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc1849)</sup>
window.

</div>

<div class="caption">

<div class="caption_co">

![patchlocation.png](../res/patchlocation.png)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>More Information about Patches and Other Documents :</span>

</div>

<div class="linkUL">

  - [<span>Workspace</span>](Workspace.md)

</div>

</div>

<div class="txt">

Most visual programming is done in the **patch** **editor** , which
opens by a double click on the patch icon.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Content</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Patches contain **boxes,** which represent :

  - <span> **functions** that are called or used by the program, </span>
  - <span> **objects** – such as notes, sound files and so on –, that
    are created and processed in the program.</span>

**Connections** link these components together to define the functional
structure of the program.

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Boxes and Programs</span>

</div>

<div class="txt">

The various box types that might interact in a program generally have
different properties. Each box type is described in the [<span>Boxes and
Patch Components</span>](Boxes.md) section. You will also learn how to
create patches within other patches. This very convenient procedure is
called  [<span>functional abstraction</span>](Abstraction.md). The user
will resort to it as soon as he or she gets familiar with OM.

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>A Simple Patch Example : Performing a Transposition</span>

</div>

<div class="txt">

This patch contains three items :

  - <span>A : the **** ****om+** **function**** **** , which executes
    additions</span>
  - <span>B : a **note** object</span>
  - <span>C : a **data box** . </span>

The note is a G\#4, which means its pitch is equal to 6800
<span id="i3" class="defRef_ul"><span>midicents</span></span><sup>[<span>\[</span>2<span>\]</span>](#kFootBsktc2000)</sup>.
This pitch can be accessed via the second inlet and outlet of the box.

</div>

<div class="caption">

<div class="caption_co">

![basicpatch.png](../res/basicpatch.png)

</div>

</div>

<div class="txt">

The first input of om+ is connected to the second outlet of the note :
the pitch of the note is the first term of the addition.

The data box represents a value : 400. It is connected to the second
inlet of om+. It is the second term of the addition.

When om+ is evaluated, the Listener displays the value of the resulting
pitch in midicents.

</div>

</div>

</div>

</div>

</div>

</div>

</div>

<span class="hidden">Références : </span>

1.  
    
    <div id="kFootBsktc1849">
    
    <div class="footBskt_itti">
    
    Workspace
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    OpenMusic's working environment. Each session starts with choosing a
    workspace, the equivalent of a desktop where programs are created
    and organized, and where items can be stored.
    
    </div>
    
    </div>
    
    </div>
    
    </div>

2.  
    
    <div id="kFootBsktc2000">
    
    <div class="footBskt_itti">
    
    Midicent
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    A midicent is a unit representing one cent of the usual MIDI pitch
    unit, that is, a half-tone. For instance, a C4 corresponds to 60 in
    MIDI, and to 6000 midicents, C4\# to 61, i.e. 6100 midicents, and so
    on.
    
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
          - <span id="i4" class="outLeftSel_yes"><span>Patch
            Introduction</span></span>
          - [<span>Adding Boxes Into a Patch</span>](AddingBoxes.md)
          - [<span>Elementary Manipulations</span>](ElementaryManips.md)
          - [<span>Boxes</span>](Boxes.md)
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
précédente</span>](BasicVisualProgramming.md "page précédente(Visual Programming I)")<span class="hidden">
| </span>[<span>page
suivante</span>](AddingBoxes.md "page suivante(Adding Boxes Into a Patch)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
