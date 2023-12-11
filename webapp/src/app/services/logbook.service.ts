import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})

export class LogbookService {
  private apiUrl = "http://localhost:8080/notes";

  constructor(private http: HttpClient) { }

  list(): Observable<any> { // TODO podria ser Task en vez de any
    return this.http.get<any>(this.apiUrl, { responseType: 'json'});
  }

  note(id: number): Observable<Note> { // TODO podria ser Task en vez de any
    return this.http.get<Note>(`${this.apiUrl}/${id}`, { responseType: 'json'});
  }

  update(note: Note): Observable<Note> {
    return this.http.put<Note>(`${this.apiUrl}/${note.id}`, note, { responseType: 'json' });
  } 

}
