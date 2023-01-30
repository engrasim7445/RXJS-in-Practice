import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  constructor(private DS:DesignService) { }
  obsMsg;
  videoSub: Subscription;

  ngOnInit(): void {

    // const broadCastVideos = interval(1000);
    // timer(delay, interval)
    const broadCastVideos = timer(5000, 1000);

    this.videoSub = broadCastVideos.subscribe(res=> {
      console.log(res)
      this.obsMsg = 'Video ' + res;
      this.DS.printLi(this.obsMsg, 'elContainer');
      this.DS.printLi(this.obsMsg, 'elContainer1');
      this.DS.printLi(this.obsMsg, 'elContainer2');
      if (res >= 5) {
        this.videoSub.unsubscribe()
      }
    })
  }

  }
