import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Album } from "src/app/model/album";

@Injectable({
  providedIn: 'root'
})
export class AlbumManagerService {

  constructor(private http:HttpClient) { }

  getAll(){
    let url ="https://jsonplaceholder.typicode.com/albums";

    const promise = new Promise((resolve, reject)=>{
        this.http.get<Album>(url).toPromise().then(
          data=>{
            resolve(data);
          },
          error=>{
            reject(error);
          }
          );
    });   
    return promise; 
  }
}
