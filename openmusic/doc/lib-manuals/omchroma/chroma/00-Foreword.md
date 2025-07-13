
Navigation : [Previous](Installation "page précédente\(System
Configuration and Installation\)") | [Next](01-Csound "page
suivante\(Csound\)")

You must have the latest version of OpenMusic and the OMChroma library
installed on your computer (see Links section).
[](http://forumnet.ircam.fr/shop/fr/forumnet/57-libraries-openmusic
"http://forumnet.ircam.fr/shop/fr/forumnet/57-libraries-openmusic
\(nouvelle fenêtre\)")

If you do not have a running version of csound, download and install one. When
the installation is complete, you should have an executable version of csound
in /usr/local/bin. To be sure that csound exists, open a Terminal window and
type:

> ls /usr/local/bin

The name "csound" should be contained in the result.

The latest version of Csound is 6.01 (November 2013). The latest Csound 5
version is 5.19. There is a substantial change between Csound 5.x and Csound
6.x. Only OMChroma 4.1 is compatible with both Csound 5 and Csound 6 (see
Links to download them).

Csound 64 bits

Csound 6 comes in two versions, called "csound" and "csound64". The latter is
64 bits. FOR THE TIME BEING, only csound 32 bits will be called by OMChroma.

To run csound 64 bits, proceed as follows:

Open a Terminal window and type:

> cd /usr/local/bin

> sudo mv csound csound32

> ln -s csound64 csound

This will create a symbolic link to csound64 called "csound". In order not to
loose the executable version of csound (32 bits), it was renamed csound32
(second line, this will require the super user password). In this way, when
OMChroma calls csound, it will automatically run the 64 bits version.

## OMChroma

OMChroma is a special-purpose library dedicated to the high-level musical
control of sonic processes. It implements the concept of a "virtual
synthesizer" and is currently using Csound as a real synthesizer, the most
popular and widely used free synthesis software, available for different
platforms.

OMChant

OMChant is now a separated library for the control of the Chant synthesiser,
via an SDIF file. As a consequence, the few tutorials that used to show how to
control Chant within OMChroma have been moved from OMChroma to the tutorials
of OMChant.

## Entry requirements

We assume you have a good knowledge of OpenMusic and know how to manage the OM
Workspace. For any problems with OpenMusic consult the OM Documentation (see
Links).

References :

Plan :

  * [OMChroma User Manual](OMChroma)
  * [System Configuration and Installation](Installation)
    * Foreword
    * [Csound](01-Csound)
    * [Libraries and main default values](02-Libraries_and_mains_default_values)
    * [Importing tutorials](03-_Importing_tutorials)
    * [Extended preferences](04-Extended_preferences)
    * [Links](05-Links)
  * [Getting started](Getting_Started)
  * [Managing GEN function and sound files](Managing_GEN_function_and_sound_files)
  * [Predefined Classes](Predefined_classes)
  * [User-fun](User-fun)
  * [Creating a new Class](Creating_a_new_Class)
  * [Multichannel processing](06-Multichannel_processing)
  * [Appendix A - Common Red Patches](A-Appendix-A_Common_red_patches)

Navigation : [Previous](Installation "page précédente\(System
Configuration and Installation\)") | [Next](01-Csound "page
suivante\(Csound\)")
