import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: [ './loading-overlay.component.css' ]
})
export class LoadingOverlayComponent implements OnInit {

  @Input() loading: boolean;
  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
   
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/