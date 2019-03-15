import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
userLoggedIn:boolean
  constructor() {
    this.userLoggedIn=false;
   }
   
setUserLoggedIn()
{
  this.userLoggedIn=true
}
getUserLoggedIn()
{
  return this.userLoggedIn
}
   
resetUserLoggedIn()
{
  this.userLoggedIn=false
}
}
