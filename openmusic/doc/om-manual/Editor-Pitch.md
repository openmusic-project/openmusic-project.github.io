Navigation : [Previous](Harmonic-Obj-Editor "page
précédente\(Harmonic Objects\)") | [Next](Editor-Other-Slots
"Next\(Other Slots\)")


# Editing Pitches

The tools of the editors palette define several hierarchic edition levels.

  * ![](../res/notetool_icon.png) **Note tool** \- to edit selected notes.

  * ![](../res/chordtool1_icon.png) **Chord tool** \- to edit whole chords.

  * ![](../res/voicet_icon.png) **Voice tool** \- more specifically dedicated to the  voice object, can apply to a whole  chord-seq .

A whole object can be selected with a click and drag in any case .

## Adding Notes and Chords

Adding Notes in Note and Chord Objects

  * In note objects :

    1. select the note tool

    2. `Cmd` click in the score.

The default or current value of the object is modified.

  * In chord objects :

    1. select the chord tool **or** the note tool

    2. `Cmd` click in the staff to add a note.

![](../res/addnoteinchord.png)

Adding Notes to a Chord in a Chord-Seq

Chords can be edited in the  chord-seq editor, or in an `internal chord`
window.

  * To edit a chord from a chord-seq window :

    1. Select the chord tool and `Cmd` click on the chord : a grey note appears at the root of the green-framed chord.

    2. Change its pitch with the `↑` or `↓` keys.

    3. Click in the editor window to validate.

![](../res/editinchordseq.png)

  * To edit a chord in a `internal chord` window :

    1. Select the note **or** the chord tool. 

**Double click on the chord** : the `internal chord` window pops up.

    2. `Cmd` click on the staff to insert notes in the chord.

![](../res/editinternal.png)

Adding Chords in a Chord-seq

![](../res/addchordsseq.png)

|

  1. Select the note, chord **or** poly tool.

  2. `Cmd` click in the staff.

  
  
---|---  
  
Deleting Items

  1. Select the note, chord or poly tool, depending on the type of items you want to delete.

  2. Select one or more items and press `Backspace`.

|

![](../res/selectall.png)  
  
---|---  
  
Extracting Chords

![](../res/dragchordfromeditor.png)

|

Chord  factory boxes can be dragged out of any type of score editor - but the
note editor.

To create a factory box :

  1. select the chord tool in the [editor palette](Editor-Basics) ![](../res/chordtool_icon.png)

  2. click on an item and dragg it to the patch editor.

It is materialized as a factory box.  
  
---|---  
  
Score Editors

  * [Overview](Editor-Overview)

## Group / Union Chords

The  **group** and  **union chords** commands allow to gather several chords
into one chord.

  1. Select the items you want to group or union.

  2. Press `*` to group chords. 

Press `+` to union chords.

On `chord` mode, chords are displayed the same way with both commands.

|

![](../res/groupunion.png)  
  
---|---  
  
Group Chords

The  **group chords** command allows to preserve the individual offsets of the
chords.

  * Pitches are played successively.
  * The `offset` mode of the Editor Control shows the actual offsets of each chord.

|

![](../res/groupunion2.png)  
  
---|---  
  
Union Chords

The ** union chords ** command gathers several chords graphically  and
temporally in a same chord.

  * Pitches are played simultaneously.
  * The `offset` mode of the Editor Control shows that all chords have the same offset.

|

![](../res/groupunion3.png)  
  
---|---  
  
## Displaying Modes

Features

![The order and offsets of the pitches in the list can be expressed via the
"order" and "offset" modes of the Editor Control.](../res/modes.png)

The order and offsets of the pitches in the list can be expressed via the
"order" and "offset" modes of the Editor Control.

The Editor Control lower menu allows to modify the displaying of chords. Notes
can be ordered according to their :

  * pitch : `arp up` and `arp down` modes
  * order in the pitches list : `order` mode
  * offset : `offset` mode.

A small vertical line marks the starting point of the chord.

References :

Plan :

  * [OpenMusic Documentation](OM-Documentation)
  * [OM 6.6 User Manual](OM-User-Manual)
    * [Introduction](00-Sommaire)
    * [System Configuration and Installation](Installation)
    * [Going Through an OM Session](Goingthrough)
    * [The OM Environment](Environment)
    * [Visual Programming I](BasicVisualProgramming)
    * [Visual Programming II](AdvancedVisualProgramming)
    * [Basic Tools](BasicObjects)
    * [Score Objects](ScoreObjects)
      * [Presentation](Score-Objects-Intro)
      * [Rhythm Trees](RT)
      * [Score Players](ScorePlayer)
      * [Score Editors](ScoreEditors)
        * [Overview](Editor-Overview)
        * [Preferences](Editors-Prefs)
        * [Score Display](Editor-Display)
        * [Basic Editing](Editor-Basics)
        * [Harmonic Objects](Harmonic-Obj-Editor)
          * Pitches
          * [Other Slots](Editor-Other-Slots)
        * [Rhythmic Objects](Editor-Rhythm)
        * [Polyphonic Objects](Poly-Multi-Editor)
        * [Page Mode](Editor-PageMode)
        * [Tonal Display](Editor-Tonality)
        * [Microintervals Notation](Editor-Microintervals)
        * [Play Controls](Editor-Play)
      * [Quantification](Quantification)
      * [Export / Import](ImportExport)
    * [Maquettes](Maquettes)
    * [Sheet](Sheet)
    * [MIDI](MIDI)
    * [Audio](Audio)
    * [SDIF](SDIF)
    * [Lisp Programming](Lisp)
    * [Errors and Problems](errors)
  * [OpenMusic QuickStart](QuickStart-Chapters)

Navigation : [Previous](Harmonic-Obj-Editor "page
précédente\(Harmonic Objects\)") | [Next](Editor-Other-Slots
"Next\(Other Slots\)")

