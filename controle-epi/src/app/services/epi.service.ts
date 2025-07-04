import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Epi } from '../interfaces/Epi';
import { EpiFormInterface } from '../interfaces/EpiFormInterface';

@Injectable({
  providedIn: 'root',
})
export class EpiService {
  private apiUrl = 'http://localhost:8080/epis';

  constructor(private http: HttpClient) {}

  create(epi: EpiFormInterface) {
    return this.http.post<Epi>(this.apiUrl, epi);
  }

  getAll(): Observable<Epi[]> {
    return this.http.get<Epi[]>(this.apiUrl);
  }
  getById(id: number): Observable<Epi> {
    return this.http.get<Epi>(`${this.apiUrl}/${id}`);
  }
  update(id: number, quantity: number) {
    return this.http.patch<Epi>(`${this.apiUrl}?id=${id}`, { quantity });
  }
  remove(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
