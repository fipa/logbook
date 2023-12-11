import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LogbookService {
  private apiUrl = "https://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient) { }

  list(): Observable<any> { // TODO podria ser Task en vez de any
    return this.http.get<any>(this.apiUrl + "todos", { responseType: 'json'});
  }

}
