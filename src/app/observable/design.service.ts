import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignService {

  constructor() { }

  exclusive = new Subject<boolean>();
  userName = new BehaviorSubject<string>('Asim');

  printLi(val, containerId){
    let el = document.createElement('li');
    el.innerText = val;

    document.getElementById(containerId).appendChild(el);
  }
}
