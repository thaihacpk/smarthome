import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
//Router
import { RouterModule } from '@angular/router';
//Component
import { ContainerComponent } from './container/container.component';
import { NavigationModule } from './navigation/navigation.module';
import { TopnavbarModule } from './topnavbar/topnavbar.module';
import { FooterModule } from './footer/footer.module';




@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,BrowserModule, RouterModule, 
    NavigationModule, TopnavbarModule, FooterModule
  ],
  exports: [ContainerComponent]
})
export class LayoutModule { }
