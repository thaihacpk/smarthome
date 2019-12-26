import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    var header = document.getElementById("side-menu");
    var btns = header.getElementsByClassName("menu");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }
  view() {
    // this.router.navigateByUrl('/home/view');
    this.router.navigate(['/home/view']);
  }
  chart() {
    this.router.navigate(['/home/chart']);
  }

}


