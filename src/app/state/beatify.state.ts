import { switchMap, catchError } from 'rxjs/operators';
import { SpotifyApiService } from './../services/spotify-api.service';
import { Track } from './../beatify.types';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { SearchCriteriaChanged, SearchSuccess, SearchError } from './beatify.actions';
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
    searchQuery: '',
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

  @Action(SearchCriteriaChanged)
  searchCriteriaChanged(ctx: StateContext<BeatifyStateModel>, action: SearchCriteriaChanged) {
    ctx.setState(
      produce(ctx.getState(), draft => {
        draft.searchQuery = action.searchQuery;
        draft.tempo = action.tempo;
        draft.loading = true;
      })
    );

    const state = ctx.getState();

    // return this.apiService.search(state.searchQuery, state.tempo)
    //   .pipe(
    //     switchMap((searchResult) => ctx.dispatch(new SearchSuccess(searchResult))),
    //     catchError(error => ctx.dispatch(new SearchError(error))),
    //   );
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
