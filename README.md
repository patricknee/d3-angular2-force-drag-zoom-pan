
# Sandbox for Angular 2 / D3!

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.21.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Installation

1) Clone to a directory.  
2) CD into directory.  
3) Run "npm install"  
4) Run "ng serve"  
5) Navigate browser to http://localhost:4200  

## To replicate problem:
Open "Force on Canvas + Zoom", zoom in, drag a node and watch node travel more than the mouse.</li>


## To replicate for debugging:

1) Two views have only one node drawn, simplifying the process.  
2) Open the single node version of <a routerLink="/zoompandragon" routerLinkActive="active">Zoom-Pan-Drag</a>, black dot will be at the center (250,100).  
3) Grab and drag the black dot left to position Event: (200, 100), as shown in display below graph (appears when dragging).  
4) Grab the canvas (not the node) and grad it right 50 units so the Transform data below graph reads 50, 0, 1.  
5) Grab the node and again drag it left 50 units to Event: (200, 100).   
6) Open single node version of <a routerLink="/forcecanvaszpon" routerLinkActive="active">Force Canvas+Zoom Pan</a>; a blue dot will be at the center (250, 100).  
7) Repeat steps 3-5 with the blue dot on this view.  
8) Compare the readouts at teh bottom of the canvas on the two views. The event on the Force Layout represents Model Space rather than Canvas Space. This seems to be the core of the problem.  


## Summary of pages

1) Zoom-Pan-Drag demonstrates gragging dots around the screen. This page is modifed from <a href="https://bl.ocks.org/mbostock/2b534b091d80a8de39219dd076b316cd">Drag & Zoom</a>  
2) Force Canvas demonstrates a Force Layout graph with dragging but no zoom and pan. This page is modifed from <a href="http://bl.ocks.org/mbostock/ad70335eeef6d167bc36fd3c04378048">Force Dragging III</a>, but nodes are locked in position after release.  
3) Force Canvas+Zoom and Pan demonstrates Force Layout with dragging AND zoom and pan. To replicate error: zoom in, drag a node, and watch the node move faster than your mouse.  
4) Working Force Canvas+Zoom and Pan uses a drag().subject() handler adapted from Zoom-Pan-Drag rather than simulation.find(), but introduces drawing errors.  
5) Two Single Node projects display the location of events and node drawing below the canvas to facilitate debugging. Some info reported to console as well.  

## Bugs/Problems/Questions

### Primary Question:  
In "Force on Canvas + Zoom (with zoom bug)" above, when zoomed in, why does a node not track the mouse dragging it? Zoom transformation is not correctly applied.

Further debugging suggest that when the drag().subject() handler uses simulation.find(), the d3.event.x that appears in the onDrag.start() event is not equivalent to the event in drag.subject() handler; it already has transform.applyX(d3.event.x) applied. 
This is incontrast to the same point in the lifecycle of the Drag+Zoom example without force layout. Drag+Zoom has a "homespun" handler for drag().subject(). 
Copying it into this project results in correct drag behavior when zoomed, but introduces other drawing problems.

###Secondary Question:

When switching betten item 2) above ("Force Canvas") and item 3) above ("Force Canvas+Zoom and Pan"), the graph is almost (but not quite) identical, even after dragging items. Is the d3 model a singleton?  

