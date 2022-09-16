import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './_services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ricky_morty';
  roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  username?: string;
  isLogginFailed =false;
  errorMessage='';


  form: any = {
    username: null,
    password: null
  };

  constructor(private tokenStorageService: TokenStorageService,private authService:AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes("ROLE_ADMIN");


      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.href="";

  }

  onSubmit(): void {


    this.authService.login(this.form.username,this.form.password).subscribe(
      data =>{
        this.tokenStorageService.saveToken(data.accessToken);
        this.tokenStorageService.saveUser(data);

        this.isLogginFailed =false;
        this.isLoggedIn=true;
        this.roles=this.tokenStorageService.getUser().roles;
        this.reloadPage();
      },
      err=>{
        this.errorMessage =err.error.message;
        this.isLogginFailed=true;
      }
    );
  }

  reloadPage():void{
    window.location.reload();
  }
}
