import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zenhub',
  templateUrl: './zenhub.component.html',
  styleUrls: ['./zenhub.component.css']
})
export class ZenhubComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.foo();
  }

  foo(){
    //do nothing
  }

}
