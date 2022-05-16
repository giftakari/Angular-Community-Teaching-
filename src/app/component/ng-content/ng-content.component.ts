import { Component, OnInit } from '@angular/core';


interface Iproduct{
  id:number,
  name:string,
  price:number
}

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.scss']
})
export class NgContentComponent implements OnInit {


  salesProducts: Iproduct[]=[
    {id: 1, name:'Ace', price: 100},
    {id: 2, name:'Laptop', price: 3000},
    {id: 3, name:'Mama', price: 4000},
    {id: 4, name:'Fither', price: 6000},
  ]

  topProducts: Iproduct[]=[
    {id: 1, name:'Benza', price: 3000},
    {id: 2, name:'Mac', price: 8000},
    {id: 3, name:'Dell', price: 20000},
    {id: 4, name:'Toshiba', price: 9000},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
