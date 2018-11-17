import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthService {

  constructor() { }

  getTokenFromFragment(fragment: string): string {
    const pattern = /access_token=([^&]*)/;
    const match = pattern.exec(fragment);

    return match && match.length >= 2 ? match[1] : '';
  }
}
