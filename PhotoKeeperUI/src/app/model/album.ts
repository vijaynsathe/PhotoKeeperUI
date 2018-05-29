import { Photo } from "src/app/model/photo";

export interface Album {
    id:number;    
    userId:number;
    title:string;
}
export class PhotoAlbum{
    album:Album =null;
    photos:Photo[]=[];
}

export interface AlbumSelection {
    album:Album;
    selected:boolean;
}
