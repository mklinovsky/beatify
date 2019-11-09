import { SpotifyApiService } from './../../services/spotify-api.service';
import { Component, OnInit } from '@angular/core';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'btf-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {

  constructor(
    private spotifyApi: SpotifyApiService
  ) { }

  ngOnInit() {
  }

  onChange(e) {
    const value = e.target.value;
    if (value.length > 2) {
      this.spotifyApi.search(value, 100)
        .subscribe((result) => {
          console.log(result);
        });
    }
  }
}
