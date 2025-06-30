import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../interfaces/User';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list-component/list-component';
import { LoanService } from '../../../services/loan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, ListComponent],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
  users: User[] = []
  columns = ["name", "email"]

  constructor(private userService: UserService, private router: Router){}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.userService.getAll().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
  getLoans(user: User){
    this.router.navigate([`/users/${user.id}/loans`]);
  }

}
