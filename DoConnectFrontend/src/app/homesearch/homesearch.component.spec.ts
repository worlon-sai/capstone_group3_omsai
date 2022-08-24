import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesearchComponent } from './homesearch.component';

describe('HomesearchComponent', () => {
  let component: HomesearchComponent;
  let fixture: ComponentFixture<HomesearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomesearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
