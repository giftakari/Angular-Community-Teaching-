import { TestBed } from '@angular/core/testing';

import { ResolveGuildGuard } from './resolve-guild.guard';

describe('ResolveGuildGuard', () => {
  let guard: ResolveGuildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ResolveGuildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
