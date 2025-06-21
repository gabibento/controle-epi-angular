import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../interfaces/User';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
  users: User[] = []

  constructor(private userService: UserService){}

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
