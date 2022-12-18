import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMonitorsComponent } from './card-monitors.component';

describe('CardMonitorsComponent', () => {
  let component: CardMonitorsComponent;
  let fixture: ComponentFixture<CardMonitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMonitorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMonitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
