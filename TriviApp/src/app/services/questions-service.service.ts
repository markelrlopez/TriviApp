import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>('/assets/questions.json');
  }
}
