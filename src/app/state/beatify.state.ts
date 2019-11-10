import { switchMap, catchError } from 'rxjs/operators';
import { SpotifyApiService } from './../services/spotify-api.service';
import { Track } from './../beatify.types';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { Search, SearchSuccess, SearchError } from './beatify.actions';
import produce from 'immer';
import { forkJoin } from 'rxjs';

export interface BeatifyStateModel {
  searchQuery: string;
  tempo: number;
  tracks: Track[];
  loading: boolean;
  error: string;
}

@State<BeatifyStateModel>({
  name: 'beatify',
  defaults: {
    searchQuery: null,
    tempo: 180,
    tracks: [],
    loading: false,
    error: null,
  }
})
export class BeatifyState {
  constructor(private apiService: SpotifyApiService) {}

  @Selector()
  static getState(state: BeatifyStateModel) {
    return state;
  }

  @Selector()
  static getTracks(state: BeatifyStateModel) {
    return state.tracks;
  }

  @Selector()
  static getLoading(state: BeatifyStateModel) {
    return state.loading;
  }

  @Selector()
  static getError(state: BeatifyStateModel) {
    return state.error;
  }

  @Action(Search)
  searchCriteriaChanged(ctx: StateContext<BeatifyStateModel>, action: Search) {
    ctx.setState(
      produce(ctx.getState(), draft => {
        draft.searchQuery = action.searchQuery;
        draft.tempo = action.tempo;
        draft.loading = true;
      })
    );

    const state = ctx.getState();

    return this.apiService.search(state.searchQuery, state.tempo)
      .pipe(
        switchMap((searchResult) => ctx.dispatch(new SearchSuccess(searchResult))),
        catchError(error => ctx.dispatch(new SearchError(error))),
      );
  }

  @Action(SearchSuccess)
  searchSuccess(ctx: StateContext<BeatifyStateModel>, action: SearchSuccess) {
    ctx.setState(
      produce(ctx.getState(), draft => {
        draft.tracks = action.tracks;
        draft.loading = false;
      })
    );
  }

  @Action(SearchError)
  searchError(ctx: StateContext<BeatifyStateModel>, action: SearchError) {
    ctx.setState(
      produce(ctx.getState(), draft => {
        draft.loading = false;
        draft.error = action.error.message;
      })
    );
  }
}
