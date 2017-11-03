import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevTabComponent } from './dev-tab.component';

describe('DevTabComponent', () => {
  let component: DevTabComponent;
  let fixture: ComponentFixture<DevTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
