import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtenddateComponent } from './extenddate.component';

describe('ExtenddateComponent', () => {
  let component: ExtenddateComponent;
  let fixture: ComponentFixture<ExtenddateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtenddateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtenddateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
