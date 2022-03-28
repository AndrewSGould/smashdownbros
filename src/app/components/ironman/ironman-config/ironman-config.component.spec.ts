import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IronmanConfigComponent } from './ironman-config.component';

describe('IronmanConfigComponent', () => {
  let component: IronmanConfigComponent;
  let fixture: ComponentFixture<IronmanConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IronmanConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IronmanConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
