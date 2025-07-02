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
\> </span>[<span>TextFile</span>](textfile.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>TextFile
Edition</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](textfile.md "page précédente(TextFile)")<span class="hidden">
| </span>[<span>page
suivante</span>](TextFileEnvironment.md "page suivante(Outer Environment)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>TextFile Edition</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>The Text Editor</span>

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
<td><div class="caption">
<div class="caption_co">
<img src="../res/textedit.png" width="234" height="170" alt="textedit.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The textfile box has a basic editor where texts can be edited or modified.</p>
<p>Double click on the box to open the editor.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Inputs and Outputs</span>

<div class="part_co">

<div class="infobloc">

<div class="caption">

<div class="caption_co">

![TextFileBoxInputs.png](../res/TextFileBoxInputs.png)

</div>

</div>

<div class="txt">

The textfile object has four inputs and outputs :

1.  "self" : the object itself

2.  "exp-list" : set or get the content of the object from/as a list.

3.  "ed-mode" : edition mode, determines the way contents are added in
    the file.

4.  "eval-mode" : format to interprete and return the text to exp-list.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Exp-List : Contents</span>

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
<p>The " <strong>exp-list</strong> " input and output represent a textual content. The "exp-list" input accepts :</p>
<ul>
<li><span>single items – strings, numbers, etc.</span></li>
<li><span> lists, whose different items represent successive lines in the textfile .</span></li>
</ul>
<p>It allows to set or read the contents of the textfile box within visual programs. The implementation and interpretation of the content depends on the "eval-mode" and "ed-mode" inputs settings.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/textfileinput.png" width="207" height="217" alt="Inputting contents with &quot;exp-list&quot;." />
</div>
<div class="caption_ti">
Inputting contents with "exp-list".
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Ed-Mode : Overwrite or Append New Data</span>

</div>

<div class="txt">

The "**ed-mode**" input determines the way input data is written in the
text file with **successive evaluations.** It offers two options :

1.  "supersede" : the previous content is **overwritten** by new data.

2.  "append" : new data is **appended after** the existing contents.
    
    Hence, the results of several successive iterations can be stored in
    the text buffer.

Click on the input to select an option.

</div>

<div class="caption">

<div class="caption_co">

![Left, "supersede" : each evaluation reinitializes the TextFile
contents. Right, "append" : the previous contents is kept in the
TextFile.](../res/textfileappend.png)

</div>

<div class="caption_ti">

Left, "supersede" : each evaluation reinitializes the TextFile contents.
Right, "append" : the previous contents is kept in the TextFile.

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Eval-Mode : Writing Format</span>

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
<p>The "<strong>eval-mode</strong>" input determines the <strong>format</strong> of the contents returned by "exp-list".</p>
<p>Four formats are available :</p>
<ol>
<li><p>"text" : returns <strong>a list of strings</strong> corresponding to the successive lines of the text.</p></li>
<li><p>"data list"  : returns the items as <strong>a list</strong>, matching each line of the text buffer, interpreted as <strong>"raw" <strong>d</strong>ata</strong> .</p>
<p>Several items on a line are gathered in the same list.</p></li>
<li><p>"list" : returns an <strong>elementary list</strong> ignoring line returns.</p></li>
<li><p>"value" : evaluates the first item of the text file and returns it as a single value. This is useful for files containing lists)</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/textevalmode.png" width="271" height="177" alt="Three options for formatting the text contents with &quot;eval-mode&quot;. The result appears when evaluating the &quot;exp-list&quot; output." />
</div>
<div class="caption_ti">
Three options for formatting the text contents with "eval-mode". The result appears when evaluating the "exp-list" output.
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
          - [<span>Curves and Functions</span>](CurvesAndFunctions.md)
          - [<span>Array</span>](ClassArray.md)
          - [<span>TextFile</span>](textfile.md)
              - <span id="i2" class="outLeftSel_yes"><span>TextFile
                Edition</span></span>
              - [<span>Outer Environment</span>](TextFileEnvironment.md)
          - [<span>Picture</span>](Picture.md)
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
précédente</span>](textfile.md "page précédente(TextFile)")<span class="hidden">
| </span>[<span>page
suivante</span>](TextFileEnvironment.md "page suivante(Outer Environment)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
