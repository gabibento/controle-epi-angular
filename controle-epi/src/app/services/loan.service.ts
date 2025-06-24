import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Loan } from '../interfaces/Loan';
import { LoanFormInterface } from '../interfaces/LoanFormInterface';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private apiUrl = "http://localhost:8080/loans"

  constructor(private http: HttpClient) { }

   create(loan: LoanFormInterface){
    return this.http.post(this.apiUrl, loan);
   }

  getAll(): Observable<Loan[]>{
    return this.http.get<Loan[]>(this.apiUrl);
  }
  getByEpi(id: number): Observable<Loan[]>{
    return this.http.get<Loan[]>(`${this.apiUrl}/epi/${id}`);
  }
  getByUser(id: number): Observable<Loan[]>{
    return this.http.get<Loan[]>(`${this.apiUrl}/user/${id}`);
  }
}
