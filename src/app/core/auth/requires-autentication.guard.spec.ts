import { TestBed } from '@angular/core/testing';

import { RequiresAutenticationGuard } from './requires-autentication.guard';

describe('RequiresAutenticationGuard', () => {
  let guard: RequiresAutenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RequiresAutenticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
