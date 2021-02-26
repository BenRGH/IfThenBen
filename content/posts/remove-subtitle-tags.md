+++
title = "Remove \\h and other tags from subtitles"
date = 2021-02-26T19:48:03.885Z
tags = ["how to", "anki", "subs", "aegisub"]
categories = ["how to", "anki"]
+++

If like me you've been making [anki](https://apps.ankiweb.net/) decks from your locally-sourced and *legally owned* media files (in my case .MKV), then you might have encountered this scenario:

1. Making sentence cards/sentence mining new language with [Subs2Srs](http://subs2srs.sourceforge.net/) (good post about the process here [**how to make thousands of high quality sentence cards for Anki**](https://www.britvsjapan.com/get-thousands-contextual-sentences-learning-languages-sentence-banks/))
2. You go to choose your input files, but you don't have the subs as a separate file (they're just inside the .MKV), so you use the MKV extract subs tool

![subs2srs window](/images/subs2srs.webp) 
![subs2srs accessing extract tool](/images/mkvsubextract.webp)
![subs2srs extract tool](/images/mkvextractwindow.webp)

3. Once you've extracted the subs as a separate .ass file (lol) you open the subs/preview them in [Subs2Srs](http://subs2srs.sourceforge.net/) and you see a load of these '**\\h**' tags. What the heck?

![h tags in subs](/images/whattheheck.webp)

_Colour theme of above images will be different for you, I've excessively customised my OS._

## Solution

The fix for this one is actually quite straightforward, grab yourself a copy of [Notepad++](https://notepad-plus-plus.org/). It's a good text editor, sitting in the halfway point between Windows Notepad and something beefy like VSCode.

Once it's installed, **right click** your sub file (works for many files at a time too) and **open with Notepad++**. If you skim down the wall of text you might spot one of those \\h tags in there, but it's not necessary.

Press **Ctrl+f** or the mac equivalent to the 'find' shortcut. In that window you'll see there's a few tabs along the top, go to '**Find in Files**' and punch in '**\\h**' in the first box, **empty** the second 'Replace with' box (we want it to be replaced with nothing i.e. delete).

Then **click the 3 dots** after the directory field and select your folder containing all your subs files you want to fix (only really applies if you're fixing more than one file).

Finally choose the second option under 'Search mode', so it's set to '**Extended**'. You should have as below:

![find all](/images/findall.webp)

Clicking 'Replace in files' (5) will remove all the '\\h' in every file in the chosen directory (you may also have to save). If you open the modified subs file through [Aegisub](http://www.aegisub.org) or [Subs2Srs](http://subs2srs.sourceforge.net/) you'll see that the annoying tag is no longer there in any of the lines!

![all h tags gone](/images/hgone.webp)

Hope this helped.
