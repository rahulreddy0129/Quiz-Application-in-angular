import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule,  FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { ToastrComponent } from './toastr/toastr.component';
import { timeout } from 'rxjs';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { QuestionComponent } from './components/question/question.component';
import { HeaderComponent } from './components/header/header.component';
import { ChangeBgDirective } from './components/change-bg.directive';


@NgModule({
  declarations: [
    AppComponent,
    ToastrComponent,
    WelcomeComponent,
    QuestionComponent,
    HeaderComponent,
    ChangeBgDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:2000,
      positionClass: 'toast-top-center',
      preventDuplicates: true
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
