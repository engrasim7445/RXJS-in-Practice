import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, OnDestroy {
  userName:string;
  constructor(private DU: DesignService) {
    this.DU.userName.subscribe(res => {
      this.userName = res;
    })
   }

  ngOnInit(): void {
    this.DU.exclusive.next(true);
  }

  ngOnDestroy(): void {
    this.DU.exclusive.next(false);
  }

}
