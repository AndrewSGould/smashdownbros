import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RosterSelectorComponent } from './roster-selector.component';

describe('RosterSelectorComponent', () => {
  let component: RosterSelectorComponent;
  let fixture: ComponentFixture<RosterSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RosterSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
