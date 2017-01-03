import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }   from './home/home.component';
import { ForceCanvasComponent }   from './force-canvas/force-canvas.component';
import { ForceCanvasZoomPanComponent }   from './force-canvas-zoom-pan/force-canvas-zoom-pan.component';
import { ForceCanvasZoomPanOneNodeComponent }   from './force-canvas-zoom-pan-one-node/force-canvas-zoom-pan-one-node.component';
import { ZoomPanDragCanvasComponent } from './zoom-pan-drag-canvas/zoom-pan-drag-canvas.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: 'dashboard',  component: DashboardComponent, canActivate: [AuthenticatedGuard] },
  { path: 'forcecanvas',  component: ForceCanvasComponent },
  { path: 'forcecanvaszp',  component: ForceCanvasZoomPanComponent },
  { path: 'forcecanvaszpon',  component: ForceCanvasZoomPanOneNodeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'zoompandrag', component: ZoomPanDragCanvasComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
