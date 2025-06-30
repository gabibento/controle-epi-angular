import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EpiService } from '../../../services/epi.service';

@Component({
  selector: 'app-update-epi',
  imports: [CommonModule, FormsModule],
  templateUrl: './update-epi.html',
  styleUrl: './update-epi.css'
})
export class UpdateEpi {
  quantity!: number;
  epiId!: number;

  constructor(private epiService: EpiService, private router: Router, private route: ActivatedRoute){}

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
