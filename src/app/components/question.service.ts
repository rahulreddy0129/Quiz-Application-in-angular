import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getQuestion(){
    return this.http.get<any>('assets/questions.json')
  }
}


// api link (https://drive.google.com/file/d/1tsZsr6oSpIitPBswkQxiEw0V8l_xtffE/view)
