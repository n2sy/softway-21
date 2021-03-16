import { TestBed } from '@angular/core/testing';

import { ListPersonsService } from './list-persons.service';

describe('ListPersonsService', () => {
  let service: ListPersonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPersonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
