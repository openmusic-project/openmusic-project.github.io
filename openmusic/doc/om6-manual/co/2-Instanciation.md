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
</span>[<span>Boxes</span>](Boxes.md)<span class="stkSep"> \>
</span>[<span>Objects – Factory
Boxes</span>](FactoryBoxes.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Instantiating
Objects</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](1-Visualization.md "page précédente(Visualization)")<span class="hidden">
| </span>[<span>page
suivante</span>](1-Play.md "page suivante(Playback and Players)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Instantiating Objects</span>

<div class="headCo_co">

<div>

<div class="def">

<div id="i2" class="dk_concept_def">

<div class="dk_definition_notion">

<div class="dk_definition_notion_ti">

<span>Instantiation</span>

</div>

<div class="dk_definitionMeta_def">

An instance is an exemplar of a class of objects. Instantiation is the
process of creating an instance of a class using a factory box.

</div>

</div>

</div>

<div class="dk_concept_desc">

<div class="infobloc">

<div class="infobloc_ti">

<span>Factory Slots</span>

</div>

<div class="txt">

A factory box has a number of slots, represented by inputs and outputs.
Once values are assigned to the slots or parameters of a factory box, it
can be evaluated to produce an
<span id="i3" class="defRef_ul"><span>instance</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc1804)</sup>,
an exemplar of a class.

  - <span>The first input and output always correspond to the object
    that is created by the box. It is called the "self" of the
    box.</span>
  - <span>Each of the other inputs and outputs stands for an attribute,
    or parameter of the object – a
    <span id="i4" class="defRef_ul"><span>slot</span></span><sup>[<span>\[</span>2<span>\]</span>](#kFootBsktc2074)</sup>
    of the corresponding
    <span id="i5" class="defRef_ul"><span>class</span></span><sup>[<span>\[</span>3<span>\]</span>](#kFootBsktc1871)</sup>.</span>

Note that the value of a factory box can also be defined via its editor.

</div>

</div>

</div>

</div>

<div class="part">

## <span>First Input / Output : "Self"</span>

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
<img src="../res/self.png" width="101" height="99" alt="self.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>The first input / output of a factory box is usually called "self". It stands for the object itself.</p>
<p>A "self" input can be connected to :</p>
<ul>
<li><span> the "self" output of an <strong>object belonging to the same class</strong> , </span></li>
<li><span>a <strong>simple value</strong> , or the <strong>output of an object</strong> , provided it can produce such an object.</span></li>
</ul>
<p>Reciprocally, the evaluation of a "self" output, or its connection to another box returns the computed object itself.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Automatic Object Conversions</span>

</div>

<div class="txt">

When compatibility allows it, OM automatic converts objects of a
diferent type and creates an instance of the relevant class.

</div>

<div class="caption">

<div class="caption_co">

![A chord can be created from a note, but a note cannot be created from
a chord.](../res/selfinput-conversions.png)

</div>

<div class="caption_ti">

A chord can be created from a note, but a note cannot be created from a
chord.

</div>

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Manipulating Objects via the "Self" Input</span>

</div>

<div class="txt">

The merger function builds a chord-sequence, or
<span id="i6" class="defRef_ul"><span>chord-seq</span></span><sup>[<span>\[</span>4<span>\]</span>](#kFootBsktc2079)</sup>
, out of two other chord-sequences given as
<span id="i7" class="defRef_ul"><span>arguments</span></span><sup>[<span>\[</span>5<span>\]</span>](#kFootBsktc2051)</sup>.

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
<img src="../res/merger.png" width="255" height="247" alt="merger.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<ul>
<li><span>Top : the "self" outputs of the chord-seqs are connected to the inputs of merger. </span></li>
<li><span>Middle : the output of merger is connected to the "self" input of a third chord-seq.</span></li>
<li><span>Bottom : the third chord-seq represents the resulting chord sequence once evaluated.</span></li>
</ul>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

The two initial chord-seqs are locked to preserve their value.
Conversely, the box that is to be evaluated isn't locked, to take the
result of the upstream computation into account.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Protecting a Box</span>

</div>

<div class="linkUL">

  - [<span>Lock Mode</span>](LockMode.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Evaluation</span>

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
<p>To evaluate a box, select it and press <code class="keyboard_tl">v</code> .</p>
<p>Its value is computed, and the result of the "self" output, that is, the internal representation of the resulting <span id="i8" class="defRef_ul"><span>instance</span></span><sup><a href="#kFootBsktc1804"><span>[</span>1<span>]</span></a></sup> is displayed in the Listener.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/evalboxself.png" width="255" height="147" alt="evalboxself.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About Evaluation</span>

</div>

<div class="linkUL">

  - [<span>Evaluation</span>](Evaluation.md)

</div>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Tip : Reinitializing a Box</span>

</div>

<div class="txt">

To reset a box to its default state, press `SHIFT` + `i` .

</div>

</div>

</div>

</div>

<div class="part">

## <span>Other Inputs / Outputs : Object Parameters</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Parameters (Slots)</span>

</div>

<div class="txt">

The other inputs and outputs represent the various parameters (also
called class
<span id="i9" class="defRef_ul"><span>slots</span></span><sup>[<span>\[</span>2<span>\]</span>](#kFootBsktc2074)</sup>),
used for defining an instance.

Inputs and outputs respectively address the same parameters – and follow
the same ordering.

</div>

<div class="caption">

<div class="caption_co">

![A note box has five inlets and outlets, a "self", and four other
inlets, which correspond to the usual musical features or parameters of
a note : midicents – pitch –, velocity – dynamics –, duration, midi
channel.](../res/noteinputs.png)

</div>

<div class="caption_ti">

A note box has five inlets and outlets, a "self", and four other inlets,
which correspond to the usual musical features or parameters of a note :
midicents – pitch –, velocity – dynamics –, duration, midi channel.

</div>

</div>

<div class="txt">

To get information about the qualities of a slot, keep pressing `Cmd`
while overing the mouse over an input or output.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Setting Input Values</span>

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
<img src="../res/buildchord.png" width="158" height="146" alt="Building a chord with two of its parameters : a list of pitches (6000 6800) for C4 and G#4, and a list of note velocities – dynamics – (100 50)." />
</div>
<div class="caption_ti">
Building a chord with two of its parameters : a list of pitches (6000 6800) for C4 and G#4, and a list of note velocities – dynamics – (100 50).
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Input values must be specified to define an object. Several parameters can be set or connected at a time. If no value is specified, the default value of the input is applied.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Setting Box Inputs Values, Using a Box's Editor</span>

</div>

<div class="linkUL">

  - [<span>Box Inputs</span>](BoxInputs.md)
  - [<span>Editors</span>](3-Editors.md)

</div>

</div>

</div>

<div class="bloc warning">

<div class="bloc_ti warning_ti">

<span>Conflict : Setting the "Self" Input and Other Attributes</span>

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
<p>An object can be created directly from the "self" input value, and from the other input parameters. By convention, "self" has priority over the other inputs, whose values are ignored.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/twovalues.png" width="133" height="123" alt="Different values have been assigned to the &quot;self&quot; and &quot;pitch&quot; inputs. The value of the &quot;self&quot; input is applied for the instantiation." />
</div>
<div class="caption_ti">
Different values have been assigned to the "self" and "pitch" inputs. The value of the "self" input is applied for the instantiation.
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Getting Output Values</span>

</div>

<div class="txt">

The different outlets of an object can be used for reading the values of
its attributes. Outputs can be connected as parameters to other factory
or function box inputs.

To evaluate the value of an output, `Cmd` click on it. The whole box is
evaluated and a specific instance of the class is created.

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
<p>The second input represents the pitch value of a note box.</p>
<ul>
<li><span>If the factory box, or if its "self" outlet is evaluated, the reference of the instance appears in the Listener. </span></li>
<li><span>If the second output is evaluated, a similar value to that of the second inlet is returned in the Listener, and inform us about the pitch of the note. </span></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/notevalues.png" width="225" height="252" alt="notevalues.png" />
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
    
    <div id="kFootBsktc1804">
    
    <div class="footBskt_itti">
    
    Instance
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    An actual object created at runtime, out of a given class. In OM,
    more specifically, an object created when evaluating a factory box.
    An instance can be saved as a global variable.
    
    ⤷ `SHIFT` click on an outlet – especially the first outlet
    representing the self, the whole object – of a factory box to
    materialize an instance.
    
    </div>
    
    </div>
    
    </div>
    
    </div>

2.  
    
    <div id="kFootBsktc2074">
    
    <div class="footBskt_itti">
    
    Slot
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    In object oriented programming, a slot represents and attribute of a
    class. For instance, the class "note" in OM has 4 slots : pitch,
    duration, velocity, and MIDI channel.
    
    </div>
    
    </div>
    
    </div>
    
    </div>

3.  
    
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

4.  
    
    <div id="kFootBsktc2079">
    
    <div class="footBskt_itti">
    
    Chord-Seq
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    OM name of a chord sequence. By extension, a note sequence, since a
    single note can be considered a chord.
    
    </div>
    
    </div>
    
    </div>
    
    </div>

5.  
    
    <div id="kFootBsktc2051">
    
    <div class="footBskt_itti">
    
    Argument
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    An argument represents a parameter upon which a function operates.
    For instance, the (om+ x y) function has two arguments : x and y.
    
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
          - [<span>Adding Boxes Into a Patch</span>](AddingBoxes.md)
          - [<span>Elementary Manipulations</span>](ElementaryManips.md)
          - [<span>Boxes</span>](Boxes.md)
              - [<span>Boxes Features</span>](GraphicFeatures.md)
              - [<span>Data Boxes</span>](DataBox.md)
              - [<span>Function Boxes</span>](FunctionBoxes.md)
              - [<span>Objects – Factory Boxes</span>](FactoryBoxes.md)
                  - [<span>Visualization</span>](1-Visualization.md)
                  - <span id="i10" class="outLeftSel_yes"><span>Instantiating
                    Objects</span></span>
                  - [<span>Playback and Players</span>](1-Play.md)
                  - [<span>Editors</span>](3-Editors.md)
                  - [<span>Import/Export</span>](4-ImportExport.md)
              - [<span>Abstraction Boxes</span>](AbsBoxesIntro.md)
              - [<span>Other Boxes</span>](OtherBoxes.md)
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
précédente</span>](1-Visualization.md "page précédente(Visualization)")<span class="hidden">
| </span>[<span>page
suivante</span>](1-Play.md "page suivante(Playback and Players)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
