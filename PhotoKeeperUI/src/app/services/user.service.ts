import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "src/app/model/user";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }

  getAll(){
    let url ="https://jsonplaceholder.typicode.com/users";

    const promise = new Promise((resolve, reject)=>{
        this.http.get<User>(url).toPromise().then(
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
