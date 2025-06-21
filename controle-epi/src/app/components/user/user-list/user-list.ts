import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../interfaces/User';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../../list-component/list-component';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, ListComponent],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
  users: User[] = []
  columns = ["name", "email"]

  constructor(private userService: UserService){}

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

}
