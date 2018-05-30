import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Album, AlbumSelection } from "src/app/model/album";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  @Input()
  album: Album;

  @Input()
  isChecked: boolean = false;

  //@Output() albumSelected = new EventEmitter<AlbumSelection>();
  @Output()
  albumSelected: EventEmitter<any> = new EventEmitter<any>();


  @Output()
  testCheck: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }
  chkChanged($event, albumId) {
    var selectedAlbum = {} as AlbumSelection;
    selectedAlbum.selected = $event.target.checked;
    selectedAlbum.album = this.album;
    let retObj: any = { target: $event, album: this.album };
    console.log(retObj);
    this.albumSelected.emit(retObj);
  }
}
