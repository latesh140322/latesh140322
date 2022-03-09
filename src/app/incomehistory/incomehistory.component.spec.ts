import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomehistoryComponent } from './incomehistory.component';

describe('IncomehistoryComponent', () => {
  let component: IncomehistoryComponent;
  let fixture: ComponentFixture<IncomehistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomehistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
