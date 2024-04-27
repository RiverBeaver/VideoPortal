import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOfVideoComponent } from './card-of-video.component';

describe('CardOfVideoComponent', () => {
  let component: CardOfVideoComponent;
  let fixture: ComponentFixture<CardOfVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardOfVideoComponent]
    });
    fixture = TestBed.createComponent(CardOfVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
