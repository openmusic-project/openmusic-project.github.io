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
</span><span class="stkSel_yes"><span>Errors and
Problems</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](LispForOM.md "page précédente(Writing Code for OM)")<span class="hidden">
| </span>[<span>page
suivante</span>](QuickStart-Chapters.md "page suivante(OpenMusic QuickStart)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Errors and Problems</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>Warnings</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Listener Messages</span>

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
<img src="../res/error1.png" width="296" height="281" alt="error1.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Minor programming errors are usually displayed in the Listener window as well as plain messages. This allows OM to keep on running smoothly and the user to understand the origins of the error.</p>
<p>Such error messages can occur when evaluating a box, for instance.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Handle Error Messages Option</span>

</div>

<div class="txt">

More "serious" errors can interrupt the evaluation of a patch. If the
`handle error messages` option was selected in the `Preferences` pane,
an error window opens.

</div>

<div class="caption">

<div class="caption_co">

![error2.png](../res/error2.png)

</div>

</div>

<div class="txt">

If not, the error will propagate and a **Terminal** window will open.

</div>

</div>

</div>

</div>

<div class="part">

## <span>The Lisp Terminal</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

In the case of more important, unpredicted errors, or if the `handle
error messages` option wasn't selected, a system Terminal opens and
reprorts the error.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Terminal Window Commands</span>

</div>

<div class="txt">

This terminal window is an underlying Lisp debugger, which can be
exited, or used for understanding and possibly solve the cause of an
error.

Here are a few useful commands to enter in this terminal :

  - <span>To get back to the **preceding step** of the error : enter
    ":top" and validate</span>
  - <span>To display the **simple backtrace** of an error : enter ":b"
    and validate.</span>
  - <span>To display the **detailed backtrace** of an error : enter
    ":bb" and validate.</span>

The function call stack in question can be copied and submitted in a bug
report to the IRCAM development or support teams.

  - <span>To use one of the **options offered** by the Terminal, type
    ":c" with the option's reference, e.g. : ":c 1", ":c 2", etc. and
    validate.</span>
  - <span>To display **other possible commands** , enter ":help" and
    validate.</span>

</div>

<div class="caption">

<div class="caption_co">

![An error in the Mac OS system Terminal](../res/error3.png)

</div>

<div class="caption_ti">

An error in the Mac OS system Terminal

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Abort Command</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

If a program execution is stuck or lasts too long, go to the OM Listener
and type `Cmd` + `SHIFT` + `a` to abort.

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
      - <span id="i3" class="outLeftSel_yes"><span>Errors and
        Problems</span></span>
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
précédente</span>](LispForOM.md "page précédente(Writing Code for OM)")<span class="hidden">
| </span>[<span>page
suivante</span>](QuickStart-Chapters.md "page suivante(OpenMusic QuickStart)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
