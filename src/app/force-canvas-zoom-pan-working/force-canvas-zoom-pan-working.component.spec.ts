/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ForceCanvasZoomPanWorkingComponent } from './force-canvas-zoom-pan-working.component';

describe('ForceCanvasZoomPanWorkingComponent', () => {
  let component: ForceCanvasZoomPanWorkingComponent;
  let fixture: ComponentFixture<ForceCanvasZoomPanWorkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForceCanvasZoomPanWorkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceCanvasZoomPanWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
