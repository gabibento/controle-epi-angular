import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { Loan } from '../../../interfaces/Loan';
import { LoanService } from '../../../services/loan.service';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list-component/list-component';

@Component({
  selector: 'app-user-loan-list',
  imports: [CommonModule, ListComponent],
  templateUrl: './user-loan-list.html',
  styleUrl: './user-loan-list.css'
})
export class UserLoanList {
  private userId!: number;
  userEmail!: string;
  loans!: Loan[];
  columns = ["epiName", "pickupDate", "dueDate"];
  hasLoans = true;
  loading = true;

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private userService: UserService,
    private loanService: LoanService){}

  ngOnInit(){
    this.userId = Number(this.route.snapshot.paramMap.get("id"));
    this.getByUser(this.userId);
    this.getUser();
  }

  getByUser(id: number){
    this.loanService.getByUser(id).subscribe({
      next: (data) => {
        this.loans = data;
        this.hasLoans = data.length > 0;
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
      }
    })
  }
  getUser(){
    this.userService.getById(this.userId).subscribe({
      next: (data) => {
        this.userEmail = data.email;
      }, 
      error: (err) => {
        console.log(err);
      }
    })
  }
  createLoan(){
    this.router.navigate(["/loanForm"], {queryParams: {userId: this.userId}});
  }
    updateUser(){
    this.router.navigate(['/userEdit'], {queryParams: { id: this.userId}});
  }
}
