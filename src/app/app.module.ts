import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ForceCanvasComponent } from './force-canvas/force-canvas.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ZoomPanDragCanvasComponent } from './zoom-pan-drag-canvas/zoom-pan-drag-canvas.component';
import { LesMisService } from './les-mis.service';
import { ForceCanvasZoomPanComponent } from './force-canvas-zoom-pan/force-canvas-zoom-pan.component';
import { ForceCanvasZoomPanOneNodeComponent } from './force-canvas-zoom-pan-one-node/force-canvas-zoom-pan-one-node.component';

@NgModule({
  declarations: [
    AppComponent,
    ForceCanvasComponent,
    HomeComponent,
    ZoomPanDragCanvasComponent,
    ForceCanvasZoomPanComponent,
    ForceCanvasZoomPanOneNodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [LesMisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
