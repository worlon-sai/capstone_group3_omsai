import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { QuestionModel } from '../model/question.model';
import { ApiService } from '../Service/api.service';

@Component({
  selector: 'app-approve-question',
  templateUrl: './approve-question.component.html',
  styleUrls: ['./approve-question.component.css']
})
export class ApproveQuestionComponent implements OnInit {
  questions:QuestionModel[];
  a:number=0;
  b:number=0;

  remark :string;

  constructor(
    private api: ApiService,
    private http: HttpClient

  ) { }

  ngOnInit(): void {

    this.loadQuestions();

  }
  loadQuestions() {
    this.http.get<any>("http://localhost:9090/questions/getByApproved/false").subscribe((res) => {
      this.questions=res;

    }, (err) => {
      console.log("Something went wrong");
    });

  }
  approve(qid){
    this.http.post<any>("http://localhost:9090/admin/approveQuestion/"+qid,null).subscribe((res) => {
      console.log(res);
      alert(res.message);
      this.ngOnInit();

    }, (err) => {
      console.log("Something went wrong");
    });


  }
  df(qid){
    this.a=qid
    this.b=2
  }

  delete(qid) {
    console.log(this.remark)
    console.log(qid)
    this.http.delete<any>("http://localhost:9090/admin/deleteQuestion/" + qid+","+this.remark).subscribe((res) => {

      alert(res.message);
      this.ngOnInit();

    }, (err) => {
      console.log("Something went wrong");
    });

    this.remark=" "
  }
}
