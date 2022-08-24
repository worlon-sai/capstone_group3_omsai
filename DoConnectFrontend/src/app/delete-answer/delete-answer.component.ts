import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-answer',
  templateUrl: './delete-answer.component.html',
  styleUrls: ['./delete-answer.component.css']
})
export class DeleteAnswerComponent implements OnInit {
  questions : any=[];
  answers : any = [];
  a:number=0;
  b:number=0;

  remark :string;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getAnswers();

  }
  getAnswers(){
    this.questions.splice(0);
    this.answers.splice(0);
    this.http.get<any>("http://localhost:9090/answers/all").subscribe(
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


      }, (err) => {
        alert("Something went wrong");
      }
    );


  }
  convertImage(img: any) {
    return "data:image/jpeg;base64," + img;
  }

  df(aid){
    this.a=aid
    this.b=2
  }
  delete(aid){
    console.log(aid);
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
