import { Component } from '@angular/core';

import { Epi, EpiService } from '../../../services/epi-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-epi-list',
  imports: [CommonModule],
  templateUrl: './epi-list.html',
  styleUrl: './epi-list.css'
})
export class EpiList {
  epis: Epi[] = []

  constructor(private epiService: EpiService){}

   ngOnInit(): void {
    this.loadEpis();
  }

  loadEpis(){
    this.epiService.getAll().subscribe({
      next: (data) => {
        this.epis = data;
      },
      error: (err) => {
        console.error('Erro ao carregar EPIs', err);
      }
    })
  
  }
}
