import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { AmplifyAngularModule } from 'aws-amplify-angular';



@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    AmplifyAngularModule,
  ]
})
export class LoginModule { }
