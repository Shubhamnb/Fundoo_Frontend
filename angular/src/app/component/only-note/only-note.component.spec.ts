import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyNoteComponent } from './only-note.component';

describe('OnlyNoteComponent', () => {
  let component: OnlyNoteComponent;
  let fixture: ComponentFixture<OnlyNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlyNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
