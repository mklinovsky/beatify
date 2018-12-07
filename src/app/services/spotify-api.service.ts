import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService {
  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  private getOptions() {
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.auth.getAccessToken()}`
      })
    };
  }
}
