import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Loan } from '../interfaces/Loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private apiUrl = "http://localhost:8080/loans"

  constructor(private http: HttpClient) { }

  getAll(): Observable<Loan[]>{
    return this.http.get<Loan[]>(this.apiUrl);
  }
}
