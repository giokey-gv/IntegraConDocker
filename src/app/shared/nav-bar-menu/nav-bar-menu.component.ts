import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-menu',
  templateUrl: './nav-bar-menu.component.html',
  styleUrls: ['./nav-bar-menu.component.css']
})
export class NavBarMenuComponent implements OnInit {
  isValue: number = 0;

  constructor() {
    // do nothing.
  }

  ngOnInit(): void {
    this.toggle0();
  }

  toggle0() {this.isValue = 0;}

  toggle(num: number) { 
    this.isValue = num;
  }

}
