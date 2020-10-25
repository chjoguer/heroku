import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsRecomendationsComponent } from './tips-recomendations.component';

describe('TipsRecomendationsComponent', () => {
  let component: TipsRecomendationsComponent;
  let fixture: ComponentFixture<TipsRecomendationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsRecomendationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsRecomendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
