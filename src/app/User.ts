import { NumberSymbol } from '@angular/common';

export class User
{
    id  
    Name
    Email
    IFSC
    AccountNumber
    MobileNumber
    Password

    constructor(id,name,dob,ifsc,account,mobile,password)
        {
            this.id=id
            this.Name=name;
            this.Email=dob;
            this.IFSC=ifsc;
            this.AccountNumber=account;
            this.MobileNumber=mobile;
            this.Password=password;
        }
}   