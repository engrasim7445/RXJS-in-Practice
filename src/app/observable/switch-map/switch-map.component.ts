import { AfterViewInit, Component,  ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, pluck, switchMap, takeWhile, tap } from 'rxjs';
import { SearchService } from './search.service';
import { Search } from './search.model';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements AfterViewInit {
searchCount;
searchResult: Search;
// @ViewChild('searchForm') searchForm: NgForm
control: FormControl = new FormControl()
  constructor(private searchService: SearchService) {
  this.searchService.getSearches('searchTerm').subscribe(res => {
      console.log(res)
    })
   }
   ngAfterViewInit(): void {
    const formValue = this.control.valueChanges
    formValue.pipe(
      filter(() => !this.control.pristine || this.control.dirty),
      // map(data => data['searchTerm']),
      // pluck('searchTerm'),
      debounceTime(1000),
      tap(console.log),
      distinctUntilChanged(),
      switchMap( (x) =>
        this.searchService.getSearches(x)
      )   
      /// kljklj
    ).subscribe(res => {
   // this is
      console.log(res);
      this.searchResult = res
      this.searchCount = Object.keys(res).length
    })

  }


}
