import { Component, OnInit } from '@angular/core';
import { Subscription, concatMap, delay, from, interval, map, of, take, timer } from 'rxjs';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  sub1: Subscription
  sub2: Subscription
  msg1;
  msg2;
  constructor(private du: DesignService) { }

  ngOnInit(): void {

    // Ex = 01
    const broadCastVideos = interval(1000);

    this.sub1 = broadCastVideos.pipe(
      map(data => 'Video ' + data))
   .subscribe(res => {
        // console.log(res);
        this.msg1 = res
      })


    setTimeout(() => {
      this.sub1.unsubscribe()
    }, 5000);

        // Ex = 02

        this.sub2 = broadCastVideos.pipe(
          take(5),
          map(data => data * 3))
       .subscribe(res => {
            // console.log(res);
            this.msg2 = res
          })


        setTimeout(() => {
          this.sub2.unsubscribe()
        }, 5000);

        // Ex - 03

        const members = [
          {id: 1, name: 'Asim'},
          {id: 2, name: 'Ahsan'},
          {id: 3, name: 'Mobin'},
          {id: 4, name: 'Aliyan'},
          {id: 5, name: 'Sharib'}
        ]

        let Arr = from(members)

        Arr.pipe(
          concatMap(data => of(data).pipe(delay(1000))), // it will emit data one by one
          map(data => data.name)
        ).subscribe(res => {
          console.log(res)
          this.du.printLi(res, 'container')
        })
  }
}
