
Navigation : [Previous](04-GEN01_function_table "page
précédente\(GEN01 function table\)") | [page
suivante](Predefined_classes "Next\(Predefined Classes\)")

## Tutorial How to pass a sound file

This tutorial uses the class **smpl-1** , which, as explained in the previous
tutorial, does not load a sound file into a GEN01 table, but reads it directly
from the disk. In this case, the input **afil** only needs the specification
of the sound file.

[![](../res/how_to_pass_audio_file_1.png)](../res/how_to_pass_audio_file.png
"Cliquez pour agrandir")

Patch description

The sound file can be passed to the OMChroma **smpl-1** class by means of:

  * A) Function in-file (the file must be found in the folder "in-files")
  * B) Name as a character string (the file must be found in the folder "out-files" \- do not forget the file's extension)
  * C) An integer (the file must be found in the folder "out-files" and be called "soundin.<integer>")
  * D) A sound object
  * E) The absolute pathname (Lisp)
  * F) The absolute pathname (text)

Warning

The workspace you are using must be named "OMChroma_Tutorial" or insert your
workspace's name and its path.

References :

Plan :

  * [OMChroma User Manual](OMChroma)
  * [System Configuration and Installation](Installation)
  * [Getting started](Getting_Started)
  * [Managing GEN function and sound files](Managing_GEN_function_and_sound_files)
    * [Local tables](01-Local_tables)
    * [Global tables](02-Global_tables)
    * [Global tables vs. local tables](03-Global_tables_versus_local_tables)
    * [GEN01 function table](04-GEN01_function_table)
    * How to pass sound files
  * [Predefined Classes](Predefined_classes)
  * [User-fun](User-fun)
  * [Creating a new Class](Creating_a_new_Class)
  * [Multichannel processing](06-Multichannel_processing)
  * [Appendix A - Common Red Patches](A-Appendix-A_Common_red_patches)

Navigation : [Previous](04-GEN01_function_table "page
précédente\(GEN01 function table\)") | [page
suivante](Predefined_classes "Next\(Predefined Classes\)")
