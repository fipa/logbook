import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { of } from 'rxjs';

import { ListComponent } from './list.component';
import { Note } from '../models/note.model';
import { LogbookService } from '../services/logbook.service';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute> = jasmine.createSpyObj('ActivatedRoute', ['params']);
  mockActivatedRoute.params = of({ id: '1' } as Params);

  let mockLogbookService: jasmine.SpyObj<LogbookService> = jasmine.createSpyObj('LogbookService', ['list']);

  const notes: Note[] = [
    { id: 1, title: "title", content: "content", timestamp: new Date() },
    { id: 2, title: "title 2", content: "content 2", timestamp: new Date() }
  ];
  mockLogbookService.list.and.returnValue(of<Array<Note>>(notes));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [RouterModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: LogbookService, useValue: mockLogbookService }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
