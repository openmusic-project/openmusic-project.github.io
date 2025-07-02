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
</span>[<span>Audio</span>](Audio.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Sound
Processing</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](SoundTools.md "page précédente(Sound Tools)")<span class="hidden">
| </span>[<span>page
suivante</span>](SoundRecording.md "page suivante(Recording)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Sound Processing Functions</span>

<div class="headCo_co">

<div class="secOutFra">

<div class="secOutTi">

[<span>Sommaire </span>](#)

</div>

<div class="secOutUi">

1.  [General Principles](#jgN12)
2.  [Processing Functions](#jgN8d)
3.  [Cascading Processes](#jgNfb)
4.  [Automating Processing](#jgN19a)

</div>

</div>

<div>

<div class="infobloc">

<div class="txt">

There exist a number of functions allowing to manipulate sound and audio
data. A number of them are based on the underlying LibAudioStream
library functionalities.

</div>

</div>

<div class="part">

## <span>General Principles</span>

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
<p>The LibAudioStream library used by OM manipulates sound resources under the form of " streams ". Streams can be seen as abstact pointers representing a sound and possible transformations. In OM the LibAudioStream streams are embedded in a structure called SOUND-DATA.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/sound-mix.png" width="300" height="196" alt="The SOUND-MIX function creates a SOUND-DATA pointer corresponding to the mix of two sounds." />
</div>
<div class="caption_ti">
The SOUND-MIX function creates a SOUND-DATA pointer corresponding to the mix of two sounds.
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
<p>SOUND-DATA pointers can eventually be rendered and converted back to sound file using the SAVE-SOUND function.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/sound-mix-save.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/sound-mix-save_1.png" width="240" height="300" alt="SOUND-SAVE saves the result of SOUND-MIX into a new sound file. The new file is loaded in a SOUND box." /></a>
</div>
<div class="caption_ti">
SOUND-SAVE saves the result of SOUND-MIX into a new sound file. The new file is loaded in a SOUND box.
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

## <span>Processing Functions</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Below are listed the available sound processing functions. They all
produce SOUND-DATA pointers.

  - **SOUND-MIX** : mixes two input sounds

  - **SOUND-SEQ** : concatenates two input sounds

  - **SOUND-VOL** : modifies the volume of an input sound

  - **SOUND-CUT**: extracts a specified interval out of an inpt sound

  - **SOUND-FADE** : adds a fade-in / fade-out effect to an input sound

  - **SOUND-LOOP** : repeats an input sound a number of times

  - **SOUND-SILENCE** : generates and empty (silent) sound of a given
    duration.

See the individual box documentation (press `d`) for more detailed
descriptions.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Cascading Processes</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The sound processing tools can also apply directly on SOUND-DATA
pointers. It is therefore possible to apply sequences and combinations
of effects and processes without using intermediary files.

SAVE-SOUND can be used eventually to store the final sound result in a
sound file.

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>Cascading Sound Processing : An Algorithmic "Montage"</span>

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
<p>This example implements the following process :</p>
<ul>
<li><span>1 second of sound (between 2000 and 3000 ms) is extracted from SOUND1 ( sound-cut )</span></li>
<li><span>500ms of silence ( sound-silence ) is appended after the result ( sound-seq )</span></li>
<li><span>SOUND2 is appended after the previous result ( sound-seq )</span></li>
<li><span>A global fade-in/fade out of 100ms is applied to the resulting sound ( sound-fade )</span></li>
<li><span>The final result is saved in the file "my-montage.aif" ( save-sound ) [ outfile autoamtically generates the output file pathname using the OM default out-file folder]</span></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/sound-multi-processing.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/sound-multi-processing_1.png" width="229" height="300" alt="sound-multi-processing_1.png" /></a>
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

## <span>Automating Processing</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The different programming facilities provided in OM
([<span>iterations</span>](OMLoop.md), etc.) might be useful to automate
sound processing on sound files and SOUND-DATA pointers.

</div>

</div>

<div class="bloc example">

<div class="bloc_ti example_ti">

<span>REDUCE, MAPCAR...</span>

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
<p>In this example, we use higher-order functions in order to process lists of sound files and pointers.</p>
<ul>
<li><span> <strong>mapcar</strong> sequencially cuts a segment from the sounds in the input list by calling SOUND-CUT. Note that the SOUND-CUT box is in <a href="LambdaMode.md"><span>lambda mode</span></a> in order to be used as a functional argument to mapcar . The result is a list of SOUND-DATA pointers. </span></li>
<li><span>The Lisp function <strong>reduce</strong> allows to use a function (left input) to combine the successive pairs of elements in a list (right input). <strong>reduce</strong> applies SOUND-SEQ with elements 1 and two in the list, then to the result and element 3, and so forth. We use this function to automatically build a sequence from our list of SOUND-DATA. Note that SOUND-SEQ is also in in <a href="LambdaMode.md"><span>lambda mode</span></a> ; This time it has two free inputs since <strong>reduce</strong> requires a binary operation to be supplied.</span></li>
<li><span>Finally the sequence is saved in a new sound file.</span></li>
</ul>
<p>(More advanced processed could be imagined, and implemented with <a href="LambdaPatch.md"><span>abstractions</span></a> or using an <a href="LoopGeneral.md"><span>omloop</span></a>).</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/sound-reduce.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/sound-reduce_1.png" width="294" height="300" alt="sound-reduce_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Voir aussi</span>

</div>

<div class="linkUL">

  - [<span>Higher-Order Programs and Functions</span>](HighOrder.md)

</div>

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
      - [<span>Maquettes</span>](Maquettes.md)
      - [<span>Sheet</span>](Sheet.md)
      - [<span>MIDI</span>](MIDI.md)
      - [<span>Audio</span>](Audio.md)
          - [<span>Sound Object</span>](Sound.md)
          - [<span>Sound Editor</span>](SoundEditor.md)
          - [<span>Audio Player</span>](AudioPlayer.md)
          - [<span>Sound Tools</span>](SoundTools.md)
          - <span id="i4" class="outLeftSel_yes"><span>Sound
            Processing</span></span>
          - [<span>Recording</span>](SoundRecording.md)
          - [<span>External Libraries</span>](Externals.md)
          - [<span>Audio Preferences</span>](SoundPreferences.md)
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
précédente</span>](SoundTools.md "page précédente(Sound Tools)")<span class="hidden">
| </span>[<span>page
suivante</span>](SoundRecording.md "page suivante(Recording)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
