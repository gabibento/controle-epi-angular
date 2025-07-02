import { Component } from '@angular/core';
import { DevolutionService } from '../../../services/devolution-service';
import { ActivatedRoute, Router } from '@angular/router';
import { DevolutionInterface } from '../../../interfaces/DevolutionInterface';

@Component({
  selector: 'app-devolution',
  imports: [],
  templateUrl: './devolution.html',
  styleUrl: './devolution.css',
})
export class Devolution {
  loanId!: number;
  devolution: DevolutionInterface = {
    id: 0,
    epiName: '',
    userName: '',
    devolutionDate: '',
  };

  constructor(
    private devolutionService: DevolutionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.loanId = Number(this.route.snapshot.paramMap.get('id'));
    this.getDevolutionsByLoan();
  }

  getDevolutionsByLoan() {
    this.devolutionService.getByLoan(this.loanId).subscribe({
      next: (data) => {
        console.log(data);

        if (!data) {
          this.router.navigate([`/devolution-form/${this.loanId}`]);
          return;
        }
        this.devolution = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
