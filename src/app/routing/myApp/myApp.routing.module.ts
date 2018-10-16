import { MainComponent } from '../../component/main/main.component';
import { MemberInfomationComponent } from '../../component/member-infomation/member-infomation';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component';
import { MyAppComponent } from './myApp.component';

const myRoutes = [
    {path: '', component: MyAppComponent},
    {path: 'registration', component: MainComponent},
    {path: 'member', component: MemberInfomationComponent}
  ];

  @NgModule({
      imports: [RouterModule.forChild(myRoutes)],
      exports: [RouterModule]
  })
  export class MyAppRoutingModule {}
