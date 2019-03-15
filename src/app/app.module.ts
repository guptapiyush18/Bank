import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RestService } from './Services/rest.service';
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicemainComponent } from './servicemain/servicemain.component';
import { LoansComponent } from './servicemain/loans/loans.component';
import { DepositsComponent } from './servicemain/deposits/deposits.component';
import { CardsComponent } from './servicemain/cards/cards.component';

import { UserAuthService } from './user-auth.service';
import { MyproComponent } from './mypro/mypro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    MenuComponent,
    ContactusComponent,
    AboutusComponent,
    ServicemainComponent,
    LoansComponent,
    DepositsComponent,
    CardsComponent,
    MyproComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [RestService,UserAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
