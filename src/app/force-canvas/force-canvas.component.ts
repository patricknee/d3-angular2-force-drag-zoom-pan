import { Component, OnInit } from '@angular/core';
import { LesMisService } from '../les-mis.service';

import * as d3 from "d3";

@Component({
  selector: 'app-force-canvas',
  templateUrl: './force-canvas.component.html',
  styleUrls: ['./force-canvas.component.css']
})
export class ForceCanvasComponent implements OnInit {

  jLesMis: any;
  canvas:any;
  context: any;
  width: number;
  height: number;
  sLesMis: string;
  simulation:any;
  circleRadius: number = 5;

  constructor(private lesmis: LesMisService) { }

  ngOnInit() {
    this.canvas = document.getElementById("mycanvaz");
    this.context = this.canvas.getContext("2d");
    this.width = this.canvas.width;
    this.height = this.canvas.height;

    this.lesmis.getLesMis().then (
      (res) => {
        this.jLesMis = res;
        this.startForceGraph();
      },
      (error) =>{
        alert (error);
      }
    );
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
        .container(this.canvas)
        .subject(() => {
          let d = this.simulation.find( d3.event.x, d3.event.y, this.circleRadius);
          console.log("sim.find(d)=");
          console.log(d);
          console.log("d3.event", d3.event.x, d3.event.y);
          console.log("---find end----");
          return d;
        })
        .on("start", () => {
          console.log("in dragstart");
          if (!d3.event.active) this.simulation.alphaTarget(0.3).restart();
          d3.event.subject.fx = (d3.event.subject.x);
          d3.event.subject.fy = (d3.event.subject.y);
        })
        .on("drag", () => {
          console.log("in drag");
          console.log("d3.event.subject", d3.event.subject.fx, d3.event.subject.fy);
          console.log("d3.event.x", d3.event.x, d3.event.y);
          console.log("----");
          d3.event.subject.fx = (d3.event.x);
          d3.event.subject.fy = (d3.event.y);
        })
        .on("end", () => {
          console.log("in dragend");
          if (!d3.event.active) this.simulation.alphaTarget(0);
          d3.event.subject.fx = d3.event.x;
          d3.event.subject.fy = d3.event.y;
        }))

    ;
  }

  redrawXYGraph() {
    this.context.clearRect(0, 0, this.width, this.height);

    this.context.beginPath();
    this.jLesMis.links.forEach((d)=>{
      this.context.moveTo(d.source.x, d.source.y);
      this.context.lineTo(d.target.x, d.target.y);
    });
    this.context.strokeStyle = "#aaa";
    this.context.stroke();

    this.context.beginPath();
    this.jLesMis.nodes.forEach((d)=>{
      this.context.moveTo(d.x + this.circleRadius, d.y);
      this.context.arc(d.x, d.y, this.circleRadius, 0, 2 * Math.PI, false);
      this.context.fillStyle = "black";
      this.context.fill();
    });
    this.context.stroke();
  }
}
