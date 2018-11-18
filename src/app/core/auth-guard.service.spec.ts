import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

describe('AuthGuardService', () => {
  let authServiceSpy;
  let routerSpy;

  beforeEach(() => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['isLoggedIn']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    });
  });

  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  });

  it('should not activate when not logged in', () => {
    authServiceSpy.isLoggedIn.and.returnValue(false);
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service.canActivate()).toBe(false);
  });

  it('should activate when logged in', () => {
    authServiceSpy.isLoggedIn.and.returnValue(true);
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service.canActivate()).toBe(true);
  });

  it('should navigate to login', () => {
    authServiceSpy.isLoggedIn.and.returnValue(false);
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    service.canActivate();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });
});
