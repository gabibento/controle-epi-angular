import { Component } from '@angular/core';

import { EpiService } from '../../../services/epi.service';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list-component/list-component';
import { Epi } from '../../../interfaces/Epi';
import { Router } from '@angular/router';

@Component({
  selector: 'app-epi-list',
  imports: [CommonModule, ListComponent],
  templateUrl: './epi-list.html',
  styleUrl: './epi-list.css'
})
export class EpiList {
  epis: Epi[] = []
  columns = ["name", "quantity"]

  constructor(private epiService: EpiService, private router: Router){}

   ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.epiService.getAll().subscribe({
      next: (data) => {
        this.epis = data;
      },
      error: (err) => {
        console.error('Erro ao carregar EPIs', err);
      }
    })
  }
  getLoans(epi: Epi){
    this.router.navigate(['/epis', epi.id, 'loans']);
  }
}
