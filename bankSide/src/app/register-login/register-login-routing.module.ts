import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterLoginComponent } from './register-login.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from '../home-page/home/home.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';

const routes: Routes = [
  { path: '', component: RegisterLoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterLoginRoutingModule { }
