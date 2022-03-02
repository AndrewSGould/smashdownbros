import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmashdownComponent } from './smashdown.component';

describe('SmashdownComponent', () => {
  let component: SmashdownComponent;
  let fixture: ComponentFixture<SmashdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmashdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmashdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
