import { Component, OnInit } from '@angular/core';

import * as d3 from "d3";

@Component({
  selector: 'app-zoom-pan-drag-canvas',
  templateUrl: './zoom-pan-drag-canvas.component.html',
  styleUrls: ['./zoom-pan-drag-canvas.component.css']
})
export class ZoomPanDragCanvasComponent implements OnInit {
  radius = 2.5;
  transform = d3.zoomIdentity;
  canvas:any;
  context:any;
  width:number;
  height:number;
  points:any = [];

  constructor() { }


  ngOnInit() {
    this.canvas = document.getElementById("mycanvaz");
    console.log(this.canvas);
    this.context = this.canvas.getContext("2d");
    console.log(this.context);

    this.height = this.canvas.height;
    this.width = this.canvas.width;

    let theta = Math.PI * (3 - Math.sqrt(5));
    for (let i=0; i<2000; i++){
      let r = 10 * Math.sqrt(i), a = theta * i;
      let p =  [
        this.width / 2 + r * Math.cos(a),
        this.height / 2 + r * Math.sin(a)
      ];
      //console.log(i + " " + p);
      this.points.push(p);
    }

    d3.select(this.canvas)
      .call(d3.drag().subject(() => this.dragsubject()).on("drag", () => this.dragged()))
      .call(d3.zoom().scaleExtent([1 / 2, 8]).on("zoom", () => this.zoomed()))
      .call(() => {
        this.render();
      })
    ;
  }

  zoomed() {
    this.transform = d3.event.transform;
    this.render();
  }

  dragsubject() {
    let
      x = this.transform.invertX(d3.event.x),
      y = this.transform.invertY(d3.event.y);

    console.log("x, event.x", x, d3.event.x);

    for (let i = this.points.length - 1; i >= 0; --i) {
      let point = this.points[i];
      let dx = x - point[0];
      let dy = y - point[1];
      if (dx * dx + dy * dy < this.radius * this.radius) {
        console.log("point", point);
        //point.x = this.transform.applyX(point[0]);
        //point.y = this.transform.applyY(point[1]);
        console.log("point", point);
        //console.log("x, point[0], point.x", x, point[0], point.x);
        return point;
      }
    }
  }

  dragged() {
    d3.event.subject[0] = this.transform.invertX(d3.event.x);
    d3.event.subject[1] = this.transform.invertY(d3.event.y);
    this.render();
  }

  render() {
    this.context.save();
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.beginPath();
    this.context.translate(this.transform.x, this.transform.y);
    this.context.scale(this.transform.k, this.transform.k);
    this.points.forEach((point) => {
      this.context.moveTo(point[0] + this.radius, point[1]);
      this.context.arc(point[0], point[1], this.radius, 0, 2 * Math.PI);
    });
    this.context.fill();
    this.context.restore();
  }

  drawPoint(point) {
    this.context.moveTo(point[0] + this.radius, point[1]);
    this.context.arc(point[0], point[1], this.radius, 0, 2 * Math.PI);
  }

  phyllotaxis(radius) {

    let theta = Math.PI * (3 - Math.sqrt(5));
    return (i)=> {
      let r = radius * Math.sqrt(i), a = theta * i;
      return [
        this.width / 2 + r * Math.cos(a),
        this.height / 2 + r * Math.sin(a)
      ];
    };
  }

}
