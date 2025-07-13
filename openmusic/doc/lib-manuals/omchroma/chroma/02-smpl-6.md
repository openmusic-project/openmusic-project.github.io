
Navigation : [Previous](01-smpl-5 "page précédente\(Crossfading
Looper with SMPL-5\)") | [Next](09-Subtractive_Synthesis "page
suivante\(Subtractive Synthesis\)")

## Tutorial SMPL-6

[![](../res/smpl-6_1.png)](../res/smpl-6.png "Cliquez pour agrandir")

Specific Slots

Name

|

Description

|

Default value  
  
---|---|---  
  
amp

|

Maximum Amplitude. Linear from >0.0 to 1000 or in dB from 0 to -∞ (see
[Tutorial Getting Started 02 - Amplitude and Internal
Editor](03-Amplitude_and_internal_editor) for more details)

|

0.0  
  
f0

|

Minimum value of the pitch transposition of input sound by this factor (e.g.
0.5 means one octave lower, 2 is one octave higher, and 1 is the original
pitch). Fractional values are allowed. Negative values are not.

|

2.0  
  
afil

|

Audio file [name, with possible path, sound, string, pathname or GEN01]

|

31  
  
skip

|

(Minimum) starting point when reading an audio file [sec]

|

0.5  
  
aenv

|

Amplitude Envelope [GEN]

|

Instance: GEN07  
  
lpbeg

|

Loop start point [sec]

|

0.3  
  
lpend

|

Loop end point [sec]

|

0.6  
  
win

|

Crossfade time [sec]

|

0.3  
  
mode

|

Loop modes: 0 forward, 1 backward, 2 back-and-forth

|

1  
  
Class description

The Smpl-6 Class is a Crossfading Looper with the following controls:

  * The main ampllitude,
  * The transposition factor,
  * The starting point of the audio file,
  * The amplitude envelope by means of a GEN routine,
  * The loop start and end point,
  * The crossfade time,
  * The loop mode.

Reminder

The only different between [SMPL](01-smpl-5)-5 and SMPL-6 is the skipping
allocation. In SMPL-5 the skip time is set to an absolute value (e.g. in
seconds), instead in SMPL-6 is set in relative value as a percentage and that
is really useful for reverse playing.

Patch description

The example A employs the SMPL-6 instead the example B employs SAMPL-5 with
the same given data. How you can see the difference is the relative skip time
of SMPL-6.

Common Red Patches

For the red patch [C#ed](Component_number_and_entry_delay) see [
Appendix A](A-Appendix-A_Common_red_patches)

## Inside the Class

Csound Orchestra of the SMPL-6 Class.

instr 1

idur = p3

idurosc = 1/idur

iamp = (p4 > 0.0 ? (p4*0.001*0dbfs) : (ampdbfs (p4)))

iamp = iamp/0dbfs ; since sfile is not normalized, reduce amp between 0 and 1

ixpf = p5

ifile = p6 ; must be a GEN01

ilen = ftlen(ifile)/sr ; length of table [sec]

iskip = p7*ilen

iaenv = p8 ; global amplitude envelope

ilpbeg = p9*ilen

ilpend = p10*ilen

ilpxf = p11*ilen

ilpmode = p12

iskp = 0 ; do not skip initialization

isigfun = 19 ; sigmoid function

; global amplitude envelope

k3 poscil iamp, idurosc, iaenv ; file reading

;a1 lposcil 1.0, ixpf, ilpbeg, ilpend, ifile, iphs

a1 flooper2 1.0, ixpf, ilpbeg, ilpend, ilpxf, ifile, iskip, ilpmode, isigfun,
iskp

asound = a1*k3

out asound

endin

Flow chart

[![](../res/smpl-6_1.gif)](../res/smpl-6.gif "Cliquez pour agrandir")

References :

Plan :

  * [OMChroma User Manual](OMChroma)
  * [System Configuration and Installation](Installation)
  * [Getting started](Getting_Started)
  * [Managing GEN function and sound files](Managing_GEN_function_and_sound_files)
  * [Predefined Classes](Predefined_classes)
    * [Additive Synthesis](01-Additive_Synthesis)
    * [Buzz Synthesis](02-Buzz_Synthesis)
    * [Frequency Modulation Synthesis](03-Frequency_modulation)
    * [Formant Wave-Function Synthesis (FOF)](04_Formant_Wave_Function_\(FOF\))
    * [Granular Formant Wave Function (FOG)](05-Granular_Formant_Wave_Function_\(FOG\))
    * [Karplus-Strong](06-Karplus-Strong)
    * [Random Amplitude Modulation](07-Random_Amplitude_Modulation)
    * [Sampler](08-Sampler)
      * [Reading from a sound file](01-Reading_from_a_Sound_File)
      * [Using a deferred table](02-Using_a_deferred_tables)
      * [Crossfading Looper](03-Crossfading_Looper)
        * [Crossfading Looper with SMPL-5](01-smpl-5)
        * Crossfading Looper with SMPL-6
    * [Subtractive Synthesis](09-Subtractive_Synthesis)
    * [Wave Shaping Synthesis](10-Waveshaping)
    * [Hybrid Models](11-Hybrid_Models)
  * [User-fun](User-fun)
  * [Creating a new Class](Creating_a_new_Class)
  * [Multichannel processing](06-Multichannel_processing)
  * [Appendix A - Common Red Patches](A-Appendix-A_Common_red_patches)

Navigation : [Previous](01-smpl-5 "page précédente\(Crossfading
Looper with SMPL-5\)") | [Next](09-Subtractive_Synthesis "page
suivante\(Subtractive Synthesis\)")
