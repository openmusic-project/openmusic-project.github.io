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
</span>[<span>The OM
Environment</span>](Environment.md)<span class="stkSep"> \>
</span>[<span>Workspace</span>](Workspace.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>The Workspace
Window</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Workspace.md "page précédente(Workspace)")<span class="hidden">
| </span>[<span>page
suivante</span>](WS-Presentation.md "page suivante(Presentation Options)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>The Workspace Window</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

Visual programming in OM generally starts browsing the workspace window,
in or der to create and/or select programming items.

</div>

</div>

<div class="part">

## <span>Adding and Deleting Components in the Workspace Window</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Adding Components</span>

</div>

<div class="txt">

Different type of program representations can be used in OM :

  - <span>
    <span id="i2" class="defRef_ul"><span>patches</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc1865)</sup>
    <span class="iconButton_tim">![patch\_icon.png](../res/patch_icon.png)</span>
    (standard visual programs)</span>
  - <span>
    <span id="i3" class="defRef_ul"><span>maquettes</span></span><sup>[<span>\[</span>2<span>\]</span>](#kFootBsktc1868)</sup>
    <span class="iconButton_tim">![maqutte\_icon.png](../res/maqutte_icon.png)</span>
    ("temporal" visual programs)</span>
  - <span>lisp
    functions<span class="iconButton_tim">![lispfunction\_icon.png](../res/lispfunction_icon.png)</span>
    (textual programs) </span>

They can be added in the workspace as well as in the storage folders of
the workspace.

</div>

<div class="caption">

<div class="caption_co">

![new.png](../res/new.png)

</div>

</div>

<div class="txt">

To add an item in the workspace or in an open folder, use the `File` or
contextual menu – `Ctrl` / right click :

  - <span> `New Patch – Maquette - Lisp Function – Folder` </span>

You can also use the following shortcuts :

  - <span> Patch : `Cmd` +1</span>
  - <span>Maquette : Cmd +2</span>
  - <span>Folder : Cmd + n</span>

</div>

</div>

<div class="infobloc">

<div class="linkSet">

<div class="linkSet_ti">

<span>Get Into Visual Programming</span>

</div>

<div class="linkUL">

  - [<span>Introduction to Patch
    Programming</span>](ProgrammingIntro.md)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Maquettes</span>

</div>

<div class="linkUL">

  - [<span>Maquettes</span>](Maquettes.md)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Using Lisp Functions</span>

</div>

<div class="linkUL">

  - [<span>Lisp Programming</span>](Lisp.md)

</div>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Reminder</span>

</div>

<div class="txt">

The workspace window displays the items stored in the `Elements` sub
folder of the [<span> `Workspace` </span>](Workspace\(s\).md) folder.

</div>

</div>

<div class="bloc warning">

<div class="bloc_ti warning_ti">

<span>Clearing or Deleting Items</span>

</div>

<div class="txt">

To delete an item, select it and choose :

  - <span>clear : `Edit / Clear` </span>
  - <span> cut : `Edit / Cut` or `Cmd` + `x` </span>

Clearing an item deletes it forever. It may be safer to choose the `Cut`
command, which possibly allows to paste the item afterward.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Basic Procedures</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Most operations on files and folders can be executed with the standard
contextual menus and shortcuts.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Opening Folders and Programs</span>

</div>

<div class="txt">

  - <span>Double click on an item, or `Ctrl` / right click and choose
    `open`.</span>
  - <span>In **List mode** , on may also click on the adjacent
    triangle of a folder
    –<span class="iconButton_tim">![triangle-closed\_icon.png](../res/triangle-closed_icon.png)</span>
    <span class="iconButton_tim">![triangle-open\_icon.png](../res/triangle-open_icon.png)</span>
    – to open it.</span>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Moving Items from a Folder to Another</span>

</div>

<div class="txt">

To move an items to another folder :

  - drag and drop the item.

  - cut and paste the item in an open folder :
    
      - <span>choose `Edit / Cut / Paste` ,</span>
      - <span> press `Cmd` + `x` / `Cmd` + `v`.</span>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Copying Components</span>

</div>

<div class="txt">

  - <span>Select `Edit / Copy / Paste` or press `Cmd` +`c`  / `Cmd`+ `v`
    .</span>
  - <span> On **Mac** : `Alt` drag and drop the item. On **Windows** : 
    `Cmd` drag and drop the item.</span>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Duplicating Components</span>

</div>

<div class="txt">

To duplicate an item :

  - <span>select `Edit / Duplicate / Paste`</span>
  - <span> press `Cmd` + `d`.</span>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Renaming Files and Folders</span>

</div>

<div class="txt">

Double click on the name or press `Enter` to edit it
<span class="iconButton_tim">![rename\_icon.png](../res/rename_icon.png)</span>
.

Click in the window or press `Enter` again to validate.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Saving Files, Folders and Workspaces</span>

</div>

<div class="txt">

To save an item and its content,

  - <span> select `File/ Save` </span>
  - <span>press `Cmd` + `s`. </span>

When saving a workspace, the dialogue window that opens allows to apply
this choice to the whole content of the folder or workspace at once, or
to selected items within the workspace.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>No "Save As" Option</span>

</div>

<div class="txt">

The "Save as" option is not available for any of the components of a
workspace or a workspace itself.

</div>

</div>

</div>

</div>

</div>

</div>

</div>

<span class="hidden">Références : </span>

1.  
    
    <div id="kFootBsktc1865">
    
    <div class="footBskt_itti">
    
    Patch
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    <span class="iconButton_tim">![patch\_icon.png](../res/patch_icon.png)</span>
    
    A programming unit where objects and functions – boxes – are
    interconnected to build a musical algorithm, that is, a sequence of
    instructions. A patch can also be embedded as a box within another
    patch.
    
    </div>
    
    </div>
    
    </div>
    
    </div>

2.  
    
    <div id="kFootBsktc1868">
    
    <div class="footBskt_itti">
    
    Maquette
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    <span class="iconButton_tim">![maqutte\_icon.png](../res/maqutte_icon.png)</span>
    
    A hybrid of visual program and sequencer, a programming unit
    provided with a time dimension, where musical material is organized
    in a time oriented structure.
    
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
          - [<span>Environment Windows</span>](MainWindows.md)
          - [<span>Preferences</span>](Preferences.md)
          - [<span>Workspace</span>](Workspace.md)
              - <span id="i4" class="outLeftSel_yes"><span>The Workspace
                Window</span></span>
              - [<span>Presentation Options</span>](WS-Presentation.md)
              - [<span>Import / Export</span>](WS-ImportExport.md)
          - [<span>Library</span>](Library.md)
          - [<span>Tutorials</span>](Tutorials.md)
          - [<span>Resources</span>](resources.md)
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
précédente</span>](Workspace.md "page précédente(Workspace)")<span class="hidden">
| </span>[<span>page
suivante</span>](WS-Presentation.md "page suivante(Presentation Options)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
