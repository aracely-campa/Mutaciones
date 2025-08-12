import { TestBed } from '@angular/core/testing';

import { Dna } from './dna';

describe('Dna', () => {
  let service: Dna;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dna);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
