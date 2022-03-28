import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmashdownMatchesComponent } from './matches.component';

describe('MatchesComponent', () => {
  let component: SmashdownMatchesComponent;
  let fixture: ComponentFixture<SmashdownMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmashdownMatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmashdownMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
