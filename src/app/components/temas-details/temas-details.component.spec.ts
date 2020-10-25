import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemasDetailsComponent } from './temas-details.component';

describe('TemasDetailsComponent', () => {
  let component: TemasDetailsComponent;
  let fixture: ComponentFixture<TemasDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemasDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
