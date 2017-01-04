import { Component, OnInit } from '@angular/core';
import { LesMisService } from '../les-mis.service';

import * as d3 from "d3";

@Component({
  selector: 'app-force-canvas-zoom-pan-one-node',
  templateUrl: './force-canvas-zoom-pan-one-node.component.html',
  styleUrls: ['./force-canvas-zoom-pan-one-node.component.css']
})
export class ForceCanvasZoomPanOneNodeComponent implements OnInit {

  jLesMis: any;
  canvas:any;
  context: any;
  width: number;
  height: number;
  simulation:any;
  transform: any = d3.zoomIdentity;
  circleRadius: number = 5;


  eventX: number;
  eventY: number;
  invertEventX: number;
  invertEventY: number;
  applyEventX: number;
  applyEventY: number;
  transformX: number;
  transformY: number;
  transformK: number;
  drawCircleX: number;
  drawCircleY: number;

  constructor(private lesmis: LesMisService) { }

  ngOnInit() {
    this.canvas = document.getElementById("mycanvaz");
    this.context = this.canvas.getContext("2d");
    this.width = this.canvas.width;
    this.height = this.canvas.height;

    //force the graph to have just one node:
    this.jLesMis = { "nodes": [ {"id": "Myriel", "group": 1}], "links": [] } ;
    this.startForceGraph();
  }

  startForceGraph() {
    console.log("in startGraph");

    this.simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id(function(d) { return d['id']; }))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(this.width / 2, this.height / 2))
    ;

    this.simulation
      .nodes(this.jLesMis.nodes)
      .on("tick", ()=> {
        this.redrawXYGraph();
      })
      .on("end", () => {
        console.log("ended");
      })
    ;

    this.simulation.force("link")
      .links(this.jLesMis.links)
    ;

    d3.select(this.canvas)

      .call(d3.drag()
        .subject( () => this.dragSubject())
        .on("start", () => this.startDrag())
        .on("drag", () => this.dragging())
        .on("end", () => this.endDrag()))

      .call(d3.zoom()
        .scaleExtent([ 1/4, 4])
        .on("zoom", () => this.zoomed()))
    ;
  }

  dragSubject() {
    console.log("subject event: " + d3.event.x + ", " + d3.event.y);
    //let d = this.simulation.find( this.transform.invertX(d3.event.x), this.transform.invertY(d3.event.y), this.circleRadius);
    //return d;

    let
      x = this.transform.invertX(d3.event.x),
      y = this.transform.invertY(d3.event.y);

    for (let i = this.jLesMis.nodes.length - 1; i >= 0; --i) {
      let point = this.jLesMis.nodes[i];
      console.log(point);
      let dx = x - point.x;
      let dy = y - point.y;
      let r2 = this.circleRadius * this.circleRadius;
      let dx2dy2 = dx * dx + dy * dy;
      console.log(dx, dy, dx2dy2, r2);
      if (dx2dy2< r2) {
        point.x = this.transform.applyX(point.x);
        point.y = this.transform.applyY(point.y);
        return point;
      }
    }
  }

  startDrag() {
    console.log("in node dragstart");
    console.log("d3.event", d3.event.x, d3.event.y);
    console.log("d3.event.subject.xy", d3.event.subject.x, d3.event.subject.y);
    console.log("d3.event.subject.fxy", d3.event.subject.fx, d3.event.subject.fy);

    if (!d3.event.active) this.simulation.alphaTarget(0.3).restart();
    //d3.event.subject.fx = this.transform.invertX(d3.event.subject.x);
    //d3.event.subject.fy = this.transform.invertY(d3.event.subject.y);
    //d3.event.subject.x = this.transform.invertX(d3.event.subject.x);
    //d3.event.subject.y = this.transform.invertY(d3.event.subject.y);
  }

  dragging() {
    //console.log("in node drag");
    d3.event.subject.fx = this.transform.invertX(d3.event.x);
    d3.event.subject.fy = this.transform.invertY(d3.event.y);
    //d3.event.subject.x = this.transform.invertX(d3.event.x);
    //d3.event.subject.y = this.transform.invertY(d3.event.y);

    this.eventX = d3.event.x;
    this.eventY = d3.event.y;
    this.invertEventX = this.transform.invertX(d3.event.x);
    this.invertEventY = this.transform.invertY(d3.event.y);
    this.applyEventX = this.transform.applyX(d3.event.x);
    this.applyEventY = this.transform.applyY(d3.event.y);
    this.transformX = this.transform.x;
    this.transformY = this.transform.y;
    this.transformK = this.transform.k;
  }

  endDrag() {
    console.log("-----end drag-----");
    if (!d3.event.active) this.simulation.alphaTarget(0);
    //d3.event.subject.fx = this.transform.invertX(d3.event.x);
    //d3.event.subject.fy = this.transform.invertY(d3.event.y);
  }

  zoomed() {
    this.transform = d3.event.transform;
    this.redrawXYGraph();
    this.transformX = this.transform.x;
    this.transformY = this.transform.y;
    this.transformK = this.transform.k;
  }

  redrawXYGraph() {
    this.context.save();
    this.context.clearRect(0, 0, this.width, this.height);

    this.context.beginPath();

    if (this.transform) {
      this.context.translate(this.transform.x, this.transform.y);
      this.context.scale(this.transform.k, this.transform.k);
    }

    this.jLesMis.links.forEach((d)=>{
      this.context.moveTo(d.source.x, d.source.y);
      this.context.lineTo(d.target.x, d.target.y);
    });
    this.context.strokeStyle = "#aaa";
    this.context.stroke();

    this.context.beginPath();
    this.jLesMis.nodes.forEach((d)=>{
      let cx = d.fx || d.x;
      let cy = d.fy || d.y;
      cx = d.x;
      cy = d.y;
      this.context.moveTo(cx + this.circleRadius, cy);
      this.context.arc(cx, cy, this.circleRadius, 0, 2 * Math.PI, false);
      this.context.fillStyle = "blue";
      this.context.fill();
      this.drawCircleX = cx;
      this.drawCircleY = cy;
    });

    this.context.stroke();
    this.context.restore();
  }
}
