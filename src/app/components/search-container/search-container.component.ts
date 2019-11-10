import { BeatifyService } from './../../services/beatify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'btf-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {
  tracks$ = this.beatifyService.tracks$;

  constructor(
    private beatifyService: BeatifyService
  ) { }

  ngOnInit() {
  }

  onChange(e) {
    const value = e.target.value;
    this.beatifyService.search(value, 100);
  }
}
