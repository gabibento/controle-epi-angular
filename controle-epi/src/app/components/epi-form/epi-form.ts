import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Epi, EpiService } from '../../services/epi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-epi-form',
  imports: [FormsModule],
  templateUrl: './epi-form.html',
  styleUrl: './epi-form.css'
})
export class EpiForm {
  epi: Epi = {
    name: '',
    quantity: 1
  };

  constructor(private epiService: EpiService, private router: Router){}

  create(){
    this.epiService.create(this.epi).subscribe({
      next: () => {
        this.router.navigate(["/home"])
      },
      error: (err) => {
        console.log("Erro ao criar EPI: " + err)
      }
    })
  }
}
