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
</span><span class="stkSel_yes"><span>Audio Player</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](SoundEditor.md "page précédente(Sound Editor)")<span class="hidden">
| </span>[<span>page
suivante</span>](SoundTools.md "page suivante(Sound Tools)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>The Audio Player</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

OM currently relies on the LibAudioStream libray for playback and
rendering of audio files. The LibAudioStream player offers a multitrack
architecture, sounds can be assigned to different tracks with particular
volume and panning values.

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Multi-channel Support</span>

</div>

<div class="txt">

OM sound objects support arbitrary number of channels for audio files,
but the default OM player will only read mono and stereo files. In order
to read multi-channel audio files, please refer to the "**Alternative
Players**" section of this page.

</div>

</div>

<div class="part">

## <span>The LibAudioStream Player</span>

<div class="part_co">

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>LibAudioStream</span>

</div>

<div class="txt">

(c)
[<span>GRAME </span>](http://www.grame.fr/ "http://www.grame.fr/ (nouvelle fenêtre)"):
see
[<span>http://libaudiostream.sourceforge.net/</span>](http://libaudiostream.sourceforge.net/ "http://libaudiostream.sourceforge.net/ (nouvelle fenêtre)")

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Tracks</span>

</div>

<div class="txt">

Every sound object can be assigned a particular audio track.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>Setting Tracks to the Sound Objects</span>

</div>

<div class="linkUL">

  - [<span>The Sound Object</span>](Sound.md)
  - [<span>The Sound Editor</span>](SoundEditor.md)

</div>

</div>

<div class="txt">

Sound rendering can then be controlled for the different track using the
AUDIO-MIX-CONSOLE objects.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Sample Rate</span>

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
<p>The audio player has a single sample-rate (by default, 44100Hz).</p>
<p>If you want to play files with a different sample rate, you need to change the default player sample rate. To do so, go to the OM preferences, <code class="label_tl">Audio</code> tab, and set the player sample rate accordingly.</p>
<p>Consequently, it is not possible to play several files at the same time with different sample rates.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/las-prefs.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/las-prefs_1.png" width="300" height="76" alt="las-prefs_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc tip">

<div class="bloc_ti tip_ti">

<span>Bad Sample-Rate</span>

</div>

<div class="txt">

If you experiment audible slowdowns or accelerations at playing sounds,
this may be because the sample rate of the player is not the same as the
sample rate of your audio file.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>The Audio-Mix-Console</span>

</div>

<div class="txt">

**AUDIO-MIX-CONSOLE** is another OM object allowing to set and send
control values for the OM audio player.

It can be instanciated as a standard OM object as a box.

</div>

<div class="caption">

<div class="caption_co">

![amc.png](../res/amc.png)

</div>

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
<p>By default, the Audio-Mix-Console has only one track. Set a different number to the second ( nbtracks ) input in order to instanciate it with another number of tracks.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/amc8tracks.png" width="91" height="122" alt="amc8tracks.png" />
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
<p>Double click on the bo to open the AUDIO-MIX-CONSOLE editor. This editor actually corresponds to a real console for the control of the OM audio player.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/mix-console.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/mix-console_1.png" width="300" height="140" alt="mix-console_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc complement">

<div class="txt">

Every time a parameter (volume, panning) is changed on the
AUDIO-MIX-CONSOLE editor, it is immediately sent to the audio player and
affects current or future audio playbacks.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Playing Controls</span>

</div>

<div class="txt">

The Audio-Mix-Console can also be considered a "stadard" musical object,
and played as such.

Press `space` to "play" the AUDIO-MIX-CONSOLE. All the control values
for its different tracks will immediately be sent to the audio player.

</div>

</div>

<div class="bloc complement">

<div class="txt">

The AUDIO-MIX-CONSOLE can also be used in a Maquette. At a given time
(when the playing cursor reaches the Audio-Mix-Console box), this box
will modify the values of the different audio player parameters.

</div>

</div>

</div>

</div>

<div class="part">

## <span>Alternative Audio Players</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

Alternative audio players can be installed and registered in OM.

Currently this is the case for the **MultiPlayer**, a standalone
application which communicates with OM and can render multi-channel
audio as well as ambisonics-encoded files.

</div>

</div>

<div class="bloc complement">

<div class="bloc_ti complement_ti">

<span>MultiPlayer</span>

</div>

<div class="txt">

MultiPlayer by Marlon Scumacher, CIRMMT - McGill University

</div>

<div class="txt">

You can download the MultiPlayer (MacOSX only) at the following pages :

Ircam forum softwares : [<span>OpenMusic download
pages</span>](http:/forumnet.ircam.fr/697.md "http://forumnet.ircam.fr/697.html (nouvelle fenêtre)").

OMPrisma pages at McGill/IDMIL :
[<span>http://www.idmil.org/software/omprisma</span>](http://www.idmil.org/software/omprisma "http://www.idmil.org/software/omprisma (nouvelle fenêtre)")

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Selecting the Player</span>

</div>

<div class="txt">

There are two ways for changing the player.

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
<li><span>Using the contextual menu on a sound box, selecting the <code class="menuPath_tl">Player</code> menu item.</span></li>
</ul>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/box-player.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/box-player_1.png" width="300" height="88" alt="box-player_1.png" /></a>
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
<p>Inside the sound editor, using the <code class="menuPath_tl">Player</code> menu.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/editor-player.png" width="211" height="164" alt="editor-player.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Launching the MultiPlayer</span>

</div>

<div class="txt">

When the MultiPlayer is selected, it should be launched automatically
(if the player application path has been set up correctly, see below).
If not, it can be necessary to launch the application manually.

</div>

</div>

<div class="bloc tip">

<div class="txt">

If a sound box does not play, it maight be that it is assifgned to a
player which is not currently active...

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>MultiPlayer Setup</span>

</div>

<div class="txt">

For optimal use, the MultiPlayer options might be set in the OM
preferences, `Audio` tab.

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
<p>Set the correct path to the MultiPlayer application if needed.</p>
<p>Change the OSC communication ports if they have been changed in the MultiPlayer side.</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<a href="../res/multi-prefs.png" class="overLnk" title="Cliquez pour agrandir"><img src="../res/multi-prefs_1.png" width="300" height="128" alt="multi-prefs_1.png" /></a>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="bloc note">

<div class="txt">

Note that default preference values should work with the default values
of the MultiPlayer.

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
          - <span id="i2" class="outLeftSel_yes"><span>Audio
            Player</span></span>
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
précédente</span>](SoundEditor.md "page précédente(Sound Editor)")<span class="hidden">
| </span>[<span>page
suivante</span>](SoundTools.md "page suivante(Sound Tools)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
