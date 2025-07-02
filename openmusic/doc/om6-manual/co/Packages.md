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
</span>[<span>Library</span>](Library.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Packages</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Library.md "page précédente(Library)")<span class="hidden">
| </span>[<span>page
suivante</span>](UserLibraries.md "page suivante(Extra Libraries)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Packages</span>

<div class="headCo_co">

<div class="secOutFra">

<div class="secOutTi">

[<span>Sommaire </span>](#)

</div>

<div class="secOutUi">

1.  [Packages of the Library Window](#mN1d)
2.  [Packages Content](#mN18d)
3.  [Using Classes and Functions from the Libary](#mN2a8)
4.  [Creating / Editing the Library Items](#mN315)

</div>

</div>

<div>

<div class="def">

<div id="i4" class="dk_concept_def">

<div class="dk_definition_notion">

<div class="dk_definition_notion_ti">

<span>Package</span>

</div>

<div class="dk_definitionMeta_def">

A package represents a category of programming tools that encloses
related functions and classes. It can be organized in sub packages.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Packages of the Library Window</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Each package is represented by a small suitcase.

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
<p><span class="iconButton_tim"><img src="../res/blue_icon.png" class="sfile_icon-png_icon-gif_icon" width="17" height="17" alt="blue_icon.png" /></span> The OM Packages are the most numerous. They contain <span id="i5" class="defRef_ul"><span>classes</span></span><sup><a href="#kFootBsktc1871"><span>[</span>1<span>]</span></a></sup> and <span id="i6" class="defRef_ul"><span>functions</span></span><sup><a href="#kFootBsktc1872"><span>[</span>2<span>]</span></a></sup> predefined in OM. OM Packages are defined thematically.</p>
<p>For instance, the Score package contains classes that are literally dedicated to the score domain, such as chords, notes, polyphonies, and functions that can perform operations upon these classes.</p>
<p>These packages and their content are "protected" and cannot be modified by the user.</p>
<p><span class="iconButton_tim"><img src="../res/red_icon.png" class="sfile_icon-png_icon-gif_icon" width="17" height="17" alt="red_icon.png" /></span> The User Package can receive user-defined classes and functions, which can be dispatched in dedicated sub packages. These classes and functions can be modified.</p>
<p><span class="iconButton_tim"><img src="../res/yellow_icon.png" class="sfile_icon-png_icon-gif_icon" width="17" height="17" alt="yellow_icon.png" /></span>  The User Libraries package encloses a set of additional libraries that can be added or loaded dynamically.</p>
<p><span class="iconButton_tim"><img src="../res/green_icon.png" class="sfile_icon-png_icon-gif_icon" width="16" height="18" alt="green_icon.png" /></span> The Globals package is a special folder that contains user-defined <span id="i7" class="defRef_ul"><span>global variables</span></span><sup><a href="#kFootBsktc1805"><span>[</span>3<span>]</span></a></sup>. It cannot contain sub packages.</p>
<p>If a package is supposed to contain sub packages, it features an adjacent triangle that allows to open a package on <strong>List mode</strong> . When this triangle is clicked, the package unfolds and displays its inner sub packages – see below.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/packages1.png" width="151" height="300" alt="packages1.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About Global Variables</span>

</div>

<div class="linkUL">

  - [<span>Global Variables</span>](GlobalVariables.md)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About User Libraries</span>

</div>

<div class="linkUL">

  - [<span>Extra Libraries</span>](UserLibraries.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Getting Information</span>

</div>

<div class="txt">

To get information about a select package, class or function of the
library, use the `Info` window :

  - <span> `Ctrl` / right click on an item and choose ` Get Info
     `</span>
  - <span>select `File / Get Info`</span>
  - <span> press `Cmd` + `i` .</span>

Information related to the items of the User package can also be edited.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Packages Content</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

A package gives access to both functions and classes of a common
"theme", or category of tools. Packages contents can be displayed in
**'Package' mode** or ' **Class Tree' mode** .

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
<p>The default presentation allows to get a global view of a package whole organization in sub packages.</p>
<p>Classes and functions contained in the sub packages cannot be accessed, though.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/subpackages.png" width="170" height="169" alt="Displaying packages in the Library window. We can see sub packages, but classes and functions cannot be accessed." />
</div>
<div class="caption_ti">
Displaying packages in the Library window. We can see sub packages, but classes and functions cannot be accessed.
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Opening Packages in Package Mode</span>

</div>

<div class="txt">

The Package mode allows to access the set of tools contained in a
package as a whole : sub packages cannot be visualized.

  - <span> `Ctrl` / right click on the suitcase and choose `Open
    Package`.</span>
  - <span>Double click on the **lower part** of the suitcase.</span>

The window extends to display two side panels, respectively containing
the package's functions and classes.

Their content is refreshed at the selection of another package.

</div>

<div class="caption">

<div class="caption_co">

![packaudio1.png](../res/packaudio1.png)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Opening Packages in Class Tree Mode</span>

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
<p>A " <strong>class tree</strong> " shows the inheritance between the classes of a common package.</p>
<ul>
<li><span> <code class="keyboard_tl">Ctrl</code> / right click on the suitcase and choose <code class="menuPath_tl">Open Class Tree</code></span></li>
<li><span>click on the <strong>upper part</strong> of the suitcase. </span></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/classtree2.png" width="255" height="94" alt="classtree2.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

The class tree is displayed in a new window. Class trees of the User sub
packages can be created and modified graphically.

</div>

<div class="caption">

<div class="caption_co">

![classtree1.png](../res/classtree1.png)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>More Information about Class Trees and User Defined
Material</span>

</div>

<div class="linkUL">

  - [<span>Object Oriented Programming</span>](OOP.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Using Classes and Functions from the Libary</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Dropping Items in Patches</span>

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
<a href="../res/addnotefromlib.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/addnotefromlib_1.png" width="300" height="168" alt="addnotefromlib_1.png" /></a>
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Tools can be dropped in patches from the library window.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Using the OM menus</span>

</div>

<div class="txt">

Note that the OM Functions and Classes menus are organized following the
Library packages structure, and can also be used to select items from
the different OM packages.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Adding boxes into a patch</span>

</div>

<div class="linkUL">

  - [<span>Adding Boxes Into a Patch</span>](AddingBoxes.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Creating / Editing the Library Items</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

New
<span id="i8" class="defRef_ul"><span>Classes</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc1871)</sup>
and <span id="i9" class="defRef_ul"><span>Generic
Functions</span></span><sup>[<span>\[</span>4<span>\]</span>](#kFootBsktc1960)</sup>
can be created in the
<span class="iconButton_tim">![red\_icon.png](../res/red_icon.png)</span>
user package or its sub-packages.

Additional methods can also be added to the existing functions of the OM
packages.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Creating/Editing Classes and Functions</span>

</div>

<div class="linkUL">

  - [<span>Object Oriented Programming</span>](OOP.md)

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

<span class="hidden">Références : </span>

1.  
    
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

2.  
    
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

3.  
    
    <div id="kFootBsktc1805">
    
    <div class="footBskt_itti">
    
    Global variable
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    An instance of OM object that has been saved in order to be used in
    other programs. Global variables are visible from the `Library`
    window and stored as .omi files in the `Globals` folder of the
    workspace.
    
    </div>
    
    </div>
    
    </div>
    
    </div>

4.  
    
    <div id="kFootBsktc1960">
    
    <div class="footBskt_itti">
    
    Generic Function
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    In object oriented programming, a generic function is a collection
    of methods – elementary specialized functions – with the same name
    and argument structure, but with arguments typed differently.
    
    See also : Method
    
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
          - [<span>Library</span>](Library.md)
              - <span id="i10" class="outLeftSel_yes"><span>Packages</span></span>
              - [<span>Extra Libraries</span>](UserLibraries.md)
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
précédente</span>](Library.md "page précédente(Library)")<span class="hidden">
| </span>[<span>page
suivante</span>](UserLibraries.md "page suivante(Extra Libraries)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
