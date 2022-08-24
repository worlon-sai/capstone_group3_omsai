import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { map } from "rxjs";
import { ApiService } from "../Service/api.service";
import { QuestionModel } from "../model/question.model";
import { AnswerModel } from "../model/answer.model";
import { UserModel } from "../model/user.model";


@Component({
  selector: 'app-dashboardquestions',
  templateUrl: './dashboardquestions.component.html',
  styleUrls: ['./dashboardquestions.component.css']
})
export class DashboardquestionsComponent implements OnInit {
  qid:number;
  question: QuestionModel;
  questions: QuestionModel;
  answers: any = [];
  users: UserModel[];

  constructor(
    private api: ApiService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log("dashboardquestions")
    this.qid= this.api.getQuid();

     console.log(this.qid)
    this.getAllQA();

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
  }
chat()
{
  this.router.navigate(["chatind"]);
}
  getAllQA() {
    console.log("hello");
    this.http
      .get<any>("http://localhost:9090/questions/approved/true")
      .subscribe(
        (res) => {

          for (let i = 0; i < res.length; i++) {
            console.log(this.qid);
            if(res[i].questionDto.q_id==this.qid)
            {this.question = res[i].questionDto;

            this.questions=this.question;
            for (let j = 0; j < res[i].answerDtos.length; j++) {
              // console.log(res[i].answerDtos[j]);
              if (res[i].answerDtos[j].returnedImage != null) {
                res[i].answerDtos[j].returnedImage = this.convertImage(
                  res[i].answerDtos[j].returnedImage
                );
              }
              this.answers.push(res[i].answerDtos[j]);
            }
          }}
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
