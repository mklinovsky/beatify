export interface SearchResult {
  tracks: TracksResult;
}

export interface TracksResult {
  href: string;
  items: SearchItemResult[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

export interface SearchItemResult {
  id: string;
  name: string;
  artists: { name: string }[];
  album: { name: string };
  duration_ms: number;
}

export interface TrackInfoResult {
  track: { tempo: number };
}

export interface Track {
  id: string;
  name: string;
  artist: string;
  album: string;
  tempo: number;
  duration: number;
}

export interface SearchForm {
  query: string;
  tempo: number;
}
