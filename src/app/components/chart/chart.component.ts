import { EnergyService } from './../../services/energy.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

declare var jQuery: any;
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {
  energyList = [];

  constructor(private energyService: EnergyService) { }


  viewEnergy(): void {
    this.energyService.getEngergy().subscribe(res => {
      console.log(res);
      this.energyList = res;
    })
  }
  
  ngOnInit() {
    this.viewEnergy();
  }
  // ngDoCheck() {
  //   this.viewEnergy();
  // }

}