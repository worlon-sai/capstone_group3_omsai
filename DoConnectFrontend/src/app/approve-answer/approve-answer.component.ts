import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approve-answer',
  templateUrl: './approve-answer.component.html',
  styleUrls: ['./approve-answer.component.css']
})
export class ApproveAnswerComponent implements OnInit {
  questions:any = [];
  answers : any=[];
  a:number=0;
  b:number=0;

  remark :string;

  constructor(
   private http : HttpClient
  ) { }

  ngOnInit(): void {
    this.loadAnswers();
  }

  loadAnswers(){
    this.questions.splice(0);
    this.answers.splice(0);
    this.http.get<any>("http://localhost:9090/answers/notApproved").subscribe(
      (res) => {

        for (let i = 0; i < res.length; i++) {



          this.questions.push(res[i].questionDto);
          for (let j = 0; j < res[i].answerDtos.length; j++) {
            console.log(res[i].answerDtos[j]);
            if (res[i].answerDtos[j].returnedImage != null) {
              res[i].answerDtos[j].returnedImage = this.convertImage(
                res[i].answerDtos[j].returnedImage
              );
            }
            this.answers.push(res[i].answerDtos[j]);
          }

        }
        // console.log(this.questions);


      }, (err) => {
        alert("Something went wrong");
      }
    );


  }
  convertImage(img: any) {
    return "data:image/jpeg;base64," + img;
  }
  approve(aid){
    this.http.post<any>("http://localhost:9090/admin/approveAnswer/"+aid,null).subscribe((res) => {
      console.log(res);
      alert(res.message);
      this.loadAnswers();

    }, (err) => {
      console.log("Something went wrong");
    });



  }
  df(aid){
    console.log("df")
    this.a=aid
    this.b=2
    console.log(this.a,"done");

  }
  delete(aid){
    console.log("df");
    console.log(this.a,"done");
    this.http.delete<any>("http://localhost:9090/admin/deleteAnswer/"+aid+","+this.remark).subscribe(
      (res) => {
        alert(res.message);
        this.ngOnInit();



      }, (err) => {
        alert("Something went wrong");
      }
    );

    this.remark=" "
  }


}
