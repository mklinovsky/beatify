import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeComponent } from './components/authorize/authorize.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'authorize', component: AuthorizeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
