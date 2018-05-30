import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { UserService } from './user.service';
import { CommunicatorService } from "src/app/services/communicator.service";
import { PhotoManagerService } from "src/app/services/photo-manager.service";
import { AlbumManagerService } from "src/app/services/album-manager.service";

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService, CommunicatorService,PhotoManagerService,AlbumManagerService]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});


// // Straight Jasmine testing without Angular's testing support
// describe('ValueService', () => {
//   let service: ValueService;
//   beforeEach(() => { service = new ValueService(); });
 
//   it('#getValue should return real value', () => {
//     expect(service.getValue()).toBe('real value');
//   });
 
//   it('#getObservableValue should return value from observable',
//     (done: DoneFn) => {
//     service.getObservableValue().subscribe(value => {
//       expect(value).toBe('observable value');
//       done();
//     });
//   });
 
//   it('#getPromiseValue should return value from a promise',
//     (done: DoneFn) => {
//     service.getPromiseValue().then(value => {
//       expect(value).toBe('promise value');
//       done();
//     });
//   });
// });