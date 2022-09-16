import { Component, OnInit } from '@angular/core';
import { CharacService } from '../charac.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-character',
  templateUrl: './update-character.component.html',
  styleUrls: ['./update-character.component.css']
})
export class UpdateCharacterComponent implements OnInit {

  id: string | null = "";
  res: any = null;
  saveChar: any = null;
  constructor(private cServ: CharacService, private route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.id = params['id'];
      }
      );


    this.cServ.get(this.id)
      .subscribe(
        result => this.res = result
      )
  }

  saveC() {
    this.saveChar = null;

    this.saveChar = {
      "name": (<HTMLInputElement>document.getElementById("name")).value,
      "status": (<HTMLInputElement>document.getElementById("status")).value,
      "species": (<HTMLInputElement>document.getElementById("species")).value,
      "gender": (<HTMLInputElement>document.getElementById("gender")).value,
      "origin": (<HTMLInputElement>document.getElementById("origin")).value,
      "image": (<HTMLInputElement>document.getElementById("image")).value
    };

    this.cServ.update(this.id, this.saveChar)
      .subscribe(
        value => {
          this.router.navigate(['/characters']);
          alert("El personaje con el ID: "+this.id+" a sido actualizado")
        }, error => {// do something with error
        }
      );
  }
}
