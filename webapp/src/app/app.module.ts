import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { ListComponent } from './list/list.component';
import { NoteComponent } from './note/note.component';
import { LogbookService } from './services/logbook.service';


@NgModule({
    declarations: [
        AppComponent,
        DictionaryComponent,
        ListComponent,
        NoteComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule
    ],
    providers: [ LogbookService ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }