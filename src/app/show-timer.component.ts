import {Observable, Subscription} from 'rxjs/Rx';
import { Component, OnInit,Input }        from '@angular/core';

@Component({
    selector: 'show-timer',
    templateUrl: './show-timer.component.html',
    styleUrls: [ './show-timer.component.css' ]
})

export class ShowTimerComponent {

    showTimer:Observable<number>;
    showTimerSubscription:Subscription;
    showItem = false;

    @Input() timeShowContent = 5000;

    private hideContents():void {
        console.log("Hide message");
        this.showItem = false;
        this.showTimerSubscription.unsubscribe();
    }


    public showContents( ):void {
        if(this.showTimer && !this.showTimerSubscription.closed) { 
            //Deal with where show is already there need to cancel subscription
           
            this.showTimerSubscription.unsubscribe();
            //Then will reset timer over again
          }
          this.showItem = true;
          this.showTimer = Observable.timer(this.timeShowContent);
          this.showTimerSubscription = this.showTimer.subscribe(()=>{this.hideContents();});
          
    }

}