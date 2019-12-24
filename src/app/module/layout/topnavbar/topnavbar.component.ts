import { Component, OnInit } from '@angular/core';

import { Auth } from 'aws-amplify';
import { User } from 'src/app/user';
import { APIService } from 'src/app/API.service';
import { Router } from '@angular/router';


declare var jQuery: any;
@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent implements OnInit {
  userId: string;
  userName: string;
  user = new User('', '', '', '', '', '');
  constructor(private api: APIService, private router: Router) { }
  ngOnInit() {
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(async user => {
      this.userId = user.attributes.sub;
      this.userName = user.username;
    })
      .catch(err => console.log(err));
  }

  logout() {
    Auth.signOut({ global: true })
      .then(data => {
        this.router.navigate(['/login']);
      })
      .catch(err => console.log(err));
  }

  toggleNavigation(): void {
    jQuery('body').toggleClass('mini-navbar');
    //smoothlyMenu();
  }
}
