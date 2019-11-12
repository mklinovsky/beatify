import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../layout/material.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchContainerComponent } from './search-container/search-container.component';
import { PlaylistContainerComponent } from './playlist-container/playlist-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TracksListComponent } from './tracks-list/tracks-list.component';
import { TrackComponent } from './track/track.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AuthorizeComponent,
    LoginComponent,
    MainPageComponent,
    SearchContainerComponent,
    PlaylistContainerComponent,
    TracksListComponent,
    TrackComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    // HeaderComponent
  ]
})
export class ComponentsModule { }
