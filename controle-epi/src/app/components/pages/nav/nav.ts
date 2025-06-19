import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [RouterModule, CommonModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  constructor(private authService: AuthService){}

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }
  getRole(){
    return this.authService.getRole();
  }
  isAdmin(){
    return this.getRole() == 'ROLE_ADMIN'
  }
  logout(){
    return this.authService.logout();
  }
}
