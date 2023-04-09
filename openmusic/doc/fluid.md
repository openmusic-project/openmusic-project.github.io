## FLUIDSYNTH AND OM

> This information applies to OM v.7.2 and higher

### Introduction

Since version 7.2, FluidSynth is integrated to OM as a dynamic library.

However, you will need to install fluidsynth on Linux and Mac platforms.


### Installing FluidSynth on Linux

You just have to use your package manager (apt for Debian, dnf for Fedora).

### Installing FluidSynth on Mac

One easy method to install on Mac is to use the [Homebrew](https://brew.sh/) package manager. This will also allow you to install Csound, Lilypond, etc.

Here are the steps you must follow to install Homebrew and FluidSynht:

Press Command+Space and type Terminal and press enter/return key.

Copy and paste the following command in Terminal app:

...
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
...
        
        
 and press enter/return key. Wait for the command to finish.
 
 If you are prompted to enter a password, please type your Mac user's login password and press ENTER. 
 
 Mind you, as you type your password, it won't be visible on your Terminal (for security reasons), but rest assured it will work.
 
 Now, copy/paste and run this command to make brew command available inside the Terminal: 

...
            echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
...


Copy and paste the following command:

...
        brew install fluidsynth
...


Done! You can now use fluidsynth.


###Usage

You can create as much FluidSynth as your RAM allows. 

For each instance of a Fluidsynth created it will be allocated a default port. Ports start from 0.


### Setting Preferences

In order to use FluidSynth as your basic player, first go to the OM preferences MIDI tab:


<img src="./images/fluid/midi-prefs.png" width="512px" align="center">

Then select "**fluidsynth**" in the pop-up menu.

This will allow to set the **fluidsynth** **player** as the default **player** for all your SCORE objects (chord, chord-seq, voice, etc.)  

In case you have imported patches with different **players** settings, you can still change the **player** individualy using the SCORE's editor button <img src="./images/player-button.png" width="25px" style="margin: 0px;">.

This panel will appear:

<img src="./images/fluid/player.png" width="512px" align="center"> 


**Note:** Once **fluidsynth** is selected as the default **player**, **Shift of MIDI channels** will be set by default as **always** and **Number of channels** to **depending on approx**. 


### Creating FluidSynth instances

In order to create FluidSynth instances, go to the **Fluidsynth** tab in the preference window.

Choose the number of synth you need in the **Number of Synths.** box and press **Apply** button.

Then press on **Load Synths** button


<img src="./images/fluid/fluid-prefs02.png" width="512px" align="center">

If you need to delete the synth use the **Delete Synths** button.


###SF2 managment




### MIDI setup in OM Preferences

<img src="./images/midi-prefs-612.png" width="300px" align="right">

Most of the MIDI settings are in the **MIDI** tab of OM Preferences.


When you change one of these options, push **Apply** in order to validate/apply the choice, and update the rest of the controls. 

The "Ports setup" button will allow you to set the routing of MIDI events to external MIDI devices and synthesizers. 
 
**You need to have a MIDI synthesizer or device running or connected to your system.** 

- **Mac OSX**: Apple stopped supporting MIDI playback since QuickTime X / MacOS 10.6.     
My personal pick for quick and easy testing and playback on MacOSX is **[SimpleSynth](http://notahat.com/simplesynth/)**:  (free). Just set the MIDI source carefully (same as MIDI out in OM) and it should work immediately. 

- **Windows**: Windows contains a default MIDI synthesizer.

When you click on the setup button, the following dialog appears, which allows to select devices and synthesizers to connect to your MIDI ports.

<img src="./images/portmidi-setup-612.png" width="650px">

=> **Add in/out ports using the `+` button (remove them with the `-` buttons).**    
For the moment you might be interested in **one OUT port only (#0)**.

For each port a menu allows you to select any connected device or syhthesizer. 
The contents of these menus depends the devices and synthesizers running and connected _when you started OM_.     
- You need to restart OM if you connect or start another synth or device.     
- The use of virtual MIDI buses (e.g. IAC buses on MacOSX -- see note below) allows to cope with this drawback (the IAC bus is always open, and you can connect/unconnect devices to/from it anytime). 

**Notes:**

* **Your system may allow you to enable virtual MIDI buses (e.g. IAC buses on MacOSX).    
Virtual MIDI buses are convenient for they allow to abstract the device connection issues out from OM (e.g. connect port 0 to IAC bus 1 and then set IAC bus 1 as the input of your synthesizer).**      
More info, for instance [here](https://www.ableton.com/en/articles/using-virtual-MIDI-buses-live/) :)
  
* In the device lists you will see all detected MIDI synths or buses, including, for instance, the Max or the MicroPlayer MIDI inputs ("bm-microton" -- see picture above).      
You can therefore also play using MicroPlayer via MIDI (but in this case, it will not play microtones).

* Apparently non-UTF-8 characters in device names can make them not appear in the menu lists.
  
=> _**Press OK to validate the settings.**_

 



### Still not working ? 

Please report/comment on the ForumNet thread :      
[http://forumnet.ircam.fr/user-groups/openmusic/forum/topic/no-sound-in-scores/#post-12178](http://forumnet.ircam.fr/user-groups/openmusic/forum/topic/no-sound-in-scores/#post-12178)
