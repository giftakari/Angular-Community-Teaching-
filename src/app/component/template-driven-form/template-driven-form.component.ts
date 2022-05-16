import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  countryList = ['India', 'US', 'UK'];

  user: any;
  constructor() { 
 
  }


  ngOnInit(): void {
    this.user = {
      firstname: 'Godsgift',
      lastname: 'Akari',
      address:{
        city: 'Brisbane'
      }
    }

  }

  onSubmit(data:NgForm){
    console.log(data.value);
    // console.log(data);

  }

  resetForm(userForm:NgForm){
    userForm.resetForm({
      firstname: 'testUser',
      address:{
        city: 'delhi'
      }
    });

  }
}
