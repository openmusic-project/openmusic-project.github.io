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
</span>[<span>Basic Tools</span>](BasicObjects.md)<span class="stkSep">
\> </span>[<span>Picture</span>](Picture.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Picture Box</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Picture.md "page précédente(Picture)")<span class="hidden">
| </span>[<span>page
suivante</span>](PictureEditor.md "page suivante(Picture Editor)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Picture Box</span>

<div class="headCo_co">

<div class="secOutFra">

<div class="secOutTi">

[<span>Sommaire </span>](#)

</div>

<div class="secOutUi">

1.  [Initializing the Picture Box](#xdN41)
2.  [Picture Programming](#xdN11f)
3.  [Graphics](#xdN227)
4.  [Create Patch Background Pictures](#xdN2ad)
5.  [Saving / Exporting Pictures](#xdN368)

</div>

</div>

<div>

<div class="infobloc">

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
<img src="../res/picture-box.png" width="139" height="94" alt="picture-box.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The picture class can be found in the packahges/menus <code class="menuPath_tl">Basic Tools/ Picture</code>.</p>
<p>The box has three inputs/outputs :</p>
<ul>
<li><span>self : the picture object</span></li>
<li><span>background : the main background picture (pixel array)</span></li>
<li><span>graphics : a list of vector graphics</span></li>
</ul>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="part">

## <span>Initializing the Picture Box</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

If a picture box is evaluated (and [<span> unlocked
</span>](LockMode.md)) a picture chooser window opens, so that the
picture box can be initialized.

To select the picture, follow the procedure described in the
[<span>Resources</span>](resources.md) section :

1.  Choose a picture in one of the **Resources** frames.
    
    Pictures can possibly be added or deleted via the `+` and `-`
    buttons of the **User Resources** frame.

2.  Choose `Cancel` to cancel your choice or `OK` to validate your
    choice.

</div>

<div class="caption">

<div class="caption_co">

![mozart.png](../res/mozart.png)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>The Picture Chooser Dialog Window</span>

</div>

<div class="linkUL">

  - [<span>Resources</span>](resources.md)

</div>

</div>

<div class="txt">

[<span>Lock</span>](LockMode.md) the box in order to preserve the chosen
picture and prevent rinitialization at the next evaluation.

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
<p>Select the box and press <code class="keyboard_tl">m</code> to display the current picture and additional graphics.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/patchmozart.png" width="277" height="224" alt="patchmozart.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc complement">

<div class="txt">

The picture can also be loaded and changed from the Picture Editor.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>More about the Picture Editor</span>

</div>

<div class="linkUL">

  - [<span>Picture Editor</span>](PictureEditor.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Picture Programming</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The picture can also be initialized from a visual program using the
background input.

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
<p><strong>Connect :</strong></p>
<ul>
<li><span>A pathname to initialize the picture with any picture file on the disk.</span></li>
</ul>
<p>Note : the picture will then be dependent on the corresponding file (only the file pathname is "stored" in the picture object). Use the previous precdeure in order to "internalize" the picture into your current OM workspace.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/path-pict.png" width="120" height="184" alt="path-pict.png" />
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
<ul>
<li><span>A pixel array (list of list of gray level value - 0.1 =&gt; 1.0 - or RGBA lists for each pixel).</span></li>
</ul>
<p>The list must be of dimension h (for height - number of lines) and each sublist must be of the same size (w - width or number of columns / pixel in each line).</p>
<p>Each item in this list of lists is the color value of a pixel. It can be expressed as a number between 0.0 and 1.0 for a gray-level picture, or as a list (R G B A) for the level of red, green and blue. "A" stands for "alpha" and represents the transparency of the pixel.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/array-pict.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/array-pict_1.png" width="251" height="300" alt="array-pict_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Getting the RGBA Pixel Array of a Picture</span>

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
<p>Use <strong>get-RGB</strong> to get the RGB array from a picture box, be it generated from such an array or from a picture file. This data can be modified and used to initialize new pictures.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/pict-prog.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/pict-prog_1.png" width="77" height="300" alt="pict-prog_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc warning">

<div class="bloc_ti warning_ti">

<span>Manipulating Pixel Arrays</span>

</div>

<div class="txt">

The large amount of data in standard sized picture may lead to long
processing time of the RGB array.

Pictures generated from a pixel array also have this array stored in the
patch which may lead to long saving time and large file sizes. Consider
reinitializing the picture box contents before saving (`SHIFT` + `I`)
when the content has not necessarily to be saved or can be regenerated
at the next session.

</div>

</div>

<div class="bloc tip">

<div class="bloc_ti tip_ti">

<span>Picture Size</span>

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
<p>Use <strong>picture-size</strong> to get the size (width height) of a picture in the picture object.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/pict-size.png" width="155" height="229" alt="pict-size.png" />
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

## <span>Graphics</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The third input of the picture box ( graphics ) is a list of vectorial
graphics displayed on top of the picture.

There exist several types of such graphics : lines, arrrows rectangles,
circles, text, etc.

They can be created in an OM patch as instances of the
**graphic-object** class, or (more easily) from the picture editor. They
can also be connected and transferred from one picture box to another.

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
<p>The graphic-object box contains information about a graphics to include in the figure (shape, color, style, size, etc.)</p>
<p>The points depend on the shape (here, for a circle, they represent the center and dimension). They are always given as values between 0.0 and 1.0, which are scaled depending on the real picture size.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/graphic-object.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/graphic-object_1.png" width="300" height="233" alt="graphic-object_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Editing Graphics in the Picture Editor</span>

</div>

<div class="linkUL">

  - [<span>Picture Editor</span>](PictureEditor.md)

</div>

</div>

</div>

<div class="bloc note">

<div class="txt">

Note that a **picture** object can contain only graphics and no
background.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Create Patch Background Pictures</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

To turn a picture box into the background picture of a patch  `Ctrl` /
right click on the picture box and choose `Set as Background Picture` in
the contextual menu.

The background picture fits the current size of the box.

</div>

<div class="caption">

<div class="caption_co">

![pict-to-bg.png](../res/pict-to-bg.png)

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>More about Patch Background Pictures</span>

</div>

<div class="linkUL">

  - [<span>Background Pictures</span>](Pictures.md)

</div>

</div>

</div>

<div class="bloc tip">

<div class="bloc_ti tip_ti">

<span>Graphics and Backgrounfd Pictures</span>

</div>

<div class="txt">

Using the graphics of a picture box as a background picture is very
convenient to document or augment your patches with additional
information – arrows, rectangles, etc.

</div>

<div class="caption">

<div class="caption_co">

![box-graphics.png](../res/box-graphics.png)

</div>

</div>

</div>

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
<p>Conversely, in order to turn a patch background pictures into a picture box :</p>
<ol>
<li><p>Press <code class="keyboard_tl">y</code> to select a background picture. If several background pictures are located in a patch, press <code class="keyboard_tl">y</code> successively to select the desired box.</p></li>
<li><p><code class="keyboard_tl">Ctrl</code> / right click on it and choose <code class="menuPath_tl">Make Box</code> in the contextual menu.</p></li>
</ol>
<p>This is a convenient way to modify and resize a picture.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/mkebox.png" width="172" height="86" alt="mkebox.png" />
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

## <span>Saving / Exporting Pictures</span>

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
<p>The <strong>SAVE-PICTURE</strong> function allows to export the picture object including its vector graphics as a picture file.</p>
<p>Vector graphics, therefore, are not vectorial anymore and are included in the pixel array of teh exported picture.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/save-pict.png" width="298" height="300" alt="save-pict.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc complement">

<div class="txt">

The `File / Save Picture` menu in the picture editor also allows to
export the current picture.

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
          - [<span>Curves and Functions</span>](CurvesAndFunctions.md)
          - [<span>Array</span>](ClassArray.md)
          - [<span>TextFile</span>](textfile.md)
          - [<span>Picture</span>](Picture.md)
              - <span id="i5" class="outLeftSel_yes"><span>Picture
                Box</span></span>
              - [<span>Picture Editor</span>](PictureEditor.md)
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
précédente</span>](Picture.md "page précédente(Picture)")<span class="hidden">
| </span>[<span>page
suivante</span>](PictureEditor.md "page suivante(Picture Editor)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
