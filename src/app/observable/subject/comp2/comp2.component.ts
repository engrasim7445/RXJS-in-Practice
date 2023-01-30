import { Component, OnInit } from '@angular/core';
import { DesignService } from '../../design.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  userName: string;
  constructor(private DU: DesignService) {
    this.DU.userName.subscribe(res => {
      this.userName = res;
    })
   }

  ngOnInit(): void {

  }

  onChange(uname) {
    console.log(uname.value);
    this.DU.userName.next(uname.value)
  }
}
