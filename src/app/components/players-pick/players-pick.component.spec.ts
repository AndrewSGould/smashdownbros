import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersPickComponent } from './players-pick.component';

describe('PlayersPickComponent', () => {
  let component: PlayersPickComponent;
  let fixture: ComponentFixture<PlayersPickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersPickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
