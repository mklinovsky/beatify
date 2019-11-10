import { Search } from './../state/beatify.actions';
import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { BeatifyState } from '../state/beatify.state';
import { Track } from '../beatify.types';

@Injectable({
  providedIn: 'root'
})
export class BeatifyService {
  @Select(BeatifyState.getTracks) tracks$: Observable<Track[]>;
  @Select(BeatifyState.getLoading) loading$: Observable<boolean>;
  @Select(BeatifyState.getError) error$: Observable<string>;

  constructor(private store: Store) { }

  search(query: string, tempo: number) {
    this.store.dispatch(new Search(query, tempo));
  }
}
