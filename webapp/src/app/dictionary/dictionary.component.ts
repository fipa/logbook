import { Component, OnInit } from '@angular/core';

import { LogbookService } from '../services/logbook.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})

export class DictionaryComponent implements OnInit{
  words: Record<string, number> = { };
  wordKeys: string[] = [];

  constructor(private logbookService: LogbookService) {}
  
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    console.log("on fetch dictionary");
    this.logbookService.dictionary().subscribe(
      (result) => {
        console.log("words ", result);
        this.words = result;
        this.wordKeys = Object.keys(result);
      },
      (error) => {
        console.error("Error fetching notes ", error);
      })
  }

}