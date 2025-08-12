import { TestBed } from '@angular/core/testing';

import { dna } from './dna';

describe('Dna', () => {
  let service: dna;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(dna);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
