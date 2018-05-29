import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Album } from "src/app/model/album";
import { Photo } from "src/app/model/photo";

@Injectable({
  providedIn: 'root'
})
export class PhotoManagerService {

    constructor(private http:HttpClient) { }

  getAll(){
    let url ="https://jsonplaceholder.typicode.com/photos";

    const promise = new Promise((resolve, reject)=>{
        this.http.get<Photo>(url).toPromise().then(
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
