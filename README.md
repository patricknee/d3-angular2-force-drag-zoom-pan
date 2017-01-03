
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

## Testing of Force Layout with D3  

This application was build to test a problem with zomming and panning a D3 Force Layout graph.

All are built with D3 V4 on HTML5 Canvas using the Angular 2 cli (http://cli.angular.io).

1) Zoom-Pan-Drag demonstrates gragging dots around the screen. This page is modifed from Drag & Zoom

2) Force Canvas demonstrates a Force Layout graph with dragging but no zoom and pan. This page is modifed from Force Dragging III, but nodes are locked in position after release.

3) Force Canvas+Zoom and Pan demonstrates Force Layout with dragging AND zoom and pan. To replicate error: zoom in, drag a node, and watch the node move faster than your mouse.

4) Single Node Force Canvas+Zoom and Pan uses only a single node in the JSON data to simplify debugging. The browser console will some reporting of the dragged position of the node.

## Questions

### Primary Question:

In example 3 above, when zoomed in, why does a node not track the mouse dragging it? Zoom transformation is not correctly applied.

### Secondary Questions:

In the import 'import * as d3 from "d3";' the d3 is not recognized although I have npm installed d3 and the latest typings
When switching betten item 2) above ("Force Canvas") and item 3) above ("Force Canvas+Zoom and Pan"), the graph is almost (but not quite) identical, even after dragging items. Is the d3 model a singleton?
