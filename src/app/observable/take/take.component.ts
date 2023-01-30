import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';
import { DesignService } from '../design.service';


@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

  randomNames = ['Anup', 'shekar', 'Sharma', 'Uxtrends', 'Robert', 'Charles'];

  constructor(private DU: DesignService) { }

  ngOnInit(): void {
    let arr = from(this.randomNames)
    // Ex - 01 Take
    arr.pipe(
      take(3)
    ).subscribe(res => {
      console.log(res);
      this.DU.printLi(res, 'container')
    })
    // Ex - 02 TakeLast
    arr.pipe(
      takeLast(3)
    ).subscribe(res => {
      console.log(res)
      this.DU.printLi(res, 'container1')
    })
    // Ex - 02 TakeUntil

    let subscription;
    const source = interval(1000);
    let condition1 = timer(5000);
    let condition2 = fromEvent(document, 'click');

    const subscribe = () => {
      subscription = source.pipe(
        takeUntil(condition2),
        map(res => 'Number ' + res)
        ).subscribe(res => {
          console.log(res);
          this.DU.printLi(res, 'container2');
        });

    }

    subscribe();
    condition2.subscribe(() => {
        subscription.unsubscribe();
        condition2 = fromEvent(document, 'click');

    });

    }





  }


