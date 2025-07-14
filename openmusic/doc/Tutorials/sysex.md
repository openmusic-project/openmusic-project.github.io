OpenMusic Reference  
---  
[Prev](subs-posn)| | [Next](table-filter)  
  
* * *

# sysex

![](figures/functions/midi/sysex.png)

  
  
sysex  
  
(midi module) \-- sends a MIDI sysex (system exclusive) message  

## Syntax

   **sysex**   databytes &optional port   

## Inputs

name| data type(s)| comments  
---|---|---  
_databytes_ |  a list of integers| defaults to 1 1 1  
_port_ |  an integer or list thereof| optional; The MIDI port(s) to send on  
  
## Output

output| data type(s)| comments  
---|---|---  
first| nil| This output will always return nil; the sysex message is sent out
anyway.  
  
## Description

This module sends out  _databytes_  as a system exclusive message. The system
exclusive message is reserved by the MIDI standard for commands specific to a
particular MIDI device or manufacturer. Sysex data always begins with the byte
$F0 and ends with $F7; you don't need to include these as they are added
automatically by  sysex .

The optional input  _port_  allows you to specify which MIDI port the
message(s) will go out on.

![Note](figures/images/note.gif)|  **OM and MIDI**  
---|---  
 |

OM can be configured to communicate with any [_MIDI_](glossary#MIDI)
device. See the chapter on [configuring Midishare](getting-started.install-
midishare) for more information.  
  
* * *

[Prev](subs-posn)| [Home](index)| [Next](table-filter)  
---|---|---  
subs-posn| [Up](funcref.main)| table-filter

