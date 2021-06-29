import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dockers',
  templateUrl: './dockers.component.html',
  styleUrls: ['./dockers.component.css']
})
export class DockersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.foo();
  }

  foo(){
    //do nothing
  }

}
