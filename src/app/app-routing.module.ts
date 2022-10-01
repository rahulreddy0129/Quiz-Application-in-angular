import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './components/question/question.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ToastrComponent } from './toastr/toastr.component';


const routes: Routes = [
  {
    path: '', redirectTo:'welcome', pathMatch:'full'
  },
  {
    path:'welcome', component: WelcomeComponent
  },
  {
    path: 'question', component: QuestionComponent
  },
  {
    path: 'toastr', component: ToastrComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
