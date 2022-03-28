import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IronmanRosterComponent } from './ironman-roster.component';

describe('IronmanRosterComponent', () => {
  let component: IronmanRosterComponent;
  let fixture: ComponentFixture<IronmanRosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IronmanRosterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IronmanRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
