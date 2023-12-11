import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NoteComponent } from './note/note.component';
import { ListComponent } from './list/list.component';
import { LogbookService } from './services/logbook.service';


@NgModule({
    declarations: [
        AppComponent,
        NoteComponent,
        ListComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        CommonModule,
        HttpClientModule,
    ],
    providers: [ LogbookService ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }