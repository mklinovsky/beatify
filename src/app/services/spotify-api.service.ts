import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../core/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService {
  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  search(query: string) {
    return this.http.get(this.getSearchUrl(query), this.getOptions());
  }

  private getOptions() {
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.auth.getAccessToken()}`
      })
    };
  }

  private getSearchUrl(query: string) {
    const url = `${environment.spotify.apiEndpoint}search`;
    const q = `q=${encodeURIComponent(query)}`;
    const type = `type=track`;

    return `${url}?${q}&${type}`;
  }
}
