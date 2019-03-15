import { Component, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { User } from '../User';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private restService:RestService,private route:Router) { }
  form;

  flag:boolean=false;
  nflag:boolean=false;
  ngOnInit() 
  {
this.form=new FormGroup(
  {
    username:new FormControl("",Validators.compose([
      Validators.required,Validators.minLength(6),
    ])),

    name:new FormControl("",Validators.compose([
      Validators.required
    ])),

    date:new FormControl("",Validators.compose([
      Validators.required,Validators.email
    ])),

    ifs:new FormControl("",Validators.compose([
      Validators.required
    ])),

    acc:new FormControl("",Validators.compose([
      Validators.required
    ])),

    mob:new FormControl("",Validators.compose([
      Validators.required,
    ])),
    pass:new FormControl("",Validators.compose([
      Validators.required
    ])),
    repass:new FormControl("",Validators.compose([
      Validators.required
    ]))
  }

)
  }
  repasscheck(control)
  {
    return control.value
  }
  passcheck(control)
  {
    if(control.value!   =this.repasscheck)
    {
      alert("Done")
      return {"pass": false}
      
    }
  }
 addItem(id,name,dob,ifsc,account,mobile,password)
 {
  
  let users=new User(id,name,dob,ifsc,account,mobile,password);
   this.restService.addUser(users).subscribe(
     ((response:any)=>{
      // alert("Added Successfully")
      this.flag=!this.flag;
      this.nflag=false;
      }),
     ((error:any)=>{
       //alert("User Name already exists")
        this.nflag=!this.nflag      
        this.flag=false;
      })
     
   )
   
 }


}
