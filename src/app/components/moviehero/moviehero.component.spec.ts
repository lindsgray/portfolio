import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieheroComponent } from './moviehero.component';

describe('MovieheroComponent', () => {
  let component: MovieheroComponent;
  let fixture: ComponentFixture<MovieheroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieheroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
