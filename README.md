# Bouncing DVD Logo

**WARNING: LOTS OF FLICKERING AND FLASHING LIGHTS.**

A browser emulation of the classic bouncing DVD logo.

**Live Demo:** https://atklenner.github.io/BouncingDVDLogo/

![Demo gif](https://github.com/atklenner/atklenner/blob/main/images/DVD.gif)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

The logo is just an SVG element and using `element.getBoundingClientRect` I can tell when it hits the side of the viewport. At that point it changes to a random color and switches directions. The initial direction of the logo is randomized but set with boundaries so it isn't too vertical or horizontal. I wanted the bouncing to be visually appealing.

CRT CSS effect taken from https://aleclownes.com/2017/02/01/crt-display.html

## Optimizations:

When I improve this project, I would look into ways to make the CSS that adds the CRT scan lines and flicker more performant.

## Lessons Learned:

Use `window.requestAnimationFrame` instead of `setTimeout` to run some JavaScript before the page renders. This makes sure the logic that controls movement is consistent regardless whether or not the framerate of the webpage is consistent.

## More Projects:

**GoodGames:** https://github.com/atklenner/goodgames

**Homepage:** https://github.com/atklenner/homepage

**Sketches:** https://github.com/atklenner/sketches
