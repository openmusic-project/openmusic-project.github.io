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
</span>[<span>Control
Structures</span>](Control.md)<span class="stkSep"> \>
</span>[<span>Predicates</span>](Predicates.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Type
Predicates</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](PredComparison.md "page précédente(Comparison Predicates)")<span class="hidden">
| </span>[<span>page
suivante</span>](PredExample.md "page suivante(In Practice)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Type Predicates</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

A **type predicate** tests if an **object** belongs to a **type of
object** . Most of these types are Lisp types, which can be found in the
`Classes` of the `OMKernel / Lisp` package.

</div>

<div class="caption">

<div class="caption_co">

![types.png](../res/types.png)

</div>

</div>

<div class="txt">

Type predicates are not available in the OM menus or packages, but their
name can be typed in a patch editor directly. It conventionally ends
with the letter "p" for "predicate".

</div>

</div>

<div class="part">

## <span>Numbers</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

There are several number types, which can be tested by the following
predicates.

<table>
<tbody>
<tr class="odd">
<td><ul>
<li><span> <strong>numberp</strong> : numbers</span></li>
</ul></td>
<td><ul>
<li><span>i<strong>ntegerp</strong> : integer numbers</span></li>
</ul></td>
<td><ul>
<li><span> <strong>rationalp</strong> : rational numbers</span></li>
</ul></td>
<td><ul>
<li><span> <strong>floatp</strong> : decimal numbers</span></li>
</ul></td>
</tr>
</tbody>
</table>

By extension, other predicates test the **properties** of numbers.

<table>
<tbody>
<tr class="odd">
<td><ul>
<li><span> <strong>plusp</strong> : positive numbers</span></li>
</ul></td>
<td><ul>
<li><span> <strong>minusp</strong> : negative numbers</span></li>
</ul></td>
<td><ul>
<li><span> <strong>zerop</strong> : zero</span></li>
</ul></td>
<td><ul>
<li><span> <strong>evenp</strong> : even integers</span></li>
</ul></td>
<td><ul>
<li><span> <strong><strong>oddp</strong> : odd integers</strong> </span></li>
</ul></td>
</tr>
</tbody>
</table>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Other Type Predicates</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Here are some other frequently used type predicates :

<table>
<thead>
<tr class="header">
<th><p>Predicate</p></th>
<th><p>Returns "t" for</p></th>
<th><p>Example</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong></strong> <strong><strong>characterp</strong></strong> <strong></strong></p></td>
<td><p>the name of a character that has a printable glyph.</p></td>
<td><p>#\Space ; #\a ... -&gt; t</p></td>
</tr>
<tr class="even">
<td><p><strong>symbolp</strong></p></td>
<td><p>something that can be named but numbers, strings, lists, some characters.</p></td>
<td><p>'cow ; note ; 2-ERz -&gt; t</p></td>
</tr>
<tr class="odd">
<td><p><strong></strong> <strong><strong>atom</strong></strong> <strong></strong></p></td>
<td><p>anything not between parenthesis but strings.</p></td>
<td><p>A ; 38 ; -&gt; t</p></td>
</tr>
<tr class="even">
<td><p><strong></strong> <strong><strong>listp</strong></strong> <strong></strong></p></td>
<td><p>anything between parenthesis, or nil. In Lisp, nil = empty list.</p></td>
<td><p>(A B C) ; (A (B C) -&gt; t</p></td>
</tr>
<tr class="odd">
<td><p><strong></strong> <strong><strong>consp</strong></strong> <strong></strong></p></td>
<td><p>a list with a <span id="i2" class="defRef_ul"><span>car</span></span><sup><a href="#kFootBsktc2375"><span>[</span>1<span>]</span></a></sup> and a <span id="i3" class="defRef_ul"><span> cdr</span></span><sup><a href="#kFootBsktc2375"><span>[</span>1<span>]</span></a></sup>.</p></td>
<td><p>(A B) ; (A (B C)) -&gt; t</p>
<p>(A) -&gt; nil</p></td>
</tr>
<tr class="even">
<td><p><strong></strong> <strong><strong>stringp</strong></strong> <strong></strong></p></td>
<td><p>anything between inverted commas.</p></td>
<td><p>"vangogh#\Tab;;2" -&gt; t</p></td>
</tr>
<tr class="odd">
<td><p><strong>functionp</strong></p></td>
<td><p>function names and function boxes on "lambda" mode.</p></td>
<td><p><span class="iconButton_tim"><img src="../res/plus_icon.png" class="sfile_icon-png_icon-gif_icon" width="66" height="41" alt="plus_icon.png" /></span> -&gt; t</p></td>
</tr>
<tr class="even">
<td><p><strong>nullp</strong></p></td>
<td><p>anything that is nil.</p></td>
<td><p>nil -&gt; t ; ( ) -&gt; t</p></td>
</tr>
<tr class="odd">
<td><p><strong>typep</strong></p></td>
<td><p>an object of a given type.</p></td>
<td><p><span class="iconButton_tim"><img src="../res/typep_icon.png" class="sfile_icon-png_icon-gif_icon" width="122" height="110" alt="typep_icon.png" /></span></p></td>
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
              - [<span>Predicates</span>](Predicates.md)
                  - [<span>Comparison
                    Predicates</span>](PredComparison.md)
                  - <span id="i4" class="outLeftSel_yes"><span>Type
                    Predicates</span></span>
                  - [<span>In Practice</span>](PredExample.md)
              - [<span>Conditional Operators</span>](ConditionalOps.md)
              - [<span>Logical Operators</span>](Logical.md)
              - [<span>Sequential Operators</span>](Sequencial.md)
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
précédente</span>](PredComparison.md "page précédente(Comparison Predicates)")<span class="hidden">
| </span>[<span>page
suivante</span>](PredExample.md "page suivante(In Practice)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
