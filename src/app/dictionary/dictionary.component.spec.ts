import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DictionaryComponent } from './dictionary.component';
import { LogbookService } from '../services/logbook.service';

describe('DictionaryComponent', () => {
  let component: DictionaryComponent;
  let fixture: ComponentFixture<DictionaryComponent>;

  let mockLogbookService: jasmine.SpyObj<LogbookService> = jasmine.createSpyObj('LogbookService', ['dictionary']);

  const words: Record<string, number> = { };
  mockLogbookService.dictionary.and.returnValue(of<Record<string, number>>(words));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DictionaryComponent],
      providers: [
        { provide: LogbookService, useValue: mockLogbookService }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
