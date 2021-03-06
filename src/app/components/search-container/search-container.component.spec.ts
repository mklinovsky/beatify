import { BeatifyState } from './../../state/beatify.state';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchContainerComponent } from './search-container.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store, StateStream, NgxsModule } from '@ngxs/store';

describe('SearchContainerComponent', () => {
  let component: SearchContainerComponent;
  let fixture: ComponentFixture<SearchContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchContainerComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      imports: [
        HttpClientTestingModule,
        NgxsModule.forRoot([BeatifyState]),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
