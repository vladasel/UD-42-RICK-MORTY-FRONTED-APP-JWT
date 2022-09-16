import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  roles: string | undefined;

  username = '';
  token : string | null | undefined;

  constructor(private tokenStorage: TokenStorageService, public router: Router) { }

  ngOnInit(): void {
    this.token = this.tokenStorage.getToken();
    this.username = this.tokenStorage.getUser();
    console.log(this.token);
    console.log("user"+JSON.stringify(JSON.stringify(this.username).replace(/['"]+/g, '')));

    if (this.token == null)
    {
      this.token = "NOT_FOUND";
    }
    else
    {
      this.roles = this.tokenStorage.getRoles()?.toString().replace(/['"]+/g, '');
      console.log("reoles ->"+this.roles);

    }
  }

}
