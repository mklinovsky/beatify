import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../layout/material.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AuthorizeComponent } from './authorize/authorize.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AuthorizeComponent,
    LoginComponent
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