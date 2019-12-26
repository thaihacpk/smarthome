import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
//Router
import { RouterModule, Routes } from '@angular/router';
//Component
import { ContainerComponent } from './container/container.component';
import { NavigationModule } from './navigation/navigation.module';
import { TopnavbarModule } from './topnavbar/topnavbar.module';
import { FooterModule } from './footer/footer.module';
import { DataComponent } from './data/data.component';
import { MainViewComponent } from 'src/app/components/main-view/main-view.component';



@NgModule({
  declarations: [ContainerComponent, DataComponent],
  imports: [
    CommonModule,BrowserModule, RouterModule, 
    NavigationModule, TopnavbarModule, FooterModule
  ],
  exports: [ContainerComponent, DataComponent]
})
export class LayoutModule { }
