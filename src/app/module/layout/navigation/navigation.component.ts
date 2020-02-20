import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit() {
    var m;
    var header = document.getElementById("side-menu");
    var btns = header.getElementsByClassName("menu");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        m = this.className;
      });
    }
  }

  view() {
    this.router.navigate(['/home/view']);

  }
  dashboard() {
    this.router.navigate(['/home/dashboard']);
  }
  chart() {
    this.router.navigate(['/home/chart']);
  }


}


