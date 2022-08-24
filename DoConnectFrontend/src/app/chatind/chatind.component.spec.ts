import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatindComponent } from './chatind.component';

describe('ChatindComponent', () => {
  let component: ChatindComponent;
  let fixture: ComponentFixture<ChatindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
