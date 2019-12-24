import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,BrowserModule, RouterModule
  ],
  exports: [NavigationComponent]
})
export class NavigationModule { }
