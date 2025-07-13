Navigation : [page
precedente](Managing_GEN_function_and_sound_files "page
précédente\(Managing GEN function and sound files\)") | [page
suivante](02-Global_tables "Next\(Global tables\)")

Definition

Local tables are tables passed to an input of a OMChroma class whose name ends
with "env". These inputs are not processed polymorphically in the same way as
explained in the tutorial [12-Slot-
polymorphism](12-Slots_polymorphism). These inputs are considered to
have a different kind of structures, that will be converted into GEN
instructions in Csound (see the Csound manual for a complete explanation of
GEN functions).

## Tutorial Local Tables

[![](../res/local_tables_1.png)](../res/local_tables.png "Cliquez pour
agrandir")

Patch description

This patch shows three different ways of specifying local tables in OMChroma.
In these examples, the tables are the amplitude envelopes of an add-1 class.

**Example A**

The tables are passed to the add-1 class as a BPF class. These tables will be
converted into a GEN routine of type 7 (linear break-point function) for each
element of the event, starting with the f1000 by default. As a consequence,
each element will have its own GEN function, even if the data are the same.

NB: Since the table will rescaled between 0 and 1, the absolute size of the
numbers is not important.

WARNING: BPF's are initialized with a decimal precision (last input on the
right) of 0. This means, that only integer numbers are considered, and that
floating point numbers will not be taken into account (only the digit before
the comma will be used). To avoid this, improve the decimal precision by
changing 0 into a larger number (5 to 7 are recommended).

 **Example B**

The tables are passed to the add-1 class as GEN07 (linear break-point
function) and GEN05 (exponential break-point functions) classes. These are
specialized classes that directly correspond the the equivalent Csound GEN
routines. Notice that one can specify a GEN05, that is a table with an
exponential interpolation between the segments, whereas, when passing a BPF,
the BPF will be always converted into a GEN07 routine.

WARNING 1: GEN05, being exponential, cannot have a point = 0 (as exponential
interpolations do not go to 0). As a consequence, unless a more elaborated
orchestra is used, a GEN05 used as an amplitude envelope will produce a
(probably small) click at the end of the sound.

WARNING 2: the y-values of these classes are rescaled between 0 and 1 by
Csound. There exist also the classes GEN-05 and GEN-07, where the values are
not rescaled (negative type number, see below and the Csound documentation).

 **Example C**

The tables use the class GEN-CS-TABLE. This class allows to specify any type
of GEN routine (not only the types 5 and 7 used here). The type is given in
the input gen-num, while the number of the table is specified in the input id.
The param-list (last input on the right) will then have to exactly correspond
to the format required by Csound, as no conversion will be done in this case
(see Warning below).

GEN 5/7 specificities.

In Csound, the break-point GEN routines (type 5 and 7) have a specific syntax
that obeys to the following rule: y1 dx1 y2 dx2... yN, where:

yX = value of the Y-axis. Is the GEN type is positive (ex. 7), the values will
be rescaled between 0.0 and 1.0, if the GEN type is negative (ex. -7), no
rescaling will be performed.

dxX = distance (in points) between yX-1 and yX (NOT the absolute value of the
X axis). All the distances should sum up to the value specified by size. If
the sum is too large, the table will be truncated, if it is too small, the
table will be zero padded.

Size of GEN type 5 and 7

Notice that the size of the GEN routines type 5 and 7 MUST be equal to a
**POWER OF 2 + 1**.

Using BPFs only the data will be passed to the GEN routine and a GEN of type 7
(linear break-point function) will be used.

References :

Plan :

  * [OMChroma User Manual](OMChroma)
  * [System Configuration and Installation](Installation)
  * [Getting started](Getting_Started)
  * [Managing GEN function and sound files](Managing_GEN_function_and_sound_files)
    * Local tables
    * [Global tables](02-Global_tables)
    * [Global tables vs. local tables](03-Global_tables_versus_local_tables)
    * [GEN01 function table](04-GEN01_function_table)
    * [How to pass sound files](05-How_to_pass_sound_files)
  * [Predefined Classes](Predefined_classes)
  * [User-fun](User-fun)
  * [Creating a new Class](Creating_a_new_Class)
  * [Multichannel processing](06-Multichannel_processing)
  * [Appendix A - Common Red Patches](A-Appendix-A_Common_red_patches)

Navigation : [page
precedente](Managing_GEN_function_and_sound_files "page
précédente\(Managing GEN function and sound files\)") | [page
suivante](02-Global_tables "Next\(Global tables\)")
