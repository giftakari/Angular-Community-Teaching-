import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {ajax}from 'rxjs/ajax'

import { BehaviorSubject, filter, Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit, OnDestroy {
  

  mama = 'Blessed mama';
  userName: FormControl = new FormControl('akaris');

  constructor() {
  
  }

  ngOnInit(): void {


    const subject = new Subject()
   const data = ajax('https://jsonplaceholder.typicode.com/users');
  // subject.subscribe(d => console.log(d))
   //subject.subscribe(c=> console.log(c))

   const result = data.subscribe(subject)

   const behavour = new BehaviorSubject(12);

   //behavour.subscribe(d => console.log('behavour subcripbe' ,d  ))

   
  }

  ngOnDestroy(): void {
    
  }
}
