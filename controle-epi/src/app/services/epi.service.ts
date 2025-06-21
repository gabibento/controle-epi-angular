import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Epi {
  id: number;
  name: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class EpiService {
  private apiUrl = 'http://localhost:8080/epis';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Epi[]>{
    return this.http.get<Epi[]>(this.apiUrl);
  } 
}
