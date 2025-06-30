import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  imports: [CommonModule, FormsModule],
  templateUrl: './update-user.html',
  styleUrl: './update-user.css'
})
export class UpdateUser {
  email!: string;
  userId!: number;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.userId = Number(this.route.snapshot.queryParamMap.get("id"));
  }

  update(){
    this.userService.update(this.userId, this.email).subscribe({
      next: () => {
        this.router.navigate(["/home"]);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
