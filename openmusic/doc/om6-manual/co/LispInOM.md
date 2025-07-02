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
</span><span class="stkSel_yes"><span>Lisp Code in
OM</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](LispListener.md "page précédente(The Listener)")<span class="hidden">
| </span>[<span>page
suivante</span>](LispFunctions.md "page suivante(Lisp Function Boxes)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Lisp Code in OM</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>Use of User-Defined Lisp Functions in OM</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Example</span>

</div>

<div class="caption">

<div class="caption_co">

![basicedition.png](../res/basicedition.png)

</div>

</div>

<div class="txt">

All functions and classes defined and evaluated in the Lisp editor can
be used in OM patches immediately.

1.  Evaluate the function or class in the Lisp editor.

2.  `Cmd` click in the patch and type the name of the function or class.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Voir aussi</span>

</div>

<div class="linkUL">

  - [<span>Writing/Evaluating Lisp Code : The Lisp
    Editor</span>](LispEditor.md)

</div>

</div>

</div>

<div class="bloc warning">

<div class="bloc_ti warning_ti">

<span>Package Name</span>

</div>

<div class="txt">

The default package of a function or class edited in the Lisp Editor is
the **Cl-user package**. In this case, its name must be preceeded by
"cl-user::".

To be able to type a name directly in the patch editor, add "(in-package
:om)" before the corresponding code in the lisp editor.

</div>

<div class="caption">

<div class="caption_co">

<div class="imgzFra" style="position: relative;">

![typefunction\_scr.png](../res/typefunction_scr.png)

</div>

</div>

<div class="caption_ti">

[<span>Zoom</span>](../res/typefunction_scr_1.png "Zoom (nouvelle fenêtre)")

</div>

</div>

</div>

<div class="bloc advice">

<div class="bloc_ti advice_ti">

<span>Reloading Patches</span>

</div>

<div class="txt">

User-defined functions or classes can appear as "dead boxes" if the
patch they belong to is saved and reloaded at another OM session. You
will then have to reload the function or class.

It is advised to create user libraries : your own Lisp classes and
functions will be preserved and available for use at any time.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Dead Boxes</span>

</div>

<div class="linkUL">

  - [<span>Missing References : Dead Boxes</span>](DeadBox.md)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>User Libraries in OM</span>

</div>

<div class="linkUL">

  - [<span>Extra Libraries</span>](UserLibraries.md)
  - [<span>Writing an OM Library</span>](LispUserLib.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Loading Lisp Code in OM</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

There exist several ways to load existing Lisp code in OM :

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
<li><p><strong>Open a Lisp file and evaluate it, or load it directly from the Listener.</strong> This applies to temporary experiments, since the code has to be loaded manually at each session.</p></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/LisLoad.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/LisLoad_1.png" width="300" height="257" alt="LisLoad_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Listener and Lisp Editor</span>

</div>

<div class="linkUL">

  - [<span>The Listener</span>](LispListener.md)
  - [<span>Writing/Evaluating Lisp Code : The Lisp
    Editor</span>](LispEditor.md)

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
<td><div class="caption">
<div class="caption_co">
<a href="../res/Userfolder.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/Userfolder_1.png" width="300" height="229" alt="Userfolder_1.png" /></a>
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<ul>
<li><p><strong>Put the Lisp file in the <code class="filePath_tl">Workspace / User</code> directory.</strong> The file will be loaded with the workspace : it will always be available for use in the patches of the same workspace.</p></li>
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
<ul>
<li><p><strong>Put the Lisp file in the <code class="filePath_tl">OM / Patches</code> directory.</strong> The file will be loaded at the OM start up. Bug fixes and global environment changes are generally provided and applied to the OM application this way.</p></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/patchesfolder.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/patchesfolder_1.png" width="300" height="220" alt="patchesfolder_1.png" /></a>
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
<a href="../res/LibFolder.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/LibFolder_1.png" width="300" height="242" alt="LibFolder_1.png" /></a>
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<ul>
<li><p><strong>Use a user library.</strong> The most reliable way of loading Lisp code, although it requires extra formatting work for the library.</p></li>
</ul>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="caption">

<div class="caption_co">

![Library.png](../res/Library.png)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Create Your Own Library</span>

</div>

<div class="linkUL">

  - [<span>Writing an OM Library</span>](LispUserLib.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Finding OM Functions Sources</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

To access the source code of a component within a patch, select it and
press `e`. It will be displayed when available.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Access Conditions</span>

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
<a href="../res/find-def.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/find-def_1.png" width="300" height="212" alt="find-def_1.png" /></a>
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The source code is accessible if the function or class is</p>
<ul>
<li><span> defined in OM : the Lisp sources of the OM environment are provided with the application</span></li>
<li><span>defined in an open text buffer or a loaded Lisp file.</span></li>
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
<p>The source code is not accessible if</p>
<ul>
<li><span>the function or class is defined in a buffer or class which is not accessible anymore : it can have been removed or moved since its was originally evaluated or compiled</span></li>
<li><span>the function or class is part of the inbuilt Lisp environment : in this case, the sources are not accessible.</span></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/lispfunction.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/lispfunction_1.png" width="300" height="250" alt="lispfunction_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc warning">

<div class="bloc_ti warning_ti">

<span>Redefining Sources : Find Source Utility</span>

</div>

<div class="txt">

The sources of existing OM functions can be found, edited and
reevaluated with the **Find Source** utility. Nevertheless, it is
advised to copy, rename and modify these functions. This allows to avoid
disorders or conflicts, and to track and reload changes at the next
session.

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
          - [<span>The Listener</span>](LispListener.md)
          - <span id="i3" class="outLeftSel_yes"><span>Lisp Code in
            OM</span></span>
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
précédente</span>](LispListener.md "page précédente(The Listener)")<span class="hidden">
| </span>[<span>page
suivante</span>](LispFunctions.md "page suivante(Lisp Function Boxes)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
