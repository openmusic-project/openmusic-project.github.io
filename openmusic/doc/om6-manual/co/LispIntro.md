<div id="tplf" class="tplPage">

<div id="tplh">

<span class="hidden">Navigation générale : </span>

  - [<span>Guide</span>](OM-Documentation.md)
  - [<span>Plan</span>](OM-Documentation_1.md)
  - [<span>Glossaire</span>](OM-Documentation_2.md)

</div>

<div id="tplt">

![empty.gif](../tplRes/page/empty.gif)![logoom1.png](../res/logoom1.png)<span class="tplTi">OpenMusic
Documentation</span><span class="sw_outStack_navRoot"><span class="hidden">Hiérarchie
de section : </span>[<span>OM 6.6 User
Manual</span>](OM-User-Manual.md)<span class="stkSep"> \>
</span>[<span>Lisp Programming</span>](Lisp.md)<span class="stkSep"> \>
</span><span class="stkSel_yes"><span>Introduction to
Lisp</span></span></span>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Lisp.md "page précédente(Lisp Programming)")<span class="hidden">
| </span>[<span>page
suivante</span>](LispEditor.md "page suivante(The Lisp Editor)")

</div>

<div id="tplc" class="tplc_out_yes">

<div style="text-align: center;">



</div>

<div class="headCo">

# <span>Introduction to Lisp</span>

<div class="headCo_co">

<div>

<div class="infobloc">

<div class="txt">

This section is **not** a Common Lisp tutorial, but just expounds a few
important notions.

</div>

</div>

<div class="part">

## <span>Origins</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>A Bit of History</span>

</div>

<div class="txt">

Lisp is a functional language influenced by the lambda calculus that was
specified in 1958. It is one of the oldest high-level programming
languages.

[<span>Common
Lisp</span>](http:/www.cs.cmu.edu/Groups/AI/html/cltl/cltl2.md "http://www.cs.cmu.edu/Groups/AI/html/cltl/cltl2.html (nouvelle fenêtre)")
is a Lisp dialect, among others such as Scheme .

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>An Interpreted Language</span>

</div>

<div class="txt">

Lisp is an **"interpreted" language** : it works on top of a low-level
process, or underlying **interpreter**, which evaluates Lisp code.
Functions and data are defined and evaluated by this process, which
incrementally enriches the running environment with new functionalities.
Each time a new function, variable or class is defined, it becomes part
of the environment. This characteristics makes Lisp programming very
flexible and dynamic, since code can still be interpreted while Lisp
programs are running.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Links of Interest</span>

</div>

<div class="txt">

For a more complete overview of the language, the reader should consult
specialized books or references. Here are some links of interest :

  - <span> [<span>Common Lisp the Language, 2nd
    edition</span>](http:/www.cs.cmu.edu/Groups/AI/html/cltl/cltl2.md "http://www.cs.cmu.edu/Groups/AI/html/cltl/cltl2.html (nouvelle fenêtre)")
     : a reference book on the common Lisp standard by Guy L.
    Steele</span>
  - <span> [<span>Lisp as a second language, composing programs and
    music</span>](http:/recherche.ircam.fr/equipes/repmus/LispSecondLanguage/index.md "http://recherche.ircam.fr/equipes/repmus/LispSecondLanguage/index.html (nouvelle fenêtre)")
     : a music-oriented tutorial by Peter Desain and Henkjan
    Honing</span>

</div>

</div>

</div>

</div>

<div class="part">

## <span>S-expressions</span>

<div class="part_co">

<div class="infobloc">

<div class="txt">

S-expression stands for "symbolic expression". S-expressions are
**list-based representations**. They are typically represented in text
by parenthesized, whitespace-separated sequences of character strings.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Prefix Notation</span>

</div>

<div class="caption">

<div class="caption_co">

![listprefix.png](../res/listprefix.png)

</div>

</div>

<div class="txt">

