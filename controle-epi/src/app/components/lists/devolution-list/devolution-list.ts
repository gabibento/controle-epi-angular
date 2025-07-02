import { Component } from '@angular/core';
import { DevolutionService } from '../../../services/devolution-service';
import { ActivatedRoute, Router } from '@angular/router';
import { DevolutionInterface } from '../../../interfaces/DevolutionInterface';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list-component/list-component';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-devolution-list',
  imports: [CommonModule, ListComponent],
  templateUrl: './devolution-list.html',
  styleUrl: './devolution-list.css',
})
export class DevolutionList {
  devolutions: DevolutionInterface[] = [];
  columns = ['epiName', 'userName', 'devolutionDate'];

  userId!: number;
  userRole!: string;

  constructor(
    private devolutionService: DevolutionService,
    private router: Router,
    private jwtHelper: JwtHelperService
  ) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = this.jwtHelper.decodeToken(token);
      this.userId = decoded.id;
      this.userRole = decoded.role;
    }

    if (this.userRole === 'ROLE_ADMIN') {
      this.getAll();
    } else if (this.userId) {
      this.getByUser();
    }
  }

  getAll() {
    this.devolutionService.getAll().subscribe({
      next: (data) => {
        this.devolutions = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getByUser() {
    this.devolutionService.getByUser(this.userId).subscribe({
      next: (data) => {
        this.devolutions = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
