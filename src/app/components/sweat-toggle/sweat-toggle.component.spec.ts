import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweatToggleComponent } from './sweat-toggle.component';

describe('SweatToggleComponent', () => {
  let component: SweatToggleComponent;
  let fixture: ComponentFixture<SweatToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SweatToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SweatToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
