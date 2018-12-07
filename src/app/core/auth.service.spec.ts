import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

let service: AuthService;

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store auth token', () => {
    service.storeToken('authtoken');
    expect(service.token).toEqual('authtoken');
  });

  it('should remove auth token after logout', () => {
    service.storeToken('authtoken');
    service.logout();
    expect(service.token).toEqual('');
  });

  it('should check if user is logged in', () => {
    service.storeToken('authtoken');
    expect(service.isLoggedIn()).toBe(true);
  });

  it('should check if user is logged out', () => {
    service.storeToken('authtoken');
    service.logout();
    expect(service.isLoggedIn()).toBe(false);
  });
});
