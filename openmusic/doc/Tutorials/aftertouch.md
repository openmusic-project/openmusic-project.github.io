OpenMusic Reference  
---  
[Prev](addbox2maquette)| | [Next](align-chords)  
  
* * *

# aftertouch

![](figures/functions/midi/aftertouch.png)

  
  
aftertouch  
  
(midi module) \-- sends a MIDI aftertouch message  

## Syntax

   **aftertouch**  values chans  

## Inputs

name| data type(s)| comments  
---|---|---  
  _values_ |  an integer or list thereof |  
  _chans_ |  an integer| defaults to 1  
  
## Output

output| data type(s)| comments  
---|---|---  
first| nil| This output will always return nil; the aftertouch message is sent out anyway.  
  
## Description

 aftertouch  sends an aftertouch message (or messages, if  _values_  is a
list) of pressure  _values_  on the channel or channels specified. Note that
 aftertouch  (number 208 in the MIDI standard) is used to send a general
channel pressure message, equivalent to the highest pressure among the keys
pressed, while [ polykeypres ](polykeypres) is used to send individual
key pressure messages.

| ![Note](figures/images/note.gif)|  **OM and MIDI**|  
|--|
|OM can be configured to communicate with any [_MIDI_](glossary#MIDI) device. See the chapter on [configuring Midishare](getting-started.install-midishare) for more information.| 

 
* * *

[Prev](addbox2maquette)| [Home](index)| [Next](align-chords)  
---|---|---  
addbox2maquette| [Up](funcref.main)| align-chords

