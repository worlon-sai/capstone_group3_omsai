import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { map } from "rxjs";
import { ApiService } from "../Service/api.service";
import { QuestionModel } from "../model/question.model";
import { AnswerModel } from "../model/answer.model";
import { UserModel } from "../model/user.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  username:string;
  question: QuestionModel;
  questions: any = [];
  answers: any = [];
  users: UserModel[];
  userid:number;

  constructor(
    private api: ApiService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.username = this.api.getUserName();
    this.userid = this.api.getuserid();
    if(this.userid==undefined) {
      this.userid=this.api.getUserId();
    }
    this.getAllQA();
    console.log(this.userid,"userid");
    console.log(this.api.getUserName())

  }
  getData() {
    console.log("work");
    this.api.getApprovedQuestions().subscribe((res) => {
      // console.log(res);
      this.questions = res;
    });
  }

  addAnswer(q_id) {
    this.api.setQid(q_id);

    this.router.navigate(["addAnswer"]);
  }
  adqid(q_id){
    this.api.setQid(q_id);
    this.api.setQuId(q_id)
    this.router.navigate(["dashboardquestions"]);
  }

  getAllQA() {
    console.log("hello");
    this.http
      .get<any>("http://localhost:9090/questions/approved/true")
      .subscribe(
        (res) => {
          for (let i = 0; i < res.length; i++) {
            this.question = res[i].questionDto;

            this.questions.push(this.question);

          }
        },
        (err) => {
          alert("Something went wrong");
        }
      );
  }
  convertImage(img: any) {
    return "data:image/jpeg;base64," + img;
  }
}
