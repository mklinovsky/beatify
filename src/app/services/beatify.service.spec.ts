import { TestBed } from '@angular/core/testing';

import { BeatifyService } from './beatify.service';

describe('BeatifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeatifyService = TestBed.get(BeatifyService);
    expect(service).toBeTruthy();
  });
});
