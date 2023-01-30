import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators'
import { Search } from './search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url = 'https://my-json-server.typicode.com/Uxtrendz/apis/videoList'
  constructor(private http: HttpClient) { }

  getSearches(searchData):Observable<Search> {
    return this.http.get<Search>(this.url+'?q='+searchData).pipe(
      tap(console.log)
    )
  }
}
