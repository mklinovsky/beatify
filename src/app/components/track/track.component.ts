import { Component, Input, OnInit } from '@angular/core';
import { Track } from '../../beatify.types';

@Component({
  selector: 'btf-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  @Input() track: Track;

  constructor() { }

  ngOnInit() {
  }

}
