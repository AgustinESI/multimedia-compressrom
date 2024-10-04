import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Question } from '../models/question';
import { Driver } from '../models/driver';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  constructor(private httpClient: HttpClient) {}

  public getDataQuestions(path: string): Observable<Question[]> {
    return this.httpClient
      .get<any[]>(path)
      .pipe(map((data) => data.map((item) => this.mapToQuestion(item))));
  }

  public getQuestions(path: string): Observable<Question[]> {
    return this.httpClient.get<Question[]>(path); // Fetch the data as Question[]
  }

  /*
  public getDataDrivers(path: string): Observable<Driver[]> {
    return this.httpClient
      .get<any[]>(path)
      .pipe(map((data) => data.map((item) => this.mapToQuestion(item))));
  }
  */

  private mapToQuestion(item: any): Question {
    const options = item.options.map(
      (opt: any) => new Option(opt.answer, opt.isCorrect)
    );
    return new Question(item.question_id, item.question, options);
  }
}
