+++
title = "Add Dark Mode to Hugo"
date = 2020-03-28T15:27:09.692Z
tags = ["how to", "hugo", "dark mode"]
categories = ["how to", "web"]
+++

## Dark Mode
Otherwise known as "Night Mode" is a setting many apps come with nowadays that allows you to toggle the visual appearance of the app between a very light "day" mode (white background, black text) and a dark "night" mode (black background, white text). The purpose of this is to alleviate the stress on your eyes at night, straining to read text on a bright screen.

![night mode toggle](/images/nightmode.gif)

## Adding to Hugo
[Hugo](https://gohugo.io/) being the static site generator it is can make adding special web functionality a bit confusing, to make it easier I've provided the code I'm using to implement a **persistent** (saves to your browser) dark mode for my website below. You can test the results yourself by clicking the little sun/moon icon top right. 

### Icon
To start add your button/link/icon for toggling the mode, I've used [FontAwesome](https://fontawesome.com/icons?d=gallery) icons but this works for anything, even just a plain `<a>` anchor tag.

![font awesome moon](/images/famoon.webp)

`header.html` (or wherever your header is)
```html
<ul id="social-media">
        <li><a id="dark-mode-toggle"><i id="dark-mode-toggle--icon" class="icon-moon-o" aria-hidden="true"></i></a></li>
        ...
</ul>
```
I've used an anchor for the click functionality and an icon tag for the icon itself, it's important both of these have an id.

Make sure you include the icon:before in the your css, mine is like this:
`custom.css`
```css
.icon-sun-o:before {
    content: "\f185";
}
.icon-moon-o:before {
    content: "\f186";
}
```
A note if you haven't written your own css or html in a hugo project yet, it's worth knowing that any **css** you write yourself and place in the static folder will come after the theme css, this means if the theme makes the body red and font-size 9, for example, and then your css makes the font-size 10 then the result will be a red body with font-size 10. For **html** it's slightly different as any html files you write with the same name as ones in your theme will overwrite them, e.g. `header.html(yours) -> header.html(theme)`. [More](https://bwaycer.github.io/hugo_tutorial.hugo/themes/customizing/)

### Get Chosen Theme
This little script just checks your browser's small storage area for if you've visited the site before (or reloaded) and then loads that saved mode.

`header.html` (or wherever your <head> is)
```html
<!-- dark mode check -->
<script>
  const theme = localStorage.getItem('theme');
  if (theme === "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
</script>
```
_Make sure you put this last in the head so it doesn't slow down loading other stuff._

### Script
If you haven't written any scripts yet then it's quite simple, just create a `scripts.js` or whatever you'd like to call it and include it in the footer (so it loads after content), for example something like this:

`<script type="text/javascript" src="{{ "js/scripts.js" | relURL }}"></script>`

And here is the javascript in that file, responsible for toggling the dark mode on clicking the `<a>` tag. The toggleDarkMode const represents the `<a>`, the toggleDarkModeIcon is self explanatory and the userPrefers gets the user's system setting where they might have a dark mode preference already (this is set below in css). 

The first if statement block sets the icon to either a sun or moon depending on mode, while saving to that little storage mentioned earlier. This only runs once on first load of the page, after that the event listener below it does the same for each click of the toggle button.

```js
const toggleDarkMode = document.getElementById("dark-mode-toggle");
const toggleDarkModeIcon = document.getElementById("dark-mode-toggle--icon");
const userPrefers = getComputedStyle(document.documentElement).getPropertyValue('content');	

if (theme === "dark") {
    toggleDarkModeIcon.className = "icon-sun-o";
} else if (theme === "light") {
    toggleDarkModeIcon.className = "icon-moon-o";
} else if (userPrefers === "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
    window.localStorage.setItem('theme', 'dark');
    toggleDarkModeIcon.className = "icon-sun-o";
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    window.localStorage.setItem('theme', 'light');
    toggleDarkModeIcon.className = "icon-moon-o";
}

toggleDarkMode.addEventListener("click", () => {
    let currentMode = document.documentElement.getAttribute('data-theme');
    if (currentMode === "dark") {
        document.documentElement.setAttribute('data-theme', 'light');
        window.localStorage.setItem('theme', 'light');
        toggleDarkModeIcon.className = "icon-moon-o";
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', 'dark');
        toggleDarkModeIcon.className = "icon-sun-o";
    }
});
```

### CSS Variables
Once you've got all the javascript in place you can start actually customising your light and dark themes, to do this you need to have the following:

`custom.css`
```css
/*===========DARK MODE==========*/
html, html[data-theme="light"] {
    --main-background-color: white;
    --main-text-color: #333333; 
    --h1-text-color: #000000;
    --inline-code-background-color: #ffcccc;
    --code-background-color: #272822;
    --code-color: #f8f8f2;
}

html[data-theme="dark"] {
    --main-background-color: hsl(0, 0%, 10%);
    --main-text-color: hsl(0, 10%, 80%);
    --h1-text-color: hsl(0, 10%, 80%);
    --inline-code-background-color: #0e141b;
    --code-background-color: #272822;
    --code-color: #f8f8f2;
}

@media (prefers-color-scheme: dark) {
    html {
      content: "dark";
    }
}
```
The two html sections define the variables to be used for each mode, so in the light mode the top html will set the value of main-background-color to white, whereas in dark mode the variable will be a dark hsl(0, 0%, 10%). You can set and use these variables (or any more you make) throughout your css and they will change to the values set in each mode, like so:

```css
body {
    color: var(--main-text-color);
    background-color: var(--main-background-color);
}
```

That last @media query bit checks the user's preferred colour scheme on their system and sets the mode to that.
