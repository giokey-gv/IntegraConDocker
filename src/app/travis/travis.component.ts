import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travis',
  templateUrl: './travis.component.html',
  styleUrls: ['./travis.component.css']
})
export class TravisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.foo();
  }

  foo(){
    //do nothing
  }

}
