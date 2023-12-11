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
      if (params['id']) {
        this.note.id = params['id'];
        this.fetchData();
      }
    });
  }

  fetchData() {
    this.logbookService.note(this.note.id).subscribe(
      (result) => {
        this.note = result;
      },
      (error) => {
        console.error(`Error fetching note ${this.note.id}`, error);
      })      
  }

  submitForm(): void {
    this.logbookService.createOrUpdate(this.note).subscribe(
      (result) => {
        console.log('Note updated successfully:', result);
      },
      (error) => {
        console.error('Error updating note:', error);
      }
    );
    this.router.navigate(['/']);
  }

  deleteNote(): void {
    if (confirm('Are you sure you want to delete this note?')) {
      this.logbookService.delete(this.note.id).subscribe(
        () => {
          console.log('Note deleted successfully');
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Error deleting note:', error);
        }
      );
    }
  }

}