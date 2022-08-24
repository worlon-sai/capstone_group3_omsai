import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ApiService } from "../Service/api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  searchString: string;
  questions: any = [];
  answers: any = [];
  noQuestions: boolean=false;
  userName: string;
  bol: boolean = true;

  constructor(private api: ApiService, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.searchString = this.api.getSearchString();
    this.userName = this.api.getUserName();
    this.search();
    if(this.userName==undefined)
    this.bol=false;

  }
  search() {
    console.log(this.searchString,"helo string");
    this.http
      .get<any>("http://localhost:9090/questions/" + this.searchString)
      .subscribe((res) => {
        console.log(res);
        if (res.length === 0) {
          this.noQuestions = true;
        }
        console.log(this.noQuestions,"noquestions")
        for (let i = 0; i < res.length; i++) {
          console.log(res[i].questionDto);
          this.questions.push(res[i].questionDto);
          for (let j = 0; j < res[i].answerDtos.length; j++) {
            console.log(res[i].answerDtos[j]);
            this.answers.push(res[i].answerDtos[j]);
          }
        }
      });
  }
  getData() {
    console.log("work");
    this.api.getApprovedQuestions().subscribe((res) => {

      this.questions = res;
    });
  }
  addAnswer(q_id) {
    if(this.userName=="undefined") {
      alert("Login required and redirecting to login page");
      this.router.navigate(['login'])
      }
      else{
    this.api.setQuId(q_id);
    this.router.navigate(["addAnswer"]);
      }
  }
  adqid(q_id){
    if(this.userName=="undefined") {
    alert("Login required and redirecting to login page");
    this.router.navigate(['login'])
    }
    else{
    this.api.setQuId(q_id);
    console.log("hello")
    console.log(this.api.getQid());
    console.log("hello")
    this.router.navigate(["dashboardquestions"]);
  }
}
}
