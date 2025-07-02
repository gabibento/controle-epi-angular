import { Component } from '@angular/core';
import { DevolutionService } from '../../../services/devolution-service';
import { ActivatedRoute, Router } from '@angular/router';
import { DevolutionInterface } from '../../../interfaces/DevolutionInterface';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list-component/list-component';

@Component({
  selector: 'app-devolution-list',
  imports: [CommonModule, ListComponent],
  templateUrl: './devolution-list.html',
  styleUrl: './devolution-list.css',
})
export class DevolutionList {
  devolutions: DevolutionInterface[] = [];
  columns = ["epiName", "userName", "devolutionDate"];

  constructor(
    private devolutionService: DevolutionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.devolutionService.getAll().subscribe({
      next: (data) => {
        this.devolutions = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
