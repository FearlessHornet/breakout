# Breakout

This is an implementation of the classic game "Breakout." It uses the Phaser.io game engine and is written in raw javascript. This project was created as a code sample for CerebralFix.

## Extensibility

The Phaser.io state machine design makes for great extensibility in content. The raw javascript way of object oriented approaches combined with html script loading also makes for modular functional extensibility. I created a standard where:
- objects are declared ahead of time
- raw functionality is added
- the initial state definitions directly assign the core functionality
- modular object (only state objects in this case) functionality is defined and appended/overwritten

## Issues and Hurdles

My initial attempts to get a typescript environment setup were not successful, after some time I opted to instead write this in raw javascript. The bonuses to using typescript would've been better object inheritance but as the project stands it was innately inheritance light. If I was required to render the objects to the canvas manually (ie RenderObj, ActiveObj parenting ButtonObj etc.) typescript would have been very useful.

## Improvements

During development there were many improvements I considered but to keep within the 4 hour development time I had scheduled, I didn't get to implement these. They were:
- music, specifically satisfaction blips when blocks are destroyed
- higher resolution images
- background image
- detailed victory, defeat, and main menus
- power ups
- multiple hit blocks
- environmental effects (ie gravity wells affecting the ball)

## Self Reflection

I'd not personally used typescript before but after looking into it, there was a lot of promise. I did, however, find the issue of support. The given engines (Kiwi.js, Phaser.io) noted that TypeScript integration was officially supported but there was little to no discussion about its usage. Dart ran into similar issues on my machine (I'm thinking it might be time to do a clean reinstall)
