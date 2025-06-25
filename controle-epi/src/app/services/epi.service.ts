import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Epi } from '../interfaces/Epi';

@Injectable({
  providedIn: 'root'
})
export class EpiService {
  private apiUrl = 'http://localhost:8080/epis';

  constructor(private http: HttpClient) { }

  create(epi: Epi){
    return this.http.post<Epi>(this.apiUrl, epi);
  }

  getAll(): Observable<Epi[]>{
    return this.http.get<Epi[]>(this.apiUrl);
  } 
  getById(id: number): Observable<Epi>{
    return this.http.get<Epi>(`${this.apiUrl}/${id}`);
  }
  update(id: number, quantity: number){
    return this.http.patch<Epi>(``)
  }
}

