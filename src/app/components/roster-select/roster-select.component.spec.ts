import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RosterSelectComponent } from './roster-select.component';

describe('RosterSelectorComponent', () => {
  let component: RosterSelectComponent;
  let fixture: ComponentFixture<RosterSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RosterSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
