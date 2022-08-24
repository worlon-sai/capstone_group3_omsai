import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ɵpublishDefaultGlobalUtils } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../Service/api.service';

@Component({
  selector: 'app-chatind',
  templateUrl: './chatind.component.html',
  styleUrls: ['./chatind.component.css']
})
export class ChatindComponent implements OnInit {

  username: string;
  userid: number;
  msg: any= [];
  data: any;
  chatForm : FormGroup;
  qid: number

  constructor(
    private http: HttpClient,
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.chatForm = new FormGroup({
      message: new FormControl(null)

    });

    this.username = this.api.getUserName();
    this.userid = this.api.getuserid();
    console.log(this.api.getUserId());
    console.log("hello");
    this.qid=this.api.getQuid()
    if(this.userid == undefined)
    {
      this.userid = this.api.getUserId();
    }
    if (this.userid == undefined) {
      console.log(this.userid);
      alert("Login is required");

      this.router.navigate(["/login"]);
    }

    this.getMsg();
  }
  send() {

    let requestBody=this.chatForm?.value;
    requestBody["username"]=this.username;
    requestBody["qid"]=this.qid;
    console.log(requestBody);
    this.http.post<any>("http://localhost:9092/chat/post1", requestBody).subscribe((res) => {
    console.log(res);
    this.chatForm?.reset();
    this.getMsg();


    }, (err) => {
      alert("Something went wrong");
    });

  }
  getMsg() {

    this.http.get<any>("http://localhost:9092/chat/get1/"+this.qid).subscribe((res) => {
      this.msg = res;
      console.log(res);


    }, (err) => {
      alert("Something went wrong");
    });


  }

}
