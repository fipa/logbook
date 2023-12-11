import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { LogbookService } from './logbook.service';


@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule 
    ],
    providers: [ LogbookService ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }