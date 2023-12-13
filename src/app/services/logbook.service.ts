import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})

export class LogbookService {

  private apiUrl = "http://localhost:8080";
  //private apiUrl = "http://logbook.eastus.azurecontainer.io:8080";
  private notesUrl = this.apiUrl + "/notes";

  constructor(private http: HttpClient) { }

  list(): Observable<Array<Note>> {
    return this.http.get<any>(this.notesUrl, { responseType: 'json'})
  }

  note(id: number): Observable<Note> {
    return this.http.get<Note>(`${this.notesUrl}/${id}`, { responseType: 'json'});
  }

  createOrUpdate(note: Note): Observable<Note> {
    if (note.id) {
      return this.http.put<Note>(`${this.notesUrl}/${note.id}`, note, { responseType: 'json' });
    } else {
      return this.http.post<Note>(this.notesUrl, note, { responseType: 'json'});
    }
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.notesUrl}/${id}`, { responseType: 'json'});
  }

  dictionary(): Observable<Record<string, number>> {
    return this.http.get<Record<string, number>>(`${this.apiUrl}/dictionary`, { responseType: 'json'});
  }

}
