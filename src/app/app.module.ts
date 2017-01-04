import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ForceCanvasComponent } from './force-canvas/force-canvas.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ZoomPanDragCanvasComponent } from './zoom-pan-drag-canvas/zoom-pan-drag-canvas.component';
import { ZoomPanDragCanvasOneNodeComponent } from './zoom-pan-drag-canvas-one-node/zoom-pan-drag-canvas-one-node.component';
import { LesMisService } from './les-mis.service';
import { ForceCanvasZoomPanComponent } from './force-canvas-zoom-pan/force-canvas-zoom-pan.component';
import { ForceCanvasZoomPanOneNodeComponent } from './force-canvas-zoom-pan-one-node/force-canvas-zoom-pan-one-node.component';
import { ForceCanvasZoomPanWorkingComponent } from './force-canvas-zoom-pan-working/force-canvas-zoom-pan-working.component';

@NgModule({
  declarations: [
    AppComponent,
    ForceCanvasComponent,
    HomeComponent,
    ZoomPanDragCanvasComponent,
    ZoomPanDragCanvasOneNodeComponent,
    ForceCanvasZoomPanComponent,
    ForceCanvasZoomPanOneNodeComponent,
    ForceCanvasZoomPanWorkingComponent
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
