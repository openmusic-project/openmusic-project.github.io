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
</span><span class="stkSel_yes"><span>Audio
Preferences</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Externals.md "page précédente(External Libraries)")<span class="hidden">
| </span>[<span>page suivante</span>](SDIF.md "page suivante(SDIF)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Audio Preferences</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

The `Audio` tab in the OM Preferences window gathers a number of options
related to audio features and sound processing in OM.

</div>

<div class="caption">

<div class="caption_co">

[![audioprefs\_1.png](../res/audioprefs_1.png)](../res/audioprefs.png "Cliquez pour agrandir")

</div>

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>General Information about OM Preferences</span>

</div>

<div class="linkUL">

  - [<span>Preferences</span>](Preferences.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>LibAudioStream Sample Rate</span>

</div>

<div class="txt">

This option determines the sample rate of the default OM player. OM
supports audio file in any sample rate, but the player has one single
rate so playing files in a different sample rate may produce
accelerations or slowdowns.

Some synthesis functions in [<span>External sound processing
libraies</span>](Externals.md) (e.g. OMChroma) use this parameter to
determine the default sound synthesis output sample rate (when not given
explicitely in the synthesis parameters).

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>About the Audio Player</span>

</div>

<div class="linkUL">

  - [<span>The Audio Player</span>](AudioPlayer.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>MultiPlayer Options</span>

</div>

<div class="txt">

This part allows to set up the path and default OSC options for an
alternative audio Player.

</div>

<div class="linkSet">

<div class="linkSet_ti">

<span>More about the MultiPlayer and Options</span>

</div>

<div class="linkUL">

  - [<span>The Audio Player</span>](AudioPlayer.md)

</div>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Default Audio Format</span>

</div>

<div class="txt">

This option allows to choose between AIFF and WAV for the default output
format of sound synthesis or processing functions.

This parameter is used by the
[<span>SAVE-SOUND</span>](SoundProcessing.md) function and by some
[<span>External sound processing libraies</span>](Externals.md).

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Default Resolution</span>

</div>

<div class="txt">

This options allows to choose a default resolution for the output of
sound synthesis or processing functions. Standard accepted standard
values are 8, 16 or 24 bits. Some software also accept 32 bits.

This parameter is used by some [<span>External sound processing
libraies</span>](Externals.md) (e.g. OM2Csound, OM-SuperVP, OM-Chant,
OMChroma...)

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>If Output File Exists...</span>

</div>

<div class="txt">

This options allows OM to determine what to do when some file to be
created by a sound analysis/synthesis process (a sound file, but also
possibly an SDIF file for sound analyses, or other temporary files).

The two available possibilities are

  - <span> **Replace **: the new file deletes and replace the existing
    one</span>
  - <span> **Auto-rename** : the new file is given a new name in order
    to preserve the existing one (new name is basically of the form N ,
    where N is a number assigned automatically.</span>

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Delete Temporary Files</span>

</div>

<div class="txt">

During sound processes, temporary files are often created to store
parameters, intermediary data, etc. With this option you can choose
whether the temporary files should be deleted after the process is done
or not. Keeping temporary file may allow to debug these process but may
also saturate your disk space with unnecessary files.

**Note :** files are considered "temporary" when they do not appear in
the OM patches. If, for instance, you use an SDIF or text file as input
or intermediary data explicitely specified in your patch, this file
should not be trashed at the end of your process.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Normalize Output</span>

</div>

<div class="txt">

Some sound processing and synthesis utilities from the [<span>External
sound processing libraies</span>](Externals.md) propose to normalize the
resulting output.

This option allows to set the default behaviour in this case, and to
specify the default normalization level (used if no information is given
explicitely in the patch).

Note that OM does not perform normlization by itself, so the contents of
the normalization menu is empty (and the option disabled) by default.
Normalisers are loaded with external libraries (e.g. OM2Csound or
OM-SuperVP).

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Print System Outputs</span>

</div>

<div class="txt">

Thsi option allows to redirect the standard output of the external sound
analysis/synthesis processes to the OM Listener.

This option is extremely useful in order to debug these process (see
error messages) and understand problems. When output prints are
important, however, this can significanltly slow down the evaluation.

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
          - [<span>Sound Processing</span>](SoundProcessing.md)
          - [<span>Recording</span>](SoundRecording.md)
          - [<span>External Libraries</span>](Externals.md)
          - <span id="i0" class="outLeftSel_yes"><span>Audio
            Preferences</span></span>
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
précédente</span>](Externals.md "page précédente(External Libraries)")<span class="hidden">
| </span>[<span>page suivante</span>](SDIF.md "page suivante(SDIF)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
