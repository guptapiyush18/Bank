import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicemainComponent } from './servicemain/servicemain.component';
import { LoansComponent } from './servicemain/loans/loans.component';
import { CardsComponent } from './servicemain/cards/cards.component';
import { DepositsComponent } from './servicemain/deposits/deposits.component';
import { AuthGuard } from './auth.guard';
import { MyproComponent } from './mypro/mypro.component';



const routes: Routes = [
  
  {
    path:'signup',
    component:SignUpComponent
  },
  {
    path:'',
    component:LoginComponent
  },  
  {
    path:'menu',
    component:MenuComponent,
    canActivate:[AuthGuard],
    children:
    [
     
      {
        path:'contact',
        component:ContactusComponent
      },
      {
        path:'about',
        component:AboutusComponent
      },
      {
        path:'mypro',
        component:MyproComponent
      },
      {
        path:'servicem',
        component:ServicemainComponent,
        children:[
          {   
            path:'loans',
            component:LoansComponent
          },
          {
            path:'cards',
            component:CardsComponent
          },
          {
            path:'deposit',
            component:DepositsComponent
          },
          
        ]
      }
    ]
        
      
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
