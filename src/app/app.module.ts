import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { LoginModule } from './login/login.module';
import { LayoutModule } from './module/layout/layout.module';
import { MainViewComponent } from './components/main-view/main-view.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChartComponent } from './components/chart/chart.component';




@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    DashboardComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AmplifyAngularModule,
    AppRoutingModule,
    
    LoginModule,
    LayoutModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})


export class AppModule { }

// 1. Auth anglar serivce
// 2. Router link in components
// Xem : Auth Guard ,Authentication Service -> App Routing Module,User Model
