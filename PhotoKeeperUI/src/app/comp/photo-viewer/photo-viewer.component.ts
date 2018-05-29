import { Component, OnInit, Input } from '@angular/core';
import { Album, PhotoAlbum } from "src/app/model/album";
import { PhotoManagerService } from "src/app/services/photo-manager.service";
import { Photo } from "src/app/model/photo";
import { SimpleChanges } from "@angular/core";
import { SimpleChange } from "@angular/core";
import { ChangeDetectorRef } from "@angular/core";
import { ApplicationRef } from "@angular/core";

@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.css']
})
export class PhotoViewerComponent implements OnInit {
  @Input()
  albumsToShow: Album[];
  interval:any;
  viewAlbum1:boolean=true;
  allPhotos: Photo[]=[];
  photoAlbum:PhotoAlbum[]=[];
  visiblePhotoAlbum: PhotoAlbum;
  visiblePhotoAlbumCounter :number=0;
    constructor(private _photoManagerService: PhotoManagerService) { }


  ngOnInit() {

    // this.refreshData();
    // this.interval = setInterval(() => {
    //   this.refreshData();
    // }, 2000);
   // this.bindPhoto();
  }
  ngOnChanges(changes: SimpleChanges) {
    debugger;
    console.log(changes);
    this.bindPhoto();
    //changes.albumsToShow.currentValue
    // const name: SimpleChange = changes.name;
    // console.log('prev value: ', name.previousValue);
    // console.log('got name: ', name.currentValue);
   // this._name = name.currentValue.toUpperCase();
  }
  bindPhoto(){
  this._photoManagerService.getAll().then(data => {
    debugger;
      this.allPhotos = data as Array<Photo>;
      console.log(this.allPhotos);

      this.photoAlbum.length =0;
      debugger;
      if(this.albumsToShow !=undefined){
            for (let item of this.albumsToShow) 
              {
                console.log(item);
                let obj = new PhotoAlbum();
                obj.album = item;
                obj.photos = this.allPhotos.filter(rec=>rec.albumId ==item.id);
                this.photoAlbum.push(obj)
              }
              debugger;
              console.log(this.photoAlbum);
              this.visiblePhotoAlbum = this.photoAlbum[0];
              
              //if more there are 2 albums selected then show photos with interval of 20sec
              if(this.photoAlbum.length >=2){
                this.interval = setInterval(() => {
                                this.refreshData();
                              }, 3000);
              }
             
      }
      

    //  this.selectedAblumList = this.albumList.filter(record => record.userId === this.selectedUserId);

    }).catch(error => {

      console.log(error);
    });

  }
refreshData(){
  if(this.photoAlbum.length <2)
  {
      return;
   }
  console.log(this.visiblePhotoAlbumCounter);

  if(this.visiblePhotoAlbumCounter  ==0){
    this.visiblePhotoAlbumCounter++;
    this.visiblePhotoAlbum = this.photoAlbum[this.visiblePhotoAlbumCounter];    
  }else if(this.visiblePhotoAlbumCounter ==1){
    this.visiblePhotoAlbumCounter--;
     this.visiblePhotoAlbum = this.photoAlbum[this.visiblePhotoAlbumCounter];    
  }
  
}

}
