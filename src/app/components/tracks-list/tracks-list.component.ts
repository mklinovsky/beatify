import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Track } from 'src/app/beatify.types';

@Component({
  selector: 'btf-tracks-list',
  templateUrl: './tracks-list.component.html',
  styleUrls: ['./tracks-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TracksListComponent implements OnInit {
  @Input() tracks: Track[];
  @Input() loading: boolean;

  ngOnInit(): void {

  }
}
