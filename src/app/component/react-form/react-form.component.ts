import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.scss']
})
export class ReactFormComponent implements OnInit {

  users:any[]=[];
  jsonUsers:any;

  registrationForm = new FormGroup({

    username:new FormControl('')
  }
    );



  constructor(private userService : UsersService) { }

  ngOnInit(): void {
    this.users =this.userService.getAllUsers();
    this.userService.getJsonUsers().subscribe(data => this.jsonUsers = data)
  }
}