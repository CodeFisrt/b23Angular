import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  userList: any [] = [];
  userObj: any = {
    "userId": 0,
    "name": "",
    "email": "",
    "password": "",
    "contactNo": "",
    "role": ""
  }

  constructor(private http: HttpClient) {
    this.getAllUsers()
  }

  getAllUsers() {
     this.http.get("https://freeapi.gerasim.in/api/EventBooking/GetAllUsers")
     .subscribe((res:any) => {
      debugger;
      this.userList = res.data;
     })
  }
  onSaveUSer() {
    debugger;
    this.http.post("https://freeapi.gerasim.in/api/EventBooking/CreateUser", this.userObj)
    .subscribe((result:any)=>{
      debugger;
      if(result.result) {
        alert("User Created Succefully");
        this.getAllUsers() 
      } else {
        alert(result.message)
      }
    })
  }
}
