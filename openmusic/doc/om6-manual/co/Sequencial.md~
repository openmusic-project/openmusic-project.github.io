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
</span>[<span>Control
Structures</span>](Control.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Sequential
Operators</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Logical.md "page précédente(Logical Operators)")<span class="hidden">
| </span>[<span>page
suivante</span>](OMLoop.md "page suivante(Iterations: OMLoop)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Sequential Operators</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

Sequential operators control the occurrences of operations in program.
They can apply to the iteration of an operation, or to the succession of
several operations at a single evaluation.

</div>

<div class="caption">

<div class="caption_co">

![controlmenu.png](../res/controlmenu.png)

</div>

</div>

<div class="txt">

Sequential operators can be accessed via the `OM Kernel / Control` menu.

</div>

</div>

<div class="part">

## <span>Repeat-n : Iteration</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

**Repeat-n** evaluates something a number of times and collects the
results in a list, so that the manual evaluation doesn't have to be
repeated.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Features</span>

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
<img src="../res/repeatn-box.png" width="209" height="103" alt="repeatn-box.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p><strong></strong> Repeat-n has two default inputs :</p>
<ul>
<li><p>"self" takes any type of data, a function, or a lambda function.</p></li>
<li><p>"num" takes a number.</p></li>
</ul>
<p>The data assigned to "self" is repeated n times. The result is returned as a list by the output.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Example</span>

</div>

<div class="txt">

Here, repeat-n is applied to om-random to produce a random notes
sequence.

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
<p>Repeat-n evaluates om-random 15 times : each time, a random value is returned. The resulting list is returned to the pitches input of the factory box.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/repeat-n.png" width="197" height="219" alt="repeat-n.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Advanced Use of Iteration : OMLoop</span>

</div>

<div class="txt">

More complex or specific iterative processes can be designed and
controlled via the **OMLoop module editor**.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>The Omloop Module</span>

</div>

<div class="linkUL">

  - [<span>Iterations: OMLoop</span>](OMLoop.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Sequence : Executing Several Tasks</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Features</span>

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
<img src="../res/sequence-box.png" width="297" height="91" alt="sequence-box.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The <strong>sequence</strong> box executes a sequence of distinct operations.</p>
<ul>
<li><p>It has one default input and output. The "patch" input takes any kind of box.</p></li>
</ul>
<ul>
<li><p>It can be added as many "oppatch" additional inputs – "patch" input q– as necessary :</p></li>
</ul>
<ul>
<li><p><strong>Multiple outputs</strong> can return the result of corresponding upstream operations to other boxes.</p></li>
</ul>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Example</span>

</div>

<div class="txt">

A chord-seq is generated while other tasks are executed.

</div>

<div class="caption">

<div class="caption_co">

![sequenceex.png](../res/sequenceex.png)

</div>

</div>

<div class="txt">

When the chord-seq is evaluated, sequence performs three tasks :

1.  print "avant",

2.  generate and print a random list of numbers,

3.  print "après".

Then, the value of its second output is returned to the "pitch" input of
the chord-seq.

Note that without print, the Listener wouldn't display the values the
outputs of sequence. These values can be returned with an individual
evaluation of each output.

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
          - [<span>Abstraction</span>](Abstraction.md)
          - [<span>Evaluation Modes</span>](EvalModes.md)
          - [<span>Higher-Order Functions</span>](HighOrder.md)
          - [<span>Control Structures</span>](Control.md)
              - [<span>Predicates</span>](Predicates.md)
              - [<span>Conditional Operators</span>](ConditionalOps.md)
              - [<span>Logical Operators</span>](Logical.md)
              - <span id="i2" class="outLeftSel_yes"><span>Sequential
                Operators</span></span>
          - [<span>Iterations: OMLoop</span>](OMLoop.md)
          - [<span>Instances</span>](Instances.md)
          - [<span>Interface Boxes</span>](InterfaceBoxes.md)
          - [<span>Files</span>](Files.md)
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
précédente</span>](Logical.md "page précédente(Logical Operators)")<span class="hidden">
| </span>[<span>page
suivante</span>](OMLoop.md "page suivante(Iterations: OMLoop)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
