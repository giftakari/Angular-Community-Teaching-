import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'forms';
  topics = ['Angular', 'React', 'Vue'];

  userModel = new User('John', 'akas@mama.com', 56665665, '', 'morning', true);
  users: any[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.users=this.userService.getAllUsers();
  }

  onSubmit() {
    console.log(this.userModel);
  }
}
