import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should store auth token', () => {
    const service: AuthService = TestBed.get(AuthService);
    service.storeToken('authtoken');
    expect(service.token).toEqual('authtoken');
  });

  it('should remove auth token after logout', () => {
    const service: AuthService = TestBed.get(AuthService);
    service.storeToken('authtoken');
    service.logout();
    expect(service.token).toEqual('');
  });

  it('should check if user is logged in', () => {
    const service: AuthService = TestBed.get(AuthService);
    service.storeToken('authtoken');
    expect(service.isLoggedIn()).toBe(true);
  });

  it('should check if user is logged out', () => {
    const service: AuthService = TestBed.get(AuthService);
    service.storeToken('authtoken');
    service.logout();
    expect(service.isLoggedIn()).toBe(false);
  });
});
