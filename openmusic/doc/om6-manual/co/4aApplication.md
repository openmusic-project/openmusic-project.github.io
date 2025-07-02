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
de section : </span>[<span>OpenMusic
QuickStart</span>](QuickStart-Chapters.md)<span class="stkSep"> \>
</span>[<span>A Musical
Application</span>](4_MusicalAp.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Chord & Musical
Objects</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](4_MusicalAp.md "page précédente(A Musical Application)")<span class="hidden">
| </span>[<span>page
suivante</span>](4bApplication.md "page suivante(Creating an Instance)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>The Chord Object – & Musical Objects in General –</span>

<div class="headCo_co">

<div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Covered Topics</span>

</div>

<div class="txt">

  - **Class**, **factory box** and **instance** concepts

  - Adding a chord factory box in the patch editor

  - Boxes properties and morphology : inputs, arguments, default values
    and outputs

  - Viewing and listening to the content of a chord

</div>

</div>

<div class="infobloc">

<div class="media">

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Keywords</span>

</div>

<div class="txt">

<span id="i1" class="defRef_ul"><span>Class</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc1871)</sup>,
<span id="i2" class="defRef_ul"><span>Object</span></span><sup>[<span>\[</span>2<span>\]</span>](#kFootBsktc6299)</sup>,
<span id="i3" class="defRef_ul"><span>FactoryBox</span></span><sup>[<span>\[</span>3<span>\]</span>](#kFootBsktc2025)</sup>,
<span id="i4" class="defRef_ul"><span>Instance</span></span><sup>[<span>\[</span>4<span>\]</span>](#kFootBsktc1804)</sup>,
<span id="i5" class="defRef_ul"><span>Offset</span></span><sup>[<span>\[</span>5<span>\]</span>](#kFootBsktc6300)</sup>

</div>

</div>

<div class="part">

## <span>Main Links to the User Manual</span>

<div class="part_co">

<div class="infobloc">

<div class="linkSet">

<div class="linkSet_ti">

<span>Voir aussi</span>

</div>

<div class="linkUL">

  - [<span>Boxes Graphic Features and
    Components</span>](GraphicFeatures.md)
  - [<span>Boxes</span>](Boxes.md)
  - [<span>Basic Tools</span>](BasicObjects.md)
  - [<span>Notes, Chords and Chord-Seqs</span>](Note-Chord-Chord-seq.md)

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
    
    <div id="kFootBsktc6299">
    
    <div class="footBskt_itti">
    
    Object
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    A thing provided with properties – characteristics and behaviour. An
    object is defined by a class and shares the same characteristics
    with other objects belonging to the same class.
    
    An exemplar of a class.
    
    For instance, the class of Note defines all possible notes by
    listing the characteristics and behaviors they can have. The object
    A4 is a particular note : it is an instance of the Class note, with
    particular versions of its characteristics. A note has a pitch. An
    A4 is a 440 Hz note.
    
    See also : Class, Instance, Object Oriented Programming.
    
    </div>
    
    </div>
    
    </div>
    
    </div>

3.  
    
    <div id="kFootBsktc2025">
    
    <div class="footBskt_itti">
    
    Factory Box
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    A box used for creating an instance, or exemplar, of a given class
    within a visual program.
    
    </div>
    
    </div>
    
    </div>
    
    </div>

4.  
    
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

5.  
    
    <div id="kFootBsktc6300">
    
    <div class="footBskt_itti">
    
    Offset
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    Temporal position of an object.
    
    In a chord, each note can have a specific offset.
    
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
  - [<span>OpenMusic QuickStart</span>](QuickStart-Chapters.md)
      - [<span>Summary</span>](Intro_1.md)
      - [<span>Starting a Session</span>](1_StartSession.md)
      - [<span>Programming a Simple Patch</span>](2_progpatch.md)
      - [<span>Manipulating the Patch</span>](3ManipPatch.md)
      - [<span>A Musical Application</span>](4_MusicalAp.md)
          - <span id="i6" class="outLeftSel_yes"><span>Chord & Musical
            Objects</span></span>
          - [<span>Creating an Instance</span>](4bApplication.md)
          - [<span>Formalizing a Process</span>](4cApplication.md)
          - [<span>Materializing Results</span>](4dApplication.md)
      - [<span>Manipulating and Visualizing
        Objects</span>](5_CompletEdition.md)
      - [<span>Saving and Quitting OM</span>](6_Quit.md)

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
précédente</span>](4_MusicalAp.md "page précédente(A Musical Application)")<span class="hidden">
| </span>[<span>page
suivante</span>](4bApplication.md "page suivante(Creating an Instance)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
