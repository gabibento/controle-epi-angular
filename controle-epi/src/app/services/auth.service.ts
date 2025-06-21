import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth';

   constructor(private http: HttpClient, private router: Router) {}

   login(email: string, password: string): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/login`, {email, password}).pipe(
      tap((res) => {
        localStorage.setItem('token', res.token)
      })
    )
   }
   register(user: any){
    return this.http.post(`${this.apiUrl}/register`, user);
   }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
  
  getRole(): string | null {
    const token = this.getToken();

    if(!token) return null;

    const payload = JSON.parse(atob(token.split('.')[1]));

    const roles = payload.role;
    if (!roles) return null;

    if(Array.isArray(roles)){
      return roles[0];
    }
    return roles;
  }
}
