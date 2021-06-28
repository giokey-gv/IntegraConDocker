import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-menu',
  templateUrl: './nav-bar-menu.component.html',
  styleUrls: ['./nav-bar-menu.component.css']
})
export class NavBarMenuComponent implements OnInit {

  constructor() { 
    // do nothing.
  }

  ngOnInit(): void {
    this.foo()
  }

  foo(){
    // do nothing.
  }

}
