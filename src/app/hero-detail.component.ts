import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Hero }         from './hero';
import { HeroService }  from './hero.service';
import {Observable, Subscription} from 'rxjs/Rx';

import { ShowTimerComponent } from './show-timer.component';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  messageShow:boolean =false;
  showTimer:Observable<number>;
  showTimerSubscription:Subscription;

  @ViewChild(ShowTimerComponent)
  private timerComponent: ShowTimerComponent;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  hideSaveMessage():void {
    console.log("Hide message");
    this.messageShow = false;
    this.showTimerSubscription.unsubscribe();
  }
  showSaveMessage(): void {
    console.log("Show message");
    
    if(this.messageShow) { 
      //Deal with where show is already there need to cancel subscription
      this.showTimerSubscription.unsubscribe();
      //Then will reset timer over again
    }
    
    this.messageShow = true;
    this.showTimer = Observable.timer(12000);
    this.showTimerSubscription = this.showTimer.subscribe(()=>{this.hideSaveMessage();});
    
    
  }

  save(): void {
    console.log("Saved information");
    //this.showSaveMessage();
    this.timerComponent.showContents();
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/