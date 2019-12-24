import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { APIService } from 'src/app/API.service';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }
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


}


