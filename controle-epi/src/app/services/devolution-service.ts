import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DevolutionFormInterface } from '../interfaces/DevolutionFormInterface';

@Injectable({
  providedIn: 'root'
})
export class DevolutionService {
  private apiUrl = "http://localhost:8080/devolutions"

  constructor(private http: HttpClient) { }

  create(devolution: DevolutionFormInterface){
    return this.http.post<DevolutionFormInterface>(this.apiUrl, devolution);
  }
  getByLoan(id: number){
    return this.http.get(`${this.apiUrl}/loan/${id}`);
  }
}
