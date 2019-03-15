import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { RestService } from '../Services/rest.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../User';

import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
ff:boolean=false;

  constructor(private router :Router,private restService:RestService,private useraut :UserAuthService ) { }
  Form;
  user:User={id:"",Name:"",Email:"",IFSC:"",AccountNumber:"",MobileNumber:"",Password:""}

 senduser(id)
 {
   
  this.restService.getUser(id).subscribe(
    (response:any) =>{
      this.user=response.json()
      
    } )
    
 }
    getpass(pass)
    {
     
      if(pass===this.user.Password)
        {
          this.useraut.setUserLoggedIn();
          this.ff=true;
        }
      else  
        alert("Enter Correct Password")
    
    }
  ngOnInit() 
  {
   
      this.Form=new FormGroup(
      { user:new FormControl("",Validators.compose([
        Validators.required,Validators.minLength(4)
      ])),
        pass:new FormControl("",Validators.required)
      }
      )
  }
  app:boolean=true;
  navigate()
  {
    this.router.navigate(['signup'])
    
  }
  navigateMenu()
  {
    if(this.ff)
      this.router.navigate(['menu'])
    
  }
  validat(control)
  {
    if(control.value!="abc")
    {
      return{"pass":true}
    }
  }
    
  }


      
        
      
  
  

