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
</span>[<span>Score
Objects</span>](ScoreObjects.md)<span class="stkSep"> \>
</span>[<span>Score
Editors</span>](ScoreEditors.md)<span class="stkSep"> \>
</span>[<span>Harmonic
Objects</span>](Harmonic-Obj-Editor.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Pitches</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Harmonic-Obj-Editor.md "page précédente(Harmonic Objects)")<span class="hidden">
| </span>[<span>page
suivante</span>](Editor-Other-Slots.md "page suivante(Other Slots)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Editing Pitches</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

The tools of the editors palette define several hierarchic edition
levels.

  - <span class="iconButton_tim">![notetool\_icon.png](../res/notetool_icon.png)</span>
    **Note tool** - to edit selected notes.

  - <span class="iconButton_tim">![chordtool1\_icon.png](../res/chordtool1_icon.png)</span>
    **Chord tool** - to edit whole chords.

  - <span class="iconButton_tim">![voicet\_icon.png](../res/voicet_icon.png)</span>
    **Voice tool** - more specifically dedicated to the voice object,
    can apply to a whole chord-seq .

A whole object can be selected with a click and drag in any case .

</div>

</div>

<div class="part">

## <span>Adding Notes and Chords</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Adding Notes in Note and Chord Objects</span>

</div>

<div class="txt">

  - In note objects :
    
    1.  select the note tool
    
    2.  `Cmd` click in the score.
    
    The default or current value of the object is modified.

<!-- end list -->

  - In chord objects :
    
    1.  select the chord tool **or** the note tool
    
    2.  `Cmd` click in the staff to add a note.

</div>

<div class="caption">

<div class="caption_co">

![addnoteinchord.png](../res/addnoteinchord.png)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Adding Notes to a Chord in a Chord-Seq</span>

</div>

<div class="txt">

Chords can be edited in the chord-seq editor, or in an `internal chord`
window.

  - To edit a chord from a chord-seq window :
    
    1.  Select the chord tool and `Cmd` click on the chord : a grey note
        appears at the root of the green-framed chord.
    
    2.  Change its pitch with the `↑` or `↓` keys.
    
    3.  Click in the editor window to validate.

</div>

<div class="caption">

<div class="caption_co">

![editinchordseq.png](../res/editinchordseq.png)

</div>

</div>

<div class="txt">

  - To edit a chord in a `internal chord` window :
    
    1.  Select the note **or** the chord tool.
        
        **Double click on the chord** : the `internal chord` window pops
        up.
    
    2.  `Cmd` click on the staff to insert notes in the chord.

</div>

<div class="caption">

<div class="caption_co">

![editinternal.png](../res/editinternal.png)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Adding Chords in a Chord-seq</span>

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
<img src="../res/addchordsseq.png" width="221" height="145" alt="addchordsseq.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<ol>
<li><p>Select the note, chord <strong>or</strong> poly tool.</p></li>
<li><p><code class="keyboard_tl">Cmd</code> click in the staff.</p></li>
</ol>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Deleting Items</span>

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
<li><p>Select the note, chord or poly tool, depending on the type of items you want to delete.</p></li>
<li><p>Select one or more items and press <code class="keyboard_tl">Backspace</code>.</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/selectall.png" width="252" height="203" alt="selectall.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc tip">

<div class="bloc_ti tip_ti">

<span>Extracting Chords</span>

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
<img src="../res/dragchordfromeditor.png" width="252" height="198" alt="dragchordfromeditor.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>Chord factory boxes can be dragged out of any type of score editor – but the note editor.</p>
<p>To create a factory box :</p>
<ol>
<li><p>select the chord tool in the <a href="Editor-Basics.md"><span>editor palette</span></a> <span class="iconButton_tim"><img src="../res/chordtool_icon.png" class="sfile_icon-png_icon-gif_icon" width="24" height="23" alt="chordtool_icon.png" /></span></p></li>
<li><p>click on an item and dragg it to the patch editor.</p></li>
</ol>
<p>It is materialized as a factory box.</p>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Score Editors</span>

</div>

<div class="linkUL">

  - [<span>Overview</span>](Editor-Overview.md)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Group / Union Chords</span>

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
<p>The <strong>group</strong> and <strong>union chords</strong> commands allow to gather several chords into one chord.</p>
<ol>
<li><p>Select the items you want to group or union.</p></li>
<li><p>Press <code class="keyboard_tl">*</code> to group chords.</p>
<p>Press <code class="keyboard_tl">+</code> to union chords.</p></li>
</ol>
<p>On <code class="menuPath_tl">chord</code> mode, chords are displayed the same way with both commands.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/groupunion.png" width="236" height="212" alt="groupunion.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Group Chords</span>

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
<p>The <strong>group chords</strong> command allows to preserve the individual offsets of the chords.</p>
<ul>
<li><span>Pitches are played successively.</span></li>
<li><span>The <code class="menuPath_tl">offset</code> mode of the Editor Control shows the actual offsets of each chord.</span></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/groupunion2.png" width="207" height="171" alt="groupunion2.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Union Chords</span>

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
<p>The <strong>union chords</strong> command gathers several chords graphically and temporally in a same chord.</p>
<ul>
<li><span>Pitches are played simultaneously.</span></li>
<li><span>The <code class="menuPath_tl">offset</code> mode of the Editor Control shows that all chords have the same offset.</span></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/groupunion3.png" width="197" height="173" alt="groupunion3.png" />
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

## <span>Displaying Modes</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Features</span>

</div>

<div class="caption">

<div class="caption_co">

![The order and offsets of the pitches in the list can be expressed via
the "order" and "offset" modes of the Editor Control.](../res/modes.png)

</div>

<div class="caption_ti">

The order and offsets of the pitches in the list can be expressed via
the "order" and "offset" modes of the Editor Control.

</div>

</div>

<div class="txt">

The Editor Control lower menu allows to modify the displaying of chords.
Notes can be ordered according to their :

  - <span>pitch : `arp up` and `arp down` modes</span>
  - <span>order in the pitches list : `order` mode</span>
  - <span>offset : `offset` mode.</span>

A small vertical line marks the starting point of the chord.

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
          - [<span>Presentation</span>](Score-Objects-Intro.md)
          - [<span>Rhythm Trees</span>](RT.md)
          - [<span>Score Players</span>](ScorePlayer.md)
          - [<span>Score Editors</span>](ScoreEditors.md)
              - [<span>Overview</span>](Editor-Overview.md)
              - [<span>Preferences</span>](Editors-Prefs.md)
              - [<span>Score Display</span>](Editor-Display.md)
              - [<span>Basic Editing</span>](Editor-Basics.md)
              - [<span>Harmonic Objects</span>](Harmonic-Obj-Editor.md)
                  - <span id="i3" class="outLeftSel_yes"><span>Pitches</span></span>
                  - [<span>Other Slots</span>](Editor-Other-Slots.md)
              - [<span>Rhythmic Objects</span>](Editor-Rhythm.md)
              - [<span>Polyphonic Objects</span>](Poly-Multi-Editor.md)
              - [<span>Page Mode</span>](Editor-PageMode.md)
              - [<span>Tonal Display</span>](Editor-Tonality.md)
              - [<span>Microintervals
                Notation</span>](Editor-Microintervals.md)
              - [<span>Play Controls</span>](Editor-Play.md)
          - [<span>Quantification</span>](Quantification.md)
          - [<span>Export / Import</span>](ImportExport.md)
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
précédente</span>](Harmonic-Obj-Editor.md "page précédente(Harmonic Objects)")<span class="hidden">
| </span>[<span>page
suivante</span>](Editor-Other-Slots.md "page suivante(Other Slots)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
