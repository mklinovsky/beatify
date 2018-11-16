import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private clientId = 'ff54e03713b04ead82bef3d411efd0c7';
  private authorizeUrl = 'https://accounts.spotify.com/authorize';

  constructor() { }

  authorize() {
    window.location.href = this.authorizeUrl + this.createQueryString();
  }

  private createQueryString() {
    return `?client_id=${this.clientId}&response_type=token&redirect_uri=${encodeURIComponent('http://localhost:4200/authorize/')}`;
  }
}
