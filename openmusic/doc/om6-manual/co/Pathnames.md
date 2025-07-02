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
</span>[<span>Files</span>](Files.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Pathnames</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Files.md "page précédente(Files)")<span class="hidden">
| </span>[<span>page
suivante</span>](DefDirectories.md "page suivante(Default Directories)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Creating and Using Pathnames</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>Generalities about Pathnames</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

**Pathnames** designate files, folders and their location on a computer
system. They are mainly used by the programs to read and write
information stored on the hard disk.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Files Names</span>

</div>

<div class="txt">

**File names**, such as "diary.txt", are generally made of a **main
name** : "diary", and an **extension** preceeded by a **dot** : ".txt"

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Representations on Unix-Based Systems and Windows</span>

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
<li><p>On Unix-based systems, including MacOSX, the successive directories of the path that leads to the file are separated by a <strong>"/"</strong>.</p>
<p>This slash also represents the system root directory. For instance :</p>
<p>/Users/lucy-smith/documents/souvenirs/old-diary/diary.txt.</p></li>
</ul>
<ul>
<li><p>On Windows, the successive directories are separated by a "\" .</p>
<p>The root directory of the disk drive is represented by a <strong>character identifier</strong> followed by ":" . For instance :</p>
<p>C :\Users\lucy-smith\documents\souvenirs\diary\diary.txt</p></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/arbo.png" width="223" height="126" alt="arbo.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Absolute and Relative Pathnames</span>

</div>

<div class="txt">

Pathnames can be
<span id="i3" class="defRef_ul"><span>absolute</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc2689)</sup>
or
<span id="i4" class="defRef_ul"><span>relative</span></span><sup>[<span>\[</span>2<span>\]</span>](#kFootBsktc2690)</sup>.
An aboslute pathname describes a path from the root directory to an
object. A relative pathname describes a path from the directory wherein
the user is working. This directory is called the "current directory".
Upstream directories are called "parent directories".

</div>

<div class="txt">

In relative pathnames, the **current directory** is expressed with "." .
<span id="i5" class="defRef_ul"><span>Parent
directories</span></span><sup>[<span>\[</span>3<span>\]</span>](#kFootBsktc2691)</sup>
are expressed with "..".

</div>

<div class="caption">

<div class="caption_co">

![The current directory is "diary".](../res/arborescence.png)

</div>

<div class="caption_ti">

The current directory is "diary".

</div>

</div>

<div class="txt">

  - **./diary.txt** leads to a file named "diary" in the current
    directory.

  - **./photos/birthday.jpg** leads to a file that is located in a
    subdirectory of the current directory.

<!-- end list -->

  - **../movies** refers to another directory, located in the parent
    directory of the current directory.

  - **../../job** refers to a directory, located in another directory,
    two levels above the current directory.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Manipulating Pathnames in Common Lisp</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Independent Use of Pathnames</span>

</div>

<div class="txt">

In **Common Lisp**, pathnames can be handled independently from any
operating system.

A pathname is represented with **"\#P"** followed by the pathname, as
formulated in UNIX representations with a
<span id="i6" class="defRef_ul"><span>string</span></span><sup>[<span>\[</span>4<span>\]</span>](#kFootBsktc2637)</sup>.

For instance **** :
\#P"/Users/lucy-smith/documents/souvenirs/old-diary/diary.txt

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Constructing and Inspecting Pathnames with Common Lisp</span>

</div>

<div class="txt">

  - Pathnames can be constructed with the function make-pathname.
    
    A pathname can be described with several components, such as : a
    <span id="i7" class="defRef_ul"><span>name</span></span><sup>[<span>\[</span>5<span>\]</span>](#kFootBsktc2694)</sup>,
    a
    <span id="i8" class="defRef_ul"><span>type</span></span><sup>[<span>\[</span>6<span>\]</span>](#kFootBsktc2695)</sup>,
    a
    <span id="i9" class="defRef_ul"><span>directory</span></span><sup>[<span>\[</span>7<span>\]</span>](#kFootBsktc2696)</sup>
    and so on. Pathname **components** such as names, types and
    directories are expressed with
    <span id="i10" class="defRef_ul"><span>strings</span></span><sup>[<span>\[</span>4<span>\]</span>](#kFootBsktc2637)</sup>,
    such as :name "my-file" or :type "txt"

<!-- end list -->

  - Pathnames can be inspected with the functions pathname-name ,
    pathname-directory , pathname-type , etc.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Converting Strings / Pathnames</span>

</div>

<div class="txt">

The namestring and pathname functions alllow to convert pathnames into
simple strings and vice-versa.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Representing Directories in Lisp</span>

</div>

<div class="txt">

To represent the directories wherein a file is located, write a list of
directory names preceeded by the :abolute or :relative symbols. For
instance, the pathname from a root directory to a file named
"my-file" is created as follows:

(make-pathname  :directory '( :absolute "Users" "my-name"
"directory1") :name "my-file" :type "txt")

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Lisp Documentation</span>

</div>

<div class="txt">

Find more information about pathnames in Common Lisp
[<span>here</span>](http:/www.cs.cmu.edu/Groups/AI/html/cltl/clm/node204.md "http://www.cs.cmu.edu/Groups/AI/html/cltl/clm/node204.html (nouvelle fenêtre)").

</div>

</div>

</div>

</div>

<div class="part">

## <span>Pathnames in OM</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Creating a Pathname</span>

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
<p>The Lisp pathname functions can be used in OM as any other Lisp functions. The <strong>om-make-pathname</strong> is an additional facility provided by OM to build pathnames.</p>
<p>The keywords arguments of this function allow to specify a file name, extension, and a directory separately.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/make-pathname.png" width="203" height="148" alt="make-pathname.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Using Strings in OM</span>

</div>

<div class="txt">

In OM, many functions requiring pathnames as inputs also accept a string
representation.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>The File Chooser Box</span>

</div>

<div class="txt">

The **file-chooser** box allows to select a file or folder via a pop up
window.

</div>

<div class="caption">

<div class="caption_co">

![popup.png](../res/popup.png)

</div>

</div>

<div class="txt">

It has three [<span>optional arguments</span>](AdditionalInputs.md),
which offer several options to define the type of object and its
location :

  - <span>file / folder: </span>
  - <span>existing / new</span>
  - <span>home / desktop / other</span>

The output of the file chooser is the selected file or directory
pathname, or nil.

</div>

</div>

<div class="bloc warning">

<div class="bloc_ti warning_ti">

<span>Locking the File-Chooser</span>

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
<p><strong>Note </strong>: <a href="LockMode.md"><span>lock the box</span></a> to keep the selected pathname in the box. Otherwise, the file chooser dialog window will pop up at each evaluation.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/file-chooser.png" width="235" height="110" alt="file-chooser.png" />
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

1.  
    
    <div id="kFootBsktc2689">
    
    <div class="footBskt_itti">
    
    Absoluate Pathname
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    An absolute pathname, also referred to as an absolute path or a full
    path, is the location of a filesystem object – file, directory or
    link– relative to the **root directory**.
    
    </div>
    
    </div>
    
    </div>
    
    </div>

2.  
    
    <div id="kFootBsktc2690">
    
    <div class="footBskt_itti">
    
    Relative Pathname
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    A relative pathname tells the location of a filesystem object
    relative to the directory **in which the user is currently
    working**.
    
    </div>
    
    </div>
    
    </div>
    
    </div>

3.  
    
    <div id="kFootBsktc2691">
    
    <div class="footBskt_itti">
    
    Parent Directory
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    A parent directory is the directory in which a given directory is
    located. In an absolute path, the parent directoy is the predecessor
    of the current directory.
    
    </div>
    
    </div>
    
    </div>
    
    </div>

4.  
    
    <div id="kFootBsktc2637">
    
    <div class="footBskt_itti">
    
    String
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    A characters chain between two inverted commas.
    
    </div>
    
    </div>
    
    </div>
    
    </div>

5.  
    
    <div id="kFootBsktc2694">
    
    <div class="footBskt_itti">
    
    Name
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    The name of a group of files that can be thought of as the "same''
    file
    
    </div>
    
    </div>
    
    </div>
    
    </div>

6.  
    
    <div id="kFootBsktc2695">
    
    <div class="footBskt_itti">
    
    </div>
    
    <div class="footBskt_itco">
    
    </div>
    
    </div>

7.  
    
    <div id="kFootBsktc2696">
    
    <div class="footBskt_itti">
    
    Directory
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    Corresponds to the "directory'' concept in many host file systems:
    the name of a group of related files (typically those belonging to a
    single user or project).
    
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
          - [<span>Iterations: OMLoop</span>](OMLoop.md)
          - [<span>Instances</span>](Instances.md)
          - [<span>Interface Boxes</span>](InterfaceBoxes.md)
          - [<span>Files</span>](Files.md)
              - <span id="i11" class="outLeftSel_yes"><span>Pathnames</span></span>
              - [<span>Default Directories</span>](DefDirectories.md)
              - [<span>File-Box</span>](File-Box.md)
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
précédente</span>](Files.md "page précédente(Files)")<span class="hidden">
| </span>[<span>page
suivante</span>](DefDirectories.md "page suivante(Default Directories)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
