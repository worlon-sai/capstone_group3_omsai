import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardquestionsComponent } from './dashboardquestions.component';

describe('DashboardquestionsComponent', () => {
  let component: DashboardquestionsComponent;
  let fixture: ComponentFixture<DashboardquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardquestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
