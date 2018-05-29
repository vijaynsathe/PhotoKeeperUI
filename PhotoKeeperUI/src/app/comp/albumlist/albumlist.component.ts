import { Component, OnInit } from '@angular/core';
import { AlbumManagerService } from "src/app/services/album-manager.service";
import { Album, AlbumSelection } from "src/app/model/album";
import { Subscription } from "rxjs";
import { CommunicatorService } from "src/app/services/communicator.service";


@Component({
  selector: 'app-albumlist',
  templateUrl: './albumlist.component.html',
  styleUrls: ['./albumlist.component.css']
})
export class AlbumlistComponent implements OnInit {
  selectedUserId: number = 1;
  albumList: Album[];
  selectedAblumList: Album[];
  albumsToShow: Album[];
  subscription: Subscription;
  message: any;
  albumSelectionCounter: number = 0;
  userSelectedAlbumId:Album[]=[];
  
  constructor(private _albumManagerService: AlbumManagerService, private commService: CommunicatorService) { }

  ngOnInit() {

    this.subscription = this.commService.getMessage().subscribe(message => {
      debugger;
      this.selectedUserId = message.text;
      //refresh data
      this.bindAlbums();

    });

    this._albumManagerService.getAll().then(data => {
      this.albumList = data as Array<Album>;
      this.selectedAblumList = this.albumList.filter(record => record.userId === this.selectedUserId);

    }).catch(error => {

      console.log(error);
    });
  }

  bindAlbums() {

    this.selectedAblumList = this.albumList.filter(record => record.userId === this.selectedUserId);
  }
  // albumSelected(selectedAlbum: AlbumSelection) {
  //   debugger;
  //   console.log(selectedAlbum);

  //   if (selectedAlbum.selected) {
  //     if (this.albumSelectionCounter >= 2) {
  //       alert(">2");
  //     } else {
  //       this.albumSelectionCounter++;
  //     }
  //   } else {
  //     this.albumSelectionCounter--;
  //   }
  // }
testCheck(event){

  console.log(event);
}
    albumSelected(event) {
        if (event.target.target.checked) {
      if (this.albumSelectionCounter >= 2) {
     
        event.target.target.checked = false;
      } else {
        this.userSelectedAlbumId.push(event.album);
        this.albumSelectionCounter++;
      }
    } else {
      this.albumSelectionCounter--;
     
      this.userSelectedAlbumId = this.userSelectedAlbumId.filter(item => item.id !== event.album.id);
    }
  }
  showPhoto(){
   
    this.albumsToShow = this.userSelectedAlbumId.map(x => Object.assign({}, x));
    //alert('hi show photos');
  }  
}
