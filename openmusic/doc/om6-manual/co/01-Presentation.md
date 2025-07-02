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
</span>[<span>Introduction</span>](00-Sommaire.md)<span class="stkSep">
\> </span><span class="stkSel_yes"><span>OpenMusic
Presentation</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](00-Sommaire.md "page précédente(Introduction)")<span class="hidden">
| </span>[<span>page
suivante</span>](02-SupportAndPubs.md "page suivante(Additional Information)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>OpenMusic Presentation</span>

<div class="headCo_co">

<div class="secOutFra">

<div class="secOutTi">

[<span>Sommaire </span>](#)

</div>

<div class="secOutUi">

1.  [Visual Programs](#aN15)
2.  [List Processing](#aN35)
3.  [A Functional Language](#aN55)
4.  [Objects and Classes](#aN8d)

</div>

</div>

<div>

<div class="infobloc">

<div class="txt">

OpenMusic – OM – is a computer-aided composition environment. It is a
musical extension of Common Lisp, a programming language, and CLOS, a
subset of Common Lisp dealing with object-oriented programming. Graphic
tools and protocols give OM a full visual programming dimension.

The use of a visual interface opens new prospects in the domain of
compositional processes formalization, which can influence compositional
thought. Graphic representation makes it possible to master the multiple
levels of compositional complexity. Last, integrating musical
representations within the interface creates a tight relationship
between programming, musical structures and symbols, and preserves the
musical dimension of composition throughout formalization.

</div>

</div>

<div class="part">

## <span>Visual Programs</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Programming in OM is mainly done in patches, graphic representations of
Lisp functions. Patches are composed of boxes that represent objects or
functions, and connections between these boxes.The functions used in OM
can be genuine Lisp functions, or specific OM functions that were
generally defined in a musical purpose.

</div>

</div>

</div>

</div>

<div class="part">

## <span>List Processing</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

"Lisp" is an abbreviation for "LISt Processing". Indeed, Lisp is
entirely based on the expression of data and functions by the means of
list structures. A list is a set of zero, one, or more elements,
delimited by two parenthesis. This means, for instance, an empty list :
( ), a list with one element : (FLOWER), a list with several elements :
(1 pretty FLOWER), a list of lists : e.g. (7 (2 8.4) (5 1 0) 0.3).
Therefore, musical data will also be expressed in OM algorithms and
processes express via list structures.

</div>

</div>

</div>

</div>

<div class="part">

## <span>A Functional Language</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Common Lisp is a functional programming language, where programming is
based upon the use of **functions** to transform and produce **data** .
Any element of a functional program can be considered a function.
Functions receive parameters called **arguments** , and return data.

Musical processes are formalized and designed as graphic programs in OM,
then interpreted as functional expressions.

Programs can have several layers : one can use a program as a single
function inside a higher-level program. This is known as functional
abstraction, a major and very frequent process used in programming.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Objects and Classes</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The various types of objects used in OM, such as musical objects –
chords, notes and so on – are represented by **classes** , an important
concept deriving from object-oriented programming. Classes refer to
categories of objects used as patterns that produce items, according to
a set of attributes. An object defined from a **class** is an
**instance** of this class.

Some functions, called **generic functions** , consist of a set of
**methods** . **Methods** define specialized behaviours depending on the
type (or class) of the **arguments** a generic function receives.

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
          - <span id="i4" class="outLeftSel_yes"><span>OpenMusic
            Presentation</span></span>
          - [<span>Additional Information</span>](02-SupportAndPubs.md)
          - [<span>Elementary F.A.Q.</span>](03-FAQ.md)
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
précédente</span>](00-Sommaire.md "page précédente(Introduction)")<span class="hidden">
| </span>[<span>page
suivante</span>](02-SupportAndPubs.md "page suivante(Additional Information)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
