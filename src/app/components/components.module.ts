import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../layout/material.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchContainerComponent } from './search-container/search-container.component';
import { PlaylistContainerComponent } from './playlist-container/playlist-container.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AuthorizeComponent,
    LoginComponent,
    MainPageComponent,
    SearchContainerComponent,
    PlaylistContainerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class ComponentsModule { }
