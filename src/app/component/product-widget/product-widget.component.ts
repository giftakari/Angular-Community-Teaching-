import { style } from '@angular/animations';
import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styles: [
  ]
})
export class ProductWidgetComponent implements OnInit, AfterContentInit {

  @Input() products: any;
  @ContentChildren("header") contentChild :ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {

    console.log(this.contentChild)
  }

ngAfterContentInit(){
  console.log(this.contentChild)

  //this.contentChild?.nativeElement.setAttribute('style', 'color:red')

}
}
