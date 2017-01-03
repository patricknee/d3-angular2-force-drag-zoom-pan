/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LesMisService } from './les-mis.service';

describe('LesMisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LesMisService]
    });
  });

  it('should ...', inject([LesMisService], (service: LesMisService) => {
    expect(service).toBeTruthy();
  }));
});
