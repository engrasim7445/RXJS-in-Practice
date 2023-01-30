import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit, AfterViewInit {
@ViewChild('addBtn') addBtn: ElementRef;
  constructor(private DS: DesignService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      let count = 1
      fromEvent(this.addBtn.nativeElement,'click').subscribe(res=>{
        let countVal = 'Video '+ count++;
        console.log(countVal);
        this.DS.printLi(countVal, 'elContainer');
        this.DS.printLi(countVal, 'elContainer2');
      })
  }



}
