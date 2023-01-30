import { Component, OnInit } from '@angular/core';
import { Subscription, interval, map, take, tap } from 'rxjs';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {

  obsSub: Subscription;
  myColor: string;
  constructor(private DU: DesignService) { }
  ngOnInit(): void {
    let Arr = ['Asim', 'Ahsan', 'Mobin', 'Sharib'];

    const source = interval(1000);

    // Ex- 01
   this.obsSub =  source.pipe(
    take(4),
    tap(res => {
      // console.log('tap Before => ' + res)
      if (res === 4) {
        this.obsSub.unsubscribe()
      }
    }),
      map(res => Arr[res] ),
      // tap(res => console.log('tap After => ' + res))
    ).subscribe(res => {
      console.log(res);
      this.DU.printLi(res, 'container')
    })
    // Ex- 02
    let myColor = ['Red', 'Blue', 'Green', 'Yellow', 'Purple'];
   this.obsSub =  source.pipe(
    tap(res => {
      // console.log('tap Before => ' + res)
      if (res === 5) {
        this.obsSub.unsubscribe()
      }
    }),
      map(res => myColor[res] ),
      // tap(res => console.log('tap After => ' + res))
    ).subscribe(res => {
      console.log(res);
      this.myColor = res
      this.DU.printLi(res, 'container2')
    })
  }

}
