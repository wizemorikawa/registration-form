import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from '../../component/registration/registration.component';
import { AuthGuard } from '../../service/authGuard';
import { LoginComponent } from '../../component/login/login.component';

const myRoutes = [
    {path: '', component: RegistrationComponent},
    {path: 'member', component: RegistrationComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: ':routerParam', component: RegistrationComponent},
    // {path: 'registration', component: MainComponent},
    // {path: 'member', component: MemberInfomationComponent}
  ];

  @NgModule({
      imports: [RouterModule.forChild(myRoutes)],
      exports: [RouterModule]
  })
  export class MyAppRoutingModule {}
