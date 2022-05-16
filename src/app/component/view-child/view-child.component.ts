import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit,AfterViewInit {




  constructor() {
  
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    

  }
}
