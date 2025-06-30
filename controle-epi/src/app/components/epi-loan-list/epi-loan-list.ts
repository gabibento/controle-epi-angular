import { Component } from '@angular/core';
import { LoanService } from '../../services/loan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Loan } from '../../interfaces/Loan';
import { ListComponent } from '../lists/list-component/list-component';
import { CommonModule } from '@angular/common';
import { EpiService } from '../../services/epi.service';
import { Epi } from '../../interfaces/Epi';

@Component({
  selector: 'app-epi-loan-list',
  imports: [CommonModule, ListComponent],
  templateUrl: './epi-loan-list.html',
  styleUrl: './epi-loan-list.css'
})
export class EpiLoanList {
  private epiId!: number;
  loans: Loan[] = [];
  columns = ["userEmail", "pickupDate", "dueDate"];
  epiName!: string;
  hasLoans = true;
  loading = true;
  error = false;

  constructor(private loanService: LoanService, private epiService: EpiService, private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
    this.epiId = Number(this.route.snapshot.paramMap.get("id"));
    this.getEpi();
    this.getByEpi(this.epiId);
  }

  getEpi() {
    this.epiService.getById(this.epiId).subscribe({
      next: (data) => {
        this.epiName = data.name;
      },
      error: (err) => {
        console.log('Erro ao buscar EPI', err);
      }
    });
  }

  getByEpi(id: number){
    this.loanService.getByEpi(id).subscribe({
      next: (data) => {
        this.loans = data;
        this.hasLoans = data.length > 0;
        this.loading = false;
      },
      error: (err) => {
        console.log(err)
        this.error = true;
        this.loading = false;
      }
    })
  }
  createLoan(){
    this.router.navigate(['/loanForm'], {queryParams: { epiId: this.epiId}});
  }
  updateEpi(){
    console.log(this.epiId)
    this.router.navigate(['/epiEdit'], {queryParams: { id: this.epiId}});
  }
}
