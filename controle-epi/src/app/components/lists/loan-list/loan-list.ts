import { Component } from '@angular/core';
import { LoanService } from '../../../services/loan.service';
import { Loan } from '../../../interfaces/Loan';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list-component/list-component';
import { DevolutionService } from '../../../services/devolution-service';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-loan-list',
  imports: [CommonModule, ListComponent],
  templateUrl: './loan-list.html',
  styleUrl: './loan-list.css',
})
export class LoanList {
  loans: Loan[] = [];
  columns = ['epiName', 'userEmail', 'pickupDate', 'dueDate'];

  userId!: number;
  userRole!: string;

  constructor(
    private loanService: LoanService,
    private router: Router,
    private jwtHelper: JwtHelperService
  ) {}

  ngOnInit(): void {
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
    this.loanService.getAll().subscribe({
      next: (data) => {
        this.loans = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getByEpi(id: number) {
    this.loanService.getByEpi(id).subscribe({
      next: (data) => {
        this.loans = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getByUser() {
    this.loanService.getByUser(this.userId).subscribe({
      next: (data) => {
        this.loans = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getDevolutions(loan: Loan) {
    this.router.navigate([`/loan/${loan.id}/devolution`]);
  }
}
