import { Component, OnInit } from '@angular/core';
import { DesignService } from '../observable/design.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
exclusive: boolean = false;
  constructor(private DU: DesignService) { }

  ngOnInit(): void {
    this.DU.exclusive.subscribe(res => {
      this.exclusive = res;
    })

  }

}
