import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankappComponent } from './bankapp.component';

describe('BankappComponent', () => {
  let component: BankappComponent;
  let fixture: ComponentFixture<BankappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
