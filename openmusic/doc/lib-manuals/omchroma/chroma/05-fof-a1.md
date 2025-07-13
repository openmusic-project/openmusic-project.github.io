
Navigation : [Previous](04-fof-4 "page précédente\(Formant Wave-
Function Synthesis with FOF-4\)") | [Next](06-fof-a4 "page
suivante\(Formant Wave-Function Synthesis with FOF-A4\)")

## Tutorial FOF-A1

[![](../res/fof-a1_1.png)](../res/fof-a1.png "Cliquez pour agrandir")

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

-6.0  
  
f0

|

Frequency of the impulses that create the sinebursts [Hz]

|

220.0  
  
freq

|

Formant frequency [Hz]

|

609.0  
  
bw

|

Formant bandwidth at -6dB [Hz]

|

77.0  
  
aenv

|

Amplitude Envelope [GEN]

|

Instance: GEN07  
  
win

|

Attack times of the sinusoid burst [sec]

|

0.01  
  
wdur

|

Duration of the sinusoid burst [sec]

|

0.2  
  
wout

|

Decay times of the sinusoid burst [sec]

|

0.1  
  
oct

|

Octaviation factor of the fof [flt >=0.0]

|

0.0  
  
phs

|

Starting phase of the fundamental [%]

|

0.0  
  
par1

|

Skip initialisation (if non-zero)

|

0  
  
Class description

The FOF-A1 Class realizes a Formant Wave-Function Synthesis with the following
controls:

  * The main amplitude,
  * The fundamental frequency,
  * The formant frequency,
  * The bandwidth of the formant,
  * The amplitude envelope by means of a GEN routine,
  * The attack, the oveall duration and decay of the sinusoid burst,
  * The octaviation factor,
  * The starting phase of the fundamental,
  * The initialisation's skip time.

Common parameters

For the explanation of **f0** , **freq** and **bw** see [Tutorial
FOF-1](01-fof-1)

For the explanation of **win** , **wdur** , **wout** and **oct** see [Tutorial
FOF-2](02-fof-2)

Patch description

The example A deals with the initial phase. Watch out the entry delays. The
events start together in pairs of two.

The example B demonstrates the meaning of initialisation's skip time.

Common Red Patches

For the red patch [C#ed](Component_number_and_entry_delay) and
[Synt](Synt) see [ Appendix
A](A-Appendix-A_Common_red_patches)

## Inside the Class

Csound Orchestra of the FOF-A1 Class.

instr 1

idur = p3

idurosc = 1/p3

iamp = (p4 > 0.0 ? (p4*0.001*0dbfs) : (ampdbfs (p4)))

if0 = p5

ifreq = p6

ibw = p7

iaenv = p8

iwin = p9

iwdur = p10

iwout = p11

ioct = p12

iphs = p13

iskip = p14

imode = 0

iolaps = 100000 ; how many simultaneous FOFs can be played (takes little
memory if not used)

iafun = 1

isigfun = 19

kenv poscil iamp, idurosc, iaenv

asound fof 1.0, if0, ifreq, ioct, ibw, iwin, iwdur, iwout, iolaps, iafun,
isigfun, idur,\

iphs, imode, iskip

outc asound*kenv

endin

Flow chart

[![](../res/fof-a1_1.gif)](../res/fof-a1.gif "Cliquez pour agrandir")

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
      * [Formant Wave-Function Synthesis with FOF-1](01-fof-1)
      * [Formant Wave-Function Synthesis with FOF-2](02-fof-2)
      * [Formant Wave-Function Synthesis with FOF-3](03_fof-3)
      * [Formant Wave-Function Synthesis with FOF-4](04-fof-4)
      * Formant Wave-Function Synthesis with FOF-A1
      * [Formant Wave-Function Synthesis with FOF-A4](06-fof-a4)
    * [Granular Formant Wave Function (FOG)](05-Granular_Formant_Wave_Function_\(FOG\))
    * [Karplus-Strong](06-Karplus-Strong)
    * [Random Amplitude Modulation](07-Random_Amplitude_Modulation)
    * [Sampler](08-Sampler)
    * [Subtractive Synthesis](09-Subtractive_Synthesis)
    * [Wave Shaping Synthesis](10-Waveshaping)
    * [Hybrid Models](11-Hybrid_Models)
  * [User-fun](User-fun)
  * [Creating a new Class](Creating_a_new_Class)
  * [Multichannel processing](06-Multichannel_processing)
  * [Appendix A - Common Red Patches](A-Appendix-A_Common_red_patches)

Navigation : [Previous](04-fof-4 "page précédente\(Formant Wave-
Function Synthesis with FOF-4\)") | [Next](06-fof-a4 "page
suivante\(Formant Wave-Function Synthesis with FOF-A4\)")
