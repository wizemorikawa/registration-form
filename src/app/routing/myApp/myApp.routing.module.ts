import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from '../../component/registration/registration.component';
import { AuthGuard } from '../../service/authGuard';
import { LoginComponent } from '../../component/login/login.component';
import { RegistrationResolver } from '../../component/registration/registration-resolver';

const myRoutes = [
    {path: '', component: RegistrationComponent, resolve: {'registration': RegistrationResolver}},
    {path: 'member', component: RegistrationComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: ':routerParam', component: RegistrationComponent, resolve: {'reqistration': RegistrationResolver}},
    // {path: 'registration', component: MainComponent},
    // {path: 'member', component: MemberInfomationComponent}
  ];

  @NgModule({
      imports: [RouterModule.forChild(myRoutes)],
      exports: [RouterModule]
  })
  export class MyAppRoutingModule {}
