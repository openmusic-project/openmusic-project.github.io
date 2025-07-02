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
</span>[<span>Box Inputs</span>](BoxInputs.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Additional
Inputs</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](StandardInputs.md "page précédente(Standard Inputs)")<span class="hidden">
| </span>[<span>page
suivante</span>](Connections.md "page suivante(Connections)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Additional Inputs : Optional, Keyword and Rest Arguments</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

For practical issues, function boxes don't always show all possible
inlets. Additional arguments can be added to Lisp and OM functions. They
can be either **optional**, **keyword** , or " **rest** " arguments.

  - **Optional arguments** can be added successively in a predefined
    order, which cannot be modified.

  - **Keyword arguments** can be added and named ad libitum by the user
    with a keyword.
    
    Hence, keyword arguments are especially convenient if a function has
    numerous additional arguments : the user can choose one or more
    specific items among a whole range of arguments. This also means
    that keyword arguments are more or less independent from each other.

  - **Rest arguments** represent an unlimited numbers of successive
    parameters.

Contrary to standard arguments, functions **always work** if optional
arguments or keyword arguments are not specified, usually because
suitable default values are applied.

</div>

</div>

<div class="bloc tip">

<div class="bloc_ti tip_ti">

<span>Getting Information About Arguments</span>

</div>

<div class="txt">

The additional arguments type – **optional** or **keyword** arguments –
is indicated at the beginning of the documentation.

  - <span>Optional arguments are signaled by the" **\&optional**
    "prefix.</span>

<!-- end list -->

  - <span>Keyword arguments are identified by the **\&key**
    prefix.</span>
  - <span>Rest arguments are identified by the **\&rest** prefix.</span>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Accessing Documentation</span>

</div>

<div class="linkUL">

  - [<span>Documentation and Info</span>](DocAndInfo.md)

</div>

</div>

</div>

<div class="part">

## <span>Optional Arguments</span>

<div class="part_co">

<div class="infobloc">

<div class="txtRes">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><div class="dk_txtRes_txt txt">
<p>Optional arguments are not visible by default</p>
<ul>
<li><span>To add optional arguments, select the box and press <code class="keyboard_tl">Alt</code> + <code class="keyboard_tl">→</code>.</span></li>
<li><span>To delete them, press <code class="keyboard_tl">Alt</code> + <code class="keyboard_tl">←</code> (or <code class="keyboard_tl">&lt;</code>). </span></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/om-round-optionals.png" width="300" height="75" alt="The OM-ROUND function has one input by default and and two optional inputs." />
</div>
<div class="caption_ti">
The OM-ROUND function has one input by default and and two optional inputs.
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc tip">

<div class="bloc_ti tip_ti">

<span>Adding All Optional Inputs : \></span>

</div>

<div class="txt">

Press `>` to add all possible optional inputs at once.

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Using Optional Inputs : OM-ROUND</span>

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
<a href="../res/om-round-doc.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/om-round-doc_1.png" width="300" height="147" alt="om-round-doc_1.png" /></a>
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>OM-ROUND rounds a number (or a list of number) to the closest integer value(s).</p>
<p>It has also two Optional arguments :</p>
<ul>
<li><span> decimals allows to round to the closest decimal value (by default, 0 decimals = integer)</span></li>
<li><span> divisor allows to specify a divisor to apply before rounding (by default, 1). </span></li>
</ul>
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
<p>The standard use of OM-ROUND does not require using the optional inputs (A).</p>
<p>In (B) we use the first optional ( decimals ) to round the input number whith a higher precision.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/om-round-ex.png" width="260" height="168" alt="om-round-ex.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Keyword Arguments</span>

<div class="part_co">

<div class="infobloc">

<div class="txtRes">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><div class="dk_txtRes_txt txt">
<p>Keyword arguments are not visible by default.</p>
<p>To add keyword arguments, select the box and press <code class="keyboard_tl">k</code>.</p>
<p>To remove them, press <code class="keyboard_tl">SHIFT</code> + <code class="keyboard_tl">k</code> to remove it.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/sort-list-inputs.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/sort-list-inputs_1.png" width="300" height="73" alt="The SORT-LIST function has one initial argument and three keyword arguments" /></a>
</div>
<div class="caption_ti">
The SORT-LIST function has one initial argument and three keyword arguments
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

Note that keyword arguments are represented by **dark blue inlets** .

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Setting Keyword Arguments</span>

</div>

<div class="txt">

Contrary to optional arguments, keyword arguments are not in a fixed,
predefined order and can therefore be used independently from one
another.

You must therefore set **both the name of the keyword input and its
value**.

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
<p>The default name of a new keyword is the first unused argument in the keywords list. This name is visible by hovering the mouse over the box inlet.</p>
<p>Note that keyword names are always preceded by " <strong><code class="label_tl">:</code></strong> "</p>
<p>To change the argument :</p>
<ol>
<li><p>click on the inlet</p></li>
<li><p>select a name in the pop up menu</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/choose-keyword.png" width="124" height="99" alt="choose-keyword.png" />
</div>
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
<p>The value of a keyword argument is set like the value of a standard argument by connecting a box to the keyword input.</p>
<p>Like standard or optional inputs, keyword inputs can have default values. To show this value, <code class="keyboard_tl">Shift</code> click on the input.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/key-value.png" width="78" height="96" alt="key-value.png" />
</div>
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
<p>When an input menu is attached to a keyword input, it is also accessed with <code class="keyboard_tl">Shift</code> click on the input.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/key-menu.png" width="117" height="86" alt="key-menu.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Setting Box Inputs, Input Menus, etc.</span>

</div>

<div class="linkUL">

  - [<span>Standard Inputs</span>](StandardInputs.md)

</div>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Using Keyword Inputs : SORT-LIST</span>

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
<a href="../res/sort-doc.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/sort-doc_1.png" width="300" height="138" alt="sort-doc_1.png" /></a>
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>SORT-LIST sorts items in a list. It has three keyword arguments</p>
<ul>
<li><span>test : a test used to compare items to sort them (by default, &lt;, so the function sorts number in growing order)</span></li>
<li><span>key : an accessor applyed to the items before to compare them to each other (Do not confuse with the &amp;key prefix of keyword arguments!</span></li>
<li><span>rec : which allows to apply the sort procedure recursively in the list.</span></li>
</ul>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Using Functions as Arguments (test, key...)</span>

</div>

<div class="linkUL">

  - [<span>Lambda Mode</span>](LambdaMode.md)

</div>

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
<p>The default behaviour of the function sorts the numbers in ascending order (A).</p>
<p>If we add the  :test keyword input and change the test function, we can change this default behaviour. Here, the test function is changed for &gt;, which outputs numbers in decreasing order (B).</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/sort-list-test.png" width="269" height="148" alt="sort-list-test.png" />
</div>
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
<p>The  :key argument is a potential connection used for applying a function to the elements of the input list, before they are compared with each other.</p>
<p>Here, (C) we sort a more complex list by comparing the second element of each item.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/sort-list-key.png" width="214" height="154" alt="sort-list-key.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

It would also be possible to change both the test and key values by
adding another keyword input to the box.

In general, any combination of the different keyword inputs is allowed.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Rest Arguments</span>

<div class="part_co">

<div class="infobloc">

<div class="txtRes">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><div class="dk_txtRes_txt txt">
<p>Rest arguments are not visible by default, and are generally at the end of the arguments list of a function. They work like optional arguments but are not named nor of a specific number.</p>
<ul>
<li><span>To add rest arguments, select the box and press <code class="keyboard_tl">Alt</code> + <code class="keyboard_tl">→</code> or <code class="keyboard_tl">&gt;</code> .</span></li>
<li><span>To delete them, press <code class="keyboard_tl">Alt</code> + <code class="keyboard_tl">←</code> or <code class="keyboard_tl">&lt;</code>. </span></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/x-append-inputs.png" width="300" height="71" alt="The X-APPEND function has two initial arguments and a undertermined number of &#39;rest&#39; arguments." />
</div>
<div class="caption_ti">
The X-APPEND function has two initial arguments and a undertermined number of 'rest' arguments.
</div>
</div></td>
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
          - [<span>Box Inputs</span>](BoxInputs.md)
              - [<span>Standard Inputs</span>](StandardInputs.md)
              - <span id="i3" class="outLeftSel_yes"><span>Additional
                Inputs</span></span>
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
précédente</span>](StandardInputs.md "page précédente(Standard Inputs)")<span class="hidden">
| </span>[<span>page
suivante</span>](Connections.md "page suivante(Connections)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
