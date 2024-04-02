import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  todoList: any [] = [];

  constructor(private http: HttpClient){

  }

  getAllTodoList() {
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe((res:any)=>{
      this.todoList = res;
    })
    
  }

}