Lisp expressions are written as lists with a **prefix notation**. The
first element in the list is an **operator or a function**, while the
remaining elements are treated as data : they are the
<span id="i3" class="defRef_ul"><span>arguments</span></span><sup>[<span>\[</span>1<span>\]</span>](#kFootBsktc2051)</sup>
of this operator.

When an expression is
<span id="i4" class="defRef_ul"><span>evaluated</span></span><sup>[<span>\[</span>2<span>\]</span>](#kFootBsktc2030)</sup>,
the first element is applied to the arguments. For instance :

  - An addition such as 1 + 2 + 3 is expressed **(+ 1 2 3)** , which
    evaluates to : **6**. The + function is applied to 1 2 and 3.

  - In the **(list 1 2 3)** expression, the list operator creates a list
    with the other elements in the expression, which evaluates to : **(1
    2 3)**

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Quoted Expressions : QUOTE Operator</span>

</div>

<div class="caption">

<div class="caption_co">

![quote.png](../res/quote.png)

</div>

</div>

<div class="txt">

The **QUOTE** operator **" ' "** allows to get a list from a lisp
expression without evaluating it. This operator must be put **before the
targetted list first parenthesis**, and applies to all the elements
located between the pair of parenthesis.

For instance :

When the following expression : '(+ 5 6) is evaluated, (+ 5 6) is
returned. The list is merely quoted.When the following expression (+ 5
6) is evaluated, 11 is returned. The list is evaluated, because there is
no quote.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Lambda Expressions : the LAMBDA Operator</span>

</div>

<div class="caption">

<div class="caption_co">

![lambda.png](../res/lambda.png)

</div>

</div>

<div class="txt">

The **LAMBDA operator** binds – associates – variables to values in an
expression. In other words, it allows to define functions.

The syntax of a lambda expression is : **(lambda (arg1 arg2 ...) \[body
of the function\] )** . This expression evaluates to a function, which
can be applied to arguments. At application time, these arguments are
bound to variables represented by arg1 , arg2 , ...

For instance, the lambda expression that defines (4 + (a \* b)) with a
and b as variables is written :

(lambda (a b) (+ 4 (\* a b))) .

</div>

</div>

</div>

</div>

<div class="part">

## <span>Functions</span>

<div class="part_co">

<div class="infobloc">

<div class="infobloc_ti">

<span>Defining Functions : DEFUN</span>

</div>

<div class="txt">

Most Lisp programming consists into defining functions. **DEFUN** is a
particular operator that defines a function bound to a name  :

(defun my-function-name (arg1 arg2 arg3)

       \[ Lisp expression(s) \]

            result )

Once the function is defined, its name represents the function.

</div>

</div>

<div class="bloc note">

<div class="bloc_ti note_ti">

<span>Defining Local Variables within a Function : LET</span>

</div>

<div class="caption">

<div class="caption_co">

![LET.png](../res/LET.png)

</div>

</div>

<div class="txt">

**LET** is a special operator that "declares" local variables in the
body of the function. The declaration and the content of the declaration
must both be delineated by parenthesis.

For instance, the following expression declares an x local variable :

**(let (( x (+ a 5)) )** means : x is a local variable, such as x = a +
5.

</div>

</div>

<div class="infobloc">

<div class="infobloc_ti">

<span>Example : Defining My-Function</span>

</div>

<div class="txt">

<table>
<tbody>
<tr class="odd">
<td><p>Let's define "my-function".</p>
<p><strong>(defun my-function (a b c) (let ((x (+ a 5))) (* x (/ b c))))</strong></p></td>
<td><p>We can also write it :</p>
<p><strong>(defun my-function (a b c)</strong></p>
<p><strong>     (let ((x (+ a 5)))</strong></p>
<p><strong>          (* x (/ b c))</strong></p>
<p><strong>      )</strong> <strong>)</strong></p></td>
</tr>
</tbody>
</table>

</div>

<div class="txtRes">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><div class="dk_txtRes_txt txt">
<ul>
<li><p>A , b and c are the <strong>arguments</strong> of the function, the variables that are bound to values, when the function is called . We also have a local variable : (x = a + 5) .</p></li>
<li><p>The last expression is the <strong>result</strong> returned by the function itself : ( x * (b / c )).</p></li>
</ul>
<p>In other words, the expression means : " my-function applies to a , b and c . Besides x = ( a + 5). This function is : x * (b / c) ."</p>
<p>My-function is called when its name followed by the relevant set of arguments is evaluated : <strong>(my-function 1 2 3)</strong> =&gt; 4</p>
</div></td>
<td><div class="caption">
<div class="caption_co">
<img src="../res/defunexample.png" width="295" height="166" alt="defunexample.png" />
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

<span class="hidden">Références : </span>

1.  
    
    <div id="kFootBsktc2051">
    
    <div class="footBskt_itti">
    
    Argument
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    An argument represents a parameter upon which a function operates.
    For instance, the (om+ x y) function has two arguments : x and y.
    
    </div>
    
    </div>
    
    </div>
    
    </div>

2.  
    
    <div id="kFootBsktc2030">
    
    <div class="footBskt_itti">
    
    Evaluation
    
    </div>
    
    <div class="footBskt_itco">
    
    <div>
    
    <div class="dk_definitionMeta_def">
    
    In Lisp, evaluating an expression amounts to interpreting and
    reducing its contents in order to return a result.
    
    In OM, visual programs represent Lisp expressions and evaluating a
    box triggers the calculus that will determine the value of these
    expressions.
    
    Any kind of box can be evaluated and return something. To evaluate a
    box, ⤷ Click and press `v` or `Cmd` click on an outlet.
    
    </div>
    
    </div>
    
    </div>
    
    </div>

</div>

<div id="tplo" class="tplo_out_yes">

<div class="tplOTp">

<div class="tplOBm">

<div id="mnuFrm">

<span class="hidden">Plan :</span>

<div id="mnuFrmUp" onmouseout="menuScrollTiTask.fSpeed=0;" onmouseover="if(menuScrollTiTask.fSpeed&gt;=0) {menuScrollTiTask.fSpeed=-2; scTiLib.addTaskNow(menuScrollTiTask);}" onclick="menuScrollTiTask.fSpeed-=2;" style="display: none;">

<span id="mnuFrmUpLeft">[](#)</span><span id="mnuFrmUpCenter"></span><span id="mnuFrmUpRight"></span>

</div>

<div id="mnuScroll">

  - [<span>OpenMusic Documentation</span>](OM-Documentation.md)
  - [<span>OM 6.6 User Manual</span>](OM-User-Manual.md)
      - [<span>Introduction</span>](00-Sommaire.md)
      - [<span>System Configuration and
        Installation</span>](Installation.md)
      - [<span>Going Through an OM Session</span>](Goingthrough.md)
      - [<span>The OM Environment</span>](Environment.md)
      - [<span>Visual Programming I</span>](BasicVisualProgramming.md)
      - [<span>Visual Programming
        II</span>](AdvancedVisualProgramming.md)
      - [<span>Basic Tools</span>](BasicObjects.md)
      - [<span>Score Objects</span>](ScoreObjects.md)
      - [<span>Maquettes</span>](Maquettes.md)
      - [<span>Sheet</span>](Sheet.md)
      - [<span>MIDI</span>](MIDI.md)
      - [<span>Audio</span>](Audio.md)
      - [<span>SDIF</span>](SDIF.md)
      - [<span>Lisp Programming</span>](Lisp.md)
          - <span id="i5" class="outLeftSel_yes"><span>Introduction to
            Lisp</span></span>
          - [<span>The Lisp Editor</span>](LispEditor.md)
          - [<span>The Listener</span>](LispListener.md)
          - [<span>Lisp Code in OM</span>](LispInOM.md)
          - [<span>Lisp Function Boxes</span>](LispFunctions.md)
          - [<span>Lisp Tools</span>](LowLevel.md)
          - [<span>Writing an OM Library</span>](LispUserLib.md)
          - [<span>Writing Code for OM</span>](LispForOM.md)
      - [<span>Errors and Problems</span>](errors.md)
  - [<span>OpenMusic QuickStart</span>](QuickStart-Chapters.md)

</div>

<div id="mnuFrmDown" onmouseout="menuScrollTiTask.fSpeed=0;" onmouseover="if(menuScrollTiTask.fSpeed&lt;=0) {menuScrollTiTask.fSpeed=2; scTiLib.addTaskNow(menuScrollTiTask);}" onclick="menuScrollTiTask.fSpeed+=2;" style="display: none;">

<span id="mnuFrmDownLeft">[](#)</span><span id="mnuFrmDownCenter"></span><span id="mnuFrmDownRight"></span>

</div>

</div>

</div>

</div>

</div>

<div class="tplNav">

<span class="hidden">Navigation : </span>[<span>page
précédente</span>](Lisp.md "page précédente(Lisp Programming)")<span class="hidden">
| </span>[<span>page
suivante</span>](LispEditor.md "page suivante(The Lisp Editor)")

</div>

<div id="tplb">

[<span>A propos...</span>](OM-Documentation_3.md)(c) Ircam - Centre
Pompidou

</div>

</div>
