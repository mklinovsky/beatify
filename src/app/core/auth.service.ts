import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenStorageKey = 'auth_token';
  token: string;

  constructor() { }

  authorize() {
    window.location.href = this.createAuthorizeUrl();
  }

  storeToken(token) {
    this.token = token;
    sessionStorage.setItem(this.tokenStorageKey, token);
  }

  isLoggedIn() {
    if (this.token) {
      return true;
    }

    return sessionStorage.getItem(this.tokenStorageKey);
  }

  logout() {
    this.token = '';
    sessionStorage.removeItem(this.tokenStorageKey);
  }

  private createQueryString() {
    return `?client_id=${environment.spotify.clientId}&response_type=token&redirect_uri=${encodeURIComponent(environment.spotify.redirectUri)}`;
  }

  private createAuthorizeUrl() {
    return `${environment.spotify.authorizeUrl}?${this.createQueryString()}`;
  }
}
