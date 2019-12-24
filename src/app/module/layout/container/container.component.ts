import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { Auth } from 'aws-amplify';
import { APIService } from 'src/app/API.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
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

  logOut() {
    Auth.signOut({ global: true })
      .then(data => {
        this.router.navigate(['/login']);
      })
      .catch(err => console.log(err));
  }

}
