import { TestBed } from '@angular/core/testing';

import { CategoiraTemaService } from './categoira-tema.service';

describe('CategoiraTemaService', () => {
  let service: CategoiraTemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoiraTemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
