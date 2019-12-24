import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Login Auth
import { AuthGuard } from './login/auth-guards/auth.guard';

//Components
import { LoginPageComponent } from './login/login-page/login-page.component';
import { ContainerComponent } from './module/layout/container/container.component';


const routes: Routes = [
  {
  path: "home",
  component: ContainerComponent,
  canActivate: [AuthGuard]
},
{
  path: "login",
  component: LoginPageComponent,
},
{
  path: '**',
  redirectTo: 'login',
  pathMatch: 'full'
},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
