import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeheaderComponent } from './incomeheader.component';

describe('IncomeheaderComponent', () => {
  let component: IncomeheaderComponent;
  let fixture: ComponentFixture<IncomeheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
