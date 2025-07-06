OpenMusic Reference  
---  
[Prev](mf-info)| | [Next](mktree)  
  
* * *

# midi-o

![](figures/functions/midi/midi-o.png)

  
  
midi-o  
  
(midi module) \-- sends midi data  

## Syntax

`` **midi-o**` bytes &optional port `

## Inputs

name| data type(s)| comments  
---|---|---  
` _bytes_`|  a list of integers|  
` _port_`|  an integer or list thereof| The MIDI port to send on  
  
## Output

output| data type(s)| comments  
---|---|---  
first| nil| This output will always return nil; the data is sent out anyway.  
  
## Description

`midi-o` is a general-purpose method of sending midi data. It sends the data
in `_bytes_` out to whatever MIDI devices are connected. Sending (144 60 64)
for example will send a Note On message of MIDI note 60 (middle C) on channel
1 with a key [_velocity_](glossary#VELOCITY) of 64. Setting the key
velocity to 0 - (144 60 0)turns the note off.

![Note](figures/images/note.gif)|  **OM and MIDI**  
---|---  
 |

OM can be configured to communicate with any [_MIDI_](glossary#MIDI)
device. See the chapter on [configuring Midishare](getting-started.install-
midishare) for more information.  
  
* * *

[Prev](mf-info)| [Home](index)| [Next](mktree)  
---|---|---  
mf-info| [Up](funcref.main)| mktree

