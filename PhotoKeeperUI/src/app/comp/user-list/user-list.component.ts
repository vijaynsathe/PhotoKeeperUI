import { Component, OnInit } from '@angular/core';
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/model/user";
import { CommunicatorService } from "src/app/services/communicator.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: User[];
  filteredUserList: User[];
  txtUserSearchKey:string="";

  constructor(private _userService: UserService, private comService: CommunicatorService) { }

  ngOnInit() {
    debugger;
    this._userService.getAll().then(data => {
      debugger;
      this.userList = data as Array<User>;      
      this.filteredUserList = this.userList.map(x => Object.assign({}, x));

    }).catch(error => {
      debugger;
      console.log(error);
    });
  }

  sendMessage(message): void {
    // send message to subscribers via observable subject
    this.comService.sendMessage(message);
  }
  UserSelected(userObj) {
    this.comService.sendMessage(userObj);
    
  }
  onTxtUserChange($event){
    debugger;
    console.log($event)
    if($event.target.value.trim().length ==0){
      this.filteredUserList = this.userList.map(x => Object.assign({}, x));
    }else{
          this.filteredUserList = this.userList.filter(usr=>usr.name.indexOf($event.target.value) !=-1); 
    }
      
  }
  
}
