import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RestService } from '../Services/rest.service';


@Component({
  selector: 'app-mypro',
  templateUrl: './mypro.component.html',
  styleUrls: ['./mypro.component.css']
})
export class MyproComponent implements OnInit {

  constructor(private rest:RestService) { }
id:string="asd"
 
  ngOnInit() {
  } 


}
