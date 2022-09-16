import { Component, OnInit } from '@angular/core';
import { Charcater } from '../models/charcater.model';
import { CharacService } from '../charac.service';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

public add_form:FormGroup;

  constructor(private serv: CharacService, private fb: FormBuilder,public router: Router) {

    this.add_form = this.fb.group({
      name: '',
      status: '',
      species: '',
      gender: '',
      origin: '',
      image: ''
    })
  }

  ngOnInit(): void {
  }
  charc: Charcater = {
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    image: ''
  }
  saveCharac() {
    const data = {
      name: this.add_form.get('name')?.value,
      status: this.add_form.get('status')?.value,
      species: this.add_form.get('species')?.value,
      gender: this.add_form.get('gender')?.value,
      origin: this.add_form.get('origin')?.value,
      image: "https://rickandmortyapi.com/api/character/avatar/18.jpeg"
    };
    this.serv.create(data)
      .subscribe(
        response => {
          alert("se a añadido un nuevo personaje! ")
          console.log(response);
          this.router.navigate(['/characters']);
        },
        error => {
          console.log(error);
        }
      );



  }



}
