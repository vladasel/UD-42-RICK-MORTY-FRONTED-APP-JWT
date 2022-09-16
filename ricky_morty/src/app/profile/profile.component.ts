import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  usernameView?: string;
  currentuser: any;

  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentuser = this.token.getUser();
   // this.usernameView = JSON.stringify(this.currentuser).replace(/['"]+/g, '');
    console.log(this.currentuser.roles);
  }

}
