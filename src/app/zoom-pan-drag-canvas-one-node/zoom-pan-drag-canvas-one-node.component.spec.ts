/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ZoomPanDragCanvasOneNodeComponent } from './zoom-pan-drag-canvas-one-node.component';

describe('ZoomPanDragCanvasOneNodeComponent', () => {
  let component: ZoomPanDragCanvasOneNodeComponent;
  let fixture: ComponentFixture<ZoomPanDragCanvasOneNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomPanDragCanvasOneNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomPanDragCanvasOneNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
