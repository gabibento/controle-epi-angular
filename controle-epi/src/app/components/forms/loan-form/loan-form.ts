import { Component } from '@angular/core';
import { Epi } from '../../../interfaces/Epi';
import { User } from '../../../interfaces/User';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from '../../../services/loan.service';
import { EpiService } from '../../../services/epi.service';
import { UserService } from '../../../services/user.service';
import { LoanFormInterface } from '../../../interfaces/LoanFormInterface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loan-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './loan-form.html',
  styleUrl: './loan-form.css'
})
export class LoanForm {
  epis: Epi[] = [];
  users: User[] = [];
  loan: LoanFormInterface = {
    epiId: 0,
    userId: 0,
    pickupDate: '',
    dueDate: ''
  };

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private loanService: LoanService, 
    private epiService: EpiService, 
    private userService: UserService){}

    ngOnInit(){
      this.loadEpis();
      this.loadUsers();

      const epiId = this.route.snapshot.queryParamMap.get("epiId");
      const userId = this.route.snapshot.queryParamMap.get("userId");

      if(epiId){
        this.loan.epiId = Number(epiId);
      }
      if(userId){
        this.loan.userId = Number(userId);
      }
    }
    create(){
      this.loanService.create(this.loan).subscribe({
        next: () => {
          this.router.navigate(["/loans"]);
        },
        error: (err) => {
          console.log("Erro ao criar empréstimo: " + err);
        }
      })
    }

    loadEpis(){
      this.epiService.getAll().subscribe({
        next: (data) => {
          this.epis = data;
        },
        error: (err) => {
          console.log("Erro ao carregar EPIs: " + err);
        }
      })
    }

    loadUsers(){
      this.userService.getAll().subscribe({
        next: (data) => {
          this.users = data;
        },
        error: (err) => {
          console.log("Erro ao carregar usuários: " + err);
        }
      })
    }
}
