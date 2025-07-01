import { Component } from '@angular/core';
import { DevolutionService } from '../../../services/devolution-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-devolution-list',
  imports: [],
  templateUrl: './devolution-list.html',
  styleUrl: './devolution-list.css',
})
export class DevolutionList {
  loanId!: number;

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

        if (!data || (Array.isArray(data) && data.length === 0)) {
          this.router.navigate([`/devolution-form/${this.loanId}`]);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
