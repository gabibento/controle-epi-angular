import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  constructor(private authService: AuthService, private router: Router){ }

  user: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    role: ''
  };

  register(){
    this.authService.register(this.user).subscribe({
      next: () => {
        this.router.navigate(['/home'])
      },
      error: (err) => {
        console.log("Erro ao cadastrar usuário: " + err)
      }
    })
  }
}
