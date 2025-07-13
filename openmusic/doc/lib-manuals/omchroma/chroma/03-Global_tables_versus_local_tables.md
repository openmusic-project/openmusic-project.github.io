Navigation : [Previous](02-Global_tables "page
précédente\(Global tables\)") | [page
suivante](04-GEN01_function_table "Next\(GEN01 function
table\)")
# Global tables vs. local tables

## Tutorial Global tables vs. local tables

There is quite a big difference between managing global or local tables. Even
though the same result (that is, the same audio file) can be obtained using
either local or global tables, the programming flow follows two different
ways.

Global tables are instanciated only once, and are addressed in a synthesis
event by their function number (Csound statement: f N). Several calls to a
table, by giving the same function number, will always point to the same
physical GEN table. This solution is very optimized.

Local tables are instanciated for each element of a synthesis event. As a
consequence, even if the input data (therefore the instanciated table) are
strictly the same, OMChroma will build a new GEN function for each element. In
this case, more memory will be needed.

[![](../res/local_versus_global_1.png)](../res/local_versus_global.png
"Cliquez pour agrandir")

|

Compare the patches on the left and on the right.

The final result is the same, whether using local or global tables.

  * Select "nil" in the single-item-list (this will only compute an orc and sco file, without rendering them).
  * Select the box **textfile** , unblock it (type "B" on the selected box) and evaluate it.
  * Double click on the box **textfile** to open the editor.
  * Look at the differences between the two score files.

To render the process, select "t" in the single-item-list" and evaluate the
**sound** object, as usual.  
  
---|---  
  
Score file using local tables

|

Score file using global tables  
  
---|---  
  
; Defined by chroma classes:

; GEN functions *****

; audio wave

f1 0 65537 10 10

; Loaded tables:

; Generated tables:

;------ Lines for event n. 1 --------

f 1000 0 513 7 0.0000 6.0 10.0 506.0 0.0000

f 1001 0 513 7 0.0000 6.0 10.0 506.0 0.0000

f 1002 0 513 7 0.0000 6.0 10.0 506.0 0.0000

f 1003 0 513 7 0.0000 6.0 10.0 506.0 0.0000

f 1004 0 513 7 0.0000 6.0 10.0 506.0 0.0000

f 1005 0 513 7 0.0000 6.0 10.0 506.0 0.0000

f 1006 0 513 7 0.0000 6.0 10.0 506.0 0.0000

f 1007 0 513 7 0.0000 6.0 10.0 506.0 0.0000

f 1008 0 513 7 0.0000 6.0 10.0 506.0 0.0000

f 1009 0 513 7 0.0000 6.0 10.0 506.0 0.0000

f 1010 0 513 7 0.0000 6.0 10.0 506.0 0.0000

f 1011 0 513 7 0.0000 6.0 10.0 506.0 0.0000

f 1012 0 513 7 0.0000 6.0 10.0 506.0 0.0000

f 1013 0 513 7 0.0000 6.0 10.0 506.0 0.0000

f 1014 0 513 7 0.0000 6.0 10.0 506.0 0.0000

f 1015 0 513 7 0.0000 6.0 10.0 506.0 0.0000

f 1016 0 513 7 0.0000 6.0 10.0 506.0 0.0000

f 1017 0 513 7 0.0000 6.0 10.0 506.0 0.0000

f 1018 0 513 7 0.0000 6.0 10.0 506.0 0.0000

f 1019 0 513 7 0.0000 6.0 10.0 506.0 0.0000

i1 0.000 0.100 -6.000 440.000 1000.000

i1 0.100 0.100 -6.000 440.000 1001.000

i1 0.200 0.100 -6.000 440.000 1002.000

i1 0.300 0.100 -6.000 440.000 1003.000

i1 0.400 0.100 -6.000 440.000 1004.000

i1 0.500 0.100 -6.000 440.000 1005.000

i1 0.600 0.100 -6.000 440.000 1006.000

i1 0.700 0.100 -6.000 440.000 1007.000

i1 0.800 0.100 -6.000 440.000 1008.000

i1 0.900 0.100 -6.000 440.000 1009.000

i1 1.000 0.100 -6.000 440.000 1010.000

i1 1.100 0.100 -6.000 440.000 1011.000

i1 1.200 0.100 -6.000 440.000 1012.000

i1 1.300 0.100 -6.000 440.000 1013.000

i1 1.400 0.100 -6.000 440.000 1014.000

i1 1.500 0.100 -6.000 440.000 1015.000

i1 1.600 0.100 -6.000 440.000 1016.000

i1 1.700 0.100 -6.000 440.000 1017.000

i1 1.800 0.100 -6.000 440.000 1018.000

i1 1.900 0.100 -6.000 440.000 1019.000

|

; Defined by chroma classes:

; GEN functions *****

; audio wave

f1 0 65537 10 10

; Loaded tables:

f10 0 4097 7 0 50 1 4046 0

; Generated tables:

;------ Lines for event n. 1 --------

i1 0.000 0.100 -6.000 440.000 10.000

i1 0.100 0.100 -6.000 440.000 10.000

i1 0.200 0.100 -6.000 440.000 10.000

i1 0.300 0.100 -6.000 440.000 10.000

i1 0.400 0.100 -6.000 440.000 10.000

i1 0.500 0.100 -6.000 440.000 10.000

i1 0.600 0.100 -6.000 440.000 10.000

i1 0.700 0.100 -6.000 440.000 10.000

i1 0.800 0.100 -6.000 440.000 10.000

i1 0.900 0.100 -6.000 440.000 10.000

i1 1.000 0.100 -6.000 440.000 10.000

i1 1.100 0.100 -6.000 440.000 10.000

i1 1.200 0.100 -6.000 440.000 10.000

i1 1.300 0.100 -6.000 440.000 10.000

i1 1.400 0.100 -6.000 440.000 10.000

i1 1.500 0.100 -6.000 440.000 10.000

i1 1.600 0.100 -6.000 440.000 10.000

i1 1.700 0.100 -6.000 440.000 10.000

i1 1.800 0.100 -6.000 440.000 10.000

i1 1.900 0.100 -6.000 440.000 10.000  
  
References :

Plan :

  * [OMChroma User Manual](OMChroma)
  * [System Configuration and Installation](Installation)
  * [Getting started](Getting_Started)
  * [Managing GEN function and sound files](Managing_GEN_function_and_sound_files)
    * [Local tables](01-Local_tables)
    * [Global tables](02-Global_tables)
    * Global tables vs. local tables
    * [GEN01 function table](04-GEN01_function_table)
    * [How to pass sound files](05-How_to_pass_sound_files)
  * [Predefined Classes](Predefined_classes)
  * [User-fun](User-fun)
  * [Creating a new Class](Creating_a_new_Class)
  * [Multichannel processing](06-Multichannel_processing)
  * [Appendix A - Common Red Patches](A-Appendix-A_Common_red_patches)

Navigation : [Previous](02-Global_tables "page
précédente\(Global tables\)") | [page
suivante](04-GEN01_function_table "Next\(GEN01 function
table\)")
