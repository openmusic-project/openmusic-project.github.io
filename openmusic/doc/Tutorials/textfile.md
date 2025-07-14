OpenMusic Reference  
---  
[Prev](temporalboxclass)| | [Next](voice)  
  
* * *

# Textfile

![](figures/classes/textfile.png)

  
  
Textfile  
  
(data module) \--  

## Syntax

  **Textfile**  ` self exp-list ed-mode `

## Slots

name| data type(s)| comments  
---|---|---  
  _self_ | [ **Textfile**](textfile) object|  
  _exp-list_ |  a string containing data of any type|  
  _ed-mode_ |  menu| two options: ` append ` and ` supercede `  
  
## Notes

The [**Textfile**](textfile) class permits you to import and export raw
text data streams (files). The menu input,  _ed-mode_  , controls whether new
elements present at the second input  _exp-list_  will replace the contents of
the file (supercede) or be added to the end (append) when the
[**Textfile**](textfile) is evaluated. A variable (see the chapter on
Classes) may be created from a [**Textfile**](textfile), from which the
contents may be read via the get-set-slot mechanism.

See the [reference for the **Textfile** editor](editors.textfile) for
information on how to import and export textfiles.

* * *

[Prev](temporalboxclass)| [Home](index)| [Next](voice)  
---|---|---  
Temporalbox| [Up](classref.main)| Voice

