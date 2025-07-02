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
</span>[<span>Lisp Programming</span>](Lisp.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>The Listener</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](LispEditor.md "page précédente(The Lisp Editor)")<span class="hidden">
| </span>[<span>page
suivante</span>](LispInOM.md "page suivante(Lisp Code in OM)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>The Listener</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>The Listener Window</span>

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
<p>The Listener window is the main interface with the Lisp under OM. It can be used for evaluating Lisp expressions or reading results and messages.</p>
<p>To open or bring the Listener window to the front, select <code class="menuPath_tl">Windows/Lisp Listener</code> or type <code class="keyboard_tl">CMD</code> + <code class="keyboard_tl">l</code>.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/listener-open.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/listener-open_1.png" width="300" height="290" alt="listener-open_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Listener Window</span>

</div>

<div class="txt">

The OM Listener window is made of two main frames, or "panes".

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
<p>The <strong>input</strong> pane – upper part –allows to enter Lisp expressions. These expressions will be evaluated by the Lisp interpreter. They can be either simple variables, calls to Lisp functions, or definitions of new variables or functions.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/listenerinput.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/listenerinput_1.png" width="300" height="258" alt="listenerinput_1.png" /></a>
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
<p>The <strong>output</strong> pane – lower part – displays the results returned by the boxes evaluated in OM patches</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/listenerprintresult.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/listenerprintresult_1.png" width="300" height="165" alt="listenerprintresult_1.png" /></a>
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
<td><div class="caption">
<div class="caption_co">
<img src="../res/listenerprintmessage.png" width="294" height="214" alt="listenerprintmessage.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>It also prints the results of different processes in OM patches or environment.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Lisp Files</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Use</span>

</div>

<div class="txt">

Lisp files generally have a ".lisp" or ".lsp" extension. They can also
be compiled, that is interpreted and converted to optimized binary
instructions for a given platform. They will then be loaded in their
compiled form.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Loading Files</span>

</div>

<div class="txt">

To **load** a file that contains Lisp code, select `Lisp/Load File`.

The Lisp code it contains is evaluated : all the functions and data
defined in this file are added to the current Lisp environment, so that
they can be used subsequently.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Control of Execution</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The Listener is also a fundamental tool for controlling the execution of
OM programs.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Abort Command</span>

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
<a href="../res/lispAbort.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/lispAbort_1.png" width="300" height="242" alt="lispAbort_1.png" /></a>
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>To abort an ongoing evaluation, select the Listener, choose <code class="menuPath_tl">Lisp / Abort</code> or type <code class="keyboard_tl">Cmd</code>+<code class="keyboard_tl">a</code>.</p>
<p>The message displayed in return is often very useful for debugging or understanding the process at stake.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Additional Information</span>

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
<p>A small text field located between the two panes displays additional info, such as</p>
<ul>
<li><p>the status of the evaluation process – "Running", "Ready", "Aborted" –</p></li>
<li><p>completion hints about the functions typed in the input pane.</p></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/listenerinfo.png" width="300" height="223" alt="To get information about an item, type its name and add a space." />
</div>
<div class="caption_ti">
To get information about an item, type its name and add a space.
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
          - [<span>Introduction to Lisp</span>](LispIntro.md)
          - [<span>The Lisp Editor</span>](LispEditor.md)
          - <span id="i3" class="outLeftSel_yes"><span>The
            Listener</span></span>
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
précédente</span>](LispEditor.md "page précédente(The Lisp Editor)")<span class="hidden">
| </span>[<span>page
suivante</span>](LispInOM.md "page suivante(Lisp Code in OM)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
