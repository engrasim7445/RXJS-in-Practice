import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  datArr = [
    {id: 1, name: 'asim', gender: 'male'},
    {id: 2, name: 'ahsan', gender: 'male'},
    {id: 3, name: 'mobin', gender: 'male'},
    {id: 4, name: 'sumaya', gender: 'female'},
    {id: 5, name: 'anila', gender: 'female'}
  ]

  constructor() { }
  data;
  data2;
  data3;
  ngOnInit(): void {
    const source = from(this.datArr);

    // Ex - 01 filter by length
    source.pipe(
      filter(member => member.name.length >=5),
      toArray()
    ).subscribe(res => {
      console.log(res)
      this.data = res
    })
    // Ex - 02 filter by gender
    source.pipe(
      filter(member => member.gender == 'female'),
      toArray()
    ).subscribe(res => {
      console.log(res)
      this.data2 = res
    })
    // Ex - 03 filter by nth item
    source.pipe(
      filter(member => member.id  <= 4),
      toArray()
    ).subscribe(res => {
      console.log(res)
      this.data3 = res
    })
  }

}
