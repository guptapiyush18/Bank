import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.css']
})
export class DepositsComponent implements OnInit {

  constructor() { }
  head:string;
  res:string
  ngOnInit() {
  }
  
  ch(value:string)
  {
    if(value=='1')
    {
          
          this.head='Fixed Deposit'
      }
    else if(value=='2')
    {
      this.head='Reccuring Deposit'
     
    }
       
   
  }
  cal(P:number,N:number,R:number):void{
    
    this.res=(P*Math.pow((1+R/1200),N)).toFixed(2); 
  }
}
