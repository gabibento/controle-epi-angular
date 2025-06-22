import { Component } from '@angular/core';
import { LoanService } from '../../../services/loan.service';
import { Loan } from '../../../interfaces/Loan';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../../list-component/list-component';

@Component({
  selector: 'app-loan-list',
  imports: [CommonModule, ListComponent],
  templateUrl: './loan-list.html',
  styleUrl: './loan-list.css'
})
export class LoanList {
  loans: Loan[] = [];

  columns = ["epiName", "userEmail", "pickupDate", "dueDate"]

    ngOnInit(): void {
    this.getAll();
  }

  constructor(private loanService: LoanService){}

  getAll(){
    this.loanService.getAll().subscribe({
      next: (data) => {
        this.loans = data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  getByEpi(id: number){
    this.loanService.getByEpi(id).subscribe({
      next: (data) => {
        this.loans = data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  
}
