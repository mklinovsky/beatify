import { TestBed } from '@angular/core/testing';

import { SpotifyAuthService } from './spotify-auth.service';

describe('SpotifyAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotifyAuthService = TestBed.get(SpotifyAuthService);
    expect(service).toBeTruthy();
  });

  it('should return token', () => {
    const service: SpotifyAuthService = TestBed.get(SpotifyAuthService);
    expect(service.getTokenFromFragment('#access_token=authtoken&otherParam=123456')).toEqual('authtoken');
  });
});
