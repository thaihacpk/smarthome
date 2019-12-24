import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavbarComponent } from './topnavbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TopnavbarComponent],
  imports: [
    CommonModule,BrowserModule, RouterModule
  ],
  exports: [TopnavbarComponent]
})
export class TopnavbarModule { }
