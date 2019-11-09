import { Track } from './../beatify.types';
import { HttpErrorResponse } from '@angular/common/http';

export class Login {
  static readonly type = '[Beatify] Login';
}

export class SearchCriteriaChanged {
  static readonly type = '[Beatify] SearchCriteriaChanged';
  constructor(public searchQuery: string, public tempo: number) {}
}

export class SearchSuccess {
  static readonly type = '[Beatify] SearchSuccess';
  constructor(public tracks: Track[]) {}
}

export class SearchError {
  static readonly type = '[Beatify] SearchError';
  constructor(public error: HttpErrorResponse) {}
}

export class AccessTokenExpired {
  static readonly type = '[Beatify] AccessTokenExpired';
}

