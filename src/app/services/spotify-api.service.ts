import { produce } from 'immer';
import { SearchItemResult, TrackInfoResult } from './../beatify.types';
import { switchMap, map, filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../core/auth.service';
import { environment } from 'src/environments/environment';
import { forkJoin, Observable } from 'rxjs';
import { SearchResult, Track } from '../beatify.types';

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService {
  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  search(query: string, tempo: number): Observable<any[]> {
    return this.http.get<SearchResult>(this.getSearchUrl(query), this.getOptions())
      .pipe(
        switchMap(searchResult => this.getTracksInfo(searchResult)),
        map(tracks => this.filterTempo(tracks, tempo)),
      );
  }

  private getTrackInfo(track: Track): Observable<Track> {
    return this.http.get<TrackInfoResult>(`https://api.spotify.com/v1/audio-analysis/${track.id}`, this.getOptions())
      .pipe(
        map(result => produce(track, draft => {
          draft.tempo = result.track.tempo;
        }))
      );
  }

  private getTracksInfo(searchResult: SearchResult) {
    const tracks = searchResult.tracks.items.map(this.createTrack);
    return forkJoin(tracks.map(trackId => this.getTrackInfo(trackId)));
  }

  private filterTempo(tracks: Track[], tempo: number) {
    const offset = 10;
    return tracks.filter(track => track.tempo < tempo + offset && track.tempo > tempo - offset);
  }

  private createTrack(searchItem: SearchItemResult): Track {
    return {
      id: searchItem.id,
      name: searchItem.name,
      artist: searchItem.artists[0].name,
      album: searchItem.album.name,
      duration: searchItem.duration_ms,
      tempo: null,
    };
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
    const limit = `limit=50`;

    return `${url}?${q}&${type}&${limit}`;
  }
}
