import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  constructor() { }
  unsub: Subscription

  users = [
    {name: 'Asim', skill: 'Angular'},
    {name: 'Ahsan', skill: 'Java'},
    {name: 'Mobin', skill: 'operator'}
  ]
  ngOnInit(): void {
    // Ex - 01 toArray by interval

    const source = interval(1000);

   this.unsub = source.pipe(
    take(5),
    toArray()
   ).subscribe(res=> {
      console.log(res)
    })

    // Ex - 02 toArray by from
  const source2 = from(this.users);
  source2.pipe(
    toArray()
  ).subscribe(res=> {
    console.log(res)
  })

  // Ex = -3 toArray by Of
  const source3= of('Asim', 'Ahsan', 'Mobin');
  source3.pipe(
    toArray()
  ).subscribe(res=> {
    console.log(res)
  })

  }

}
