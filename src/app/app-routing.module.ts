import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { CompteComponent } from './compte/compte.component';
import { RoleGuard } from './gaurd/role.guard';
import { CreditComponent } from './credit/credit.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "contact", component: ContactComponent },
    { path: "credit", component: CreditComponent },
        { path: "compte", component: CompteComponent ,canActivate:[RoleGuard]}

];
@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
