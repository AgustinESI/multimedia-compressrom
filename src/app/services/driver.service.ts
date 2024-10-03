import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private httpClient: HttpClient) { }

  public getData(path: string) {
    return this.httpClient.get<any[]>(path);
  }
}
