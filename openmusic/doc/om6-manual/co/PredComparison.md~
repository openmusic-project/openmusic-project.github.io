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
</span><span class="stkSel_yes"><span>Comparison
Predicates</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Predicates.md "page précédente(Predicates)")<span class="hidden">
| </span>[<span>page
suivante</span>](PredTypes.md "page suivante(Type Predicates)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Comparison Predicates</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

There are many comparison predicates. These can apply to numbers, but
also to symbols, characters, words, and so on.

</div>

</div>

<div class="part">

## <span>Comparing Numbers</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Common Algebraic Predicates</span>

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
<p>Comparing numbers is a widespread use of predicates in OM.</p>
<p>Some algebraic predicates can be accessed via the <code class="menuPath_tl">Functions / Kernel / Control</code> menu. Like other functions, they can also be added in a patch editor by typing their name.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/menupredicats.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/menupredicats_1.png" width="300" height="170" alt="menupredicats_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

Here is a non exhaustive presentation of OM algebraic predicates:

</div>

<div class="txt">

| Predicate                                                                     | Write | Test                       |
| ----------------------------------------------------------------------------- | ----- | -------------------------- |
| <span class="iconButton_tim">![pred9\_icon.png](../res/pred9_icon.png)</span> | OM=   | A equal to B ?             |
| <span class="iconButton_tim">![pred3\_icon.png](../res/pred3_icon.png)</span> | OM/=  | A different from B ?       |
| <span class="iconButton_tim">![pred1\_icon.png](../res/pred1_icon.png)</span> | OM\<= | A inferior or equal to B ? |
| <span class="iconButton_tim">![pred2\_icon.png](../res/pred2_icon.png)</span> | OM\>= | A superior or equal to B ? |
| <span class="iconButton_tim">![pred6\_icon.png](../res/pred6_icon.png)</span> | OM\<  | A inferior to B ?          |
| <span class="iconButton_tim">![pred5\_icon.png](../res/pred5_icon.png)</span> | OM\>  | A superior to B ?          |

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Equivalent Lisp predicates</span>

</div>

<div class="txt">

There are equivalent Lisp predicates to OM predicates. They can be used
directly in OM type the predicate name without "OM", for instance "=",
"\>=", etc.

They can sometimes offer ineteresting possibilities, as they accept more
than two arguments.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Comparison Predicates and Non Algebraic Objects</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Lisp provides other predicates specifically dedicated to the comparison
of other type of objects.

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
<p>Some useful comparison predicates concern strings – or "words"–. They allow to test if two strings are equal, considering the characters case or not, precedence in alphabetical order, etc.</p>
<p>Here are examples of avalable string-predicates :</p>
<ul>
<li><p>string-equal , string=</p></li>
<li><p>string&lt; , string&gt;= ...</p></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/string-comp.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/string-comp_1.png" width="300" height="103" alt="string-comp_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>String Predicates in Lisp</span>

</div>

<div class="txt">

More information about string comparison in Lisp can be found
[<span>here</span>](http:/www.cs.cmu.edu/Groups/AI/html/cltl/clm/node166.md "http://www.cs.cmu.edu/Groups/AI/html/cltl/clm/node166.html (nouvelle fenêtre)").

</div>

</div>

</div>

</div>

<div class="part">

## <span>Equality Predicates</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Application</span>

</div>

<div class="txt">

Equality predicates test if two items are **equal or not**. They apply
to a broader range of data than the algebraic predicates.

There are a number of equality predicates. Indeed, equality can
encompass different concepts, depending on the type of object it is
applied to.

For instance, the character "a" is a **concept** that can be represented
by several different glyphs – A, a, **a** – which can be considered
identical or not, depending on the predicate.

EQ is the the most specific predicate, and EQUALP the most general :

</div>

<div class="txt">

<table>
<thead>
<tr class="header">
<th></th>
<th><p>Returns "t" if</p></th>
<th><p>Examples</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><span class="iconButton_tim"><img src="../res/lispeq_icon.png" class="sfile_icon-png_icon-gif_icon" width="51" height="42" alt="lispeq_icon.png" /></span></p></td>
<td><ul>
<li><span> <strong></strong> Object are the same identical object , and not only have the same value. </span></li>
</ul>
<p>This can have unpredictible results when testing numbers, for instance, since the underlying language may make internal copies of the numbers with same values.</p>
<p><strong>Two objects with the same reference</strong> are eq.</p></td>
<td><p>eq 'A 'A -&gt; t</p>
<p>eq 'A 'a -&gt; t</p>
<p>eq "A" "A" -&gt; nil</p>
<p>eq '(A B C) '(A B C) -&gt; nil</p>
<p>eq 2 2/1 -&gt; t</p>
<p>eq 2 2 -&gt; t</p>
<p>eq 2.5 2.5 -&gt; nil</p></td>
</tr>
<tr class="even">
<td></td>
<td><p>Returns "t" if</p></td>
<td><p>Examples</p></td>
</tr>
<tr class="odd">
<td><p><span class="iconButton_tim"><img src="../res/lispeql_icon.png" class="sfile_icon-png_icon-gif_icon" width="44" height="42" alt="lispeql_icon.png" /></span></p></td>
<td><ul>
<li><span>Objects are eq </span></li>
</ul>
<ul>
<li><span>Objects are numbers or characters with the same type and the same value .</span></li>
</ul></td>
<td><p>eql 2.0 2.0 -&gt; t</p>
<p>eql 2.0 2 -&gt; nil</p></td>
</tr>
<tr class="even">
<td></td>
<td><p>Returns "t" if</p></td>
<td><p>Examples</p></td>
</tr>
<tr class="odd">
<td><p><span class="iconButton_tim"><img src="../res/lispequal_icon.png" class="sfile_icon-png_icon-gif_icon" width="52" height="42" alt="lispequal_icon.png" /></span></p></td>
<td><ul>
<li><span>Objects are <strong>structurally similar</strong> </span></li>
</ul>
<ul>
<li><span>Strings have <strong>identical</strong> glyphs</span></li>
</ul></td>
<td><p>equal (A (b) C) (a (B) c) -&gt; t</p>
<p>equal "A" "A" -&gt; t</p>
<p>equal "A" "a" -&gt;nil</p>
<p>equal 2.5 2.5 -&gt;t</p></td>
</tr>
<tr class="even">
<td></td>
<td><p>Returns "t" if</p></td>
<td><p>Examples</p></td>
</tr>
<tr class="odd">
<td><p><span class="iconButton_tim"><img src="../res/lispequalp_icon.png" class="sfile_icon-png_icon-gif_icon" width="64" height="42" alt="lispequalp_icon.png" /></span></p></td>
<td><ul>
<li><span> Objects are eq, eql or equal </span></li>
</ul>
<ul>
<li><span>Objects have the same <strong>value</strong> </span></li>
</ul>
<ul>
<li><span>Strings have <strong>similar</strong> glyphs </span></li>
</ul></td>
<td><p>equalp 2 2/1 -&gt; t</p>
<p>equalp 2.5 2.5 -&gt; t</p>
<p>equalp 2 2.0 -&gt; t</p>
<p>equalp "A" "a" -&gt; t</p></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Equality Predicates in Lisp</span>

</div>

<div class="txt">

Equality predicates are **Lisp functions**. They may not be in the OM
menus but can be added by typing their name directly in a patch editor.

More information about equality predicates in Common Lisp
[<span>here</span>](http:/www.cs.cmu.edu/Groups/AI/html/cltl/clm/node74.md "http://www.cs.cmu.edu/Groups/AI/html/cltl/clm/node74.html (nouvelle fenêtre)").

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Numbers Equality</span>

</div>

<div class="txt">

As shown above, general equality predicates offer more specific options
in the evaluation of **equality between** **numbers**. They consider the
**value** of numbers, but also their **type** (integer, float, ratio,
etc.) and the **internal Lisp object** they refer to.

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Lisp Predicates and OM Functions</span>

</div>

<div class="txt">

Many Lisp and OM functions need a predicate to operate. Some functions
that perform operations upon lists, for instance, have a **default
equality predicate** used for identifying similar items.

This predicate can be redefined to modify the behaviour of the function
: a comparison predicate or a lambda function can be used for rejecting
a given type of numbers, an so on.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Using Lambda Functions as Predicates :</span>

</div>

<div class="linkUL">

  - [<span>Lambda Mode Examples: Test Functions</span>](LambdaTest.md)

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
          - [<span>Evaluation Modes</span>](EvalModes.md)
          - [<span>Higher-Order Functions</span>](HighOrder.md)
          - [<span>Control Structures</span>](Control.md)
              - [<span>Predicates</span>](Predicates.md)
                  - <span id="i3" class="outLeftSel_yes"><span>Comparison
                    Predicates</span></span>
                  - [<span>Type Predicates</span>](PredTypes.md)
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
précédente</span>](Predicates.md "page précédente(Predicates)")<span class="hidden">
| </span>[<span>page
suivante</span>](PredTypes.md "page suivante(Type Predicates)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
