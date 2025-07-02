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
</span><span class="stkSel_yes"><span>Lisp
Programming</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](SDIF-Write.md "page précédente(Writing SDIF Files)")<span class="hidden">
| </span>[<span>page
suivante</span>](LispIntro.md "page suivante(Introduction to Lisp)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Lisp Programming</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

OpenMusic is a visual programming language entirely built on top of the
[<span>Common
Lisp</span>](http:/www.cs.cmu.edu/Groups/AI/html/cltl/cltl2.md "http://www.cs.cmu.edu/Groups/AI/html/cltl/cltl2.html (nouvelle fenêtre)")
programming language. Hence, the visual environment can be linked with
this underlying language in many different ways.

Programming in Lisp is sometimes a convenient and efficient way to work
with OM, where all Lisp-programmed tools and modules can be accessed and
used.

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
<img src="../res/lispwindowsmenu.png" width="183" height="178" alt="lispwindowsmenu.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>OM has two main interfaces to Lisp : The <span id="i0" class="defRef_ul"><span>Listener</span></span><sup><a href="#kFootBsktc1817"><span>[</span>1<span>]</span></a></sup> window and the Lisp editor. These two windows are accessible from the <code class="menuPath_tl">Windows</code> menu.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

</div>

</div>

</div>

<span class="hidden">Références : </span>

1.  
    
    <div id="kFootBsktc1817">
    
    <div class="footBskt_itti">
    
    Lisp Listener
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    A Lisp communication interface displaying results of computations,
    warnings or error messages, and where Lisp expressions – programs –
    can be evaluated.
    
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
      - [<span>Sheet</span>](Sheet.md)
      - [<span>MIDI</span>](MIDI.md)
      - [<span>Audio</span>](Audio.md)
      - [<span>SDIF</span>](SDIF.md)
      - <span id="i1" class="outLeftSel_yes"><span>Lisp
        Programming</span></span>
          - [<span>Introduction to Lisp</span>](LispIntro.md)
          - [<span>The Lisp Editor</span>](LispEditor.md)
          - [<span>The Listener</span>](LispListener.md)
          - [<span>Lisp Code in OM</span>](LispInOM.md)
          - [<span>Lisp Function Boxes</span>](LispFunctions.md)
          - [<span>Lisp Tools</span>](LowLevel.md)
          - [<span>Writing an OM Library</span>](LispUserLib.md)
          - [<span>Writing Code for OM</span>](LispForOM.md)
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
précédente</span>](SDIF-Write.md "page précédente(Writing SDIF Files)")<span class="hidden">
| </span>[<span>page
suivante</span>](LispIntro.md "page suivante(Introduction to Lisp)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
