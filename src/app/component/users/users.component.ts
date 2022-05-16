import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {




  users: any[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.users=this.userService.getAllUsers();
  }

  onSubmit() {
  
  }

}
