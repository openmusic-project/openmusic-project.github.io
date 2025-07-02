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
</span><span class="stkSel_yes"><span>Polyphonic
Objects</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Editor-Rhythm.md "page précédente(Rhythmic Objects)")<span class="hidden">
| </span>[<span>page
suivante</span>](Editor-PageMode.md "page suivante(Page Mode)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Polyphonic Objects : Poly and Multi-seq Editors</span>

<div class="headCo_co">

<div>

<div class="part">

## <span>Common Features</span>

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
<p>A poly and a multi-seq objects are a superimposition of voices or chord-seqs .</p>
<p>They both have one additional tool : the <strong>poly tool</strong> <span class="iconButton_tim"><img src="../res/polytool_icon.png" class="sfile_icon-png_icon-gif_icon" width="25" height="23" alt="polytool_icon.png" /></span>, which allows to edit all voices at once.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/editpoly.png" width="228" height="227" alt="editpoly.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Add / Delete Staves</span>

</div>

<div class="txt">

  - To add a staff :
    
    1.  select the voice
        <span class="iconButton_tim">![voicet\_icon.png](../res/voicet_icon.png)</span>
        or the poly tool
        <span class="iconButton_tim">![polytool\_icon.png](../res/polytool_icon.png)</span>
        ,
    
    2.  to add a new staff, `Cmd` click on a staff.
    
    Notice that new staves are automatically added above the "lower"
    staff .

</div>

<div class="caption">

<div class="caption_co">

![addstaff.png](../res/addstaff.png)

</div>

</div>

<div class="txt">

  - To delete a staff :
    
    1.  select the voice tool,
    
    2.  click and drag a staff
    
    3.  press `backspace`.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Respacing Staves</span>

</div>

<div class="txt">

As in voices editors, staves can be moved up of down, and consequently,
respaced.

To respace staves :

1.  click on the clefs of the staves you want to respace

2.  use the `↓` `↑` keys.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Internal Voice or Chord-Seq Edition</span>

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
<img src="../res/internalvoice.png" width="252" height="274" alt="internalvoice.png" />
</div>
</div></td>
<td><div class="dk_txtRes_txt txt">
<p>To open a voice or a chord-seq as an internal object from a poly or a multi-seq  :</p>
<ol>
<li><p>select the voice tool,</p></li>
<li><p>click and drag a staff to select a voice or a chord-seq,</p></li>
<li><p>press <code class="keyboard_tl">o</code>, or double click on it.</p></li>
</ol>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Individual Chord-Seq and Voice Staff Configuration</span>

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
<p>To define clefs individually :</p>
<ol>
<li><p>click on a clef</p></li>
<li><p>choose a configuration in the <code class="menuPath_tl">staff</code> pop up menu.</p></li>
</ol>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/select.png" width="132" height="65" alt="select.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

Remember that multiple staves configurations – e.g. `FF`, `GF`, `GGFF`
etc. – do not allow individual staff editing or respacing.

</div>

<div class="caption">

<div class="caption_co">

![multiple.png](../res/multiple.png)

</div>

</div>

</div>

</div>

</div>

<div class="part">

## <span>Poly Editor and Multi-Seq Specific Features</span>

<div class="part_co">

<div class="bloc warning">

<div class="bloc_ti warning_ti">

<span>Poly : Polytemporality and Polymeter</span>

</div>

<div class="txt">

Within a poly, each voice can have its own time signatures, channel and
tempo, so as to build polytemporal and metric structures. The score is
then organized according to absolute durations.

</div>

<div class="caption">

<div class="caption_co">

![polypoly1\_scr.png](../res/polypoly1_scr.png)

</div>

<div class="caption_ti">

</div>

</div>

<div class="txt">

  - To change the tempo or midichannel of a voice :
    
    1.  select the voice
    
    2.  enter a value or scroll the mouse up or down in the voice
        inspector.

  - To change the meter of a measure :
    
    1.  select it with the measure tool
    
    2.  enter values in the measure inspector.

</div>

<div class="caption">

<div class="caption_co">

![changetempo.png](../res/changetempo.png)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Multi-Seqs : Internal Chord-Seq Edition</span>

</div>

<div class="txt">

Within a multi-seq, chord-seqs must be open in internal windows to be
edited separately.

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
              - [<span>Rhythmic Objects</span>](Editor-Rhythm.md)
              - <span id="i2" class="outLeftSel_yes"><span>Polyphonic
                Objects</span></span>
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
précédente</span>](Editor-Rhythm.md "page précédente(Rhythmic Objects)")<span class="hidden">
| </span>[<span>page
suivante</span>](Editor-PageMode.md "page suivante(Page Mode)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
