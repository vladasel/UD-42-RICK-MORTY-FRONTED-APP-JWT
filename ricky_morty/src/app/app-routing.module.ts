import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SeeMoreComponent } from './see-more/see-more.component';
import { UpdateCharacterComponent } from './update-character/update-character.component';
import { UserService } from './_services/user.service';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "user",
    component: BoardUserComponent
  },
  {
    path: "admin",
    component: BoardAdminComponent
  },
  {
    path: "", redirectTo: "home", pathMatch: "full"

  },

  {
    path: "characters",
    component: CharactersComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent

  },
  {
    path: "more",
    component: SeeMoreComponent
  },
  {
    path: "new",
    component: AddCharacterComponent
  },
  {
    path: "update",
    component: UpdateCharacterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
