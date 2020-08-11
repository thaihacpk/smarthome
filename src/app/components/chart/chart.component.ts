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
  energyItem = [];
 
  constructor(private energyService: EnergyService) { }


  viewEnergy(): void {
    this.energyService.getEngergy().subscribe(res => {
      this.energyList = res;
      this.energyItem = res.slice(-1)[0];
    })  
  }
 
  ngOnInit() {
    window.setInterval(()=> {
      this.energyService.getEngergy().subscribe(res => {
        this.energyItem = res.slice(-1)[0];
      })
    }, 3000);
  }
  
 

}

