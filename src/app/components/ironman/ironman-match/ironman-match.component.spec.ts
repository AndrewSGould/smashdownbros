import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IronmanMatchComponent } from './ironman-match.component';

describe('IronmanMatchComponent', () => {
  let component: IronmanMatchComponent;
  let fixture: ComponentFixture<IronmanMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IronmanMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IronmanMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
