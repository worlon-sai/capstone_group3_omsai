import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnswerComponent } from './add-answer/add-answer.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ApproveAnswerComponent } from './approve-answer/approve-answer.component';
import { ApproveQuestionComponent } from './approve-question/approve-question.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { ChatComponent } from './chat/chat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteAnswerComponent } from './delete-answer/delete-answer.component';
import { DeleteQuestionComponent } from './delete-question/delete-question.component';
import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { GetAllUsersComponent } from './get-all-users/get-all-users.component';
import { DashboardquestionsComponent } from './dashboardquestions/dashboardquestions.component';
import { HomeComponent } from './home/home.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { ChatindComponent } from './chatind/chatind.component';
import { HomesearchComponent } from './homesearch/homesearch.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
path: 'homesearch',
component: HomesearchComponent
  },
  {path: 'adminsignup',
  component : AdminsignupComponent

  },
  {
    path: 'askQuestion',
    component: AskQuestionComponent
  },
  {
    path: 'addAnswer',
    component: AddAnswerComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },

  {
    path: 'chat',
    component: ChatComponent
  },
  {
 path : 'chatind',
 component : ChatindComponent
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'adminDashboard',
    component: AdminDashboardComponent
  },
  {
    path: 'approveQuestion',
    component: ApproveQuestionComponent
  },
  {
    path: 'approveAnswer',
    component: ApproveAnswerComponent
  },
  {
    path: 'deleteQuestion',
    component: DeleteQuestionComponent
  },
  {
    path: 'deleteAnswer',
    component: DeleteAnswerComponent
  },

  { path: 'getAllUsers',
  component: GetAllUsersComponent

  },
  {
    path: 'dashboardquestions',
    component:DashboardquestionsComponent
    },

  {
    path: '**',
    component: NoPageFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
