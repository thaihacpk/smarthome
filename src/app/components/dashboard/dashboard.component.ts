import { Component, OnInit } from '@angular/core';
import { EnergyService } from './../../services/energy.service';
// import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 shadowItem = [];
 shadowItem1:boolean; checkedItem1:boolean;
 shadowItem2:boolean; checkedItem2:boolean;
 shadowItem3:boolean; checkedItem3:boolean;
  constructor(private energyService: EnergyService) { }

  getShadow():void {
    this.energyService.getEngergy().subscribe( res=> {
      this.shadowItem = res.slice(-1)[0];
      // console.log(this.shadowItem);
      
    })
  }


  ngOnInit() {
    this.getShadow();
    window.setInterval(()=> {
      this.energyService.getEngergy().subscribe(res => {
        this.shadowItem = res.slice(-1)[0];
        if((this.shadowItem['payload']['dv1']) == 1) {
          this.shadowItem1 = true;
          this.checkedItem1 = true;
        }
        else {
          this.checkedItem1 = false;
          this.shadowItem1 = false;
        }
        if((this.shadowItem['payload']['dv2']) == 1) {
          this.checkedItem2 = true;
          this.shadowItem2 = true;
        }
        else {
          this.checkedItem2 = false;
          this.shadowItem2 = false;
        }
        if((this.shadowItem['payload']['dv3']) == 1) {
          this.checkedItem3 = true;
          this.shadowItem3 = true;
        }
        else {
          this.checkedItem3 = false;
          this.shadowItem3 = false;
        }
      })
    }, 1000);
  }

  upShadow1(value) {
    if(value) {
      this.energyService.ShadowOn1().subscribe(res => {
        console.log(res);
      })
    }else {
      this.energyService.ShadowOff1().subscribe(res => {
        console.log(res);
      })
    }
  }
  upShadow2(value) {
    if(value) {
      this.energyService.ShadowOn2().subscribe(res => {
        console.log(res);
      })
    }else {
      this.energyService.ShadowOff2().subscribe(res => {
        console.log(res);
      })
    }
  }
  upShadow3(value) {
    if(value) {
      this.energyService.ShadowOn3().subscribe(res => {
        console.log(res);
      })
    } else {
      this.energyService.ShadowOff3().subscribe(res => {
        console.log(res);
      })
    }
  }
}