import { TestBed } from '@angular/core/testing';

import { TipsRecomendationsService } from './tips-recomendations.service';

describe('TipsRecomendationsService', () => {
  let service: TipsRecomendationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipsRecomendationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
