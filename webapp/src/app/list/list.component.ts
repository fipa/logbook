import { Component, OnInit } from '@angular/core';

import { LogbookService } from '../services/logbook.service';
import { Note } from '../models/note.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit{
  notes: Note[] = [];

  constructor(private logbookService: LogbookService) {}
  
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.logbookService.list().subscribe(
      (result) => {
        this.notes = result;
      },
      (error) => {
        console.error("Error fetching notes ", error);
      })
  }

}