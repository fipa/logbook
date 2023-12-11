import { Component, OnInit } from '@angular/core';

import { LogbookService } from '../logbook.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit{
  data: any;

  constructor(private logbookService: LogbookService) {}
  
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.logbookService.list().subscribe((result) => {
      this.data = result;
    })
  }

  getData() {
    return this.data;
  }

}