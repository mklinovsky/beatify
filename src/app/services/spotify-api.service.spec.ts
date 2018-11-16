import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SpotifyApiService } from './spotify-api.service';

describe('SpotifyApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: SpotifyApiService = TestBed.get(SpotifyApiService);
    expect(service).toBeTruthy();
  });
});
