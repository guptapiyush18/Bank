import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  roi: number;
  res:string;
  head:string;
  cal(P:number,N:number,R:number):void{
    let a=R/1200;
   this.res= ((P * a * Math.pow((1+a),N))/(Math.pow((1+a),N)-1)).toFixed(2);
  }
  ch(value:string)
  {
    if(value=='1')
    {
          this.roi=6.5
          this.head='Home Loan'
      }
    else if(value=='2')
    {
      this.head='Personal Loan'
      this.roi=7.5
    }
       
    else if(value=='3')
    {
       this.head='Car Loan'
      this.roi=8
    }
       
    else if(value=='4')
    {
      this.head='Educational Loan'
     this.roi=6
   }
  }
}
