import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../model/user.model';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css']
})
export class GetAllUsersComponent implements OnInit {
 users: UserModel[];
  constructor(private api: ApiService,
    private http: HttpClient) { }

  ngOnInit(): void {
    console.log("onInit");
    this.getAllUsers();
  }
  getAllUsers(){
   console.log("getAllUsers");
    this.api.getAll().subscribe(data =>{
      this.users=data
    })
  }

}
