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
</span><span class="stkSel_yes"><span>Adding Boxes Into a
Patch</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](ProgrammingIntro.md "page précédente(Patch Introduction)")<span class="hidden">
| </span>[<span>page
suivante</span>](ElementaryManips.md "page suivante(Elementary Manipulations)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Adding Boxes Into a Patch</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

There are four ways to add a box in a patch editor :

  - <span>via the main menu</span>
  - <span>via the contextual menu</span>
  - <span> typing the box's name directly in the patch editor</span>
  - <span> via the Library window. </span>

</div>

</div>

<div class="part">

## <span>Menus</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

This procedure is convenient if you don't know the exact name of the
class or function you need.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Main menu</span>

</div>

<div class="caption">

<div class="caption_co">

![pickfun1.png](../res/pickfun1.png)

</div>

</div>

<div class="txt">

Note that
<span id="i3" class="defRef_ul"><span>functions</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc1872)</sup>
and
<span id="i4" class="defRef_ul"><span>classes</span></span><sup>[<span>\[</span>2<span>\]</span>](#kFootBsktc1871)</sup>
are accessible via two distinct menus. `Classes` and `Functions` menus
give access to the classes and functions of common packages : this is
why they display the same names.

</div>

<div class="caption">

<div class="caption_co">

![addabox.png](../res/addabox.png)

</div>

</div>

<div class="txt">

Select a class or a function and click somewhere with
the<span class="iconButton_tim">![addcursor\_icon.png](../res/addcursor_icon.png)</span>
cursor in the patch editor to add the box there.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Patch Editor Contextual Menu</span>

</div>

<div class="caption">

<div class="caption_co">

![context.png](../res/context.png)

</div>

</div>

<div class="txt">

To add a box via the contextual menu :

1.  `Ctrl` / right click in the patch editor

2.  select `Functions` or `Classes`.

3.  choose a box in a menu item.

The box will appear in the editor automatically.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Library Window</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The
<span id="i5" class="defRef_ul"><span>packages</span></span><sup>[<span>\[</span>3<span>\]</span>](#kFootBsktc1884)</sup>
in the [<span>Library</span>](Library.md) window contain the available
OM classes and functions organized in thematic sub packages.

1.  Open the Library window :
    
      - <span>select `Windows / Library`</span>
      - <span>press `SHIFT` + `Cmd` + `p`.</span>

2.  Double click on the lower part of a package to open the classes and
    functions panes.

3.  Drag and drop the function or class icon in the patch editor.

</div>

<div class="caption">

<div class="caption_co">

![funpack.png](../res/funpack.png)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Full Information about Packages and the Library Window</span>

</div>

<div class="linkUL">

  - [<span>Packages</span>](Packages.md)
  - [<span>Library</span>](Library.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Adding a Box Directly in the Patch Editor</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The name of a class or function can always be keyed in a patch editor
directly.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Typing a Class or Function Name</span>

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
<ol>
<li><p><code class="keyboard_tl"> Cmd</code> / right click in the editor : an "undefined" box appears.</p></li>
<li><p>Type the relevant name in the text prompt and validate or click somewhere in the editor.</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/createnote.png" width="153" height="85" alt="createnote.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

Any OM or Lisp function can be created this way. This procedure may be
especially useful since some classes and functions are not accessible
via menus or packages. It implies being familiar with OM functions and
classes names.

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Tip</span>

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
<p>Default values can be directly assigned to a function when entering its name in the "undefined" box. For instance, typing "om+ 5 7" allows to assign 5 and 7 as default values to om+.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/argtip.png" width="182" height="51" alt="argtip.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Specifying a Package Name</span>

</div>

<div class="txt">

In Lisp, a package is also a means to gather symbols, such as function
names, class names, and so on, within a same specific name space. Some
functions or classes can be declared in other packages if they were not
designed for OM exclusive use, or if they come from specific libraries.
In this case, adding a box directly in the patch editor requires typing
the package name or nickname before its name.

1.  A package can be designated by a name or a nickname. For instance,
    the main OM package name is "openmusic", and has for nickname "om".
    This syntactically corresponds to :
    
    **"name-or-nickname-of-the-package::name-of-the-function"**.

2.  To identify the package hosting a given function or class, type the
    following expression in the  [<span>OM
    Listener</span>](MainWindows.md) :
    
    **(package-name (symbol-package 'class-or-function-name))**
    
    The Listener will display the corresponding package.

</div>

</div>

</div>

</div>

</div>

</div>

</div>

<span class="hidden">Références : </span>

1.  
    
    <div id="kFootBsktc1872">
    
    <div class="footBskt_itti">
    
    Function
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    A  portion of code within a larger program, which performs a
    specific task. Operates upon 0 or more parameters and returns a
    value.
    
    </div>
    
    </div>
    
    </div>
    
    </div>

2.  
    
    <div id="kFootBsktc1871">
    
    <div class="footBskt_itti">
    
    Class
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    A category of objects sharing common properties – characteristics
    and behaviour. A class specifies the internal structure and
    behaviour of an object. In OM, it is represented in a patch by a
    factory box that can produce an instance of a class.
    
    See also : Object, Instance
    
    </div>
    
    </div>
    
    </div>
    
    </div>

3.  
    
    <div id="kFootBsktc1884">
    
    <div class="footBskt_itti">
    
    Package
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    Contains functions or classes components belonging to a common
    category of programming items. Packages are provided at the
    installation of OM, but the can also be loaded dynamically or added
    by the user.
    
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
          - [<span>Patch Introduction</span>](ProgrammingIntro.md)
          - <span id="i6" class="outLeftSel_yes"><span>Adding Boxes Into
            a Patch</span></span>
          - [<span>Elementary Manipulations</span>](ElementaryManips.md)
          - [<span>Boxes</span>](Boxes.md)
          - [<span>Box Inputs</span>](BoxInputs.md)
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
précédente</span>](ProgrammingIntro.md "page précédente(Patch Introduction)")<span class="hidden">
| </span>[<span>page
suivante</span>](ElementaryManips.md "page suivante(Elementary Manipulations)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
