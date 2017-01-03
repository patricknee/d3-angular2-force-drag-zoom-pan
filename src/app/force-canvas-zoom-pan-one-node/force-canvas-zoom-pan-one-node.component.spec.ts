/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ForceCanvasZoomPanOneNodeComponent } from './force-canvas-zoom-pan-one-node.component';

describe('ForceCanvasZoomPanOneNodeComponent', () => {
  let component: ForceCanvasZoomPanOneNodeComponent;
  let fixture: ComponentFixture<ForceCanvasZoomPanOneNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForceCanvasZoomPanOneNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceCanvasZoomPanOneNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
