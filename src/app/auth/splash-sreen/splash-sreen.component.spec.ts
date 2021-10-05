import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashSreenComponent } from './splash-sreen.component';

describe('SplashSreenComponent', () => {
  let component: SplashSreenComponent;
  let fixture: ComponentFixture<SplashSreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplashSreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashSreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
