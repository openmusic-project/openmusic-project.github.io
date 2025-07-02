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
</span><span class="stkSel_yes"><span>The Lisp
Editor</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](LispIntro.md "page précédente(Introduction to Lisp)")<span class="hidden">
| </span>[<span>page
suivante</span>](LispListener.md "page suivante(The Listener)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Writing/Evaluating Lisp Code : The Lisp Editor</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="caption">

<div class="caption_co">

![LispEditor\_1.png](../res/LispEditor_1.png)

</div>

</div>

<div class="txt">

The Lisp Editor allows to write Lisp code, or even a simple text. It
basically works as a standard text editor, providing all usual text
editing commands such as Cut/Copy/Paste, Open/Save/Save as,
Find/Replace...

</div>

</div>

<div class="part">

## <span>Lisp Buffers and Files</span>

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
<ul>
<li><p>To open a Lisp editor window from a patch, choose <code class="menuPath_tl">Windows / Lisp Editor</code>.</p></li>
<li><p>To open another window from a current Lisp editor, choose <code class="menuPath_tl">File / New</code>.</p></li>
</ul>
<p>In both cases, the window is entitled "New Buffer".</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/newbuffer.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/newbuffer_1.png" width="300" height="194" alt="newbuffer_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

Lisp editors are text buffers, whose content may or not be attached or
saved in any file.

To save the content of the buffer, select `File / Save - Save As`,
choose a name and location in the dialogue window. The file name will
appear at the top of the window

</div>

<div class="caption">

<div class="caption_co">

![OpenFile.png](../res/OpenFile.png)

</div>

</div>

<div class="txt">

  - To open an existing file **from a current buffer**, choose `File /
    Open` and select a text or lisp file.
    
    The buffer window will show the name of the file. the (that is,
    created with `File/Open`).

</div>

</div>

</div>

</div>

<div class="part">

## <span>Evaluation Commands</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Main Commands</span>

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
<ul>
<li><p>To evaluate one or several expression, select them and choose <code class="menuPath_tl">Lisp / Eval Region</code> or type <code class="keyboard_tl">Cmd</code> + <code class="keyboard_tl">e</code>.</p></li>
<li><p>To evaluate the whole buffer, use <code class="menuPath_tl">Lisp / Eval All</code> or type <code class="keyboard_tl">Cmd</code> + <code class="keyboard_tl">y</code>.</p></li>
</ul>
<p>The results from the evaluations of the different expressions will appear <strong>in the Listener</strong>.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<div class="imgzFra" style="position: relative;">
<img src="../res/evalall_scr.png" width="300" height="210" alt="evalall_scr.png" />
</div>
</div>
<div class="caption_ti">
<a href="../res/evalall_scr_1.png" class="caption_zm" title="Zoom (nouvelle fenêtre)"><span>zoom</span></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Alternative Procedure</span>

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
<a href="../res/evalfrombuffer.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/evalfrombuffer_1.png" width="300" height="185" alt="evalfrombuffer_1.png" /></a>
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>It is also possible to use internal Lisp buffer commands to evaluate expressions :</p>
<ol>
<li><p>put the cursor at the end of the expression to evaluate – that is, after the last closing parenthesis –</p></li>
<li><p>type <code class="keyboard_tl">Ctrl</code> + <code class="keyboard_tl">x</code> +<code class="keyboard_tl">e</code>.</p></li>
</ol>
<p>The result will appear in the lower text area of the window.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Loading a Lisp File from the Listener</span>

</div>

<div class="txt">

Lisp files can be loaded without opening them in the Lisp editor, using
the `Lisp / Load File` command menu in the Lisp Listener.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>The Lisp Listener</span>

</div>

<div class="linkUL">

  - [<span>The Listener</span>](LispListener.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Finding Definitions and Information</span>

<div class="part_co">

<div class="infobloc">

<div class="caption">

<div class="caption_co">

![finddefinition.png](../res/finddefinition.png)

</div>

</div>

<div class="txt">

Finding the definition of a given function or symbol may be useful when
programming. This is possible from the Lisp editor or the Listener.

In the editor window or in the Listener, put the cursor on a symbol and
use the `Lisp / Find Definition` menu or `Cmd` + `.` .

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>The Lisp Listener</span>

</div>

<div class="linkUL">

  - [<span>The Listener</span>](LispListener.md)

</div>

</div>

<div class="txt">

When available, the file or text buffer containing the recorded
definition for this symbol will open in a new editor window.

In case of multiple definitions – for instance, several
<span id="i3" class="defRef_ul"><span>meth<span id="i4" class="defRef_ul"><span></span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc1873)</sup>ods</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc1873)</sup>
with the same name – select an item in the list with a double click.

</div>

<div class="caption">

<div class="caption_co">

<div class="imgzFra" style="position: relative;">

![selectdefinition\_scr.png](../res/selectdefinition_scr.png)

</div>

</div>

<div class="caption_ti">

[<span>Zoom</span>](../res/selectdefinition_scr_1.png "Zoom (nouvelle fenêtre)")

</div>

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Arguments Information</span>

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
<p>At typing a space after a function name in a Lisp editor, the arguments of the function will appear at the bottom of the window.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/packandfunction.png" width="266" height="211" alt="packandfunction.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

Pay attention to the
<span id="i5" class="defRef_ul"><span>package</span></span><sup>[<span>\[</span>2<span>\]</span>](#kFootBsktc4035)</sup>
of the function (and type it before the function name if necessary) or
the function arguments will not be displayed (and the function itself
will probably not be found at evaluation).

</div>

</div>

</div>

</div>

</div>

</div>

</div>

<span class="hidden">Références : </span>

1.  
    
    <div id="kFootBsktc1873">
    
    <div class="footBskt_itti">
    
    Method
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    An elementary function or part of a generic function defining rules
    for its behaviour depending on a type of argument. Defining a
    generic function amounts to defining at least one method.
    
    For instance, the OM+ function is made of four methods : 1. number +
    list / 2. list + number / 3. number + number / 4. list + list
    
    </div>
    
    </div>
    
    </div>
    
    </div>

2.  
    
    <div id="kFootBsktc4035">
    
    <div class="footBskt_itti">
    
    Lisp Package
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    In Lisp, a package is a means to gather symbols, such as functions,
    variables or class names, within a same specific name space. You are
    always working in a "current" package, which can be changed with the
    command (in-package "my-package").
    
    In orde to use items defined in other packages (unless these item's
    names are "exported" to the current package), it is generally
    necessary to type the package name (or "nickname"), separated by
    " : :", before the usual name ( Ex. : om : :om+ ).
    
    The default package in OM is "OPENMUSIC" or "OM". The default
    package in Common Lisp is "CL-USER".
    
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
      - [<span>Lisp Programming</span>](Lisp.md)
          - [<span>Introduction to Lisp</span>](LispIntro.md)
          - <span id="i6" class="outLeftSel_yes"><span>The Lisp
            Editor</span></span>
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
précédente</span>](LispIntro.md "page précédente(Introduction to Lisp)")<span class="hidden">
| </span>[<span>page
suivante</span>](LispListener.md "page suivante(The Listener)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
