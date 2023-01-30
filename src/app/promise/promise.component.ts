   import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

   @Component({
     selector: 'app-promise',
     templateUrl: './promise.component.html',
     styleUrls: ['./promise.component.css']
   })
   export class PromiseComponent implements OnInit {
    @ViewChild('result1') result1: ElementRef
    @ViewChild('result2') result2: ElementRef
    @ViewChild('result3') result3: ElementRef
     buyLaptop: any;
     buyLaptop2: any;
     dell = {
      Brand: 'Dell',
      Hardisk: '2 TB',
      Color: 'Silver'
    }
     constructor() {
      this.buyLaptop = new Promise ((resolve, reject)=>{
        setTimeout(() => {
          resolve(this.dell)
        }, 3000);
      })

      this.buyLaptop2 = fetch('https://jsonplaceholder.typicode.com/posts')
                        .then(response => response.json())
    }

    // async getData() {
    //   let promise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve('Data Received')
    //     }, 2000);
    //   })
    //   let response = await promise;
    //   console.log(response)
    // }

    ngOnInit(): void {
      // this.getData();
    }

    // Ex -1 With Promise

    fetch1(){
      this.result1.nativeElement.innerText = 'Fetching Data.....'
      this.buyLaptop.then(res=>{
        console.log(res);
        this.result1.nativeElement.innerText = JSON.stringify(res);
      })
    }
    // Ex - 02 With Async / Await

    async fetch2() {
      this.result2.nativeElement.innerText = 'Fetching Data.....'
      let res = await this.buyLaptop
        this.result2.nativeElement.innerText = JSON.stringify(res);
      }


    // Ex - 03 With Fetch API

    fetch3() {
      this.result3.nativeElement.innerText = 'Fetching Data.....'
      let res = this.buyLaptop2
      this.result3.nativeElement.innerText = JSON.stringify(res);
    }
  }
