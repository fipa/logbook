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

  list(): Observable<Array<Note>> {
    return this.http.get<any>(this.apiUrl, { responseType: 'json'});
  }

  note(id: number): Observable<Note> {
    return this.http.get<Note>(`${this.apiUrl}/${id}`, { responseType: 'json'});
  }

  createOrUpdate(note: Note): Observable<Note> {
    if (note.id) {
      return this.http.put<Note>(`${this.apiUrl}/${note.id}`, note, { responseType: 'json' });
    } else {
      return this.http.post<Note>(this.apiUrl, note, { responseType: 'json'});
    }
    
  } 

}
