import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbillComponent } from './userbill.component';

describe('UserbillComponent', () => {
  let component: UserbillComponent;
  let fixture: ComponentFixture<UserbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserbillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
