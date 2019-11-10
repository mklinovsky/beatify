import { Search } from './beatify.actions';
import { SpotifyApiService } from './../services/spotify-api.service';
import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { BeatifyState } from './beatify.state';
import { of, Observable } from 'rxjs';
import { Track } from '../beatify.types';
import { delay } from 'rxjs/operators';

class MockApiService {
  search(query: string, tempo: number): Observable<Track[]> {
    return of([{
      id: 'id',
      name: 'name',
      artist: 'artist',
      album: 'album',
      tempo: 100,
      duration: 50000,
    }]).pipe(delay(2000));
  }
}

describe('Beatify store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([BeatifyState])],
      providers: [{
        provide: SpotifyApiService, useClass: MockApiService
      }]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should set loading', () => {
    store.dispatch(new Search('query', 100));
    const actual = store.selectSnapshot(BeatifyState.getLoading);
    expect(actual).toEqual(true);
  });
});
