import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codepipeline',
  templateUrl: './codepipeline.component.html',
  styleUrls: ['./codepipeline.component.css']
})
export class CodepipelineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.foo();
  }

  foo(){
    //do nothing
  }

}
