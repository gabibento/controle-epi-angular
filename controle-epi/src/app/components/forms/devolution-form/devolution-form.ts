import { Component } from '@angular/core';
import { DevolutionService } from '../../../services/devolution-service';
import { DevolutionFormInterface } from '../../../interfaces/DevolutionFormInterface';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-devolution-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './devolution-form.html',
  styleUrl: './devolution-form.css'
})
export class DevolutionForm {
  devolution: DevolutionFormInterface = {
    loanId: 0,
    devolutionDate: ''
  }

  ngOnInit(){
    this.devolution.loanId = Number(this.route.snapshot.paramMap.get("id"));
  }
  constructor(private devolutionService: DevolutionService, private router: Router, private route: ActivatedRoute){}

  create(){
    return this.devolutionService.create(this.devolution).subscribe({
      next: () => {
        this.router.navigate(["/devolutions"]);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
