import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'inner-test',
  templateUrl: './inner-test.component.html',
  styleUrls: [ './inner-test.component.css' ]
})
export class InnerTestComponent implements OnInit {

   @Input() countTest:Number = 0;
   @Input() hasSize:Boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/