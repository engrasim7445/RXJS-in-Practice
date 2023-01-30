import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FromEventComponent } from '../from-event/from-event.component';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})
export class DebounceComponent implements OnInit, AfterViewInit {
 @ViewChild('search')  search: ElementRef;
 @ViewChild('search2')  search2: ElementRef;
 reqData = null;
 reqData2 = null;

  constructor() { }
  ngAfterViewInit(): void {
   // Ex - 01 Debounce time
    const searchTerm = fromEvent<any>(this.search.nativeElement, 'keyup');

    searchTerm.pipe(
      map(event => event.target.value),
      debounceTime(500)
    ).subscribe(res => {
      console.log(res)
      this.reqData = res

      setTimeout(() => {
        this.reqData = null;
      }, 2000);
    })
    // Dinstinct until change
    const searchTerm2 = fromEvent<any>(this.search2.nativeElement, 'keyup');

    searchTerm2.pipe(
      map(event => event.target.value),
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe(res => {
      console.log(res)
      this.reqData2 = res

      setTimeout(() => {
        this.reqData2 = null;
      }, 2000);
    })
  }

  ngOnInit(): void {
  }

}
