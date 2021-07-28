import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmealComponent } from './bookmeal.component';

describe('BookmealComponent', () => {
  let component: BookmealComponent;
  let fixture: ComponentFixture<BookmealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
