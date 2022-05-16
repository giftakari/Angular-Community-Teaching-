import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-tdf-form',
  templateUrl: './tdf-form.component.html',
  styleUrls: ['./tdf-form.component.scss']
})
export class TdfFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'forms';
topics =["Angular", "React", "Vue"]

userModel = new User("John", "akas@mama.com", 56665665,"", "morning", true)


onSubmit(){
  console.log(this.userModel)
}
}
