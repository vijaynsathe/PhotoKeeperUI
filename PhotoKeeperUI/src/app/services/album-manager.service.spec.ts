import { TestBed, inject } from '@angular/core/testing';

import { AlbumManagerService } from './album-manager.service';

describe('AlbumManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumManagerService]
    });
  });

  it('should be created', inject([AlbumManagerService], (service: AlbumManagerService) => {
    expect(service).toBeTruthy();
  }));
});
