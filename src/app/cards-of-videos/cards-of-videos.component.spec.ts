import { ComponentFixture, TestBed } from '@angular/core/testing';

import CardsOfVideosComponent from './cards-of-videos.component';

describe('CardsOfVideosComponent', () => {
  let component: CardsOfVideosComponent;
  let fixture: ComponentFixture<CardsOfVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsOfVideosComponent],
    });
    fixture = TestBed.createComponent(CardsOfVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
