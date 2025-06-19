import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router){}

  login(){
    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        this.router.navigate(['/home'])
      },
      error: () => {
        this.error = "Email ou senha inválidos"
      }
    })
  }

}
