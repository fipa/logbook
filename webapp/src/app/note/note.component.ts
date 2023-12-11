import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LogbookService } from '../services/logbook.service';
import { Note } from '../models/note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})

export class NoteComponent implements OnInit{
   note: Note = { id: 0, title: '', content: '', timestamp: new Date()};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private logbookService: LogbookService
  ) {}
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.note.id = params['id'];
      console.log("fetching note with id ", this.note.id);
      this.fetchData();
    });
  }

  fetchData() {
    this.logbookService.note(this.note.id).subscribe((result) => {
      this.note = result;
    })
  }

  submitForm(): void {
    this.logbookService.update(this.note).subscribe(
      (result) => {
        console.log('Note updated successfully:', result);
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Error updating note:', error);
      }
    );
  }

}