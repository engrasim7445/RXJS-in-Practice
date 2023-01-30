import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, mergeMap, of, switchMap } from 'rxjs';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {

  constructor(private DU: DesignService) { }

  getData(data) {
    return of(data + ' Video Uploaded').pipe(delay(1000))
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News'])
    // Ex - 01 Concat All
    source.pipe(
      map(res => this.getData(res)),
      concatAll()
    ).subscribe(res => {
      this.DU.printLi(res, 'container')
    })
    // Ex - 02 Merge Map
    source.pipe(
      mergeMap(res => this.getData(res))
    ).subscribe(res => {
      this.DU.printLi(res, 'container1')
    })
    // Ex - 03 Concat Map
    source.pipe(
      concatMap(res => this.getData(res))
    ).subscribe(res => {
      this.DU.printLi(res, 'container2')
    })
    // Ex - 04 Concat Map
    source.pipe(
      switchMap(res => this.getData(res))
    ).subscribe(res => {
      this.DU.printLi(res, 'container3')
    })
  }

}
