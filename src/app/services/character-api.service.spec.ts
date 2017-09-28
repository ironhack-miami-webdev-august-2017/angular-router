import { TestBed, inject } from '@angular/core/testing';

import { CharacterApiService } from './character-api.service';

describe('CharacterApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterApiService]
    });
  });

  it('should be created', inject([CharacterApiService], (service: CharacterApiService) => {
    expect(service).toBeTruthy();
  }));
});
