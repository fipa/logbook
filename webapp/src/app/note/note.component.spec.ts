import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { of } from 'rxjs';

import { NoteComponent } from './note.component';
import { LogbookService } from '../services/logbook.service';
import { Note } from '../models/note.model';
import { FormsModule } from '@angular/forms';

describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;

  let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;
  
  let mockLogbookService: jasmine.SpyObj<LogbookService> = jasmine.createSpyObj('LogbookService', ['note', 'createOrUpdate', 'delete']);
  mockLogbookService.note.and.callFake((id: number) => {
    const notes: Note[] = [
      { id: 1, title: "title", content: "content", timestamp: new Date() },
      { id: 2, title: "title 2", content: "content 2", timestamp: new Date() }
    ];
    return of(notes[id - 1]);
  });

  beforeEach(async () => {
    mockActivatedRoute = jasmine.createSpyObj('ActivatedRoute', ['params']);

    await TestBed.configureTestingModule({
      declarations: [NoteComponent],
      imports: [FormsModule, RouterModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: LogbookService, useValue: mockLogbookService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch the note', () => {
    mockActivatedRoute.params = of({ id: 1 } as Params);
    fixture.detectChanges();
    expect(component.note).not.toBeNull();
    expect(component.note.id).toBe(1);
  });

  it('should log an error', () => {

  });


});
