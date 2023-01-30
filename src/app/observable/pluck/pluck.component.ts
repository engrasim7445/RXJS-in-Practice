import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

  constructor() { }

  users = [
    {name: 'Asim', skill: 'Angular', Job: {
      title: 'Angular Developer',
      Exp: '10 Years'
    }},
    {name: 'Ahsan', skill: 'Javascript', Job: {
      title: 'JavaScript Developer',
      Exp: '10 Years'
    }},
    {name: 'Mobin', skill: 'CSS', Job: {
      title: 'CSS Developer',
      Exp: '10 Years'
    }},
  ]
  data;
  jobData;
  ngOnInit(): void {

    // Ex - 01 by property
    from(this.users).pipe(
      // map(data => data.name),
      pluck('name'),
      toArray()
    ).subscribe(res => {
      console.log(res)
      this.data = res
    })

        // Ex - 02 by Nested property
        from(this.users).pipe(
          // map(data => data.name),
          pluck('Job', 'title'),
          toArray()
        ).subscribe(res => {
          console.log(res)
          this.jobData = res;
        })
  }

}
