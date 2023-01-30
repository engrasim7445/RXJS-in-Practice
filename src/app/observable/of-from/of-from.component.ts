import { Component, OnInit } from '@angular/core';
import { concatMap, delay, from, of } from 'rxjs';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  constructor(private DS: DesignService) { }

  ngOnInit(): void {
    // Ex - 01 (of)
    const obs1 = of('Muhammad', 'Asim', 'Khan');

    obs1.subscribe(res => {
      console.log(res)
      this.DS.printLi(res, 'container')
    })

    // From Array
    let Arr = (['Allah', 'Muhammad', 'Madad'])
    const obs2 = from(Arr);
    setTimeout(() => {
      obs2.subscribe(val =>{
        console.log(val)
        this.DS.printLi(val, 'container1')
      })
    }, 3000);




    // From Promise

    let promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('Promise is resolved')
      }, 3000);
    })

    const obs3 = from(promise);
    obs3.subscribe(res => {
      console.log(res)
      this.DS.printLi(res, 'container2')
    })


  }

}
