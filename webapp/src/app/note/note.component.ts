import { Component, OnInit } from '@angular/core';

import { LogbookService } from '../services/logbook.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})

export class NoteComponent implements OnInit{
   task: any;

  constructor(private logbookService: LogbookService) {}
  
  ngOnInit(): void {
    this.fetchData(3);
  }

  fetchData(id: number) {
    this.logbookService.task(id).subscribe((result) => {
      this.task = result;
    })
  }

}