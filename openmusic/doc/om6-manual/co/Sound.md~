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
</span><span class="stkSel_yes"><span>Sound Object</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Audio.md "page précédente(Audio)")<span class="hidden">
| </span>[<span>page
suivante</span>](SoundEditor.md "page suivante(Sound Editor)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>The Sound Object</span>

<div class="headCo_co">

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
<td><div class="dk_txtRes_txt txt">
<p>The main audio object in OM is the SOUND object.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/sound-box.png" width="115" height="67" alt="The SOUND box." />
</div>
<div class="caption_ti">
The SOUND box.
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="txt">

The 3 inputs inputs/outputs of the sound box represent :

  - <span>The sound object</span>
  - <span>The audio track</span>
  - <span>A list of markers</span>

</div>

</div>

<div class="part">

## <span>Sound File Initialization</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Default Initialization</span>

</div>

<div class="txt">

If nothing is connected to the SOUND box first input, when it is
evaluated, a file chooser dialog opens and allows to choose a file to
load.

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
<p>When initialized, the box miniview (press <code class="keyboard_tl">m</code>) displays the sound waveform.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/sound-miniview.png" width="144" height="83" alt="sound-miniview.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>File Name</span>

</div>

<div class="txt">

When the name of the box is visible (press `n`) the name of the file is
displayed and updated at initializing the box.

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
<p>After the sound is loaded, you may want to <a href="LockMode.md"><span>lock the box</span></a> (press <code class="keyboard_tl">b</code>) in order to avoid reinitalizing it at next evaluations.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/lock-sound.png" width="136" height="83" alt="lock-sound.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc warning">

<div class="bloc_ti warning_ti">

<span>Accepted file formats :</span>

</div>

<div class="txt">

OM currently accpets only AIFF or WAV audio formats.

Compressed audio formats such as MP3 are not supported.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>File Pathname Initialization</span>

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
<p>A SOUND box is basically initialized with a sound file pathname, which can be connected to its first input.</p>
<p>This pathname can be typed textually or come from another box or function.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/sound-path.png" width="174" height="193" alt="sound-path.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About Pathnames in OM</span>

</div>

<div class="linkUL">

  - [<span>Creating and Using Pathnames</span>](Pathnames.md)

</div>

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>Sound Synthesis Results</span>

</div>

<div class="txt">

Most of the sound synthesis tools available in OM (generally part of
external libraries) return a synthesized sound pathname after synthesis.
These return values are therefore suitable for connection to the SOUND
box.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Initialization Error</span>

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
<p>When the file can not be loaded or found, a message may appear in the box instead of the the sound waveform.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/sound-error.png" width="137" height="78" alt="sound-error.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc warning">

<div class="bloc_ti warning_ti">

<span>File Attachment</span>

</div>

<div class="txt">

The SOUND object is attached to the original file existing on a computer
disk. In other words, the sound data is not intern in the OM patch but
always remains in the external sound file.

Conflicts or unexpected behaviour may therefore happen if the sound file
is moved, renamed or removed from its original location, either by other
program or by manual modifications.

SOUND boxes may not be initialized correctly if the attached file is not
found at opening an existing patch.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Playback</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Basic Rendering</span>

</div>

<div class="txt">

As other musical objects, the SOUND object can be played by selecting
the box and pressing `space`.

It can also be droped or algorithmically inserted in a
[<span>Maquette</span>](Maquettes.md).

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Audio Tracks</span>

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
<p>The SOUND object have a track slot, which can be used to attach a sound to a particular audio track of the audio player.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/soundbox-track.png" width="205" height="192" alt="soundbox-track.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>More About the Audio Player</span>

</div>

<div class="linkUL">

  - [<span>The Audio Player</span>](AudioPlayer.md)

</div>

</div>

</div>

<div class="bloc warning">

<div class="bloc_ti warning_ti">

<span>Sound Box Evaluation</span>

</div>

<div class="txt">

Contrary to most boxes in OM, the other inputs of the **SOUND** box
**ARE** evaluated even if the fist input is connected. It is therefore
possible to initialize the sound with a pathname AND setting a
particular track (as shows the example above).

</div>

</div>

</div>

</div>

<div class="part">

## <span>Markers</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

The third inlet/outlet of the SOUND box is a list of markers .

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
<p>Markers are simple time values expressed in seconds. They can be set manually (as a list), algoritmically (if they come from other patch boxes) or using the sound editor.</p>
<p>They are displayed as vertical lines on the sound waveform if the box miniview is visible.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/markers.png" width="283" height="204" alt="markers.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>The SOUND Editor</span>

</div>

<div class="linkUL">

  - [<span>The Sound Editor</span>](SoundEditor.md)

</div>

</div>

</div>

<div class="bloc warning">

<div class="bloc_ti warning_ti">

<span>Sound Box Evaluation</span>

</div>

<div class="txt">

Contrary to most boxes in OM, the other inputs of the SOUND box **ARE**
evaluated even if the fist input is connected. It is therefore possible
to initialize the SOUND with a pathname AND setting the markers (as
shows the example above).

</div>

</div>

<div class="bloc tip">

<div class="bloc_ti tip_ti">

<span>Adding Markers to an Existing Sound</span>

</div>

<div class="txt">

In order to add markers to an initialized (locked) sound box, you may
need to create a new box connected to the self output of the first box
with additional connection for the markers.

</div>

<div class="caption">

<div class="caption_co">

![markers2.png](../res/markers2.png)

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
          - <span id="i3" class="outLeftSel_yes"><span>Sound
            Object</span></span>
          - [<span>Sound Editor</span>](SoundEditor.md)
          - [<span>Audio Player</span>](AudioPlayer.md)
          - [<span>Sound Tools</span>](SoundTools.md)
          - [<span>Sound Processing</span>](SoundProcessing.md)
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
précédente</span>](Audio.md "page précédente(Audio)")<span class="hidden">
| </span>[<span>page
suivante</span>](SoundEditor.md "page suivante(Sound Editor)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
