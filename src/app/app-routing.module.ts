import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }   from './home/home.component';
import { ForceCanvasComponent }   from './force-canvas/force-canvas.component';
import { ForceCanvasZoomPanComponent }   from './force-canvas-zoom-pan/force-canvas-zoom-pan.component';
import { ForceCanvasZoomPanWorkingComponent }   from './force-canvas-zoom-pan-working/force-canvas-zoom-pan-working.component';
import { ForceCanvasZoomPanOneNodeComponent }   from './force-canvas-zoom-pan-one-node/force-canvas-zoom-pan-one-node.component';
import { ZoomPanDragCanvasComponent } from './zoom-pan-drag-canvas/zoom-pan-drag-canvas.component';
import { ZoomPanDragCanvasOneNodeComponent } from './zoom-pan-drag-canvas-one-node/zoom-pan-drag-canvas-one-node.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: 'dashboard',  component: DashboardComponent, canActivate: [AuthenticatedGuard] },
  { path: 'forcecanvas',  component: ForceCanvasComponent },
  { path: 'forcecanvaszp',  component: ForceCanvasZoomPanComponent },
  { path: 'forcecanvaszpwrk',  component: ForceCanvasZoomPanWorkingComponent },
  { path: 'forcecanvaszpon',  component: ForceCanvasZoomPanOneNodeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'zoompandrag', component: ZoomPanDragCanvasComponent },
  { path: 'zoompandragon', component: ZoomPanDragCanvasOneNodeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
