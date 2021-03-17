import { TestBed } from '@angular/core/testing';

import { GererServerService } from './gerer-server.service';

describe('GererServerService', () => {
  let service: GererServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GererServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
