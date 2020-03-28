+++
title = "Use Autohotkey to write foreign characters & more"
date = 2020-03-22T13:31:14.576Z
tags = ["how to", "authotkey", "language learning"]
categories = ["how to", "powertools"]
+++

## Autohotkey
[Autohotkey](https://www.autohotkey.com/) is an excellent tool I've been using for years to improve the way I use my PC in a very subtle way. Despite sounding like a keylogging program that maliciously steals your credit card details (which as a **FOSS** it does not), [Autohotkey](https://www.autohotkey.com/) is a program whereby you write scripts that run in the background on your computer. These scripts can do anything you can do with a keyboard, much like python but less advanced. If you're a developer and you've ever used *snippets* before in an IDE or text editor then you'll be very familiar with the concept of typing a couple characters and having them replaced with whatever you defined in your snippet.

For example typing the letters "rfc" might offer you a snippet for a React functional component, or maybe "cl" for console.log() 

![Snippet in Visual Studio Code](/images/snippet.webp)

[Autohotkey](https://www.autohotkey.com/) does much the same but works system-wide; you can smash a few letters out on your keyboard in emails, google, discord, wherever and whatever snippet you've defined in your script will work.

_While [Autohotkey](https://www.autohotkey.com/) is very good with text based tasks, it is also capable of creating GUI windows and some people have even built fully fledged programs with it (it lets you compile the scripts as executables) you can find examples [here](https://www.autohotkey.com/docs/scripts/index.htm), although these features are outside the scope of this post._


## The Scripts
To create a script you just install the program and right-click in a folder>New>AutoHotkey Script. This should make a .ahk file, use any name you like. You can edit this to do anything you want it to do and then right-click>run to get it working from your system tray. If you want the script to run on start up then just copy a shortcut to the file and place it in:
`C:\Users\*username*\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\` 
_(win + r, %appdata%)_

### General Typo Fixer
Long script so it can be found [here](https://www.autohotkey.com/download/AutoCorrect.ahk).

### Always On Top
Toggles the currently focused window with Always On Top using a simple ctrl-space.
```ahk
^SPACE::  Winset, Alwaysontop, , A
```

### Language Scripts
As a person learning a second language it can be hard sometimes finding the right alt-code to type the special accented (or sometimes completely different) characters used, so I wrote two scripts that allow me to type those characters without changing my keyboard language. For example to type "é" I simply press /e/, the slashes represent the direction of the accent. I've tried to cover all the common **French** characters in my script below and the same below that for **German**.

`FrenchChars.ahk`
```ahk

; Star means you dont need an ending char after typing
; Question mark means you dont need any man to tell you what for (does inline)


; Works for both upper and lower case!
:?*:ccc::ç

:?*:/e/::é
:?*:\e\::è
:?*:/e\::ê
:?*:eee::ë

:?*:\a\::à
:?*:/a\::â

:?*:\u\::ù
:?*:/u\::û
:?*:uuu::ü

:?*:/i\::î
:?*:iii::ï

:?*:/o\::ô
```

`GermanChars.ahk`
```ahk
:?*:sss::ß

:?*:uuu::ü

:?*:ooo::ö

:?*:aaa::ä
```

### Easy Print Screen
I use [ShareX](https://getsharex.com/) for all my screen-printing activities and sometimes reaching across my keyboard is difficult with one hand (for example while using [Anki](https://apps.ankiweb.net/)) so I simplified the process by using ctrl+alt+c.

```ahk
^!c::
    send, {ctrl down}{PrintScreen}{ctrl up}
Return
```
