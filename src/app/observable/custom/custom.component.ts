import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, from, observable } from 'rxjs';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit, OnDestroy {

  constructor(private DS: DesignService) { }
  names;
  nameStatus;
  techStatus;
  obs2: Subscription

  ngOnInit(): void {
    // Ex -1 Manual
    const cusObs1 = new Observable(observer=>{
      setTimeout(() => {
        observer.next('Angular')
      }, 1000);
      setTimeout(() => {
        observer.next('JavaScript');
      }, 2000);
      setTimeout(() => {
        observer.next('HTML and CSS')
        // observer.complete()
      }, 3000);
    })

    cusObs1.subscribe(res=> {
      // console.log(res);
      this.DS.printLi(res, 'container')
    },
    (err) => {
        this.techStatus = 'error'
    },
    () => {
        this.techStatus = 'complete'
    }
    )
    // Ex - 02 Custom Interval

    const cusObs2 = new Observable(observer => {
      let count = 1
      setInterval(()=> {
        observer.next('Data emit '+ count);
        if (count >= 5) {
          observer.complete()
        }
        count++
      }, 1000)
    })

    cusObs2.subscribe(res => {
      // console.log(res)
    })

    // Ex 03 Random Names

    let Arr = ['Muhammad', 'Asim', 'Ahsan', 'Yousuf', 'Sharib', 'Ahsan']
    const cusObs3 = new Observable(observer => {
      let count = 1
      setInterval(()=> {
        observer.next(Arr[count])
        if (count >= 3) {
          // observer.error('Error Emit')
        }
       if (count >= 5) {
          observer.complete()
        }
        count++
      }, 1000)

    })
    cusObs3.subscribe(res=>{
      console.log(res)
      this.names = res
    },
    (err) => {
      this.nameStatus = 'error'
    },
    () => {
        this.nameStatus = 'complete'
    })

  }

  ngOnDestroy(): void {
    this.obs2.unsubscribe()

  }

}
