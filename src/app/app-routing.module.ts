import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Login Auth
import { AuthGuard } from './login/auth-guards/auth.guard';

//Components
import { LoginPageComponent } from './login/login-page/login-page.component';
import { ContainerComponent } from './module/layout/container/container.component';
import { DataComponent } from './module/layout/data/data.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { ChartComponent } from './components/chart/chart.component';


const routes: Routes = [
  {
    path: "home",
    component: ContainerComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'view', component: MainViewComponent },
      { path: 'chart', component: ChartComponent },
    ]
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
export const routingComponent = [
  ContainerComponent,
  LoginPageComponent,
  MainViewComponent,]



// *********************************