import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  userList: any[] = [];
  userList2: any[] = [];

  constructor(private http:HttpClient){}

//below function call Api and fire function on click of button

  getApidata()
  {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result:any)=> {
      this.userList = result;
    })

  }

//same function as above just call Api on initilization or load of screen or code
  getApidataauto()
  {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result:any)=> {
      this.userList2 = result;
    })

  }
  ngOnInit()
  {
    this.getApidataauto();
  }


}
