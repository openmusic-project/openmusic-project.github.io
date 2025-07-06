OpenMusic Reference  
---  
[Prev](funcref)| | [Next](r7001)  
  
* * *

# Chapter 1. Using the Function Reference

![Important](figures/images/important.gif)|

If you read nothing else in this section, see the [note on how LISP numbers
list elements](funcref.intro#NOTE-ON-LISTS), after the list of data types
below.  
  
---|---  
  
Below are entries describing the functions available in OM. This reference
will be expanded in future versions to include all the functions available in
the Functions menu. For the moment, the following groups of functions are
documented:

  * The function `omloop` contains several modules only available within the function. It is presented separately at the beginning of the reference, along with its components. After which,

  * All the items of the kernel menu. Certain lisp functions not appearing in the menu are also documented

  * All the items of the music menu.

  * The functions of the backtrack module, available under Functions->constraints->backtrack.

The function reference presents the standard lisp syntax of the function for
the technically inclined, as well as a breakdown of the inputs and outputs of
the function, one by one, and the data types they accept. See [data
types](glossary#DATA-TYPE) for more information. A data type can be any
[class](glossary#CLASS). Here are some:

 **Some Common OM Data Types**

  * integer \- Numbers without decimal points: -1, 4, 3139, 0

  * rational \- A fraction; numbers represented in the form a/b where a and b are integers: 1/2, 44/5, -3/4

  * float \- Numbers with decimal points: -1.0, 4.1234, 0.142, 6.666666

  * number \- A blanket designation for all of the above values.

  * t \- The truth value, t is returned by [predicate functions](glossary#PREDICATE) to indicate that a condition or conditions have been successfully fulfilled.

  * nil \- indicates the empty set, the list with no elements. nil is also returned by predicates when their conditions are not fulfilled. nil is _not_ equivalent to zero.

  * lambda functions - A function in lambda mode is indicated by the λ symbol in the upper-left corner of the function icon. To put a function in lambda mode, click on it, then hit **b**. An 'x' appears on the function icon. Click the 'x' twice to change it to λ. A lambda function outputs itself- that is, instead of passing the result of its calculation at its first output, it passes its own code. Passing a function another function in lambda mode allows it to run this function on other data passed to it. Putting a function in lambda mode allows it to be passed to the `sort.`, for example, as the function the results of which will be used to sort the data. `sort.` runs the lambda function, passing it the elements of the list one by one and comparing them. Lambda functions take their name from a [theoretical branch of mathematics developed by Alonzo Church in the late 1930's.](http://wombat.doc.ic.ac.uk/foldoc/foldoc.cgi?lambda-calculus)

  * symbol \- an arithmetic symbol which can be passed to certain functions in lieu of a lambda function. Valid symbols include +,-,*,/.

  * function name \- the name of a function which can be passed to certain other functions instead of that function in lambda mode. This will only work for functions in the kernel, not for patches.

  * string \- Alphanumeric data, enclosed in quotes: "hello", "12ab", "Karim", "Beverly Hills 90210". It is important to note that when numbers as presented in string form: "123", they are considered to be strings of adjacent alphanumeric elements and _not_ numbers on which calculations can be performed.

  * list \- A list of items enclosed in parentheses (). The items can be of any type, and lists may be comprised of more than one type of item. Although a list can certainly include other lists, for clarity in this documentation, the type list refers exclusively to 'flat' lists, where none of the elements are themselves lists.

  * tree \- A list in which at least one of the items is itself a list. May be a list of lists, a list of list of lists, etc... you get the idea. The term tree is used because it graphically indicates the branching nature of the lists. See [the glossary for more info](glossary#TREE). In this documentation, the term tree is used to refer to a list which may, but does not necessarily have, other lists as an element(s).

  * menu \- some OM function inputs have menus from which a particular mode can be selected. Clicking the input brings up the menu, and clicking a second time selects the option.

  * keyword \- another type of special input where you select from a list of values. Instead of a pop-up menu, however, keywords are entered like other parameters. The actual data type accepted at the keyword input and what that input is used for is set **by** the keyword, which is entered directly at the input (by clicking the input). Keywords are always preceded by colons. Examples would be `_:count_` , `_:start_`. Once the keyword at an input has been set, the input _becomes_ that input and will only accept certain data types, depending on the keyword. Keyword inputs are indicated by the designation **& key**. Keyword inputs are always optional. However, they are not added with the traditional key combination **option** - **->**. Instead, with the function icon highlighted, type **k** to add an input and **K** to remove one. A list of acceptable keywords is usually available by command-clicking the input once it has been added. Keyword inputs are useful because you are not obliged to use them all, or to use them any given order. Other optional inputs require adding all inputs up to the desired one, which means you must also give values for these intervening inputs. 

![Note](figures/images/note.gif)| **A note about lists in LISP**  
---|---  
 |

LISP numbers the elements of any list starting at 0, not 1 as humans do. This
means the that what we call the first element is element 0 to a lisp program.
Telling a LISP program to take elements 1 through 3 of a list (a b c d e)
means that we will get (b c d). This is common to **all** LISP functions.  
  
A sample reference page follows.

* * *

[Prev](funcref)| [Home](index)| [Next](r7001)  
---|---|---  
OM Function Reference| [Up](funcref)| the exact name of the function

