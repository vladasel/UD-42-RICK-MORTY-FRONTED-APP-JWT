import { Component, OnInit } from '@angular/core';

import { CharacService } from '../charac.service';

import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  delete() {
    throw new Error('Method not implemented.');
  }
  id: any | null = "";
  res: any = null;

  constructor(private cServ: CharacService, private route: ActivatedRoute,public router: Router) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.id = params['id'];
      }
      );

    this.cServ.getAll()
      .subscribe(result => this.res = result);




  }

  del(id: any) {
    this.cServ.delete(id)
      .subscribe(
        result => {
          this.res = result
          console.log(result);
          confirm("se a eliminado el personaje con ID:"+id)
          window.location.reload();
        });
  }


}
