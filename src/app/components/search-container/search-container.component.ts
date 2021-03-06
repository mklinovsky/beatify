import { BeatifyService } from './../../services/beatify.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'btf-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchContainerComponent implements OnInit {
  tracks$ = this.beatifyService.tracks$;
  loading$ = this.beatifyService.loading$;

  form = new FormGroup({
    searchQuery: new FormControl(''),
    tempo: new FormControl(100),
  });

  constructor(
    private beatifyService: BeatifyService
  ) { }

  ngOnInit() {
    this.form.valueChanges
      .pipe(
        debounceTime(250),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.beatifyService.search(value.searchQuery, value.tempo);
      });
  }
}
