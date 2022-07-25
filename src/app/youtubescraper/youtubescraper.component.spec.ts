import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubescraperComponent } from './youtubescraper.component';

describe('YoutubescraperComponent', () => {
  let component: YoutubescraperComponent;
  let fixture: ComponentFixture<YoutubescraperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubescraperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubescraperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
