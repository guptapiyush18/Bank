import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RestService } from '../Services/rest.service';
import { User } from '../User';


@Component({
  selector: 'app-mypro',
  templateUrl: './mypro.component.html',
  styleUrls: ['./mypro.component.css']
})
export class MyproComponent implements OnInit {

  constructor(private rest:RestService) { }
idss=this.rest.idss

userr:User={id:"",Name:"",Email:"",IFSC:"",AccountNumber:"",MobileNumber:"",Password:""}

  ngOnInit() {
    this.rest.getUser(this.idss).subscribe(
      (response:any) =>{
        
        this.userr=response.json()
        
      } )
  } 
 
    
   
     
  
}
