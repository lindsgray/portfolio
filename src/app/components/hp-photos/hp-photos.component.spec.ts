import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HpPhotosComponent } from './hp-photos.component';

describe('HpPhotosComponent', () => {
  let component: HpPhotosComponent;
  let fixture: ComponentFixture<HpPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HpPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HpPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
