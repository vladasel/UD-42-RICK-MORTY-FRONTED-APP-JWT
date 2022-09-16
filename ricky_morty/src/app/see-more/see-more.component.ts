import { Component, OnInit } from '@angular/core';
import { CharacService } from '../charac.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.css']
})
export class SeeMoreComponent implements OnInit {
delete() {
throw new Error('Method not implemented.');
}
  id: string | null = "";
  res: any = null;


  constructor(private cServ: CharacService,private route:ActivatedRoute,  public router: Router  ) { }

  ngOnInit(){


      this.route.queryParams
      .subscribe(params => {
        this.id = params['id'];
      }
    );

    this.cServ.getAll()
    .subscribe(result => this.res = result);

    this.cServ.get(this.id)
    .subscribe(result =>this.res = result);





  }




}
