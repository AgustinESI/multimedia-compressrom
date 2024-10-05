import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Question } from '../models/question';
import { Driver } from '../models/driver';
import { Circuit } from '../models/circuit';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  constructor(private httpClient: HttpClient) {}

  public getQuestions(path: string): Observable<Question[]> {
    return this.httpClient.get<Question[]>(path);
  }

  public getDrivers(path: string): Observable<Driver[]> {
    return this.httpClient.get<Driver[]>(path);
  }

  getCircuits(path: string) {
    return this.httpClient.get<Circuit[]>(path);
  }

  public getResultCircuits(year: string, round: string) {
    const path = 'http://ergast.com/api/f1/' + year + '/' + round + '/results';
  }
}
