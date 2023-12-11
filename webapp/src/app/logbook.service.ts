import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LogbookService {
  private apiUrl = "http://localhost:8080/notes";

  constructor(private http: HttpClient) { }

  list(): Observable<any> { // TODO podria ser Task en vez de any
    return this.http.get<any>(this.apiUrl, { responseType: 'json'});
  }

}
