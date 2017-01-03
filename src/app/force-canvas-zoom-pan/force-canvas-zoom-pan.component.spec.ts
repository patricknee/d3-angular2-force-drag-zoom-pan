/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ForceCanvasZoomPanComponent } from './force-canvas-zoom-pan.component';

describe('ForceCanvasZoomPanComponent', () => {
  let component: ForceCanvasZoomPanComponent;
  let fixture: ComponentFixture<ForceCanvasZoomPanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForceCanvasZoomPanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceCanvasZoomPanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
