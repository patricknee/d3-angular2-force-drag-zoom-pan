
# Sandbox for Angular 2 / D3!

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.21.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Note: This repo was originally linked to because of a force-layout-zoom-dragging problem. This has been resolved and the correct implementation is in the Force Canvas + Zoom sample above.

## Installation

1) Clone to a directory.  
2) CD into directory.  
3) Run "npm install"  
4) Run "ng serve"  
5) Navigate browser to http://localhost:4200  

## Summary of pages

1) Zoom-Pan-Drag demonstrates gragging dots around the screen. This page is modifed from <a href="https://bl.ocks.org/mbostock/2b534b091d80a8de39219dd076b316cd">Drag & Zoom</a>
2) Force Canvas demonstrates a Force Layout graph with dragging but no zoom and pan. This page is modifed from <a href="http://bl.ocks.org/mbostock/ad70335eeef6d167bc36fd3c04378048">Force Dragging III</a>, but nodes are locked in position after release.
3) Working Force Canvas+Zoom and Pan uses a drag().subject() handler adapted from Zoom-Pan-Drag rather than simulation.find().
4) Two Single Node projects exist in the repo but are not linked. They display the location of events and node drawing below the canvas to facilitate debugging. Some info reported to console as well.


### Interesting Question:

When switching betten item 2) above ("Force Canvas") and item 3) above ("Force Canvas+Zoom and Pan"), the graph is almost (but not quite) identical, even after dragging items. Is the d3 model a singleton?  

