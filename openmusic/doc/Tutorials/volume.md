OpenMusic Reference  
---  
[Prev](third)| | [Next](x-append)  
  
* * *

# volume

![](figures/functions/midi/volume.png)

  
  
volume  
  
(midi module) \-- sends a MIDI volume message  

## Syntax

   **volume**    vol chans &optional port    

## Inputs

name| data type(s)| comments  
---|---|---  
  _vol_ |  an integer| defaults to 100  
  _chans_ |  an integer or list thereof| defaults to 1  
  _port_ |  an integer or list thereof| The MIDI port(s) to send on  
  
## Output

output| data type(s)| comments  
---|---|---  
first| nil| This output will always return nil; the volume message is sent out
anyway.  
  
## Description

This module sends a midi volume message out on the channel (or channels, if
 _chans_  is a list) specified. The midi volume message has a range of 0 to
127.

The optional input  _port_  allows you to specify which MIDI port the
message(s) will go out on.

![Note](figures/images/note.gif)|  **OM and MIDI**  
---|---  
 |

OM can be configured to communicate with any [_MIDI_](glossary#MIDI)
device. See the chapter on [configuring Midishare](getting-started.install-
midishare) for more information.  
  
* * *

[Prev](third)| [Home](index)| [Next](x-append)  
---|---|---  
third| [Up](funcref.main)| x-append

