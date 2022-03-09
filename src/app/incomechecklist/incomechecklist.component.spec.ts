import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomechecklistComponent } from './incomechecklist.component';

describe('IncomechecklistComponent', () => {
  let component: IncomechecklistComponent;
  let fixture: ComponentFixture<IncomechecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomechecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomechecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
