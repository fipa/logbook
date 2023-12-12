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

  let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute> = jasmine.createSpyObj('ActivatedRoute', ['params']);
  mockActivatedRoute.params = of({ id: '1' } as Params);

  let mockLogbookService: jasmine.SpyObj<LogbookService> = jasmine.createSpyObj('LogbookService', ['note', 'createOrUpdate', 'delete']);
  const note: Note = { id: 1, title: "title", content: "content", timestamp: new Date() };
  mockLogbookService.note.and.returnValue(of<Note>(note));

  beforeEach(async () => {
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
