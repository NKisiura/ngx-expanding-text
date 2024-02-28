import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxExpandingTextComponent } from './ngx-expanding-text.component';

describe('NgxExpandingTextComponent', () => {
  let component: NgxExpandingTextComponent;
  let fixture: ComponentFixture<NgxExpandingTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxExpandingTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxExpandingTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
