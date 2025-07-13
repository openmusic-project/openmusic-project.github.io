
Navigation : [Previous](01-Local_tables "page précédente\(Local
tables\)") | [Next](03-Global_tables_versus_local_tables
"Next\(Global tables vs. local tables\)")
Definition

Global tables are tables passed to the keyword **:tables** of **synthesize**
(to show it, select **synthesize** , type " **k** " and choose **:tables** in
the list) and not to the input of a synthesis event. These tables must have a
number, that will correspond to the precise f number used by Csound. It is
this number (integer) that will have to be passed as an argument to the input
of the synthesis event (only inputs that end with "env").

## Tutorial Global Tables

[![](../res/global_tables_1.png)](../res/global_tables.png "Cliquez pour
agrandir")

Patch description

This patch shows the usage of global tables in OMChroma. In these examples the
tables are the amplitude envelope of the ADD-1 classes.

 **Example A**

The tables are initialized by a string connected to the keyword inlet "
**:table** s" of **synthesize**. These tables must exactly correspond to the
syntax required by Csound. They are actually perfectly valid Csound
instructions.

WARNING: if more than one table is specified, all the strings have to be
included in a list.

 **Example B**

The tables are initialized in a **textfile** object using the following
syntax:

(om::ScSt "<Csound table definition>")

The <Csound table definition> within double quotes must exactly correspond to
the Csound syntax (as in the example A).

REMARK: this specification is very practical when reusing the same tables in
several synthesis processes, or when the tables constitute a data base.

 **Example C**

The tables are initialized as **GEN07** and **GEN05** classes (as in the
tutorial [[[](01-Local_tables)01-Local
tables](01-Local_tables)](01-Local_tables)).

WARNING: if more than one table is specified, all the strings have to be
included in a list.

 **Example D**

The tables are initialized as **a GEN-CS-TABLE** class (as in the tutorial
[[[](01-Local_tables)01-Local
tables](01-Local_tables)](01-Local_tables)).

Global vs. local tables

To grasp the difference between global and local tables read the next section.

References :

Plan :

  * [OMChroma User Manual](OMChroma)
  * [System Configuration and Installation](Installation)
  * [Getting started](Getting_Started)
  * [Managing GEN function and sound files](Managing_GEN_function_and_sound_files)
    * [Local tables](01-Local_tables)
    * Global tables
    * [Global tables vs. local tables](03-Global_tables_versus_local_tables)
    * [GEN01 function table](04-GEN01_function_table)
    * [How to pass sound files](05-How_to_pass_sound_files)
  * [Predefined Classes](Predefined_classes)
  * [User-fun](User-fun)
  * [Creating a new Class](Creating_a_new_Class)
  * [Multichannel processing](06-Multichannel_processing)
  * [Appendix A - Common Red Patches](A-Appendix-A_Common_red_patches)

Navigation : [Previous](01-Local_tables "page précédente\(Local
tables\)") | [Next](03-Global_tables_versus_local_tables
"Next\(Global tables vs. local tables\)")
