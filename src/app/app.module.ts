import { PdfViewerComponent } from './common/pdf-viewer.component';

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';
import { InnerTestComponent } from './inner-test.component';


import { AppRoutingModule }     from './app-routing.module';

import {HttpClientModule} from '@angular/common/http';

import { ShowTimerComponent } from './show-timer.component';

import { LoadingOverlayComponent } from './common/loading-overlay.component';

import { WindowRef } from './common/WindowRef';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    InnerTestComponent,
    ShowTimerComponent,
    LoadingOverlayComponent,
    PdfViewerComponent
  ],
  providers: [ HeroService,WindowRef ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/