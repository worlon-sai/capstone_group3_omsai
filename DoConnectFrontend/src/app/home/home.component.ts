import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../Service/api.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchForm:FormGroup;
  searchString:string;
 username :string="undefined";
 noQuestions: boolean=false;
 questions: any = [];

  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient

  ) {console.log(this.username,"username",this.searchString); }
  ngOnInit(

  ): void {
  }
  adqid(){
    alert("login required to view");
  }
  submit()
  { console.log(this.username,"this is search 1");
    this.api.setSearchString(this.searchString);
    this.api.setUserName(this.username)
    console.log(this.username,"search2",this.searchString);
    this.router.navigate(["homesearch"]);
    this.searchForm?.reset();

  }

}



   // this.router.navigate(["search"]);




// constructor(private userService:UserService, private router:Router
//   , private adminService:AdminService) { }

// ngOnInit(): void {
//   this.user=this.userService.giveUserData()
//   this.admin=this.adminService.giveAdminData()

// }
// isSearched:boolean=false

// questions:Question[] | undefined

// user=new User()
// admin = new Admin()
//   getValue(values:string){
//   if(values !=='')
//   this.userService.searchQuestion(values).subscribe((data)=>{
//     console.log(data)
//     this.questions=data
//     if(data.length==0){
//       alert("No Question Found")
//     }else{
//     this.isSearched=true}
//   })

// }

// sendQuestionToGetAnswer(id:number){
//   console.log(id)
//   this.userService.getQuestionId(id)
//   this.router.navigate(['/get-answer'])
//   this.isSearched=false

