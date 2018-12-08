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

    return !!sessionStorage.getItem(this.tokenStorageKey);
  }

  getAccessToken() {
    if (this.token) {
      return this.token;
    }

    return sessionStorage.getItem(this.tokenStorageKey);
  }

  logout() {
    this.token = '';
    sessionStorage.removeItem(this.tokenStorageKey);
  }

  private createQueryString() {
    const clientId = `client_id=${environment.spotify.clientId}`;
    const responseType = 'response_type=token';
    const redirectUri = `redirect_uri=${encodeURIComponent(environment.spotify.redirectUri)}`;

    return `${clientId}&${responseType}&${redirectUri}`;
  }

  private createAuthorizeUrl() {
    return `${environment.spotify.authorizeUrl}?${this.createQueryString()}`;
  }
}
