import { Component, OnInit } from '@angular/core';

interface User{
  id: number,
  name: string,
  city: string
}

@Component({
  selector: 'app-ngfor-sample',
  templateUrl: './ngfor-sample.component.html',
  styleUrls: ['./ngfor-sample.component.scss']
})
export class NgforSampleComponent implements OnInit {

  users: User []=[
    {id: 100, name: "John", city :'Turkey'},
    {id: 101, name: "Bullwak", city :'London'},
    {id: 102, name: "Monday", city :'Port Harcourt'},

    
  ]

  constructor() { }
  ngOnInit(): void {
  }

}
