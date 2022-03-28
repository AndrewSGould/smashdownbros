import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmashdownConfigComponent } from './smashdown-config.component';

describe('GameConfigComponent', () => {
  let component: SmashdownConfigComponent;
  let fixture: ComponentFixture<SmashdownConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmashdownConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmashdownConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
