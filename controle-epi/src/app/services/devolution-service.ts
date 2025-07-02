import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DevolutionFormInterface } from '../interfaces/DevolutionFormInterface';
import { DevolutionInterface } from '../interfaces/DevolutionInterface';

@Injectable({
  providedIn: 'root'
})
export class DevolutionService {
  private apiUrl = "http://localhost:8080/devolutions"

  constructor(private http: HttpClient) { }

  create(devolution: DevolutionFormInterface){
    return this.http.post<DevolutionFormInterface>(this.apiUrl, devolution);
  }
  getAll(){
    return this.http.get<DevolutionInterface[]>(this.apiUrl);
  }
  getByLoan(id: number){
    return this.http.get<DevolutionInterface>(`${this.apiUrl}/loan/${id}`);
  }
}
