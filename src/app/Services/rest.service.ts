import { Injectable } from '@angular/core';
import {Http} from '@angular/http'

import 'rxjs/rx'
import { Observable } from 'rxjs/rx';
@Injectable({
  providedIn: 'root'
})
export class RestService {

Url="http://localhost:3000/UserInfo/"
  constructor(private http:Http) { }

addUser(users)
{

  return this.http.post(this.Url,users)
  .map((response:any)=>response.json())
}

getUser(id)
  {
    return this.http.get(this.Url+id)
    .map((response:any)=>response)
    
}

}