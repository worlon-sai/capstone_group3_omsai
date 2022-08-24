import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../model/user.model';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  username:string;

  constructor(
   private api: ApiService,
   private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.username = this.api.getUserName();
    console.log(this.username);
    console.log(this.api.getUserId());
  }
  userThere:boolean=false
  users: UserModel[] | undefined

}
