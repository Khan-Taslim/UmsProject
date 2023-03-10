import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UnlockAccComponent } from './unlock-acc/unlock-acc.component';

const routes: Routes = [
  {
    path:"Login", component:LoginComponent
  },
  {
    path:"Register", component:RegisterUserComponent
  },
  {
    path:"Forgot", component:ForgotPassComponent
  },
  {
    path:"Unlock", component:UnlockAccComponent
  },
  {
    path:"unlockAcc", component:UnlockAccComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
