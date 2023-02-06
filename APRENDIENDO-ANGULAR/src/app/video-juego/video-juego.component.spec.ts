import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoJuegoComponent } from './video-juego.component';

describe('VideoJuegoComponent', () => {
  let component: VideoJuegoComponent;
  let fixture: ComponentFixture<VideoJuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoJuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
