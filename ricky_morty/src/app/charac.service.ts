import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Charcater } from './models/charcater.model';
import { Observable } from 'rxjs';

const url = "https://json---server.herokuapp.com/characters";

@Injectable({
  providedIn: 'root'
})
export class CharacService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<Charcater[]> {
    return this.http.get<Charcater[]>(url);
  }

  get(id: any): Observable<Charcater> {
    return this.http.get(`${url}/${id}`);

  }


  create(data: any): Observable<any> {
    return this.http.post(url, data);
  }

  delete(id:any):Observable<any>{
    return this.http.delete(`${url}/${id}`);

  }

  update(id:any,data:any):Observable<any>{
    return this.http.put(`${url}/${id}`,data);

  }

}
