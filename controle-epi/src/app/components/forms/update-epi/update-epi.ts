import { Component } from '@angular/core';
import { EpiService } from '../../../services/epi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-epi',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-epi.html',
  styleUrl: './update-epi.css'
})
export class UpdateEpi {
  quantity!: number;
  epiId!: number;

  constructor(private epiService: EpiService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.epiId = Number(this.route.snapshot.queryParamMap.get("id"));
  }

  update(){
    this.epiService.update(this.epiId, this.quantity).subscribe({
      next: () => {
        this.router.navigate(["/home"]);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
